import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import { HONEYPOT_FIELD, parseEnquiry } from "@/lib/enquiry";

// SMTP needs a Node.js socket, not the edge runtime.
export const runtime = "nodejs";

// Sends the availability enquiry from the band's own mailbox over SMTP (home.pl).
// Required on the server: SMTP_HOST, SMTP_USER (the mailbox address) and SMTP_PASS.
// Optional: SMTP_PORT (465 by default, implicit TLS), CONTACT_TO_EMAIL (one or more addresses,
// comma-separated; the mailbox itself by default) and CONTACT_FROM_EMAIL (the sender shown;
// "Aurum Eleven <SMTP_USER>" by default). Replying to the message answers the visitor.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Nie udało się odczytać formularza. Odśwież stronę i spróbuj ponownie." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  const trap = body[HONEYPOT_FIELD];
  if (typeof trap === "string" && trap.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const { data, errors } = parseEnquiry(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Uzupełnij zaznaczone pola.", fields: errors }, { status: 422 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    return NextResponse.json(
      {
        error:
          "Wysyłka formularza nie jest jeszcze włączona na tej wersji strony. Twoja wiadomość nie została wysłana. Napisz do nas przez Instagram lub Facebook.",
        code: "not_configured",
      },
      { status: 503 },
    );
  }

  const port = Number(process.env.SMTP_PORT) || 465;
  const to = (process.env.CONTACT_TO_EMAIL || user).split(",").map((s) => s.trim()).filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL || { name: "Aurum Eleven", address: user };
  const name = data.name.replace(/\s+/g, " ");
  const text = [
    `Imię: ${name}`,
    `E-mail: ${data.email}`,
    `Telefon: ${data.phone || "nie podano"}`,
    "",
    data.message,
  ].join("\n");

  const transport = createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    // Fail fast so the visitor gets an answer well inside the function's time limit.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  try {
    await transport.sendMail({
      from,
      to,
      replyTo: { name, address: data.email },
      subject: `Zapytanie o termin: ${name}`,
      text,
    });
  } catch (error) {
    console.error("enquiry: SMTP send failed", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Nie udało się wysłać zapytania. Spróbuj ponownie za chwilę albo napisz przez Instagram lub Facebook." },
      { status: 502 },
    );
  } finally {
    transport.close();
  }

  return NextResponse.json({ ok: true });
}
