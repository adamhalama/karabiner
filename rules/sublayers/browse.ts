import { open } from "../../utils.ts";          // <- .ts extension!

export const browse = {
  b: {
    t: open("https://twitter.com"),
    p: open("https://mxstbr.com/cal"),
    y: open("https://news.ycombinator.com"),
    f: open("https://facebook.com"),
    r: open("https://reddit.com"),
    h: open("https://hashnode.com/draft"),
  },
} as const;
