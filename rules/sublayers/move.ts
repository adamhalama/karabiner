export const move = {
    v: {
      h: { to: [{ key_code: "left_arrow"  }] },
      j: { to: [{ key_code: "down_arrow"  }] },
      k: { to: [{ key_code: "up_arrow"    }] },
      l: { to: [{ key_code: "right_arrow" }] },
      0: { to: [{ key_code: "left_arrow", modifiers: ["left_command"] }] },
      4: { to: [{ key_code: "right_arrow", modifiers: ["left_command"] }] },
  
      m: { to: [{ key_code: "f", modifiers: ["right_control"] }] },                // MagicMove
      s: { to: [{ key_code: "j", modifiers: ["right_control"] }] },                // Scroll mode
      i: { to: [{ key_code: "i", modifiers: ["right_shift", "right_command"] }] }, // select-to-end
      
      d: { to: [{ key_code: "down_arrow", modifiers: ["left_command"] }] },
      u: { to: [{ key_code: "up_arrow", modifiers: ["left_command"] }] },
    },
  } as const;
  