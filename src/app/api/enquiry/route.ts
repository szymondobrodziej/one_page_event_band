import { NextResponse } from "next/server";
import { HONEYPOT_FIELD, parseEnquiry } from "@/lib/enquiry";

// Sends the availability enquiry through Resend (https://resend.com).
// Required on the server: RESEND_API_KEY and CONTACT_TO_EMAIL. Optional: CONTACT_FROM_EMAIL
// (a sender on a domain verified in Resend; defaults to Resend's onboarding sender).
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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json(
      {
        error:
          "Wysyłka formularza nie jest jeszcze włączona na tej wersji strony. Twoja wiadomość nie została wysłana. Napisz do nas przez Instagram lub Facebook.",
        code: "not_configured",
      },
      { status: 503 },
    );
  }

  const from = process.env.CONTACT_FROM_EMAIL || "Aurum Eleven <onboarding@resend.dev>";
  const text = [
    `Imię: ${data.name}`,
    `E-mail: ${data.email}`,
    `Telefon: ${data.phone || "nie podano"}`,
    "",
    data.message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: data.email,
        subject: `Zapytanie o termin: ${data.name}`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}`);
  } catch {
    return NextResponse.json(
      { error: "Nie udało się wysłać zapytania. Spróbuj ponownie za chwilę albo napisz przez Instagram lub Facebook." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
