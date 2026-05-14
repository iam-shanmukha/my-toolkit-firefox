# Toolkit (Firefox)

A Firefox port of [teja2495/my-toolkit-chrome](https://github.com/teja2495/my-toolkit-chrome) — all credit for the original features and design goes to [@teja2495](https://github.com/teja2495). This repo just adapts it to run on Firefox.

**Changes from the original:**
- `manifest.json` uses `background.scripts` instead of `background.service_worker` (Firefox MV3 requirement) and adds `browser_specific_settings` for the Gecko engine
- "Manage Extensions" opens `about:addons` instead of `chrome://extensions`
- `newtab-redirect.js` guards against `about:newtab` redirect loops

Everything else is identical to the original.

## Install

1. Clone or download this repo.
2. Visit `about:debugging` → **This Firefox** → **Load Temporary Add-on**.
3. Pick the `manifest.json` file inside this folder.

## Features

### Custom New Tab Page
A minimal new-tab page ([newtab.html](newtab.html)) with:
- A search box that supports multiple engines (Google, Perplexity, ChatGPT, Claude, Gemini, YouTube, Google AI Mode, Grok, Amazon, Google Maps, Reddit).
- Type a short alias prefix (e.g. `ppx ` for Perplexity, `gpt ` for ChatGPT, `amz ` for Amazon) to route the query to a specific engine.
- Inline bookmark search — start typing and matching bookmarks show up below the search box.
- One-click "Close Other Tabs" and "Manage Extensions" buttons.
- A friendly greeting at the top.

### Domain Blocker
Block time-wasting domains with a built-in cool-down. Toggle on/off and manage the list from the extension popup ([popup.html](popup.html)). When you hit a blocked domain it shows a countdown overlay before letting you through (configurable in [domain-blocker.js](domain-blocker.js)).

### "Close Other Tabs" Shortcut + Context Menu
- Right-click anywhere → **Close Other Tabs** (keeps the current tab and any pinned tabs).
- Keyboard shortcut: `Cmd/Ctrl + Shift + Y`.

Configured in [custom-context-menu-actions.js](custom-context-menu-actions.js).


### Text Selection Popup on X (Twitter)
[text-selection-popup.js](text-selection-popup.js) — select text in any editable field on x.com and a small popup appears with shortcuts to send the selection to Claude/ChatGPT for rewriting or refining.

### YouTube Tweaks

- **Player Watch Later button** ([youtube-player-buttons.js](youtube-player-buttons.js)) — adds a Watch Later button directly to the video player controls.
- **Auto-press `t` on watch pages** ([youtube-watch-t-keypress.js](youtube-watch-t-keypress.js)) — toggles theater mode automatically when a video loads.
- **Playlist quick-add buttons** ([youtube-playlist-buttons.js](youtube-playlist-buttons.js)) — quick add/remove from Watch Later on playlist pages.
- **Topbar shortcuts** ([youtube-topbar-buttons.js](youtube-topbar-buttons.js)) — Adds Watch Later and Playlists button in top header.
- **Homepage "Watch Later on title click"** ([youtube-homepage-watch-later.js](youtube-homepage-watch-later.js)) — adds videos to Watch Later when you click on the video title in homepage.
- **YouTube Music playlist filtering** ([yt-music-playlist-filtering.js](yt-music-playlist-filtering.js)) — hides specific playlists I don't want cluttering my library (edit the `PLAYLISTS_TO_HIDE` list to customize).

## Notes

This is a personal toolkit, so it's wired together for my workflow and styling. Pick what you like, drop what you don't. I'll keep building this around what I personally need.

## License

[MIT](LICENSE)
