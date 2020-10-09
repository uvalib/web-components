// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import multiInput from 'rollup-plugin-multi-input';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'uvalib-*.js',
  output: {
    dir: 'build',
    format: 'esm'
  },
  plugins: [
    multiInput(),
    postcss({
      extract: false,
      inject: false,
      use: ['sass']
    }),
    resolve({
      mainFields: ['module'],
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    terser()
  ]
};
