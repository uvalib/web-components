import{c as t}from"./uvalib-counts-d5cc2695.js";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let e,s=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function n(t){requestAnimationFrame((function(){o?o(t):(s||(s=new Promise(t=>{e=t}),"complete"===document.readyState?e():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&e()})),s.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const l="__shadyCSSCachedStyle";let d=null,i=null;class S{constructor(){this.customStyles=[],this.enqueued=!1,n(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&i&&(this.enqueued=!0,n(i))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[l])return t[l];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const s=t[e];if(s[l])continue;const o=this.getStyleForCustomStyle(s);if(o){const t=o.__appliedElement||o;d&&d(t),s[l]=t}}return t}}S.prototype.addCustomStyle=S.prototype.addCustomStyle,S.prototype.getStyleForCustomStyle=S.prototype.getStyleForCustomStyle,S.prototype.processStyles=S.prototype.processStyles,Object.defineProperties(S.prototype,{transformCallback:{get:()=>d,set(t){d=t}},validateCallback:{get:()=>i,set(t){let e=!1;i||(e=!0),i=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const a=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,u=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,r=/@media\s(.*)/;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function y(t,e){for(let s in e)null===s?t.style.removeProperty(s):t.style.setProperty(s,e[s])}function c(t,e){const s=window.getComputedStyle(t).getPropertyValue(e);return s?s.trim():""}function w(t){const e=u.test(t)||a.test(t);return u.lastIndex=0,a.lastIndex=0,e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const m=!(window.ShadyDOM&&window.ShadyDOM.inUse);let p,h;function C(t){p=(!t||!t.shimcssproperties)&&(m||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(h=window.ShadyCSS.cssBuild);const f=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?p=window.ShadyCSS.nativeCss:window.ShadyCSS?(C(window.ShadyCSS),window.ShadyCSS=void 0):C(window.WebComponents&&window.WebComponents.flags);const g=p,b=new S;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,s){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,s){},styleSubtree(t,e){b.processStyles(),y(t,e)},styleElement(t){b.processStyles()},styleDocument(t){b.processStyles(),y(document.body,t)},getComputedStyleValue:(t,e)=>c(t,e),flushCustomStyles(){},nativeCss:g,nativeShadow:m,cssBuild:h,disableRuntime:f}),window.ShadyCSS.CustomStyleInterface=b;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const v=window.ShadyCSS.CustomStyleInterface;class _ extends HTMLElement{constructor(){super(),this._style=null,v.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const s=e.getAttribute("include");return s&&(e.removeAttribute("include"),e.textContent=t(s)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",_);export{r as M,a as V,g as a,u as b,h as c,w as d,f as e,c as g,m as n,y as u};
