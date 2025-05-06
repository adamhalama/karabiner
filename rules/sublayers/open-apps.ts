import { app, open } from "../../utils.ts";

export const openApps = {
  o: {
    e: app("Visual Studio Code"), // editor
    a: app("Cursor"), // cursor "ai"
    c: app("BusyCal"),
    b: app("Zen browser"),
    t: app("Ghostty"), // terminal
    p: app("Bitwarden"),
    f: app("Finder"),
    m: app("Spark Desktop"), // mail
    n: app("Obsidian"), // notes
    s: app("Spotify"),
    w: app("Texts"),
    r: app("Miro"), // Mi'r'o
    l: open("raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"),
  },
} as const;
