// rollup.config.js
import multiInput from 'rollup-plugin-multi-input';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';

export default {
  input: ['./uvalib-alerts*.js'],
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    multiInput({relative:"./"}),
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
