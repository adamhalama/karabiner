const movementKeys = {
  // basic movement
  h: { to: [{ key_code: "left_arrow"  }] },
  j: { to: [{ key_code: "down_arrow"  }] },
  k: { to: [{ key_code: "up_arrow"    }] },
  l: { to: [{ key_code: "right_arrow" }] },

  // start/end
  0: { to: [{ key_code: "left_arrow", modifiers: ["left_command"] }] },
  4: { to: [{ key_code: "right_arrow", modifiers: ["left_command"] }] },

  // word movement
  w: { to: [{ key_code: "right_arrow", modifiers: ["left_option"] }] },
  b: { to: [{ key_code: "left_arrow", modifiers: ["left_option"] }] },

  // delete
  x: { to: [{ key_code: "delete_or_backspace", modifiers: ["fn"] }] },

  // page movement
  d: { to: [{ key_code: "down_arrow", modifiers: ["left_command"] }] },
  u: { to: [{ key_code: "up_arrow", modifiers: ["left_command"] }] },

  // select
  m: { to: [{ key_code: "f", modifiers: ["right_control"] }] },                // MagicMove
  s: { to: [{ key_code: "j", modifiers: ["right_control"] }] },                // Scroll mode
  o: { to: [{ key_code: "right_arrow", modifiers: ["left_shift", "left_command"] }] }, // select-to-end
  i: { to: [{ key_code: "left_arrow", modifiers: ["left_shift", "left_command"] }] },  // select-to-start
} as const;

export const move = {
  v: { ...movementKeys },
  m: { ...movementKeys },
} as const;
