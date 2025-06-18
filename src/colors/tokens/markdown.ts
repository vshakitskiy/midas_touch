import { colors } from "@/palette"
import type { TokenColor } from "@/types"

export function getMarkdownTokens(): TokenColor[] {
  return [
    {
      name: "Markdown - Plain Text, Table Content",
      scope: ["text.html.markdown", "meta.paragraph.markdown", "markup.table"],
      settings: { foreground: colors.foregroundPrimary },
    },
    {
      name: "Markdown - Headings Text",
      scope: ["markup.heading", "markup.heading entity.name.section"],
      settings: { foreground: colors.accentPrimary, fontStyle: "bold" },
    },
    {
      name: "Markdown - Heading Punctuation (#, ===, ---)",
      scope: [
        "punctuation.definition.heading.markdown",
        "markup.heading.setext",
      ],
      settings: { foreground: colors.greyLight },
    },
    {
      name: "Markdown - Bold Text",
      scope: ["markup.bold.markdown"],
      settings: { fontStyle: "bold", foreground: colors.foregroundPrimary },
    },
    {
      name: "Markdown - Italic Text",
      scope: ["markup.italic.markdown"],
      settings: { fontStyle: "italic", foreground: colors.foregroundPrimary },
    },
    {
      name: "Markdown - Bold Italic Text",
      scope: [
        "markup.bold.markdown markup.italic.markdown",
        "markup.italic.markdown markup.bold.markdown",
      ],
      settings: {
        fontStyle: "bold italic",
        foreground: colors.foregroundPrimary,
      },
    },
    {
      name: "Markdown - Emphasis Punctuation (*, _)",
      scope: [
        "punctuation.definition.bold.markdown",
        "punctuation.definition.italic.markdown",
      ],
      settings: { foreground: colors.greyLightAlpha90 },
    },
    {
      name: "Markdown - Blockquote Text",
      scope: ["markup.quote.markdown"],
      settings: {
        foreground: colors.foregroundPrimaryAlphaB3,
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown - Blockquote Punctuation (>)",
      scope: ["punctuation.definition.blockquote.markdown"],
      settings: { foreground: colors.greyLight, fontStyle: "italic" },
    },
    {
      name: "Markdown - Inline Code Text",
      scope: ["markup.inline.raw.string.markdown"],
      settings: { foreground: colors.accentSecondary },
    },
    {
      name: "Markdown - Inline Code Punctuation (`)",
      scope: ["punctuation.definition.raw.markdown"],
      settings: { foreground: colors.accentSecondaryAlpha90 },
    },
    {
      name: "Markdown - Fenced Code Block Content",
      scope: [
        "markup.fenced_code.block.markdown",
        "meta.embedded.block.markdown",
      ],
      settings: { foreground: colors.foregroundPrimary },
    },
    {
      name: "Markdown - Fenced Code Block Punctuation (```)",
      scope: ["punctuation.definition.fenced.markdown"],
      settings: { foreground: colors.greyLight }, // Was blackAlpha50, changed to greyLight
    },
    {
      name: "Markdown - Fenced Code Block Language Identifier",
      scope: [
        "fenced_code.block.language.markdown",
        "markup.fenced_code.block.markdown meta.tag",
      ],
      settings: { foreground: colors.greyLight, fontStyle: "italic" },
    },
    {
      name: "Markdown - Link Text ([text])",
      scope: [
        "markup.underline.link.markdown",
        "string.other.link.title.markdown",
      ],
      settings: { foreground: colors.accentPrimary },
    },
    {
      name: "Markdown - Link URL/Reference ((url) or [ref])",
      scope: [
        "markup.link.markdown",
        "string.other.link.description.title.markdown",
        "constant.other.reference.link.markdown",
      ],
      settings: { foreground: colors.greyLight },
    },
    {
      name: "Markdown - Link Punctuation ([ ] ( ) < >)",
      scope: [
        "punctuation.definition.link.markdown",
        "punctuation.definition.link.title.begin.markdown",
        "punctuation.definition.link.title.end.markdown",
        "punctuation.definition.link.description.begin.markdown",
        "punctuation.definition.link.description.end.markdown",
        "punctuation.definition.metadata.markdown",
      ],
      settings: { foreground: colors.greyLightAlpha90 },
    },
    {
      name: "Markdown - List Item Punctuation (*, -, 1.)",
      scope: [
        "punctuation.definition.list.begin.markdown",
        "markup.list.unnumbered.marker",
        "markup.list.numbered.marker",
      ],
      settings: { foreground: colors.accentPrimary },
    },
    {
      name: "Markdown - Horizontal Rule (---, ***)",
      scope: ["meta.separator.markdown", "punctuation.definition.hr.markdown"],
      settings: { foreground: colors.greyMarkdownRule, fontStyle: "bold" },
    },
    {
      name: "Markdown - Embedded HTML Tags",
      scope: [
        "meta.tag.inline.any.html",
        "meta.tag.block.any.html",
        "entity.name.tag.html",
      ],
      settings: { foreground: colors.accentPrimary },
    },
    {
      name: "Markdown - Embedded HTML Tag Punctuation (<, >, /)",
      scope: ["punctuation.definition.tag.html"],
      settings: { foreground: colors.accentPrimaryAlpha90 },
    },
    {
      name: "Markdown - Embedded HTML Attribute Names",
      scope: ["entity.other.attribute-name.html"],
      settings: { foreground: colors.greyLight },
    },
    {
      name: "Markdown - Embedded HTML Attribute Values",
      scope: ["string.quoted.double.html", "string.quoted.single.html"],
      settings: { foreground: colors.accentSecondary },
    },
  ]
}
