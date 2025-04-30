import { KarabinerRules } from "../../types.ts";
import { createHyperSubLayers } from "../../utils.ts";

import { browse }    from "./browse.ts";
import { openApps }  from "./open-apps.ts";
import { comms }     from "./comms.ts";
import { system }    from "./system.ts";
import { move }      from "./move.ts";
import { raycast }   from "./raycast.ts";
import { utils }     from "./utils.ts";

/** Merge all sub-layers into a single object, then build the rules */
export const sublayerRules: KarabinerRules[] = createHyperSubLayers({
  ...browse,
  ...openApps,
  ...comms,
  ...system,
  ...move,
  ...raycast,
  ...utils
});
