import { getGeneralCodeTokens } from "./tokens/general"
import { getFontStyleTokens } from "./tokens/font"
import { getGleamTokens } from "./tokens/gleam"
import { getJsonTokens } from "./tokens/json"
import { getMarkdownTokens } from "./tokens/markdown"
import { getProtoTokens } from "./tokens/proto"
import { getMiscTokens } from "./tokens/misc"
import type { ThemePalette, TokenColor } from "@/types"

export function getTokenColors(palette: ThemePalette): TokenColor[] {
  return [
    ...getGeneralCodeTokens(palette),
    ...getFontStyleTokens(palette),
    ...getGleamTokens(palette),
    ...getJsonTokens(palette),
    ...getMarkdownTokens(palette),
    ...getProtoTokens(palette),
    ...getMiscTokens(palette),
  ]
}
