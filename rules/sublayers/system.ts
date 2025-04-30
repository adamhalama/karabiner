import { open } from "../../utils.ts";

export const system = {
  s: {
    u: { to: [{ key_code: "volume_increment" }] },
    j: { to: [{ key_code: "volume_decrement" }] },
    i: { to: [{ key_code: "display_brightness_increment" }] },
    k: { to: [{ key_code: "display_brightness_decrement" }] },
    l: { to: [{ key_code: "q", modifiers: ["right_control", "right_command"] }] },
    p: { to: [{ key_code: "play_or_pause" }] },
    semicolon: { to: [{ key_code: "fastforward" }] },
    e: open("raycast://extensions/thomas/elgato-key-light/toggle?launchType=background"),
    d: open("raycast://extensions/yakitrak/do-not-disturb/toggle?launchType=background"),
    t: open("raycast://extensions/raycast/system/toggle-system-appearance"),
    c: open("raycast://extensions/raycast/system/open-camera"),
    v: { to: [{ key_code: "spacebar", modifiers: ["left_option"] }] },   // voice
  },
} as const;
