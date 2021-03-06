import '@polymer/polymer/polymer-legacy.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import ('webfontloader').then((ex)=>{
  var loader = (window.WebFont)? window.WebFont: ex.default;
  loader.load({
    custom: {
      families: ['uvalib-custom-icons','uvalib-custom-academicons']
    }
  });
});



const template = html`
<dom-module id="uvalib-icons">
  <template>
    <style>

      @font-face {
          font-family: 'uvalib-custom-icons';
          src: url('https://static.lib.virginia.edu/files/fonts/uvalib-icon-font-03222019.woff2') format('woff2'),
               url('https://static.lib.virginia.edu/files/fonts/uvalib-icon-font-03222019.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }

      @font-face {
            font-family: 'uvalib-custom-academicons';
            src: url('https://static.lib.virginia.edu/files/fonts/academicons.woff2') format('woff2'),
                 url('https://static.lib.virginia.edu/files/fonts/academicons.woff') format('woff');
            font-weight: normal;
            font-style: normal;
      }

      /*MAPPING*/
      [class^="uvalib-icon-"],
      [class*=" uvalib-icon-"] {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'uvalib-custom-icons' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        padding-right: 5px;

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }


      /* .uvalib-icon-ORCIDiD_iconvector:before {
        content: "\\e900";
        color: #A6CE39 !important;
      } */
      .uvalib-icon-language:before {
        content: "\\e894";
      }

      .uvalib-icon-o-globe:before {
        content: "\\e894";
      }

      .uvalib-icon-search:before {
        content: "\\f002";
      }

      .uvalib-icon-envelope-o:before {
        content: "\\f003";
      }

      .uvalib-icon-user:before {
        content: "\\f007";
      }

      .uvalib-icon-close:before {
        content: "\\f00d";
      }

      .uvalib-icon-remove:before {
        content: "\\f00d";
      }

      .uvalib-icon-times:before {
        content: "\\f00d";
      }

      .uvalib-icon-home:before {
        content: "\\f015";
      }

      .uvalib-icon-clock-o:before {
        content: "\\f017";
      }

      .uvalib-icon-book:before {
        content: "\\f02d";
      }

      .uvalib-icon-map-marker:before {
        content: "\\f041";
      }

      .uvalib-icon-chevron-left:before {
        content: "\\f053";
      }

      .uvalib-icon-chevron-right:before {
        content: "\\f054";
      }

      .uvalib-icon-exclamation-circle:before {
        content: "\\f06a";
      }

      .uvalib-icon-exclamation-triangle:before {
        content: "\\f071";
      }

      .uvalib-icon-warning:before {
        content: "\\f071";
      }

      .uvalib-icon-calendar:before {
        content: "\\f073";
      }

      .uvalib-icon-twitter-square:before {
        content: "\\f081";
      }

      .uvalib-icon-facebook-square:before {
        content: "\\f082";
      }

      .uvalib-icon-comments:before {
        content: "\\f086";
      }

      .uvalib-icon-linkedin-square:before {
        content: "\\f08c";
      }

      .uvalib-icon-phone:before {
        content: "\\f095";
      }

      .uvalib-icon-phone-square:before {
        content: "\\f098";
      }

      .uvalib-icon-twitter:before {
        content: "\\f099";
      }

      .uvalib-icon-globe:before {
        content: "\\f0ac";
      }

      .uvalib-icon-cloud:before {
        content: "\\f0c2";
      }

      .uvalib-icon-bars:before {
        content: "\\f0c9";
      }

      .uvalib-icon-navicon:before {
        content: "\\f0c9";
      }

      .uvalib-icon-reorder:before {
        content: "\\f0c9";
      }

      .uvalib-icon-pinterest-square:before {
        content: "\\f0d3";
      }

      .uvalib-icon-caret-down:before {
        content: "\\f0d7";
      }

      .uvalib-icon-caret-up:before {
        content: "\\f0d8";
      }

      .uvalib-icon-caret-left:before {
        content: "\\f0d9";
      }

      .uvalib-icon-caret-right:before {
        content: "\\f0da";
      }

      .uvalib-icon-envelope:before {
        content: "\\f0e0";
      }

      .uvalib-icon-bell:before {
        content: "\\f0f3";
      }

      .uvalib-icon-angle-double-up:before {
        content: "\\f102";
      }

      .uvalib-icon-angle-left:before {
        content: "\\f104";
      }

      .uvalib-icon-angle-right:before {
        content: "\\f105";
      }

      .uvalib-icon-angle-up:before {
        content: "\\f106";
      }

      .uvalib-icon-angle-down:before {
        content: "\\f107";
      }

      .uvalib-icon-circle-o:before {
        content: "\\f10c";
      }

      .uvalib-icon-circle:before {
        content: "\\f111";
      }

      .uvalib-icon-instagram:before {
        content: "\\f16d";
      }

      .uvalib-icon-flickr:before {
        content: "\\f16e";
      }

      .uvalib-icon-envelope-square:before {
        content: "\\f199";
      }

      .uvalib-icon-bank:before {
        content: "\\f19c";
      }

      .uvalib-icon-institution:before {
        content: "\\f19c";
      }

      .uvalib-icon-university:before {
        content: "\\f19c";
      }

      .uvalib-icon-graduation-cap:before {
        content: "\\f19d";
      }

      .uvalib-icon-mortar-board:before {
        content: "\\f19d";
      }

      .uvalib-icon-cc:before {
        content: "\\f20a";
      }

      .uvalib-icon-wheelchair-alt:before {
        content: "\\f29b";
      }

      .uvalib-icon-blind:before {
        content: "\\f29d";
      }

      .uvalib-icon-audio-description:before {
        content: "\\f29e";
      }

      .uvalib-icon-braille:before {
        content: "\\f2a1";
      }

      .uvalib-icon-assistive-listening-systems:before {
        content: "\\f2a2";
      }

      .uvalib-icon-american-sign-language-interpreting:before {
        content: "\\f2a3";
      }

      .uvalib-icon-asl-interpreting:before {
        content: "\\f2a3";
      }

      .uvalib-icon-deaf:before {
        content: "\\f2a4";
      }

      .uvalib-icon-deafness:before {
        content: "\\f2a4";
      }

      .uvalib-icon-hard-of-hearing:before {
        content: "\\f2a4";
      }
    </style>
  </template>
</dom-module>
`;

template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
