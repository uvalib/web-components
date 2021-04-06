// rollup.config.js
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload';
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
    serve('build'),
    livereload('build'),
    multiInput(),
    postcss({
      extract: false,
      inject: false,
      use: ['sass']
    }),
    resolve({
      browser: true,
      mainFields: ['module'],
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    terser()
  ]
};
