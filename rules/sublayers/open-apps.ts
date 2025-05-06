import { app, open } from "../../utils.ts";

export const openApps = {
  o: {
    b: app("Zen browser"),
    e: app("Visual Studio Code"), // editor
    a: app("Cursor"), // cursor "ai"
    t: app("Ghostty"), // terminal

    c: app("BusyCal"),
    m: app("Spark Desktop"), // mail
    n: app("Obsidian"), // notes
    p: app("Bitwarden"),
    f: app("Finder"),

    s: app("Spotify"),
    w: app("Texts"),
    r: app("Miro"), // Mi'r'o
    l: open("raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"),
  },
} as const;
