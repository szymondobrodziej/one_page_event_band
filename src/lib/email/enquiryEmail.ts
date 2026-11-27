import type { Enquiry } from "@/lib/enquiry";

// The notification the band receives for each enquiry. The page's own world in a mail client:
// an ink header with the A11 mark, one 2px gold beam under it, then the enquiry on ivory.
// Table layout and inline styles so Apple Mail, Gmail and Outlook all render it; a dark
// version for mail apps in dark mode. Everything the visitor typed is escaped.

export const MARK_CID = "a11-mark";

const INK = "#111111";
const IVORY = "#F5F2EC";
const GOLD = "#B08D57";
const PAPER = "#E7E1D6"; // around the card, a step darker than ivory
const SMOKE = "#55514A"; // secondary text on ivory, 7:1
const PEBBLE = "#6B665E"; // captions on ivory, 5.1:1
const RULE = "#D9D2C5";

const DISPLAY = "'Inter Tight','Helvetica Neue',Helvetica,Arial,sans-serif";
const TEXT = "Manrope,'Helvetica Neue',Helvetica,Arial,sans-serif";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const paragraphs = (s: string) => escape(s).replace(/\r\n?/g, "\n").replace(/\n/g, "<br>");

function receivedAt(now: Date) {
  const tz = "Europe/Warsaw";
  const day = new Intl.DateTimeFormat("pl-PL", { timeZone: tz, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(now);
  const time = new Intl.DateTimeFormat("pl-PL", { timeZone: tz, hour: "2-digit", minute: "2-digit" }).format(now);
  return `${day}, ${time}`;
}

export function renderEnquiryEmail(data: Enquiry, opts: { now?: Date; siteUrl?: string } = {}) {
  const now = opts.now ?? new Date();
  const site = (opts.siteUrl || "https://aurumeleven.pl").replace(/\/$/, "");
  const siteHost = site.replace(/^https?:\/\//, "");
  const name = data.name.replace(/\s+/g, " ");
  const when = receivedAt(now);
  const phoneHref = data.phone.replace(/[^\d+]/g, "");
  const replyHref = `mailto:${encodeURIComponent(data.email).replace(/%40/g, "@")}?subject=${encodeURIComponent("Re: Zapytanie o termin")}`;
  const preheader = data.message.replace(/\s+/g, " ").slice(0, 110);

  const subject = `Zapytanie o termin: ${name}`;

  const text = [
    `Nowe zapytanie o termin z ${siteHost}`,
    when,
    "",
    `Imię: ${name}`,
    `E-mail: ${data.email}`,
    `Telefon: ${data.phone || "nie podano"}`,
    "",
    "Wiadomość:",
    data.message,
    "",
    `Odpowiedź na tę wiadomość trafi prosto na adres ${data.email}.`,
  ].join("\n");

  const row = (label: string, value: string, last = false) => `
              <tr>
                <td class="rule" style="border-top:1px solid ${RULE};${last ? `border-bottom:1px solid ${RULE};` : ""}padding:13px 0;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td class="lbl t3" width="92" valign="top" style="width:92px;font-family:${TEXT};font-size:14px;line-height:22px;color:${PEBBLE};">${label}</td>
                      <td class="t1" valign="top" style="font-family:${TEXT};font-size:16px;line-height:22px;color:${INK};">${value}</td>
                    </tr>
                  </table>
                </td>
              </tr>`;

  const link = (href: string, label: string) =>
    `<a class="t1" href="${escape(href)}" style="color:${INK};text-decoration:none;">${escape(label)}</a>`;

  const phoneValue = data.phone
    ? link(`tel:${phoneHref}`, data.phone)
    : `<span class="t3" style="color:${PEBBLE};">nie podano</span>`;

  const html = `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${escape(subject)}</title>
<style>
  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; }
  a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
  @media (max-width: 620px) {
    .outer { padding: 0 !important; }
    .px { padding-left: 24px !important; padding-right: 24px !important; }
    .h1 { font-size: 30px !important; line-height: 34px !important; }
  }
  @media (prefers-color-scheme: dark) {
    .bg { background-color: #0B0B0B !important; }
    .card { background-color: #171717 !important; }
    .t1, .t1 a { color: ${IVORY} !important; }
    .t2 { color: #A8A39A !important; }
    .t3 { color: #8E8A82 !important; }
    .rule { border-color: #2B2B2B !important; }
    .btn { background-color: ${IVORY} !important; }
    .btn a { color: ${INK} !important; }
  }
</style>
</head>
<body class="bg" style="margin:0;padding:0;background-color:${PAPER};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">${escape(preheader)}&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;</div>
  <table role="presentation" class="bg" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${PAPER};">
    <tr>
      <td class="outer" align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
          <tr>
            <td class="px" style="background-color:${INK};padding:24px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle" style="padding-right:14px;"><img src="cid:${MARK_CID}" width="44" height="33" alt="Aurum Eleven" style="display:block;border:0;outline:none;"></td>
                  <td valign="middle" style="font-family:${DISPLAY};font-size:11px;line-height:16px;font-weight:500;letter-spacing:0.32em;color:${IVORY};">AURUM<br>ELEVEN</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr><td style="background-color:${GOLD};height:2px;line-height:2px;font-size:0;mso-line-height-rule:exactly;">&nbsp;</td></tr>
          <tr>
            <td class="card px" style="background-color:${IVORY};padding:40px 40px 40px;">
              <p class="t2" style="margin:0 0 12px;font-family:${TEXT};font-size:14px;line-height:20px;color:${SMOKE};">Nowe zapytanie o termin</p>
              <h1 class="t1 h1" style="margin:0;font-family:${DISPLAY};font-size:36px;line-height:40px;font-weight:300;letter-spacing:-0.02em;color:${INK};">${escape(name)}</h1>
              <p class="t3" style="margin:10px 0 0;font-family:${TEXT};font-size:14px;line-height:20px;color:${PEBBLE};">${escape(when)}</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:30px;">${row("E-mail", link(`mailto:${data.email}`, data.email))}${row("Telefon", phoneValue, true)}
              </table>

              <p class="t3" style="margin:30px 0 10px;font-family:${TEXT};font-size:14px;line-height:20px;color:${PEBBLE};">Wiadomość</p>
              <div class="t1" style="font-family:${TEXT};font-size:16px;line-height:26px;color:${INK};">${paragraphs(data.message)}</div>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:34px;">
                <tr>
                  <td class="btn" style="background-color:${INK};">
                    <a href="${escape(replyHref)}" style="display:inline-block;padding:15px 26px;font-family:${DISPLAY};font-size:15px;line-height:20px;font-weight:500;color:${IVORY};text-decoration:none;">Odpowiedz</a>
                  </td>${
                    data.phone
                      ? `
                  <td style="padding-left:22px;">
                    <a class="t1" href="${escape(`tel:${phoneHref}`)}" style="font-family:${DISPLAY};font-size:15px;line-height:20px;font-weight:500;color:${INK};text-decoration:underline;text-underline-offset:3px;">Zadzwoń</a>
                  </td>`
                      : ""
                  }
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="px" style="padding:20px 40px 0;">
              <p class="t3" style="margin:0;font-family:${TEXT};font-size:13px;line-height:20px;color:${PEBBLE};">Wysłane z formularza na <a class="t3" href="${escape(site)}" style="color:${PEBBLE};text-decoration:underline;">${escape(siteHost)}</a>. Odpowiedź w programie pocztowym trafi prosto na adres ${escape(data.email)}.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
