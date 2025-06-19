import type { ThemePalette } from "@/types"

export function getUiColors(palette: ThemePalette): Record<string, string> {
  return {
    // ---- Editor Core ----
    "editor.background": palette.backgroundPrimary,
    "editor.foreground": palette.foregroundPrimary,
    "editor.selectionBackground": palette.foregroundPrimaryAlpha3e,
    "editor.selectionHighlightBackground": palette.foregroundPrimaryAlpha3e,
    "editorLineNumber.foreground": palette.greyDark,
    "editorLineNumber.activeForeground": palette.foregroundPrimary,
    "editorWidget.background": palette.backgroundPrimary,
    "editor.lineHighlightBackground": palette.backgroundPrimary,
    "editor.lineHighlightBorder": palette.backgroundPrimary,

    // ---- Editor States & Diagnostics ----
    "editorWarning.foreground": palette.accentPrimary,
    "editorError.foreground": palette.error,

    // ---- Editor Gutter & Diff ----
    "editorGutter.addedBackground": palette.added,
    "editorGutter.deletedBackground": palette.error,
    "editorGutter.modifiedBackground": palette.accentPrimary,
    "diffEditor.insertedTextBackground": palette.accentSecondaryAlpha15,
    "diffEditor.insertedLineBackground": palette.accentSecondaryAlpha15,
    "diffEditor.removedTextBackground": palette.errorAlpha15,
    "diffEditor.removedLineBackground": palette.errorAlpha15,

    // ---- Editor Features ----
    "editorInlayHint.foreground": palette.greyInlayHint,
    "editorInlayHint.background": palette.backgroundSecondary,
    "editorBracketHighlight.foreground1": palette.greyLight,
    "editorBracketHighlight.foreground2": palette.greyLight,
    "editorBracketHighlight.foreground3": palette.greyLight,
    "editorBracketHighlight.foreground4": palette.greyLight,
    "editorBracketHighlight.foreground5": palette.greyLight,
    "editorBracketHighlight.foreground6": palette.greyLight,
    "editorBracketHighlight.unexpectedBracket.foreground": palette.error,
    "editorHoverWidget.background": palette.backgroundTertiary,
    "editorHoverWidget.border": palette.backgroundListHover,
    "editorOverviewRuler.border": palette.backgroundPrimary,

    // ---- Terminal / Console ----
    "terminal.background": palette.backgroundPrimary,
    "terminal.foreground": palette.foregroundPrimary,
    "terminalCursor.background": palette.backgroundPrimary,
    "terminalCursor.foreground": palette.accentPrimary,
    "terminal.selectionBackground": palette.foregroundPrimaryAlpha3e,
    // ANSI Colors
    "terminal.ansiBlack": palette.terminalBlack,
    "terminal.ansiBrightBlack": palette.terminalBrightBlack,
    "terminal.ansiRed": palette.terminalRed,
    "terminal.ansiBrightRed": palette.terminalBrightRed,
    "terminal.ansiGreen": palette.terminalGreen,
    "terminal.ansiBrightGreen": palette.terminalBrightGreen,
    "terminal.ansiYellow": palette.terminalYellow,
    "terminal.ansiBrightYellow": palette.terminalBrightYellow,
    "terminal.ansiBlue": palette.terminalBlue,
    "terminal.ansiBrightBlue": palette.terminalBrightBlue,
    "terminal.ansiMagenta": palette.terminalMagenta,
    "terminal.ansiBrightMagenta": palette.terminalBrightMagenta,
    "terminal.ansiCyan": palette.terminalCyan,
    "terminal.ansiBrightCyan": palette.terminalBrightCyan,
    "terminal.ansiWhite": palette.terminalWhite,
    "terminal.ansiBrightWhite": palette.terminalBrightWhite,

    // ---- Sidebar & Activity Bar ----
    "sideBar.background": palette.backgroundPrimary,
    "sideBarTitle.foreground": palette.greyLight,
    "sideBarSectionHeader.background": palette.backgroundPrimary,
    "sideBarSectionHeader.foreground": palette.greyLight,
    "activityBar.background": palette.backgroundPrimary,
    "activityBar.foreground": palette.greyLight,
    "activityBarBadge.background": palette.accentPrimary,
    "activityBarBadge.foreground": palette.textBlack,

    // ---- TitleBar, Tabs & Editor Groups ----
    "titleBar.activeBackground": palette.backgroundPrimary,
    "titleBar.inactiveBackground": palette.backgroundPrimary,
    "titleBar.activeForeground": palette.greySlightlyLighter,
    "titleBar.inactiveForeground": palette.greyMedium,
    "editorGroupHeader.tabsBackground": palette.backgroundPrimary,
    "tab.border": palette.backgroundPrimary,
    "tab.activeBackground": palette.backgroundActiveTab,
    "tab.activeBorder": palette.backgroundActiveTab,
    "tab.unfocusedActiveBorder": palette.backgroundActiveTab,
    "tab.inactiveBackground": palette.backgroundPrimary,

    // ---- Status Bar ----
    "statusBar.background": palette.backgroundPrimary,
    "statusBar.foreground": palette.greyLight,
    "statusBar.noFolderBackground": palette.backgroundPrimary,
    "statusBar.debuggingBackground": palette.debugBackground,
    "statusBar.debuggingForeground": palette.foregroundPrimary,
    "statusBarItem.remoteBackground": palette.accentPrimary,
    "statusBarItem.remoteForeground": palette.textBlack,
    "statusBarItem.remoteHoverBackground": palette.accentSecondary,
    "statusBarItem.remoteHoverForeground": palette.textBlack,

    // ---- Lists & Trees ----
    "list.activeSelectionBackground": palette.backgroundListSelection,
    "list.activeSelectionForeground": palette.accentPrimary,
    "list.inactiveSelectionBackground": palette.backgroundListSelection,
    "list.hoverBackground": palette.backgroundListHover,
    "list.highlightForeground": palette.accentPrimary,
    "list.errorForeground": palette.error,
    "tree.inactiveIndentGuidesStroke": palette.greyDarkAlpha30,
    "tree.indentGuidesStroke": palette.greyDarkAlpha60,

    // ---- Buttons & Badges ----
    "button.background": palette.accentPrimary,
    "button.foreground": palette.textBlack,
    "button.hoverBackground": palette.accentSecondary,
    "badge.background": palette.accentPrimary,
    "badge.foreground": palette.textBlack,

    // ---- Inputs & Controls ----
    "input.background": palette.backgroundSecondary,
    "inputOption.activeBorder": palette.accentPrimary,

    // ---- Focus, Borders & Selection ----
    focusBorder: palette.accentPrimary,
    contrastBorder: palette.transparent,
    contrastActiveBorder: palette.transparent,
    "list.focusOutline": palette.accentPrimary,
    "selection.background": palette.greySelection,

    // ---- Scrollbar ----
    "scrollbarSlider.background": palette.greyScrollbarAlpha80,
    "scrollbarSlider.hoverBackground": palette.greyScrollbar,

    // ---- Menus & Context Menus ----
    "menu.background": palette.backgroundSecondary,
    "menu.foreground": palette.foregroundPrimary,
    "menu.separatorBackground": palette.greyDark,
    "menu.border": palette.backgroundListHover,

    // Selection / Hover in Menus
    "menu.selectionBackground": palette.backgroundListSelection,
    "menu.selectionForeground": palette.accentPrimary,
    "menu.selectionBorder": palette.transparent,

    // Disabled Menu Items
    "menu.disabledForeground": palette.greyMedium,

    // ---- Quick Input / Command Palette ----
    "quickInput.background": palette.backgroundSecondary,
    "quickInput.foreground": palette.foregroundPrimary,
    "quickInputTitle.background": palette.backgroundPrimary,

    "quickInputList.focusBackground": palette.backgroundListSelection,
    "quickInputList.focusForeground": palette.accentPrimary,
    "quickInputList.focusIconForeground": palette.accentPrimary,

    // ---- Peek View ----
    "peekView.border": palette.accentPrimary,
    "peekViewEditor.background": palette.backgroundSecondary,
    "peekViewEditorGutter.background": palette.backgroundSecondary,
    "peekViewResult.background": palette.backgroundPrimary,
    "peekViewResult.fileForeground": palette.greyLight,
    "peekViewResult.lineForeground": palette.foregroundPrimary,
    "peekViewResult.matchHighlightBackground": palette.accentSecondaryAlpha15,
    "peekViewResult.selectionBackground": palette.backgroundListSelection,
    "peekViewResult.selectionForeground": palette.accentPrimary,
    "peekViewTitle.background": palette.backgroundPrimary,
    "peekViewTitleDescription.foreground": palette.greyMedium,
    "peekViewTitleLabel.foreground": palette.foregroundPrimary,

    "gitDecoration.addedResourceForeground": palette.terminalGreen,
    "gitDecoration.modifiedResourceForeground": palette.terminalBlue,
    "gitDecoration.deletedResourceForeground": palette.error,
    "gitDecoration.untrackedResourceForeground": palette.terminalYellow,
    "gitDecoration.ignoredResourceForeground": palette.greyMedium,
    "gitDecoration.conflictingResourceForeground": palette.terminalMagenta,
    "gitDecoration.submoduleResourceForeground": palette.greyLight,

    "icon.foreground": palette.greyLight,
    "textLink.foreground": palette.accentPrimary,
    "textLink.activeForeground": palette.accentSecondary,
    "settings.modifiedItemIndicator": palette.accentPrimary,
  }
}
