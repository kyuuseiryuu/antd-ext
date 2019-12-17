
export default {
  entry: 'src/index.ts',
  esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ],
};
