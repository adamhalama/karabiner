import { app, shell } from "../../utils.ts";

export const utils = {
  u: {
    t: app("qBittorrent"), 
    d: app("qBittorrent"), // download
    p: app("Preview"), // preview, PDF

    r: app("Windows App"), // remote desktop
    w: app("Windows App"), // windows

    i: app("IINA"), // IINA
    v: app("Surfshark"), // VPN

    // shell command for calling an llm scrip called ask-ollama.sh
    q: shell`zsh -i -c '$HOME/bin/ask-ollama.sh'`,
    c: shell`zsh -i -c '$HOME/bin/ask-ollama.sh'`, 

    s: shell`zsh -i -c '$HOME/bin/ask-ollama.sh start'`,
  },
} as const;
