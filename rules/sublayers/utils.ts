import { app, shell } from "../../utils.ts";

export const utils = {
  u: {
    t: app("qBittorrent"), 
    d: app("qBittorrent"), // download
    p: app("Preview"), // preview, PDF

    r: app("Windows App"), // remote desktop
    w: app("Windows App"), // windows

    i: app("IINA"), // IINA
    v: app("IINA"), // video

    // shell command for calling an llm scrip called ask-ollama.sh
    q: shell`zsh -i -c '$HOME/bin/ask-ollama.sh'`
  },
} as const;
