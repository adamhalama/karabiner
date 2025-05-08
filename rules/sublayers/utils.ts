import { app } from "../../utils.ts";

export const utils = {
  u: {
    t: app("qBittorrent"), 
    d: app("qBittorrent"), // download
    p: app("Preview"), // preview, PDF

    r: app("Windows App"), // remote desktop
    w: app("Windows App"), // windows

    i: app("IINA"), // IINA
    v: app("IINA"), // video
  },
} as const;
