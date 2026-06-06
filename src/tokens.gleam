import gleam/json
import gleam/list
import gleam/option
import variants

pub type Settings {
  Settings(foreground: option.Option(String), font_style: option.Option(String))
}

pub fn settings_to_json(settings: Settings) -> json.Json {
  let Settings(foreground:, font_style:) = settings
  let pairs = []

  let pairs = case foreground {
    option.Some(c) -> [#("foreground", json.string(c)), ..pairs]
    option.None -> pairs
  }

  let pairs = case font_style {
    option.Some(fs) -> [#("fontStyle", json.string(fs)), ..pairs]
    option.None -> pairs
  }

  json.object(pairs)
}

pub type Color {
  Color(name: String, scope: List(String), settings: Settings)
}

pub fn color_to_json(color: Color) -> json.Json {
  let Color(name:, scope:, settings:) = color
  json.object([
    #("name", json.string(name)),
    #("scope", json.array(scope, json.string)),
    #("settings", settings_to_json(settings)),
  ])
}

fn foreground(color: String) -> Settings {
  Settings(foreground: option.Some(color), font_style: option.None)
}

fn foreground_styled(color: String, style: String) -> Settings {
  Settings(foreground: option.Some(color), font_style: option.Some(style))
}

fn font_style(s: String) -> Settings {
  Settings(foreground: option.None, font_style: option.Some(s))
}

pub fn from_palette(p: variants.Palette) -> List(Color) {
  list.flatten([
    general(p),
    font_style_tokens(p),
    gleam_tokens(p),
    json_tokens(p),
    markdown_tokens(p),
    proto_tokens(p),
    misc_tokens(p),
  ])
}

fn general(p: variants.Palette) -> List(Color) {
  [
    Color(
      name: "Comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: foreground(variants.alpha(p.comment, "94")),
    ),
    Color(
      name: "Variables, Default Text, CSS Properties, JS Methods, Decorators",
      scope: [
        "variable",
        "string constant.other.placeholder",
        "constant.other.color",
        "meta.block variable.other",
        "support.other.variable",
        "string.other.link",
        "source.css support.type.property-name",
        "source.sass support.type.property-name",
        "source.scss support.type.property-name",
        "source.less support.type.property-name",
        "source.stylus support.type.property-name",
        "source.postcss support.type.property-name",
        "support.type.vendored.property-name.css",
        "source.css.scss entity.name.tag",
        "variable.parameter.keyframe-list.css",
        "meta.property-name.css",
        "variable.parameter.url.scss",
        "meta.property-value.scss",
        "meta.property-value.css",
        "entity.name.method.js",
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor",
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js",
      ],
      settings: foreground(p.foreground),
    ),
    Color(
      name: "Keywords, Operators, Punctuation, Attributes, RegEx, Language Variables",
      scope: [
        "keyword",
        "storage.type",
        "storage.modifier",
        "keyword.control",
        "punctuation.definition.tag",
        "punctuation.separator.inheritance.php",
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.section.embedded",
        "keyword.other.template",
        "keyword.other.substitution",
        "variable.language",
        "entity.other.attribute-name",
        "meta.property-list.scss",
        "entity.other.keyframe-offset.css",
        "meta.selector.css",
        "entity.name.tag.reference.scss",
        "entity.name.tag.nesting.css",
        "punctuation.separator.key-value.css",
        "markup.changed",
        "string.regexp",
        "constant.character.escape",
      ],
      settings: foreground(p.grey_secondary),
    ),
    Color(
      name: "Tags, Functions, Numbers, Constants, Classes, HTML Attributes",
      scope: [
        "entity.name.tag",
        "meta.tag.sgml",
        "markup.deleted.git_gutter",
        "entity.name.function",
        "variable.function",
        "support.function",
        "keyword.other.special-method",
        "constant.numeric",
        "support.constant",
        "constant.character",
        "constant.escape",
        "keyword.other.unit",
        "keyword.other",
        "constant.language.boolean",
        "entity.name",
        "support.type",
        "support.class",
        "support.other.namespace.use.php",
        "meta.use.php",
        "support.other.namespace.php",
        "markup.changed.git_gutter",
        "support.type.sys-types",
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name",
        "entity.other.attribute-name.class",
        "entity.other.attribute-name.id",
        "meta.attribute-selector.scss",
        "variable.parameter.misc.css",
      ],
      settings: foreground(p.accent_primary),
    ),
    Color(
      name: "Strings, Symbols, CSS IDs (Sass), Inserted Markup",
      scope: [
        "string",
        "constant.other.symbol",
        "constant.other.key",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
        "source.sass keyword.control",
        "markup.inserted",
      ],
      settings: foreground(p.accent_strong),
    ),
    Color(
      name: "Invalid, JS Sub-methods, Deleted Markup",
      scope: [
        "invalid",
        "invalid.illegal",
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js",
        "markup.deleted",
      ],
      settings: foreground(p.error),
    ),
  ]
}

fn font_style_tokens(p: variants.Palette) -> List(Color) {
  [
    Color(
      name: "Markup - Italic",
      scope: ["markup.italic"],
      settings: foreground_styled(p.foreground, "italic"),
    ),
    Color(
      name: "Markup - Bold",
      scope: ["markup.bold", "markup.bold string"],
      settings: foreground_styled(p.foreground, "bold"),
    ),
    Color(
      name: "Markup - Bold-Italic",
      scope: [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string",
      ],
      settings: foreground_styled(p.foreground, "bold italic"),
    ),
    Color(
      name: "Markup - Underline",
      scope: ["markup.underline"],
      settings: foreground_styled(p.accent_primary, "underline"),
    ),
    Color(
      name: "URL (links in comments, etc.)",
      scope: ["*url*", "*link*", "*uri*"],
      settings: font_style("underline"),
    ),
  ]
}

fn gleam_tokens(p: variants.Palette) -> List(Color) {
  [
    Color(
      name: "Gleam - Comments",
      scope: [
        "comment.line.double-slash.gleam",
        "punctuation.definition.comment.gleam",
      ],
      settings: foreground(variants.alpha(p.comment, "94")),
    ),
    Color(
      name: "Gleam - Keywords (import, pub, fn, let, case, if, etc.)",
      scope: [
        "keyword.control.gleam",
        "keyword.other.gleam",
        "storage.type.gleam",
        "storage.modifier.gleam",
      ],
      settings: foreground(p.grey_secondary),
    ),
    Color(
      name: "Gleam - Strings",
      scope: [
        "string.quoted.double.gleam",
        "punctuation.definition.string.begin.gleam",
        "punctuation.definition.string.end.gleam",
      ],
      settings: foreground(p.accent_strong),
    ),
    Color(
      name: "Gleam - Numbers (Integers, Floats)",
      scope: ["constant.numeric.integer.gleam", "constant.numeric.float.gleam"],
      settings: foreground(p.accent_strong),
    ),
    Color(
      name: "Gleam - Built-in Constants & Wildcard",
      scope: [
        "constant.language.gleam",
        "variable.language.wildcard.gleam",
        "constant.language.placeholder.gleam",
      ],
      settings: foreground(p.accent_primary),
    ),
    Color(
      name: "Gleam - Operators & Pipe",
      scope: [
        "keyword.operator.comparison.gleam",
        "keyword.operator.logical.gleam",
        "keyword.operator.arithmetic.gleam",
        "keyword.operator.assignment.gleam",
        "keyword.operator.arrow.gleam",
        "keyword.operator.pipe.gleam",
        "keyword.operator.capture.gleam",
        "keyword.operator.access.gleam",
      ],
      settings: foreground(p.grey_secondary),
    ),
    Color(
      name: "Gleam - Type Names (Built-in: Int, String; Custom Types)",
      scope: [
        "entity.name.type.gleam",
        "support.type.primitive.gleam",
        "support.type.gleam",
      ],
      settings: foreground(p.accent_primary),
    ),
    Color(
      name: "Gleam - Module Names & Imported Modules/Functions",
      scope: [
        "entity.name.module.gleam",
        "support.other.namespace.gleam",
        "variable.other.module.gleam",
        "entity.name.function.imported.gleam",
      ],
      settings: foreground(p.foreground),
    ),
    Color(
      name: "Gleam - Function Names (Definitions and Calls)",
      scope: ["entity.name.function.gleam", "support.function.gleam"],
      settings: foreground(p.accent_primary),
    ),
    Color(
      name: "Gleam - Function Parameters & Let Bindings",
      scope: ["variable.parameter.gleam", "variable.other.gleam"],
      settings: foreground(p.foreground),
    ),
    Color(
      name: "Gleam - Labels (in tuples/records, if distinct) & Case Pattern Variables",
      scope: [
        "variable.other.property.gleam",
        "entity.name.label.gleam",
        "variable.other.pattern.gleam",
      ],
      settings: foreground(p.foreground),
    ),
    Color(
      name: "Gleam - Attributes/Annotations (@external, @deprecated)",
      scope: [
        "meta.attribute.gleam",
        "storage.type.attribute.gleam",
        "entity.name.tag.attribute.gleam",
      ],
      settings: foreground_styled(p.grey_secondary, "italic"),
    ),
    Color(
      name: "Gleam - Punctuation (Brackets, Braces, Commas, Colons)",
      scope: [
        "punctuation.definition.list.begin.gleam",
        "punctuation.definition.list.end.gleam",
        "punctuation.definition.tuple.begin.gleam",
        "punctuation.definition.tuple.end.gleam",
        "punctuation.definition.block.gleam",
        "punctuation.definition.parameters.begin.gleam",
        "punctuation.definition.parameters.end.gleam",
        "punctuation.separator.comma.gleam",
        "punctuation.separator.colon.gleam",
        "punctuation.terminator.statement.gleam",
      ],
      settings: foreground(variants.alpha(p.grey_secondary, "90")),
    ),
  ]
}

fn json_tokens(p: variants.Palette) -> List(Color) {
  [
    Color(
      name: "JSON Keys",
      scope: ["source.json support.type.property-name.json"],
      settings: foreground(p.accent_primary),
    ),
  ]
}

fn markdown_tokens(p: variants.Palette) -> List(Color) {
  [
    Color(
      name: "Markdown - Plain Text, Table Content",
      scope: ["text.html.markdown", "meta.paragraph.markdown", "markup.table"],
      settings: foreground(p.foreground),
    ),
    Color(
      name: "Markdown - Headings Text",
      scope: ["markup.heading", "markup.heading entity.name.section"],
      settings: foreground_styled(p.accent_primary, "bold"),
    ),
    Color(
      name: "Markdown - Heading Punctuation (#, ===, ---)",
      scope: [
        "punctuation.definition.heading.markdown",
        "markup.heading.setext",
      ],
      settings: foreground(p.grey_secondary),
    ),
    Color(
      name: "Markdown - Bold Text",
      scope: ["markup.bold.markdown"],
      settings: foreground_styled(p.foreground, "bold"),
    ),
    Color(
      name: "Markdown - Italic Text",
      scope: ["markup.italic.markdown"],
      settings: foreground_styled(p.foreground, "italic"),
    ),
    Color(
      name: "Markdown - Bold Italic Text",
      scope: [
        "markup.bold.markdown markup.italic.markdown",
        "markup.italic.markdown markup.bold.markdown",
      ],
      settings: foreground_styled(p.foreground, "bold italic"),
    ),
    Color(
      name: "Markdown - Emphasis Punctuation (*, _)",
      scope: [
        "punctuation.definition.bold.markdown",
        "punctuation.definition.italic.markdown",
      ],
      settings: foreground(variants.alpha(p.grey_secondary, "90")),
    ),
    Color(
      name: "Markdown - Blockquote Text",
      scope: ["markup.quote.markdown"],
      settings: foreground_styled(variants.alpha(p.foreground, "B3"), "italic"),
    ),
    Color(
      name: "Markdown - Blockquote Punctuation (>)",
      scope: ["punctuation.definition.blockquote.markdown"],
      settings: foreground_styled(p.grey_secondary, "italic"),
    ),
    Color(
      name: "Markdown - Inline Code Text",
      scope: ["markup.inline.raw.string.markdown"],
      settings: foreground(p.accent_strong),
    ),
    Color(
      name: "Markdown - Inline Code Punctuation (`)",
      scope: ["punctuation.definition.raw.markdown"],
      settings: foreground(variants.alpha(p.accent_strong, "90")),
    ),
    Color(
      name: "Markdown - Fenced Code Block Content",
      scope: [
        "markup.fenced_code.block.markdown",
        "meta.embedded.block.markdown",
      ],
      settings: foreground(p.foreground),
    ),
    Color(
      name: "Markdown - Fenced Code Block Punctuation (```)",
      scope: ["punctuation.definition.fenced.markdown"],
      settings: foreground(p.grey_secondary),
    ),
    Color(
      name: "Markdown - Fenced Code Block Language Identifier",
      scope: [
        "fenced_code.block.language.markdown",
        "markup.fenced_code.block.markdown meta.tag",
      ],
      settings: foreground_styled(p.grey_secondary, "italic"),
    ),
    Color(
      name: "Markdown - Link Text ([text])",
      scope: [
        "markup.underline.link.markdown",
        "string.other.link.title.markdown",
      ],
      settings: foreground(p.accent_primary),
    ),
    Color(
      name: "Markdown - Link URL/Reference ((url) or [ref])",
      scope: [
        "markup.link.markdown",
        "string.other.link.description.title.markdown",
        "constant.other.reference.link.markdown",
      ],
      settings: foreground(p.grey_secondary),
    ),
    Color(
      name: "Markdown - Link Punctuation ([ ] ( ) < >)",
      scope: [
        "punctuation.definition.link.markdown",
        "punctuation.definition.link.title.begin.markdown",
        "punctuation.definition.link.title.end.markdown",
        "punctuation.definition.link.description.begin.markdown",
        "punctuation.definition.link.description.end.markdown",
        "punctuation.definition.metadata.markdown",
      ],
      settings: foreground(variants.alpha(p.grey_secondary, "90")),
    ),
    Color(
      name: "Markdown - List Item Punctuation (*, -, 1.)",
      scope: [
        "punctuation.definition.list.begin.markdown",
        "markup.list.unnumbered.marker",
        "markup.list.numbered.marker",
      ],
      settings: foreground(p.accent_primary),
    ),
    Color(
      name: "Markdown - Horizontal Rule (---, ***)",
      scope: [
        "meta.separator.markdown",
        "punctuation.definition.hr.markdown",
      ],
      settings: foreground_styled(p.grey_rule, "bold"),
    ),
    Color(
      name: "Markdown - Embedded HTML Tags",
      scope: [
        "meta.tag.inline.any.html",
        "meta.tag.block.any.html",
        "entity.name.tag.html",
      ],
      settings: foreground(p.accent_primary),
    ),
    Color(
      name: "Markdown - Embedded HTML Tag Punctuation (<, >, /)",
      scope: ["punctuation.definition.tag.html"],
      settings: foreground(variants.alpha(p.accent_primary, "90")),
    ),
    Color(
      name: "Markdown - Embedded HTML Attribute Names",
      scope: ["entity.other.attribute-name.html"],
      settings: foreground(p.grey_secondary),
    ),
    Color(
      name: "Markdown - Embedded HTML Attribute Values",
      scope: ["string.quoted.double.html", "string.quoted.single.html"],
      settings: foreground(p.accent_strong),
    ),
  ]
}

fn proto_tokens(p: variants.Palette) -> List(Color) {
  [
    Color(
      name: "Proto - Comments",
      scope: [
        "comment.line.double-slash.proto",
        "comment.block.proto",
        "punctuation.definition.comment.proto",
      ],
      settings: foreground(variants.alpha(p.comment, "94")),
    ),
    Color(
      name: "Proto - Keywords",
      scope: ["keyword.proto", "keyword.other.proto"],
      settings: foreground(p.grey_secondary),
    ),
    Color(
      name: "Proto - Storage Types (int32, string, bool, etc.)",
      scope: ["storage.type.proto", "constant.language.proto"],
      settings: foreground(p.accent_primary),
    ),
    Color(
      name: "Proto - Message and Enum Names, Package Names",
      scope: [
        "entity.name.type.message.proto",
        "entity.name.type.enum.proto",
        "support.class.proto",
        "entity.name.package.proto",
      ],
      settings: foreground(p.foreground),
    ),
    Color(
      name: "Proto - Field Names, Enum Member Names",
      scope: [
        "variable.other.field.proto",
        "variable.other.enummember.proto",
      ],
      settings: foreground(p.foreground),
    ),
    Color(
      name: "Proto - Service and RPC Method Names",
      scope: [
        "entity.name.function.service.proto",
        "entity.name.function.rpc.proto",
      ],
      settings: foreground(p.accent_primary),
    ),
    Color(
      name: "Proto - Field Numbers, Options, String Literals, Imported Paths",
      scope: [
        "constant.numeric.proto",
        "variable.other.option.proto",
        "string.quoted.double.proto",
        "string.quoted.single.proto",
        "string.quoted.double.include.proto",
        "string.quoted.single.include.proto",
      ],
      settings: foreground(p.accent_strong),
    ),
    Color(
      name: "Proto - Punctuation (;, {}, (), =)",
      scope: [
        "punctuation.definition.message.begin.proto",
        "punctuation.definition.message.end.proto",
        "punctuation.definition.enum.begin.proto",
        "punctuation.definition.enum.end.proto",
        "punctuation.definition.service.begin.proto",
        "punctuation.definition.service.end.proto",
        "punctuation.definition.rpc.begin.proto",
        "punctuation.definition.rpc.end.proto",
        "punctuation.terminator.proto",
        "punctuation.separator.key-value.proto",
        "keyword.operator.assignment.proto",
      ],
      settings: foreground(p.grey_secondary),
    ),
  ]
}

fn misc_tokens(p: variants.Palette) -> List(Color) {
  [
    Color(
      name: "ES7 Bind Operator",
      scope: [
        "source.js constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: foreground_styled(p.error, "italic"),
    ),
  ]
}
