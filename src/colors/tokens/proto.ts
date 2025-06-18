import { colors } from "@/palette"
import type { TokenColor } from "@/types"

export function getProtoTokens(): TokenColor[] {
  return [
    {
      name: "Proto - Comments",
      scope: [
        "comment.line.double-slash.proto",
        "comment.block.proto",
        "punctuation.definition.comment.proto",
      ],
      settings: { foreground: colors.commentAlpha94 },
    },
    {
      name: "Proto - Keywords",
      scope: ["keyword.proto", "keyword.other.proto"],
      settings: { foreground: colors.greyLight },
    },
    {
      name: "Proto - Storage Types (int32, string, bool, etc.)",
      scope: ["storage.type.proto", "constant.language.proto"],
      settings: { foreground: colors.accentPrimary },
    },
    {
      name: "Proto - Message and Enum Names, Package Names",
      scope: [
        "entity.name.type.message.proto",
        "entity.name.type.enum.proto",
        "support.class.proto",
        "entity.name.package.proto",
      ],
      settings: { foreground: colors.foregroundPrimary },
    },
    {
      name: "Proto - Field Names, Enum Member Names",
      scope: ["variable.other.field.proto", "variable.other.enummember.proto"],
      settings: { foreground: colors.foregroundPrimary },
    },
    {
      name: "Proto - Service and RPC Method Names",
      scope: [
        "entity.name.function.service.proto",
        "entity.name.function.rpc.proto",
      ],
      settings: { foreground: colors.accentPrimary },
    },
    {
      name: "Proto - Field Numbers, Options, String Literals, Imported Paths",
      scope: [
        "constant.numeric.proto",
        "variable.other.option.proto",
        "string.quoted.double.proto",
        "string.quoted.single.proto",
        "string.quoted.double.include.proto",
        "string.quoted.single.include.proto",
      ],
      settings: { foreground: colors.accentSecondary },
    },
    {
      name: "Proto - Punctuation (;, {}, (), =)",
      scope: [
        "punctuation.definition.message.begin.proto",
        "punctuation.definition.message.end.proto",
        "punctuation.definition.enum.begin.proto",
        "punctuation.definition.enum.end.proto",
        "punctuation.definition.service.begin.proto",
        "punctuation.definition.service.end.proto",
        "punctuation.definition.rpc.begin.proto",
        "punctuation.definition.rpc.end.proto",
        "punctuation.terminator.proto",
        "punctuation.separator.key-value.proto",
        "keyword.operator.assignment.proto",
      ],
      settings: { foreground: colors.greyLight },
    },
  ]
}
