export interface TokenColorSetting {
  foreground?: string
  background?: string
  fontStyle?: string
}

export interface TokenColor {
  name?: string
  scope?: string | string[]
  settings: TokenColorSetting
}

export interface ThemePalette {
  // ---- Core Dark Tones ----
  backgroundPrimary: string // Main editor, sidebar, status bar bg
  backgroundSecondary: `#${string}` // Inlay hints, inputs
  backgroundTertiary: `#${string}` // Hover widgets
  backgroundActiveTab: `#${string}`
  backgroundListSelection: `#${string}`
  backgroundListHover: `#${string}`

  // ---- Core Light & Accent Tones (Midas Palette) ----
  foregroundPrimary: `#${string}` // Main text, variables
  accentPrimary: `#${string}` // "Midas Pink" - Warnings, focus, links, badges, buttons
  accentSecondary: `#${string}` // "Stronger Pink" - Strings, hover states, some constants
  error: `#${string}` // Errors, deleted items
  success: `#${string}` // (Using terminal green as a basis for a success color)
  info: `#${string}` // (Using terminal blue as a basis for an info color)
  added: `#${string}` // Gutter added items - distinct red

  // ---- Greys & Neutrals ----
  greyDark: `#${string}` // Line numbers
  greyMedium: `#${string}` // TitleBar inactive text
  greySlightlyLighter: `#${string}` // TitleBar active text
  greyLight: `#${string}` // Secondary text, keywords, punctuation
  greyInlayHint: `#${string}` // Inlay hint text
  greySelection: `#${string}` // Generic selection (e.g., terminal output)
  greyScrollbar: `#${string}`
  greyMarkdownRule: `#${string}`

  // ---- Transparent & Alpha Variants (derive or define directly) ----
  foregroundPrimaryAlpha3e: `#${string}` // Selection bg
  accentSecondaryAlpha15: `#${string}` // Diff inserted bg
  errorAlpha15: `#${string}` // Diff removed bg
  commentAlpha94: `#${string}` // Comments
  greyDarkAlpha30: `#${string}` // Tree inactive indent
  greyDarkAlpha60: `#${string}` // Tree active indent
  greyScrollbarAlpha80: `#${string}`
  foregroundPrimaryAlphaB3: `#${string}` // MD blockquote text
  greyLightAlpha90: `#${string}` // MD emphasis/link punctuation
  accentSecondaryAlpha90: `#${string}` // MD inline code punctuation
  accentPrimaryAlpha90: `#${string}` // MD HTML tag punctuation
  transparent: `#${string}` // For contrast borders

  // ---- Text & Special ----
  textBlack: `#${string}` // For text on light/bright backgrounds
  debugBackground: `#${string}` // Dark red for status bar debugging

  // ---- Terminal ANSI Colors (Catppuccin Mocha Inspired / Midas Touch adapted) ----
  terminalBlack: `#${string}`
  terminalBrightBlack: `#${string}` // (Slightly desaturated grey-blue)
  terminalRed: `#${string}` // (Softer pink-red)
  terminalBrightRed: `#${string}`
  terminalGreen: `#${string}` // (Soft green)
  terminalBrightGreen: `#${string}`
  terminalYellow: `#${string}` // (Soft yellow)
  terminalBrightYellow: `#${string}`
  terminalBlue: `#${string}` // (Soft blue)
  terminalBrightBlue: `#${string}`
  terminalMagenta: `#${string}` // (Soft magenta/pink)
  terminalBrightMagenta: `#${string}`
  terminalCyan: `#${string}` // (Soft cyan/teal)
  terminalBrightCyan: `#${string}`
  terminalWhite: `#${string}` // (Light lavender-grey)
  terminalBrightWhite: `#${string}` // (Slightly darker light lavender-grey)
}

export interface ThemeVariant {
  label: string
  uiTheme: "vs-dark" | "vs" | "hc-black" | "hc-light"
  name: string
  palette: ThemePalette
}
