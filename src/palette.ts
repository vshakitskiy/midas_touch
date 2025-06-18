export const colors = {
  // ---- Core Dark Tones ----
  backgroundPrimary: "#101010", // Main editor, sidebar, status bar bg
  backgroundSecondary: "#1C1C1C", // Inlay hints, inputs
  backgroundTertiary: "#161616", // Hover widgets
  backgroundActiveTab: "#171717",
  backgroundListSelection: "#232323",
  backgroundListHover: "#282828",

  // ---- Core Light & Accent Tones (Midas Palette) ----
  foregroundPrimary: "#ffe3eb", // Main text, variables
  accentPrimary: "#FF8FA3", // "Midas Pink" - Warnings, focus, links, badges, buttons
  accentSecondary: "#FF4D6D", // "Stronger Pink" - Strings, hover states, some constants
  error: "#FF8080", // Errors, deleted items
  success: "#A6E3A1", // (Using terminal green as a basis for a success color)
  info: "#89B4FA", // (Using terminal blue as a basis for an info color)
  added: "#FF8FA380", // Gutter added items - distinct red

  // ---- Greys & Neutrals ----
  greyDark: "#505050", // Line numbers
  greyMedium: "#707070", // TitleBar inactive text
  greySlightlyLighter: "#7E7E7E", // TitleBar active text
  greyLight: "#8e8e8e", // Secondary text, keywords, punctuation
  greyInlayHint: "#989898", // Inlay hint text
  greySelection: "#666666", // Generic selection (e.g., terminal output)
  greyScrollbar: "#343434",
  greyMarkdownRule: "#65737E",

  // ---- Transparent & Alpha Variants (derive or define directly) ----
  foregroundPrimaryAlpha3e: "#ffe3eb3e", // Selection bg
  accentSecondaryAlpha15: "#FF4D6D15", // Diff inserted bg
  errorAlpha15: "#FF808015", // Diff removed bg
  commentAlpha94: "#8b8b8b94", // Comments
  greyDarkAlpha30: "#50505030", // Tree inactive indent
  greyDarkAlpha60: "#50505060", // Tree active indent
  greyScrollbarAlpha80: "#34343480",
  foregroundPrimaryAlphaB3: "#ffe3ebB3", // MD blockquote text
  greyLightAlpha90: "#8e8e8e90", // MD emphasis/link punctuation
  accentSecondaryAlpha90: "#FF4D6D90", // MD inline code punctuation
  accentPrimaryAlpha90: "#FF8FA390", // MD HTML tag punctuation
  transparent: "#00000000", // For contrast borders

  // ---- Text & Special ----
  textBlack: "#000000", // For text on light/bright backgrounds
  debugBackground: "#A4133C", // Dark red for status bar debugging

  // ---- Terminal ANSI Colors (Catppuccin Mocha Inspired / Midas Touch adapted) ----
  terminalBlack: "#181818",
  terminalBrightBlack: "#6c7086", // (Slightly desaturated grey-blue)
  terminalRed: "#F38BA8", // (Softer pink-red)
  terminalBrightRed: "#F38BA8",
  terminalGreen: "#A6E3A1", // (Soft green)
  terminalBrightGreen: "#A6E3A1",
  terminalYellow: "#F9E2AF", // (Soft yellow)
  terminalBrightYellow: "#F9E2AF",
  terminalBlue: "#89B4FA", // (Soft blue)
  terminalBrightBlue: "#89B4FA",
  terminalMagenta: "#F5C2E7", // (Soft magenta/pink)
  terminalBrightMagenta: "#F5C2E7",
  terminalCyan: "#94E2D5", // (Soft cyan/teal)
  terminalBrightCyan: "#94E2D5",
  terminalWhite: "#CDD6F4", // (Light lavender-grey)
  terminalBrightWhite: "#BAC2DE", // (Slightly darker light lavender-grey)
}
