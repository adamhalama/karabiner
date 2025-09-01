import { app } from "../../utils.ts";

export const comms = {
  c: {
    m: app("Messenger"),
    w: app("Texts"),          // WhatsApp → Texts
    // i: app("Texts"),          // Messages  → Texts
    d: app("legcord"),        // Discord
    t: app("Microsoft Teams"),
    s: app("Slack"),
    i: app("Messages"),
  },
} as const;
