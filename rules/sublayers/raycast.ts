import { open } from "../../utils.ts";

export const raycast = {
  r: {
    p: open("raycast://extensions/jomifepe/bitwarden/search"),
    c: open("raycast://extensions/raycast/raycast/confetti"),
    e: open("raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"),
    a: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
    h: open("raycast://extensions/raycast/clipboard-history/clipboard-history"),
  },
} as const;
