import type { ThemePalette, TokenColor } from "@/types"

export function getGleamTokens(palette: ThemePalette): TokenColor[] {
  return [
    {
      name: "Gleam - Comments",
      scope: [
        "comment.line.double-slash.gleam",
        "punctuation.definition.comment.gleam",
      ],
      settings: { foreground: palette.commentAlpha94 },
    },
    {
      name: "Gleam - Keywords (import, pub, fn, let, case, if, etc.)",
      scope: [
        "keyword.control.gleam",
        "keyword.other.gleam",
        "storage.type.gleam",
        "storage.modifier.gleam",
      ],
      settings: { foreground: palette.greyLight },
    },
    {
      name: "Gleam - Strings",
      scope: [
        "string.quoted.double.gleam",
        "punctuation.definition.string.begin.gleam",
        "punctuation.definition.string.end.gleam",
      ],
      settings: { foreground: palette.accentSecondary },
    },
    {
      name: "Gleam - Numbers (Integers, Floats)",
      scope: ["constant.numeric.integer.gleam", "constant.numeric.float.gleam"],
      settings: { foreground: palette.accentSecondary },
    },
    {
      name: "Gleam - Built-in Constants & Wildcard",
      scope: [
        "constant.language.gleam",
        "variable.language.wildcard.gleam",
        "constant.language.placeholder.gleam",
      ],
      settings: { foreground: palette.accentPrimary },
    },
    {
      name: "Gleam - Operators & Pipe",
      scope: [
        "keyword.operator.comparison.gleam",
        "keyword.operator.logical.gleam",
        "keyword.operator.arithmetic.gleam",
        "keyword.operator.assignment.gleam",
        "keyword.operator.arrow.gleam",
        "keyword.operator.pipe.gleam",
        "keyword.operator.capture.gleam",
        "keyword.operator.access.gleam",
      ],
      settings: { foreground: palette.greyLight },
    },
    {
      name: "Gleam - Type Names (Built-in: Int, String; Custom Types)",
      scope: [
        "entity.name.type.gleam",
        "support.type.primitive.gleam",
        "support.type.gleam",
      ],
      settings: { foreground: palette.accentPrimary },
    },
    {
      name: "Gleam - Module Names & Imported Modules/Functions",
      scope: [
        "entity.name.module.gleam",
        "support.other.namespace.gleam",
        "variable.other.module.gleam",
        "entity.name.function.imported.gleam",
      ],
      settings: { foreground: palette.foregroundPrimary },
    },
    {
      name: "Gleam - Function Names (Definitions and Calls)",
      scope: ["entity.name.function.gleam", "support.function.gleam"],
      settings: { foreground: palette.accentPrimary },
    },
    {
      name: "Gleam - Function Parameters & Let Bindings",
      scope: ["variable.parameter.gleam", "variable.other.gleam"],
      settings: { foreground: palette.foregroundPrimary },
    },
    {
      name: "Gleam - Labels (in tuples/records, if distinct) & Case Pattern Variables",
      scope: [
        "variable.other.property.gleam",
        "entity.name.label.gleam",
        "variable.other.pattern.gleam",
      ],
      settings: { foreground: palette.foregroundPrimary },
    },
    {
      name: "Gleam - Attributes/Annotations (@external, @deprecated)",
      scope: [
        "meta.attribute.gleam",
        "storage.type.attribute.gleam",
        "entity.name.tag.attribute.gleam",
      ],
      settings: { foreground: palette.greyLight, fontStyle: "italic" },
    },
    {
      name: "Gleam - Punctuation (Brackets, Braces, Commas, Colons)",
      scope: [
        "punctuation.definition.list.begin.gleam",
        "punctuation.definition.list.end.gleam",
        "punctuation.definition.tuple.begin.gleam",
        "punctuation.definition.tuple.end.gleam",
        "punctuation.definition.block.gleam",
        "punctuation.definition.parameters.begin.gleam",
        "punctuation.definition.parameters.end.gleam",
        "punctuation.separator.comma.gleam",
        "punctuation.separator.colon.gleam",
        "punctuation.terminator.statement.gleam",
      ],
      settings: { foreground: palette.greyLightAlpha90 },
    },
  ]
}
