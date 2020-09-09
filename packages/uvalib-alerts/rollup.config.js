// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';

export default {
  input: 'uvalib-alerts.js',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
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
    terser(),
    babel({ babelHelpers: 'bundled' })
  ]
};
