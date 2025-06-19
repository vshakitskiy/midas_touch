import fs from "fs/promises"
import path from "path"
import { getUiColors } from "@/colors/ui"
import { getTokenColors } from "@/colors/tokens"
import { variants } from "@/variants"

async function generateTheme() {
  const themesDir = path.resolve(__dirname, "../themes")
  try {
    const files = await fs.readdir(themesDir)
    for (const file of files) {
      await fs.unlink(path.join(themesDir, file))
    }
    console.log("Cleaned themes directory")
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error
    }
  }

  const packageJsonPath = path.resolve(__dirname, "../package.json")
  const packageJsonContent = await fs.readFile(packageJsonPath, "utf-8")
  const packageJson = JSON.parse(packageJsonContent) as {
    contributes: {
      themes: {
        label: string
        uiTheme: string
        path: string
      }[]
    }
  }
  packageJson.contributes.themes = []

  for (const variant of variants) {
    const theme = {
      name: variant.name,
      colors: getUiColors(variant.palette),
      tokenColors: getTokenColors(variant.palette),
    }
    const themeFileName = `${variant.name.toLowerCase().replace(/\s+/g, "-")}-color-theme.json`

    const outputPath = path.resolve(__dirname, `../themes/${themeFileName}`)
    await fs.mkdir(path.dirname(outputPath), { recursive: true })
    await fs.writeFile(outputPath, JSON.stringify(theme, null, 2))

    packageJson.contributes.themes.push({
      label: variant.label,
      uiTheme: variant.uiTheme,
      path: `./themes/${themeFileName}`,
    })
    console.log(`Theme "${variant.name}" generated at ${outputPath}`)
  }

  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2))
}

generateTheme().catch(console.error)
