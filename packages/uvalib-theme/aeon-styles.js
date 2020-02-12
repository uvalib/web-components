import '@polymer/polymer/polymer-legacy.js';
import './color.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';
const template = html`
<custom-style>
  <style is="custom-style" include="uvalib-theme">
    uvalib-footer {
      margin-top: 100px;
    }
  </style>
</custom-style>`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
