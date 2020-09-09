// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: './uvalib-image.js',

  output: [
    {
      name: 'uvalib-image',
      dir: 'dist',
      format: 'esm'
    },
  ],

  plugins: [
    postcss({
      extract: false,
      inject: false,
      use: ['sass']
    }),
    resolve(),
    commonjs(),
    uglify()
  ]

};
