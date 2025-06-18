import { colors } from "@/palette"

export function getUiColors(): Record<string, string> {
  return {
    // ---- Editor Core ----
    "editor.background": colors.backgroundPrimary,
    "editor.foreground": colors.foregroundPrimary,
    "editor.selectionBackground": colors.foregroundPrimaryAlpha3e,
    "editor.selectionHighlightBackground": colors.foregroundPrimaryAlpha3e,
    "editorLineNumber.foreground": colors.greyDark,
    "editorWidget.background": colors.backgroundPrimary,

    // ---- Editor States & Diagnostics ----
    "editorWarning.foreground": colors.accentPrimary,
    "editorError.foreground": colors.error,

    // ---- Editor Gutter & Diff ----
    "editorGutter.addedBackground": colors.added,
    "editorGutter.deletedBackground": colors.error,
    "editorGutter.modifiedBackground": colors.accentPrimary,
    "diffEditor.insertedTextBackground": colors.accentSecondaryAlpha15,
    "diffEditor.insertedLineBackground": colors.accentSecondaryAlpha15,
    "diffEditor.removedTextBackground": colors.errorAlpha15,
    "diffEditor.removedLineBackground": colors.errorAlpha15,

    // ---- Editor Features ----
    "editorInlayHint.foreground": colors.greyInlayHint,
    "editorInlayHint.background": colors.backgroundSecondary,
    "editorBracketHighlight.foreground1": colors.greyLight,
    "editorBracketHighlight.foreground2": colors.greyLight,
    "editorBracketHighlight.foreground3": colors.greyLight,
    "editorBracketHighlight.foreground4": colors.greyLight,
    "editorBracketHighlight.foreground5": colors.greyLight,
    "editorBracketHighlight.foreground6": colors.greyLight,
    "editorBracketHighlight.unexpectedBracket.foreground": colors.error,
    "editorHoverWidget.background": colors.backgroundTertiary,
    "editorHoverWidget.border": colors.backgroundListHover, // Using list hover as it's a close dark grey
    "editorOverviewRuler.border": colors.backgroundPrimary,

    // ---- Terminal / Console ----
    "terminal.background": colors.backgroundPrimary,
    "terminal.foreground": colors.foregroundPrimary,
    "terminalCursor.background": colors.backgroundPrimary,
    "terminalCursor.foreground": colors.accentPrimary,
    "terminal.selectionBackground": colors.foregroundPrimaryAlpha3e,
    // ANSI Colors
    "terminal.ansiBlack": colors.terminalBlack,
    "terminal.ansiBrightBlack": colors.terminalBrightBlack,
    "terminal.ansiRed": colors.terminalRed,
    "terminal.ansiBrightRed": colors.terminalBrightRed,
    "terminal.ansiGreen": colors.terminalGreen,
    "terminal.ansiBrightGreen": colors.terminalBrightGreen,
    "terminal.ansiYellow": colors.terminalYellow,
    "terminal.ansiBrightYellow": colors.terminalBrightYellow,
    "terminal.ansiBlue": colors.terminalBlue,
    "terminal.ansiBrightBlue": colors.terminalBrightBlue,
    "terminal.ansiMagenta": colors.terminalMagenta,
    "terminal.ansiBrightMagenta": colors.terminalBrightMagenta,
    "terminal.ansiCyan": colors.terminalCyan,
    "terminal.ansiBrightCyan": colors.terminalBrightCyan,
    "terminal.ansiWhite": colors.terminalWhite,
    "terminal.ansiBrightWhite": colors.terminalBrightWhite,

    // ---- Sidebar & Activity Bar ----
    "sideBar.background": colors.backgroundPrimary,
    "sideBarTitle.foreground": colors.greyLight,
    "sideBarSectionHeader.background": colors.backgroundPrimary,
    "sideBarSectionHeader.foreground": colors.greyLight,
    "activityBar.background": colors.backgroundPrimary,
    "activityBar.foreground": colors.greyLight,
    "activityBarBadge.background": colors.accentPrimary,
    "activityBarBadge.foreground": colors.textBlack,

    // ---- TitleBar, Tabs & Editor Groups ----
    "titleBar.activeBackground": colors.backgroundPrimary,
    "titleBar.inactiveBackground": colors.backgroundPrimary,
    "titleBar.activeForeground": colors.greySlightlyLighter,
    "titleBar.inactiveForeground": colors.greyMedium,
    "editorGroupHeader.tabsBackground": colors.backgroundPrimary,
    "tab.border": colors.backgroundPrimary,
    "tab.activeBackground": colors.backgroundActiveTab,
    "tab.activeBorder": colors.backgroundActiveTab, // Matched to background to hide
    "tab.unfocusedActiveBorder": colors.backgroundActiveTab, // Matched to background to hide
    "tab.inactiveBackground": colors.backgroundPrimary,

    // ---- Status Bar ----
    "statusBar.background": colors.backgroundPrimary,
    "statusBar.foreground": colors.greyLight,
    "statusBar.noFolderBackground": colors.backgroundPrimary,
    "statusBar.debuggingBackground": colors.debugBackground,
    "statusBar.debuggingForeground": colors.foregroundPrimary,
    "statusBarItem.remoteBackground": colors.accentPrimary,
    "statusBarItem.remoteForeground": colors.textBlack,
    "statusBarItem.remoteHoverBackground": colors.accentSecondary,
    "statusBarItem.remoteHoverForeground": colors.textBlack,

    // ---- Lists & Trees ----
    "list.activeSelectionBackground": colors.backgroundListSelection,
    "list.activeSelectionForeground": colors.accentPrimary,
    "list.inactiveSelectionBackground": colors.backgroundListSelection,
    "list.hoverBackground": colors.backgroundListHover,
    "list.highlightForeground": colors.accentPrimary,
    "list.errorForeground": colors.error,
    "tree.inactiveIndentGuidesStroke": colors.greyDarkAlpha30,
    "tree.indentGuidesStroke": colors.greyDarkAlpha60,

    // ---- Buttons & Badges ----
    "button.background": colors.accentPrimary,
    "button.foreground": colors.textBlack,
    "button.hoverBackground": colors.accentSecondary,
    "badge.background": colors.accentPrimary,
    "badge.foreground": colors.textBlack,

    // ---- Inputs & Controls ----
    "input.background": colors.backgroundSecondary,
    "inputOption.activeBorder": colors.accentPrimary,

    // ---- Focus, Borders & Selection ----
    focusBorder: colors.accentPrimary,
    contrastBorder: colors.transparent,
    contrastActiveBorder: colors.transparent, // Assuming you mean contrastActiveBorder, was contrastBorder in original JSON
    "list.focusOutline": colors.accentPrimary,
    "selection.background": colors.greySelection,

    // ---- Scrollbar ----
    "scrollbarSlider.background": colors.greyScrollbarAlpha80,
    "scrollbarSlider.hoverBackground": colors.greyScrollbar,

    // ---- Menus & Context Menus (New Section) ----
    "menu.background": colors.backgroundSecondary, // A slightly offset dark bg, like #1C1C1C
    "menu.foreground": colors.foregroundPrimary, // Your main text color: #ffe3eb
    "menu.separatorBackground": colors.greyDark, // For the lines between menu groups: #505050
    "menu.border": colors.backgroundListHover, // Subtle border around the menu: #282828 or colors.greyDark

    // Selection / Hover in Menus
    "menu.selectionBackground": colors.backgroundListSelection, // Your list selection bg: #232323
    // Alternative: colors.accentPrimaryAlpha3e for a Midas touch
    "menu.selectionForeground": colors.accentPrimary, // Selected item text: #FF8FA3
    "menu.selectionBorder": colors.transparent, // Optional: border around selected item, transparent if bg is distinct enough

    // Disabled Menu Items
    "menu.disabledForeground": colors.greyMedium, // Dimmed text for disabled items: #707070

    // ---- Quick Input / Command Palette (Often looks like a popup menu) ----
    "quickInput.background": colors.backgroundSecondary,
    "quickInput.foreground": colors.foregroundPrimary,
    "quickInputTitle.background": colors.backgroundPrimary, // If the quick input has a title bar part

    "quickInputList.focusBackground": colors.backgroundListSelection, // Item focus in command palette
    "quickInputList.focusForeground": colors.accentPrimary,
    "quickInputList.focusIconForeground": colors.accentPrimary, // For icons next to focused items

    // ---- Peek View (Go to Definition, Find All References - can look like popups) ----
    "peekView.border": colors.accentPrimary, // Border of the peek view window
    "peekViewEditor.background": colors.backgroundSecondary, // Background of the editor within the peek view
    "peekViewEditorGutter.background": colors.backgroundSecondary,
    "peekViewResult.background": colors.backgroundPrimary, // Background of the result list in peek view
    "peekViewResult.fileForeground": colors.greyLight,
    "peekViewResult.lineForeground": colors.foregroundPrimary,
    "peekViewResult.matchHighlightBackground": colors.accentSecondaryAlpha15,
    "peekViewResult.selectionBackground": colors.backgroundListSelection,
    "peekViewResult.selectionForeground": colors.accentPrimary,
    "peekViewTitle.background": colors.backgroundPrimary, // Background of the peek view title area
    "peekViewTitleDescription.foreground": colors.greyMedium,
    "peekViewTitleLabel.foreground": colors.foregroundPrimary,

    // In getUiColors()
    "gitDecoration.addedResourceForeground": colors.terminalGreen, // (Softer green for SCM)
    "gitDecoration.modifiedResourceForeground": colors.terminalBlue, // (Softer blue for SCM)
    "gitDecoration.deletedResourceForeground": colors.error,
    "gitDecoration.untrackedResourceForeground": colors.terminalYellow, // (Softer yellow for SCM)
    "gitDecoration.ignoredResourceForeground": colors.greyMedium,
    "gitDecoration.conflictingResourceForeground": colors.terminalMagenta, // (Softer magenta for SCM)
    "gitDecoration.submoduleResourceForeground": colors.greyLight,

    // ---- Miscellaneous UI ----
    "icon.foreground": colors.greyLight,
    "textLink.foreground": colors.accentPrimary,
    "textLink.activeForeground": colors.accentSecondary,
    "settings.modifiedItemIndicator": colors.accentPrimary,
  }
}
