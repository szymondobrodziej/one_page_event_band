"use client";

import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { contact, photos, site } from "@/content/site";
import { ENQUIRY_LIMITS, HONEYPOT_FIELD, parseEnquiry, type EnquiryErrors } from "@/lib/enquiry";

/** A 1x1 transparent GIF: what the hidden <img> points at below 1040px, so nothing is fetched there. */
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const sidePhoto = (() => {
  const { props } = getImageProps({
    src: photos.side.src,
    alt: photos.side.alt,
    fill: true,
    sizes: "(min-width: 1600px) 50vw, 75vw",
    quality: 78,
  });
  // img keeps Next's fill styles and lazy loading; its src is replaced by BLANK where it is rendered.
  const { srcSet, sizes, ...img } = props;
  return { srcSet, sizes, img };
})();

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

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
        <p id={`${id}-error`} className="text-[14px] leading-snug text-error-sand">
          {error}
        </p>
      )}
    </div>
  );
}

const inlineLink = "link-quiet text-ivory underline";

/** The other ways to reach the band. Contact data the client has not supplied yet is left out, never shown as a placeholder. */
function OtherChannels() {
  const instagram = site.social.find((s) => s.name === "Instagram")!;
  const facebook = site.social.find((s) => s.name === "Facebook")!;
  const ig = (
    <a href={instagram.href} target="_blank" rel="noopener noreferrer" className={inlineLink}>
      Instagramie
    </a>
  );
  const fb = (
    <a href={facebook.href} target="_blank" rel="noopener noreferrer" className={inlineLink}>
      Facebooku
    </a>
  );
  const mail = site.email ? (
    <a href={`mailto:${site.email}`} className={inlineLink}>
      {site.email}
    </a>
  ) : null;
  const tel = site.phone ? (
    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={inlineLink}>
      {site.phone}
    </a>
  ) : null;

  if (!mail && !tel) {
    return (
      <>
        Możesz też napisać do nas na {ig} lub {fb}.
      </>
    );
  }
  return (
    <>
      Możesz też {mail && <>napisać na {mail}</>}
      {mail && tel && " lub "}
      {tel && <>zadzwonić pod {tel}</>}. Jesteśmy też na {ig} i{"\u00A0"}
      {fb}.
    </>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const sentRef = useRef<HTMLHeadingElement>(null);
  const refocusForm = useRef(false);

  // Focus follows the change of state, so keyboard and screen-reader users land on what just appeared.
  useEffect(() => {
    if (status.kind === "sent") {
      sentRef.current?.focus();
    } else if (status.kind === "idle" && refocusForm.current) {
      refocusForm.current = false;
      formRef.current?.querySelector<HTMLElement>('[name="name"]')?.focus();
    }
  }, [status.kind]);

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

  return (
    <section id="kontakt" aria-labelledby="contact-title" className="bg-ink">
      <div className="flex flex-wrap">
        {/* Desktop only: on phones the enquiry buttons land straight on the headline and the first field,
            and the <picture> source keeps narrower screens from downloading the photo at all. */}
        <figure className="relative m-0 hidden flex-[1_1_460px] overflow-hidden min-[1040px]:block">
          <picture>
            <source media="(min-width: 1040px)" srcSet={sidePhoto.srcSet} sizes={sidePhoto.sizes} />
            <img {...sidePhoto.img} src={BLANK} alt={photos.side.alt} className="object-cover doc-photo" />
          </picture>
        </figure>
        <div className="min-w-0 flex-[1_1_560px] px-[clamp(20px,6vw,112px)] py-[clamp(72px,8vw,128px)]">
          <div className="max-w-[540px]">
            <h2 id="contact-title" className="display-3">
              {contact.headline}
            </h2>
            <p className="mt-6 text-[18px] leading-[1.6] text-ash">{contact.lead}</p>

            {status.kind === "sent" ? (
              <div role="status" className="mt-12 border-t border-rule-ink pt-8">
                <h3 ref={sentRef} tabIndex={-1} className="font-display text-[36px] font-light tracking-[-0.03em]">
                  {contact.sentTitle}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.6] text-ash">{contact.sentBody}</p>
                <button
                  type="button"
                  onClick={() => {
                    refocusForm.current = true;
                    setStatus({ kind: "idle" });
                  }}
                  className="link-quiet mt-5 min-h-11 text-[15px] text-ivory-dim underline"
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
                      maxLength={ENQUIRY_LIMITS.name}
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
                      maxLength={ENQUIRY_LIMITS.email}
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
                    maxLength={ENQUIRY_LIMITS.phone}
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
                    maxLength={ENQUIRY_LIMITS.message}
                    placeholder={contact.messageHint}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={describedBy("message")}
                    className="field min-h-32 resize-y py-3.5 leading-[1.55]"
                  />
                </Field>
                {/* Anti-spam trap: hidden from people, and named so that no autofill fills it. */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="contact-trap">Zostaw to pole puste</label>
                  <input id="contact-trap" name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                  <button type="submit" className="btn btn-ivory" disabled={sending} aria-disabled={sending}>
                    {sending ? contact.sending : contact.submit}
                  </button>
                  <span className="text-[14px] text-stone">{contact.noObligation}</span>
                </div>

                <div id="contact-status" aria-live="polite">
                  {status.kind === "error" && (
                    <p role="alert" className="border-l border-gold-light pl-4 text-[15px] leading-[1.6] text-error-sand">
                      {status.message}
                    </p>
                  )}
                </div>

                <p className="text-[13px] leading-[1.6] text-stone">
                  Wysyłając zapytanie, zgadzasz się na kontakt w jego sprawie. Szczegóły w{"\u00A0"}
                  <a href="/polityka-prywatnosci" className="link-quiet text-ivory-dim underline">
                    polityce prywatności
                  </a>
                  .
                </p>
              </form>
            )}

            <p className="mt-12 border-t border-rule-ink pt-7 text-[16px] leading-[1.7] text-ash">
              <OtherChannels />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
