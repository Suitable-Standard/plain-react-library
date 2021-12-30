# 基于 Rollup 构建组件库

- 支持 `umd, cjs, esm` format.
- 支持 `*.module.css`, 变量式访问 `.less`
- Auto tree-shaking

# 本地开发

- 使用 `npm link ../../your app/node_modules/react` 将此项目的版本与到使用此项目的 react 版本保持一致
- 在 `your app` 内运行 `npm link`
- 在此项目运行 `npm run watch`，然后在 `your app` 内即可随时共享到组件库的改动
