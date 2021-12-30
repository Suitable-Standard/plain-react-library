import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

const globals = {
  react: "React",
  lodash: "_",
};

/** @type { import('rollup').RollupOptions } */
export default {
  input: "src/index.ts",

  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      globals,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      globals,
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "PlainReactLibrary",
      sourcemap: true,
      globals,
    },
  ],

  plugins: [
    postcss({
      // sourceMap: true,
      extract: true,
      minimize: true,

      // 处理 .module.css
      modules: true,
      use: {
        // Use less
        less: {
          javascriptEnabled: true,
        },
      },
    }),
    peerDepsExternal(),
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
    terser(),
  ],

  external: ["react", "lodash"],
};
