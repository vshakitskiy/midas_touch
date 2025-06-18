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
