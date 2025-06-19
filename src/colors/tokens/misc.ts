import type { ThemePalette, TokenColor } from "@/types"

export function getMiscTokens(palette: ThemePalette): TokenColor[] {
  return [
    {
      name: "ES7 Bind Operator",
      scope: [
        "source.js constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: { fontStyle: "italic", foreground: palette.error },
    },
  ]
}
