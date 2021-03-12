import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';

const extensions = ['.js', '.ts'];

const babelPlugin = babel({
  exclude: ['node_modules/**', './history/**'],
  babelHelpers: 'runtime',
  extensions,
});

const resolve = nodeResolve({
  extensions,
  modulesOnly: true,
});

export default [
  {
    input: './main.ts',
    output: {
      file: './dist/regex-go.js',
      format: 'esm',
    },
    plugins: [resolve, babelPlugin, filesize()],
  },
  {
    input: './main.ts',
    output: {
      file: './dist/regex-go.min.js',
      format: 'esm',
    },
    plugins: [resolve, babelPlugin, terser(), filesize()],
  },
  {
    input: './main.ts',
    output: {
      name: 'regexGo',
      format: 'umd',
      file: './dist/regex-go.umd.js',
      exports: "named",
    },
    plugins: [resolve, babelPlugin, filesize()],
  },
  {
    input: './main.ts',
    output: {
      name: 'regexGo',
      format: 'umd',
      file: './dist/regex-go.umd.min.js',
      exports: "named",
    },
    plugins: [resolve, babelPlugin, terser(), filesize()],
  },
];
