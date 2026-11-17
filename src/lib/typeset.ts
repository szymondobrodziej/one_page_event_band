// Polish typesetting: a one-letter word (a, i, o, u, w, z) or a bare number never ends a line.
// It is bound to the next word with a non-breaking space, so "Zapytaj o / dostępność" cannot happen.
const ORPHAN = /(?<=^|[\s(„"])([aiouwzAIOUWZ]|\d+) +/g;

export function bindOrphans(text: string): string {
  return text.replace(ORPHAN, "$1\u00A0");
}

/** Applies bindOrphans to every string in a content object, array or string. */
export function typeset<T>(value: T): T {
  if (typeof value === "string") return bindOrphans(value) as T;
  if (Array.isArray(value)) return value.map((item) => typeset(item)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, typeset(item)])) as T;
  }
  return value;
}
