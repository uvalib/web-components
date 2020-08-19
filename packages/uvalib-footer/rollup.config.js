// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import livereload from 'rollup-plugin-livereload'

export default {
  input: './uvalib-footer.js',

  output: [
    {
      name: 'uvalib-footer',
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
    commonjs()//,
//    livereload()
  ]

};
