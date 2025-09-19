import { app, open } from "../../utils.ts";

export const openApps = {
  o: {
    b: app("Zen"),
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
    l: app("Notion"),
    i: app("Notion"),
  },
} as const;
