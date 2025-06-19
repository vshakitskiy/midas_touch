import type { ThemePalette, TokenColor } from "@/types"

export function getJsonTokens(palette: ThemePalette): TokenColor[] {
  return [
    {
      name: "JSON Keys",
      scope: ["source.json support.type.property-name.json"],
      settings: { foreground: palette.accentPrimary },
    },
  ]
}
