import { app, open } from "../../utils.ts";

export const openApps = {
  o: {
    e: app("Visual Studio Code"),
    c: app("BusyCal"),
    b: app("Zen browser"),
    t: app("Ghostty"),
    p: app("Bitwarden"),
    f: app("Finder"),
    m: app("Spark Desktop"),
    n: app("Obsidian"),
    s: app("Spotify"),
    w: open("Texts"),
    l: open("raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"),
  },
} as const;
