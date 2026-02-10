import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["mod.ts", "enums/index.ts"],
  dts: true,
});
