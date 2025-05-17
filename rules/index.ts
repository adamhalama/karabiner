/**
 * Export a single array `rules` assembled from the individual files.
 * The order here is the final order in karabiner.json.
 */
export { hyperKeyRule } from "./hyperkey.ts";
export { minecraftRule }  from "./minecraft.ts";

/** Gather them */
import { hyperKeyRule } from "./hyperkey.ts";
import { sublayerRules } from "./sublayers/index.ts";
import { minecraftRule } from "./minecraft.ts";

export const rules = [
  hyperKeyRule,
  ...sublayerRules,
//   minecraftRule,
];
