"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { contact, photos, site } from "@/content/site";
import { parseEnquiry, type EnquiryErrors } from "@/lib/enquiry";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

/** Marks contact data the client has not supplied yet; replaced automatically once the env variable is set. */
function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="text-ivory">[{children}]</span>;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={id} className="text-[14px] text-ash">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[14px] leading-snug text-[#e0c49a]">
          {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const { errors: found } = parseEnquiry(payload);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (json.fields) setErrors(json.fields);
        setStatus({ kind: "error", message: json.error || "Nie udało się wysłać zapytania. Spróbuj ponownie." });
        return;
      }
      formRef.current?.reset();
      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: "Brak połączenia. Sprawdź internet i spróbuj ponownie." });
    }
  }

  const describedBy = (name: keyof EnquiryErrors) => (errors[name] ? `contact-${name}-error` : undefined);
  const sending = status.kind === "sending";
  const instagram = site.social.find((s) => s.name === "Instagram")!;
  const facebook = site.social.find((s) => s.name === "Facebook")!;

  return (
    <section id="kontakt" aria-labelledby="contact-title" className="bg-ink">
      <div className="flex flex-wrap">
        <figure className="relative m-0 min-h-[clamp(320px,40vw,560px)] flex-[1_1_460px] overflow-hidden">
          <Image src={photos.side.src} alt={photos.side.alt} fill sizes="(min-width: 1020px) 45vw, 100vw" quality={78} className="object-cover object-[45%_50%] doc-photo" />
        </figure>
        <div className="min-w-0 flex-[1_1_560px] px-[clamp(20px,6vw,112px)] py-[clamp(72px,8vw,128px)]">
          <div className="max-w-[540px]">
            <h2 id="contact-title" className="display-3">
              {contact.headline}
            </h2>
            <p className="mt-6 text-[18px] leading-[1.6] text-ash">{contact.lead}</p>

            {status.kind === "sent" ? (
              <div role="status" className="mt-12 border-t border-rule-ink pt-8">
                <p className="font-display text-[36px] font-light tracking-[-0.03em]">{contact.sentTitle}</p>
                <p className="mt-3 text-[17px] leading-[1.6] text-ash">{contact.sentBody}</p>
                <button
                  type="button"
                  onClick={() => setStatus({ kind: "idle" })}
                  className="link-quiet mt-5 min-h-11 text-[15px] text-[#cfcac0] underline"
                >
                  {contact.again}
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-12 flex flex-col gap-8" aria-describedby="contact-status">
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field id="contact-name" label="Imię *" error={errors.name}>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="given-name"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={describedBy("name")}
                      className="field"
                    />
                  </Field>
                  <Field id="contact-email" label="E-mail *" error={errors.email}>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={describedBy("email")}
                      className="field"
                    />
                  </Field>
                </div>
                <Field id="contact-phone" label="Telefon (opcjonalnie)" error={errors.phone}>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={describedBy("phone")}
                    className="field"
                  />
                </Field>
                <Field id="contact-message" label="Wiadomość *" error={errors.message}>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder={contact.messageHint}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={describedBy("message")}
                    className="field min-h-32 resize-y py-3.5 leading-[1.55]"
                  />
                </Field>
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="contact-company">Firma</label>
                  <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                  <button type="submit" className="btn btn-ivory" disabled={sending} aria-disabled={sending}>
                    {sending ? contact.sending : contact.submit}
                  </button>
                  <span className="text-[14px] text-stone">{contact.noObligation}</span>
                </div>

                <div id="contact-status" aria-live="polite">
                  {status.kind === "error" && (
                    <p role="alert" className="border-l border-gold-light pl-4 text-[15px] leading-[1.6] text-[#e0c49a]">
                      {status.message}
                    </p>
                  )}
                </div>

                <p className="text-[13px] leading-[1.6] text-stone">
                  Wysyłając zapytanie, zgadzasz się na kontakt w jego sprawie. Szczegóły w{" "}
                  <a href="/polityka-prywatnosci" className="link-quiet text-[#cfcac0] underline">
                    polityce prywatności
                  </a>
                  .
                </p>
              </form>
            )}

            <p className="mt-12 border-t border-rule-ink pt-7 text-[16px] leading-[1.7] text-ash">
              Możesz też napisać na{" "}
              {site.email ? (
                <a href={`mailto:${site.email}`} className="link-quiet text-ivory underline">
                  {site.email}
                </a>
              ) : (
                <Placeholder>e-mail firmowy</Placeholder>
              )}{" "}
              lub zadzwonić pod{" "}
              {site.phone ? (
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-quiet text-ivory underline">
                  {site.phone}
                </a>
              ) : (
                <Placeholder>numer telefonu</Placeholder>
              )}
              . Jesteśmy też na{" "}
              <a href={instagram.href} target="_blank" rel="noopener noreferrer" className="link-quiet text-ivory underline">
                Instagramie
              </a>{" "}
              i{" "}
              <a href={facebook.href} target="_blank" rel="noopener noreferrer" className="link-quiet text-ivory underline">
                Facebooku
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
