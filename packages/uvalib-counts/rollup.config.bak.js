// rollup.config.js
import multiInput from 'rollup-plugin-multi-input';
import resolve from 'rollup-plugin-node-resolve';
//import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: ['./uvalib-*.js'],

  output: [
    {
      name: 'uvalib-counts',
      dir: 'build',
      format: 'esm'
    },
  ],

  plugins: [
    multiInput(),
    postcss({
      extract: false,
      inject: false,
      use: ['sass']
    }),
    resolve()//,
//    commonjs(),
//    uglify()
  ]

};
