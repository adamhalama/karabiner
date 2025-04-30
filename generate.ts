import fs from "node:fs";
import { rules }   from "./rules/index.ts";
import { devices } from "./rules/devices.ts";

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: { show_in_menu_bar: false },
      profiles: [
        {
          name: "Default",
          complex_modifications: { rules },
          devices,
          virtual_hid_keyboard: { keyboard_type_v2: "ansi", country_code: 0 },
        },
      ],
    },
    null,
    2,
  ),
);

console.log("✅  karabiner.json generated!");
