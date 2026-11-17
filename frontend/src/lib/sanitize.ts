import sanitizeHtml from "sanitize-html";

export function sanitizeRichText(value: string | null | undefined): string {
  if (!value) {
    return "";
  }

  return sanitizeHtml(value, {
    allowedTags: [
      "b",
      "strong",
      "i",
      "em",
      "u",
      "p",
      "br",
      "ul",
      "ol",
      "li",
      "a",
      "span",
      "div",
      "h1",
      "h2",
      "h3",
      "h4",
      "blockquote",
      "img",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "title"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtml.simpleTransform(
        "a",
        {
          rel: "nofollow noreferrer",
          target: "_blank",
        },
        true,
      ),
    },
  });
}
