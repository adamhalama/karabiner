import { KarabinerRules } from "../types.js";

export const minecraftRule: KarabinerRules = {
  description: "Backspace → Space in Minecraft",
  manipulators: [
    {
      type: "basic",
      from: { key_code: "delete_or_backspace" },
      to:   [{ key_code: "spacebar" }],
      conditions: [
        {
          type: "frontmost_application_if",
          file_paths: [
            "^/Users/mxstbr/Library/Application Support/minecraft/runtime/" +
            "java-runtime-gamma/mac-os-arm64/java-runtime-gamma/jre.bundle/" +
            "Contents/Home/bin/java$",
          ],
        },
      ],
    },
  ],
};
