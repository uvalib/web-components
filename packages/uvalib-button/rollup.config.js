// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './uvalib-button.js',

  output: [
    {
      name: 'uvalib-button',
      dir: 'dist',
      format: 'esm'
    },
  ],

  plugins: [
    postcss({
      extract: false,
      inject: false,
      minimize: true,
      use: ['sass']
    }),
    resolve(),
    commonjs()
  ]

};
