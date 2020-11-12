var e,t;(e=window.document).getElementById("livereloadscript")||((t=e.createElement("script")).async=1,t.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t));import{c as s}from"./uvalib-counts-a59ad539.js";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o,n=null,l=window.HTMLImports&&window.HTMLImports.whenReady||null;function i(e){requestAnimationFrame((function(){l?l(e):(n||(n=new Promise(e=>{o=e}),"complete"===document.readyState?o():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&o()})),n.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const d="__shadyCSSCachedStyle";let a=null,S=null;class r{constructor(){this.customStyles=[],this.enqueued=!1,i(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&S&&(this.enqueued=!0,i(S))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[d])return e[d];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const s=e[t];if(s[d])continue;const o=this.getStyleForCustomStyle(s);if(o){const e=o.__appliedElement||o;a&&a(e),s[d]=e}}return e}}r.prototype.addCustomStyle=r.prototype.addCustomStyle,r.prototype.getStyleForCustomStyle=r.prototype.getStyleForCustomStyle,r.prototype.processStyles=r.prototype.processStyles,Object.defineProperties(r.prototype,{transformCallback:{get:()=>a,set(e){a=e}},validateCallback:{get:()=>S,set(e){let t=!1;S||(t=!0),S=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const u=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,y=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,c=/@media\s(.*)/;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function w(e,t){for(let s in t)null===s?e.style.removeProperty(s):e.style.setProperty(s,t[s])}function p(e,t){const s=window.getComputedStyle(e).getPropertyValue(t);return s?s.trim():""}function m(e){const t=y.test(e)||u.test(e);return y.lastIndex=0,u.lastIndex=0,t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const h=!(window.ShadyDOM&&window.ShadyDOM.inUse);let C,f;function g(e){C=(!e||!e.shimcssproperties)&&(h||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(f=window.ShadyCSS.cssBuild);const v=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?C=window.ShadyCSS.nativeCss:window.ShadyCSS?(g(window.ShadyCSS),window.ShadyCSS=void 0):g(window.WebComponents&&window.WebComponents.flags);const b=C,_=new r;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,s){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,s){},styleSubtree(e,t){_.processStyles(),w(e,t)},styleElement(e){_.processStyles()},styleDocument(e){_.processStyles(),w(document.body,e)},getComputedStyleValue:(e,t)=>p(e,t),flushCustomStyles(){},nativeCss:b,nativeShadow:h,cssBuild:f,disableRuntime:v}),window.ShadyCSS.CustomStyleInterface=_;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const B=window.ShadyCSS.CustomStyleInterface;class E extends HTMLElement{constructor(){super(),this._style=null,B.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=s(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",E);export{c as M,u as V,b as a,y as b,f as c,m as d,v as e,p as g,h as n,w as u};
