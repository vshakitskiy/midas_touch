import { colors } from "@/palette"
import type { TokenColor } from "@/types"

export function getFontStyleTokens(): TokenColor[] {
  return [
    {
      name: "Markup - Italic",
      scope: ["markup.italic"],
      settings: { fontStyle: "italic", foreground: colors.foregroundPrimary },
    },
    {
      name: "Markup - Bold",
      scope: ["markup.bold", "markup.bold string"],
      settings: { fontStyle: "bold", foreground: colors.foregroundPrimary },
    },
    {
      name: "Markup - Bold-Italic",
      scope: [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string",
      ],
      settings: {
        fontStyle: "bold italic",
        foreground: colors.foregroundPrimary,
      },
    },
    {
      name: "Markup - Underline",
      scope: ["markup.underline"],
      settings: { fontStyle: "underline", foreground: colors.accentPrimary },
    },
    {
      name: "URL (links in comments, etc.)",
      scope: ["*url*", "*link*", "*uri*"],
      settings: { fontStyle: "underline" },
    },
  ]
}
