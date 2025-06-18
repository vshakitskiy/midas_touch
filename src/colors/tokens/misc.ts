import { colors } from "@/palette"
import type { TokenColor } from "@/types"

export function getMiscTokens(): TokenColor[] {
  return [
    {
      name: "ES7 Bind Operator (Specific JS syntax)",
      scope: [
        "source.js constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: { fontStyle: "italic", foreground: colors.error },
    },
    // Add any other truly miscellaneous, one-off token rules here
  ]
}
