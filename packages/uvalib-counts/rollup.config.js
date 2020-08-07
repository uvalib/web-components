// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'uvalib-counts.js',
  output: {
    dir: 'build',
    format: 'esm'
  },
  plugins: [
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
