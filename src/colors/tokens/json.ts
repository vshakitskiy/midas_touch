import { colors } from "@/palette"
import type { TokenColor } from "@/types"

export function getJsonTokens(): TokenColor[] {
  return [
    {
      name: "JSON Keys",
      scope: ["source.json support.type.property-name.json"],
      settings: { foreground: colors.accentPrimary },
    },
  ]
}
