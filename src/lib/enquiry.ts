export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export function parseEnquiry(input: Record<string, unknown>): { data: Enquiry; errors: EnquiryErrors } {
  const data: Enquiry = {
    name: clean(input.name, 120),
    email: clean(input.email, 200),
    phone: clean(input.phone, 40),
    message: clean(input.message, 4000),
  };
  const errors: EnquiryErrors = {};
  if (!data.name) errors.name = "Wpisz imię, żebyśmy wiedzieli, do kogo odpisać.";
  if (!data.email) errors.email = "Wpisz adres e-mail, na który wyślemy ofertę.";
  else if (!EMAIL.test(data.email)) errors.email = "Ten adres e-mail wygląda na niepełny. Sprawdź go, proszę.";
  if (data.phone && !/^[+\d][\d\s()-]{5,}$/.test(data.phone)) errors.phone = "Numer telefonu może zawierać cyfry, spacje i znak +.";
  if (!data.message) errors.message = "Napisz kilka słów o evencie: datę, miejsce i liczbę gości, jeśli je znasz.";
  return { data, errors };
}
