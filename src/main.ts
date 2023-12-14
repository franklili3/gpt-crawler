import { defaultConfig } from "../config.js";
//import { crawl, write } from "./core.js";

import { crawl, autoScroll } from "./core.js";

await crawl(defaultConfig);
//await write(defaultConfig);

await autoScroll(defaultConfig);