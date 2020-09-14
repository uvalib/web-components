// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'uvalib-button.js',
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
    terser()
  ]
};
