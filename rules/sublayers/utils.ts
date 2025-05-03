import { app } from "../../utils.ts";

export const utils = {
  u: {
    t: app("qBittorrent"), 
    d: app("qBittorrent"), // download
    p: app("Preview"), // preview, PDF
  },
} as const;
