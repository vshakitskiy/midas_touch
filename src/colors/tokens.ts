import { getGeneralCodeTokens } from "./tokens/general"
import { getFontStyleTokens } from "./tokens/font"
import { getGleamTokens } from "./tokens/gleam"
import { getJsonTokens } from "./tokens/json"
import { getMarkdownTokens } from "./tokens/markdown"
import { getProtoTokens } from "./tokens/proto"
import { getMiscTokens } from "./tokens/misc"
import type { TokenColor } from "@/types"

export function getTokenColors(): TokenColor[] {
  return [
    ...getGeneralCodeTokens(),
    ...getFontStyleTokens(),
    ...getGleamTokens(),
    ...getJsonTokens(),
    ...getMarkdownTokens(),
    ...getProtoTokens(),
    ...getMiscTokens(),
  ]
}
