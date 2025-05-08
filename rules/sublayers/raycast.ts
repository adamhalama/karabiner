import { open } from "../../utils.ts";

export const raycast = {
  r: {
    p: open("raycast://extensions/jomifepe/bitwarden/search"), // passwords
    c: open("raycast://extensions/raycast/raycast/confetti"),
    a: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
    h: open("raycast://extensions/raycast/clipboard-history/clipboard-history"),
    s: open("raycast://extensions/raycast/screenshots/search-screenshots"),

    f: open("raycast://extensions/raycast/raycast-focus/start-focus-session"),
    e: open("raycast://extensions/raycast/raycast-focus/search-focus-categories"), //edit focus
  },
} as const;
