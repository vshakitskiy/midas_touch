import fs from "fs/promises"
import path from "path"
import { getUiColors } from "@/colors/ui"
import { getTokenColors } from "@/colors/tokens"

async function generateTheme() {
  const themeName = "Midas Touch" // Or make this configurable

  const theme = {
    name: themeName,
    colors: getUiColors(),
    tokenColors: getTokenColors(),
  }

  const outputPath = path.resolve(
    __dirname,
    `../themes/${themeName.toLowerCase().replace(/\s+/g, "-")}-proto-color-theme.json`,
  )
  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, JSON.stringify(theme, null, 2)) // null, 2 for pretty printing

  console.log(`Theme "${themeName}" generated at ${outputPath}`)
}

generateTheme().catch(console.error)
