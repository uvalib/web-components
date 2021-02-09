var e,t;(e=window.document).getElementById("livereloadscript")||((t=e.createElement("script")).async=1,t.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t));import{h as i,P as n,D as o,t as s,a,m as r}from"./moment-1766bd71.js";import"./tslib.es6-f3787ca5.js";import{f as l}from"./index.esm-99e5cbb9.js";import{C as d,c}from"./lit-element-d43a95d8.js";import{T as h,D as u,a as m,E as A,C as p}from"./vaadin-element-mixin-8eb748fe.js";import"./custom-style-9c9b575c.js";import{T as v}from"./vaadin-text-field-9dd12529.js";import{F as _,P as b,m as y}from"./polymer-legacy-11cedaad.js";import"./gesture-event-listeners-027a7567.js";import{a as g}from"./render-status-3940c337.js";import{I as f}from"./iron-resizable-behavior-751f0f18.js";import"./_commonjsHelpers-1b3b9e2f.js";let w=0;const E={},x=(e,t,i)=>{const n=i&&i.moduleId||"custom-style-module-"+w++;Array.isArray(t)||(t=t?[t]:[]),t.forEach(e=>{if(!(e instanceof d))throw new Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!E[e]){const t=document.createElement("dom-module");t.innerHTML=`\n        <template>\n          <style>${e.toString()}</style>\n        </template>\n      `;const i="custom-style-module-"+w++;t.register(i),E[e]=i}});const o=document.createElement("dom-module");if(e){const t=window.customElements&&window.customElements.get(e);t&&t.hasOwnProperty("__finalized")&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`),o.setAttribute("theme-for",e)}const s=i&&i.include||[];o.innerHTML=`\n    <template>\n      ${t.map(e=>`<style include=${E[e]}></style>`)}\n      ${s.map(e=>`<style include=${e}></style>`)}\n    </template>\n  `,o.register(n)},C=document.createElement("template");C.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(C.content);const k=document.createElement("template");k.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(k.content),x("vaadin-item",c`
    :host {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      padding: 0.5em 1em;
      min-height: var(--lumo-size-m);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
    }

    /* Checkmark */
    :host([tabindex])::before {
      display: var(--_lumo-item-selected-icon-display, none);
      content: var(--lumo-icons-checkmark);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      font-weight: normal;
      width: 1em;
      height: 1em;
      margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
      color: var(--lumo-primary-text-color);
      flex: none;
      opacity: 0;
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
    }

    :host([selected])::before {
      opacity: 1;
    }

    :host([active]:not([selected]))::before {
      transform: scale(0.8);
      opacity: 0;
      transition-duration: 0s;
    }

    [part='content'] {
      flex: auto;
    }

    /* Disabled */
    :host([disabled]) {
      color: var(--lumo-disabled-text-color);
      cursor: default;
      pointer-events: none;
    }

    /* Slotted icons */
    :host ::slotted(iron-icon) {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-item"});
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const I=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>this._setFocused(!1),!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class S extends(I(h(u(n)))){static get template(){return i`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}static get version(){return"3.0.0"}constructor(){super(),this.value}}customElements.define(S.is,S),x("vaadin-list-box",c`
    :host {
      -webkit-tap-highlight-color: transparent;
      --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
    }

    /* Normal item */
    [part='items'] ::slotted(vaadin-item) {
      -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
      cursor: default;
    }

    [part='items'] ::slotted(vaadin-item) {
      outline: none;
      border-radius: var(--lumo-border-radius);
      padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
    }

    /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
    [part='items'] ::slotted(vaadin-item)::before {
      display: var(--_lumo-item-selected-icon-display);
    }

    /* Hovered item */
    /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
    [part='items'] ::slotted(vaadin-item:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    /* Focused item */
    [part='items'] ::slotted([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    @media (pointer: coarse) {
      [part='items'] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: transparent;
      }

      [part='items'] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: none;
      }
    }

    /* Dividers */
    [part='items'] ::slotted(hr) {
      height: 1px;
      border: 0;
      padding: 0;
      margin: var(--lumo-space-s) var(--lumo-border-radius);
      background-color: var(--lumo-contrast-10pct);
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
    }
  `,{moduleId:"lumo-list-box"});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const L=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new _(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,i,n){if(!n&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(i);const n=e[i];e.forEach(e=>e.selected=e===n),n&&!n.disabled&&this._scrollToItem(i)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let i;t&&!t.disabled&&(i=this.items.indexOf(t))>=0&&(this.selected=i)}_searchKey(e,t){this._searchReset=o.debounce(this._searchReset,s.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());const i=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(i,1,e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key.replace(/^Arrow/,""),i=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(i,t);return void(e>=0&&this._focus(e))}let n,o;const s=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(o=-s,n=i-s):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(o=s,n=i+s):"Home"===t?(o=1,n=0):"End"===t&&(o=-1,n=this.items.length-1),n=this._getAvailableIndex(n,o,e=>!(e.disabled||this._isItemHidden(e))),n>=0&&(this._focus(n),e.preventDefault())}_getAvailableIndex(e,t,i){const n=this.items.length;for(let o=0;"number"==typeof e&&o<n;o++,e+=t||1){e<0?e=n-1:e>=n&&(e=0);if(i(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);const t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){const t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){const t=this.items[e];if(!t)return;const i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],n=this._scrollerElement.getBoundingClientRect(),o=(this.items[e+1]||t).getBoundingClientRect(),s=(this.items[e-1]||t).getBoundingClientRect();let a=0;!this._isRTL&&o[i[1]]>=n[i[1]]||this._isRTL&&o[i[1]]<=n[i[1]]?a=o[i[1]]-n[i[1]]:(!this._isRTL&&s[i[0]]<=n[i[0]]||this._isRTL&&s[i[0]]>=n[i[0]])&&(a=s[i[0]]-n[i[0]]),this._scroll(a)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=m.detectScrollType(),i=m.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;m.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,i)}}}
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,T=e=>class extends(L(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,i,n){if(!e||!t)return;if(n){const t=n.map(t=>e[t]);e.forEach(e=>e.selected=-1!==t.indexOf(e))}const o=this.selectedValues.slice(-1)[0];o&&!o.disabled&&this._scrollToItem(o)}_onMultipleClick(e){const t=this._filterItems(e.composedPath())[0],i=t&&!t.disabled?this.items.indexOf(t):-1;i<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(i)?this.selectedValues=this.selectedValues.filter(e=>e!==i):this.selectedValues=this.selectedValues.concat(i))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(e=>e.selected=!1)),e&&!t&&void 0!==this.selected&&(this.push("selectedValues",this.selected),this.selected=void 0)}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class B extends(A(T(h(n)))){static get template(){return i`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-list-box"}static get version(){return"2.0.0"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof n||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(B.is,B),x("vaadin-select",c`
    :host {
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }

    [selected] {
      padding-left: 0;
      padding-right: 0;
      flex: auto;
    }

    :host([theme~='small']) [selected] {
      padding: 0;
      min-height: var(--lumo-size-s);
    }

    :host([theme~='align-left']) [selected] {
      text-align: left;
    }

    :host([theme~='align-right']) [selected] {
      text-align: right;
    }

    :host([theme~='align-center']) [selected] {
      text-align: center;
    }

    [part='toggle-button']::before {
      content: var(--lumo-icons-dropdown);
    }

    /* Highlight the toggle button when hovering over the entire component */
    :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
      color: var(--lumo-contrast-80pct);
    }
  `,{include:["lumo-field-button"],moduleId:"lumo-select"}),x("vaadin-select-text-field",c`
    :host([theme~='align-center']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

    :host([theme~='align-center']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

    [part='input-field'] {
      cursor: default;
    }

    [part='input-field'] ::slotted([part='value']) {
      display: flex;
    }

    [part='input-field']:focus {
      outline: none;
    }

    /* RTL specific styles */
    :host([theme~='align-left'][dir='rtl']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([dir='rtl']) ::slotted([part~='value']),
    :host([theme~='align-right'][dir='rtl']) ::slotted([part~='value']) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }
  `,{moduleId:"lumo-select-text-field"}),x("vaadin-select-overlay",c`
    :host {
      --_lumo-item-selected-icon-display: block;
    }

    :host([bottom-aligned]) {
      justify-content: flex-end;
    }

    [part~='overlay'] {
      min-width: var(--vaadin-select-text-field-width);
    }

    /* Small viewport adjustment */
    :host([phone]) {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch;
      justify-content: flex-end;
    }

    :host([theme~='align-left']) {
      text-align: left;
    }

    :host([theme~='align-right']) {
      text-align: right;
    }

    :host([theme~='align-center']) {
      text-align: center;
    }
  `,{include:["lumo-menu-overlay"],moduleId:"lumo-select-overlay"}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
b({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});const M=Element.prototype,N=M.matches||M.matchesSelector||M.mozMatchesSelector||M.msMatchesSelector||M.oMatchesSelector||M.webkitMatchesSelector;
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let P=0;const R={},O=e=>{P++;const t="vaadin-overlay-content-"+P,i=document.createElement("template"),n=document.createElement("style");n.textContent=":host { display: block; }"+e,i.content.appendChild(n),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(i,t);const o=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(i.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(o.is,o),R[e]=t,t};class z extends(h(u(n))){static get template(){return i`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new _(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),g(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const i=`__${e}Handler`,n=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",n),delete this[i])};this[i]=n,this.addEventListener("animationend",n)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");const e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");const e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof z&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===z.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),z.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=z.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=a(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const i=e._templateRoot||(e._templateRoot=e.getRootNode());if(i!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(i.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(i.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"),t)if(e){const e=(e=>{const t=R[e]||O(e);return document.createElement(t)})(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,n){e!==t?this.template=void 0:i!==n&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,i,n,o,s){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const a=this._oldOwner!==i||this._oldModel!==n;this._oldModel=n,this._oldOwner=i;const r=this._oldInstanceProps!==o||this._oldTemplate!==e;this._oldInstanceProps=o,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==s;if(this._oldOpened=s,e&&r)this._stampOverlayTemplate(e,o);else if(t&&(l||d||a)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);s&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const i=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(i)),(t+=e)>=i.length?t=0:t<0&&(t=i.length-1),i[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return N.call(e,"input, select, textarea, button, object")?N.call(e,":not([disabled])"):N.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&N.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const i=e,n=this._normalizedTabIndex(i);let o,s=n>0;if(n>=0&&t.push(i),o="slot"===i.localName?i.assignedNodes({flatten:!0}):(i.shadowRoot||i).children,o)for(let e=0;e<o.length;e++)s=this._collectTabbableNodes(o[e],t)||s;return s}static _isVisible(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)}static _sortByTabIndex(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,i)),o=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(n,o)}static _mergeSortByTabIndex(e,t){const i=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}static _hasLowerTabOrder(e,t){const i=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===i||0===n?n>i:i>n}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=z.__attachedInstances.filter(e=>e!==this).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(z.is,z),
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
x("vaadin-select-overlay",c`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class D extends z{static get is(){return"vaadin-select-overlay"}}customElements.define(D.is,D);
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class F extends v{static get is(){return"vaadin-select-text-field"}get focusElement(){return this.shadowRoot.querySelector("[part=input-field]")}get inputElement(){return this.shadowRoot.querySelector("input")}}customElements.define(F.is,F);
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const j=document.createElement("template");j.innerHTML="\n  <style>\n    @font-face {\n      font-family: \"vaadin-select-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(j.content);class Q extends(A(p(h(y(f,n))))){static get template(){return i`
      <style>
        :host {
          display: inline-block;
        }

        vaadin-select-text-field {
          width: 100%;
          min-width: 0;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='toggle-button'] {
          font-family: 'vaadin-select-icons';
        }

        [part='toggle-button']::before {
          content: '\\e900';
        }
      </style>

      <vaadin-select-text-field
        placeholder="[[placeholder]]"
        label="[[label]]"
        required="[[required]]"
        invalid="[[invalid]]"
        error-message="[[errorMessage]]"
        readonly$="[[readonly]]"
        helper-text="[[helperText]]"
        theme$="[[theme]]"
      >
        <slot name="prefix" slot="prefix"></slot>
        <slot name="helper" slot="helper">[[helperText]]</slot>
        <div part="value"></div>
        <div part="toggle-button" slot="suffix" role="button" aria-haspopup="listbox" aria-label="Toggle"></div>
      </vaadin-select-text-field>
      <vaadin-select-overlay
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[theme]]"
      ></vaadin-select-overlay>

      <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
    `}static get is(){return"vaadin-select"}static get version(){return"3.0.0"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,errorMessage:{type:String,value:""},label:{type:String},value:{type:String,value:"",notify:!0,observer:"_valueChanged"},required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String},helperText:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement, _inputElement)","_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)"]}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._valueElement=this.shadowRoot.querySelector('[part="value"]'),this._toggleElement=this.shadowRoot.querySelector('[part="toggle-button"]'),this._nativeInput=this.focusElement.shadowRoot.querySelector("input"),this._nativeInput.setAttribute("aria-hidden",!0),this._nativeInput.setAttribute("tabindex",-1),this._nativeInput.style.pointerEvents="none",this.focusElement.addEventListener("click",()=>this.opened=!this.readonly),this.focusElement.addEventListener("keydown",e=>this._onKeyDown(e)),this._observer=new _(this,e=>this._setTemplateFromNodes(e.addedNodes)),this._observer.flush()}_setTemplateFromNodes(e){const t=Array.from(e).filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate;this._overlayElement.template=this._contentTemplate=t,this._setForwardHostProps()}_setForwardHostProps(){if(this._overlayElement.content){const e=this._overlayElement._instance&&this._overlayElement._instance.forwardHostProp;this._overlayElement._instance&&(this._overlayElement._instance.forwardHostProp=(...t)=>{e.apply(this._overlayElement._instance,t),setTimeout(()=>{this._updateValueSlot()})},this._assignMenuElement())}}render(){this._overlayElement.render(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items)}_removeNewRendererOrTemplate(e,t,i,n){e!==t?this._contentTemplate=void 0:i!==n&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i){if(i){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for select content");this._oldTemplate=e,this._oldRenderer=t,t&&(i.setProperties({owner:this,renderer:t}),this.render(),i.content.firstChild&&this._assignMenuElement())}}_assignMenuElement(){this._menuElement=Array.from(this._overlayElement.content.children).filter(e=>"style"!==e.localName)[0],this._menuElement&&(this._menuElement.addEventListener("items-changed",()=>{this._items=this._menuElement.items,this._items.forEach(e=>e.setAttribute("role","option"))}),this._menuElement.addEventListener("selected-changed",()=>this._updateValueSlot()),this._menuElement.addEventListener("keydown",e=>this._onKeyDownInside(e)),this._menuElement.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),this._menuElement.setAttribute("role","listbox"))}get focusElement(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}_requiredChanged(e){this.setAttribute("aria-required",e)}_valueChanged(e,t){""===e?this.focusElement.removeAttribute("has-value"):this.focusElement.setAttribute("has-value",""),""===e&&void 0===t||this.validate()}_onKeyDown(e){if(!this.readonly&&!this.opened)if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key))e.preventDefault(),this.opened=!0;else if(/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length){const t=this._menuElement.selected,i=void 0!==t?t:-1,n=this._menuElement._searchKey(i,e.key);n>=0&&(this.__userInteraction=!0,this._updateSelectedItem(this._items[n].value,this._items))}}_onKeyDownInside(e){/^(Tab)$/.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly)return void(this.opened=!1);this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring"),this._menuElement.focus(),this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0)}else t&&(this._phone?this._setFocused(!1):(this.focusElement.focus(),this._openedWithFocusRing&&this.focusElement.setAttribute("focus-ring","")),this.validate(),window.removeEventListener("scroll",this._boundSetPosition,!0))}_hasContent(e){return!!e&&Boolean(e.hasAttribute("label")?e.getAttribute("label"):e.textContent.trim()||e.children.length)}_attachSelectedItem(e){if(!e)return;let t;e.hasAttribute("label")?(t=document.createElement("vaadin-item"),t.textContent=e.getAttribute("label")):t=e.cloneNode(!0),t._sourceItem=e,t.removeAttribute("tabindex"),t.removeAttribute("role"),this._valueElement.appendChild(t),t.selected=!0}_updateAriaExpanded(e,t,i){t&&t.setAttribute("aria-expanded",e),i&&i.focusElement&&i.focusElement.setAttribute("aria-expanded",e)}_updateValueSlot(){this.opened=!1,this._valueElement.innerHTML="";const e=this._items[this._menuElement.selected],t=this._hasContent(e);this._valueElement.slot=t?"input":"",this._attachSelectedItem(e),!this._valueChanging&&e&&(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging)}_updateSelectedItem(e,t){t&&(this._menuElement.selected=t.reduce((t,i,n)=>void 0===t&&i.value===e?n:t,void 0),this._selectedChanging||(this._valueChanging=!0,this._updateValueSlot(),delete this._valueChanging))}_setFocused(e){super._setFocused(this.opened||e),this.focusElement._setFocused(this.hasAttribute("focused")),!this.hasAttribute("focused")&&this.validate()}_setPosition(){const e=this._inputElement.shadowRoot.querySelector('[part~="input-field"]').getBoundingClientRect(),t=Math.min(window.innerHeight,document.documentElement.clientHeight),i=e.top>(t-e.height)/2;"rtl"===this.getAttribute("dir")?this._overlayElement.style.right=document.documentElement.clientWidth-e.right+"px":this._overlayElement.style.left=e.left+"px",i?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=t-e.bottom+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=e.top+"px"),this._overlayElement.updateStyles({"--vaadin-select-text-field-width":e.width+"px"})}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}}customElements.define(Q.is,Q),import("./vaadin-number-field-ab7580d0.js"),import("./vaadin-button-ac4bc2bf.js"),import("./iron-icon-ba7137fa.js"),import("./vaadin-icons-70c04cef.js"),import("./iron-localstorage-0c291fa2.js"),import("./paper-spinner-lite-0039a130.js"),import("./uvalib-model-realtime-database-517a1df4.js");window.customElements.define("uvalib-counter",class extends n{static get template(){return i`
      <style>
        :host {
          display: block;
        }
        .time {
          font-style: italic;
          font-size: smaller;
          font-weight: lighter;
        }
        #container {
          padding: 15px;
        }
        .recount {
          /*background-color: #FEF6C8;*/
        }

        .lineCount {
          font-size: xxx-large;
        }
        .lineCount::part(increase-button) {
          background-color: green;
          color: white
        }
        .lineCount::part(decrease-button) {
          background-color: red;
          color: white
        }
      </style>
<div id="container" class$="[[_isRecount(recount)]]">
      <uvalib-account-auth id="auth" auto userkey="[[_getUserKey()]]"></uvalib-account-auth>
   
<iron-localstorage name="my-selected-location" value="{{selectedLocation}}"
on-iron-localstorage-load-empty="_initSelectedLocation"></iron-localstorage>     
<vaadin-select title="Select the location that you are tracking" value="{{selectedLocation}}" label="Location">
  <template>
    <vaadin-list-box>
      <template is="dom-repeat" items="[[_filter(libraries,type)]]" as="location">
        <vaadin-item value="[[location.key]]">[[location.name]]</vaadin-item>
      </template>
    </vaadin-list-box>
  </template>
</vaadin-select>
<vaadin-button title="Find the closest location" on-click="_locateMe" hidden$="[[!_locationAvailable()]]">
  <iron-icon icon="vaadin:map-marker"></iron-icon>
</vaadin-button>
<paper-spinner-lite active="[[_geoworking]]" alt="Finding the location closest to you"></paper-spinner-lite>

<template is="dom-repeat" items="[[_filter(libraries,type)]]" as="library">
  <template is="dom-if" if="[[library.occupancy]]">
  <div hidden$="[[!_isEqual(library.key,selectedLocation)]]">
        <div slot="heading">
          <div style="padding: 20px">
            <h1 inner-h-t-m-l="[[library.name]]"></h1>
          </div>
          <div style="float: right; padding: 20px;">
            <h2>Line Length: 
              <span>[[library.occupancy.value]]</span>
              <br/><span class="time">[[_timeformat(library.occupancy.timestamp_end)]]</span></h2>
          </div>
        </div>
        <div slot="body">
          <div style="padding: 20px;">
            <template is="dom-if" if="[[!library.containedInPlace]]">
              <div><vaadin-number-field class="lineCount" label="Line Length" library-id="[[library.key]]" action-id="[[_occupancy]]" value="[[library.occupancy.value]]" on-change="_updateMainCount" min="0" has-controls></vaadin-number-field></div>
              <div><vaadin-number-field label="Server Count" library-id="[[library.key]]" action-id="[[_servers]]" value="[[library.servers.value]]" on-change="_updateMainCount" min="0" has-controls></vaadin-number-field></div>

              <vaadin-select value="[[library.duration.value]]" label="Current Processing Time" library-id="[[library.key]]" action-id="[[_duration]]" on-change="_updateMainCount">
                <template>
                  <vaadin-list-box>
                    <vaadin-item value="30">30 Seconds</vaadin-item>
                    <vaadin-item value="60">1 minute</vaadin-item>
                    <vaadin-item value="90">1 minute 30 seconds</vaadin-item>
                    <vaadin-item value="120">2 minutes</vaadin-item>
                    <vaadin-item value="150">2 minutes 30 seconds</vaadin-item>
                  </vaadin-list-box>
                </template>
              </vaadin-select>

              </template>  
          </div>
        </div>
  </div>
  </template>
</template>

</div>
    `}static get properties(){return{libraries:Array,_geoworking:{type:Boolean,value:!1},_occupancy:{type:String,value:"occupancy"},_servers:{type:String,value:"servers"},_duration:{type:String,value:"duration"},_state:{type:Number,value:1},selectedLocation:{type:String},type:{type:String,value:null},_data:{type:Object,value:function(){return{1600266267649:0,1600266798670:0,1600270356460:7,1600274033392:9}}}}}_initSelectedLocation(){this.selectedLocation="centralGarageCovidTesting"}_locationAvailable(){return navigator.geolocation}_locateMe(){this._geoworking=!0,navigator.geolocation.getCurrentPosition(function(e){this.location={lat:e.coords.latitude,lng:e.coords.longitude};var t=this.selectedLocation,i=1e3;this._filter(this.libraries,this.type).forEach(function(e){const n=this._distance(this.location.lat,this.location.lng,e.geo.latitude,e.geo.longitude);i>n&&(i=n,t=e.key)}.bind(this)),this.selectedLocation=t,this._geoworking=!1}.bind(this),function(e){this._geoworking=!1}.bind(this))}_distance(e,t,i,n,o){if(e==i&&t==n)return 0;var s=Math.PI*e/180,a=Math.PI*i/180,r=t-n,l=Math.PI*r/180,d=Math.sin(s)*Math.sin(a)+Math.cos(s)*Math.cos(a)*Math.cos(l);return d>1&&(d=1),d=60*(d=180*(d=Math.acos(d))/Math.PI)*1.1515,"K"==o&&(d*=1.609344),"N"==o&&(d*=.8684),d}ready(){super.ready(),this.shadowRoot.getElementById("auth").addEventListener("uvalib-model-authenticated",function(){this.database=l.default.database(),this.database.ref("locations-schemaorg/location").on("value",function(e){this._libraries=e.val(),this.libraries=this._values(this._libraries)}.bind(this))}.bind(this))}_isSelected(e,t){return e==t}_getQueryVariable(e){for(var t=window.location.search.substring(1).split("&"),i=0;i<t.length;i++){var n=t[i].split("=");if(decodeURIComponent(n[0])==e)return decodeURIComponent(n[1])}console.log("Query variable %s not found",e)}_getUserKey(){return this._getQueryVariable("userkey")}_isEqual(e,t){return e==t}_selected(e){console.log(e)}_isRecount(e){return e?"recount":""}_todayStart(){var e=new Date;return 1*new Date(e.getFullYear(),e.getMonth(),e.getDate())}_isNull(e){return null==e}_calcPercent(e,t){return Math.round((t/e*100).toFixed(3))}_calcInversePercent(e,t){var i=100-this._calcPercent(e,t);return isNaN(i)?100:i}_timeformat(e){return r(e).format("MMMM Do, h:mm:ss a")}_filter(e,t){return t&&Array.isArray(e)?e.filter(e=>!0===e.isActive&&e["@type"]===t):Array.isArray(e)?e.filter(e=>!0===e.isActive):e}_values(e){if(e){var t=[];return Object.keys(e).forEach((function(i){e[i].key=i,t.push(e[i])})),t}return e}_updateMainCount(e){var t=e.currentTarget;const i=t.libraryId,n=t.actionId,o=t.value;console.log("locations-schemaorg/location/"+i+"/"+n),console.log(o);this.database.ref("locations-schemaorg/location/"+i+"/"+n).update({timestamp:l.default.database.ServerValue.TIMESTAMP,value:o})}_updateCount(e){const t=e.target.libraryId,i=this.shadowRoot.querySelectorAll('vaadin-number-field[library-id="'+t+'"]');var n=[];i.forEach(e=>{const i=e.getAttribute("place-id"),o=e.actionId,s=e.value,a=this.database.ref("locations-schemaorg/location/"+t+"/containedInPlace/"+i+"/"+o);n.push(a.update({timestamp:l.default.database.ServerValue.TIMESTAMP,value:s}))}),Promise.all(n).then(function(){const e=this._values(this._libraries[t].containedInPlace);var i={timestamp_start:null,timestamp_end:null,value:0};e.forEach(e=>{e.occupancy&&((e.occupancy.timestamp<i.timestamp_start||!i.timestamp_start)&&(i.timestamp_start=e.occupancy.timestamp),(e.occupancy.timestamp>i.timestamp_end||!i.timestamp_end)&&(i.timestamp_end=e.occupancy.timestamp),i.value=Number(i.value)+Number(e.occupancy.value))}),this.database.ref("locations-schemaorg/location/"+t+"/occupancy").update(i)}.bind(this))}});
