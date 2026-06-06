import gleam/io
import gleam/json
import gleam/list
import gleam/pair
import gleam/string
import simplifile
import tokens
import ui
import variants

const themes_dir = "./themes"

pub fn main() {
  case simplifile.read_directory(themes_dir) {
    Ok(files) -> {
      list.each(files, fn(file) {
        let path = themes_dir <> "/" <> file
        let assert Ok(_) = simplifile.delete(path)
      })
    }
    Error(_) -> Nil
  }

  let assert Ok(_) = simplifile.create_directory_all(themes_dir)

  let theme_entries =
    list.map(variants.all(), fn(variant: variants.Variant) {
      let file_name =
        string.replace(string.lowercase(variant.name), each: " ", with: "-")
        <> "-color-theme.json"
      let path = themes_dir <> "/" <> file_name

      let color_pairs =
        ui.from_palette(variant.palette, variant.terminal)
        |> list.map(pair.map_second(_, json.string))

      let theme_json =
        json.object([
          #("name", json.string(variant.name)),
          #("colors", json.object(color_pairs)),
          #(
            "tokenColors",
            json.array(
              tokens.from_palette(variant.palette),
              tokens.color_to_json,
            ),
          ),
        ])
        |> json.to_string

      let assert Ok(_) = simplifile.write(to: path, contents: theme_json)
      io.println("Generated: " <> path)

      #(variant.label, variant.ui_theme, "./themes/" <> file_name)
    })

  let package_json = build_package_json(theme_entries)
  let assert Ok(_) =
    simplifile.write(to: "./package.json", contents: package_json)
  io.println("Updated: ./package.json")
}

fn build_package_json(
  theme_entries: List(#(String, String, String)),
) -> String {
  json.object([
    #("name", json.string("midas-touch")),
    #("displayName", json.string("Midas Touch")),
    #("publisher", json.string("vshakitskiy")),
    #("description", json.string("wiskiy's views on flavored themes")),
    #("version", json.string("1.0.0")),
    #("engines", json.object([#("vscode", json.string("^1.75.0"))])),
    #("license", json.string("MIT")),
    #(
      "repository",
      json.object([
        #("type", json.string("git")),
        #("url", json.string("https://github.com/vshakitskiy/midas_touch")),
      ]),
    ),
    #("icon", json.string("icon.jpg")),
    #(
      "files",
      json.array(
        ["assets/**", "themes/**/*.json", "icon.jpg", "README.md", "LICENSE"],
        json.string,
      ),
    ),
    #("categories", json.array(["Themes"], json.string)),
    #(
      "contributes",
      json.object([
        #(
          "themes",
          json.array(theme_entries, fn(entry) {
            let #(label, ui_theme, path) = entry
            json.object([
              #("label", json.string(label)),
              #("uiTheme", json.string(ui_theme)),
              #("path", json.string(path)),
            ])
          }),
        ),
      ]),
    ),
    #("type", json.string("module")),
    #("private", json.bool(True)),
  ])
  |> json.to_string
}
