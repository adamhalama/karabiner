import { KarabinerRules } from "../types.js";

export const hyperKeyRule: KarabinerRules = {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
        {
            description: "Caps Lock -> Hyper Key",
            from: { key_code: "caps_lock", modifiers: { optional: ["any"] } },
            to: [{ set_variable: { name: "hyper", value: 1 } }],
            to_after_key_up: [{ set_variable: { name: "hyper", value: 0 } }],
            to_if_alone: [{ key_code: "escape" }],
            type: "basic",
        },
    ],
};
