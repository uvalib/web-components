/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let e,t,i=/(url\()([^)]*)(\))/g,r=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function n(i,n){if(i&&r.test(i))return i;if("//"===i)return i;if(void 0===e){e=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",e="http://a/c%20d"===t.href}catch(e){}}if(n||(n=document.baseURI||window.location.href),e)try{return new URL(i,n).href}catch(e){return i}return t||(t=document.implementation.createHTMLDocument("temp"),t.base=t.createElement("base"),t.head.appendChild(t.base),t.anchor=t.createElement("a"),t.body.appendChild(t.anchor)),t.base.href=n,t.anchor.href=i,t.anchor.href||i}function o(e,t){return e.replace(i,(function(e,i,r,o){return i+"'"+n(r.replace(/["']/g,""),t)+"'"+o}))}function a(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const s=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let l=a(document.baseURI||window.location.href),c=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,d=0;const u=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=d++;return function(r){let n=r.__mixinSet;if(n&&n[i])return r;let o=t,a=o.get(r);a||(a=e(r),o.set(r,a));let s=Object.create(a.__mixinSet||n||null);return s[i]=!0,a.__mixinSet=s,a}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let h={},p={};class m extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=function(e){return h[e]||p[e.toLowerCase()]}(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,r){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=n(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=a(t)}return this.__assetpath}register(e){var t;(e=e||this.id)&&(this.id=e,function(e,t){h[e]=p[e.toLowerCase()]=t}(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id))}}m.prototype.modules=h,customElements.define("dom-module",m);function f(e){return m.import(e)}function _(e){const t=o((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function g(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...b(t[e]));return i}function b(e){const t=f(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...v(t));const i=t.querySelector("template");i&&e.push(...y(i,t.assetpath)),t._styles=e}return t._styles}function y(e,t){if(!e._styles){const i=[],r=e.content.querySelectorAll("style");for(let e=0;e<r.length;e++){let n=r[e],a=n.getAttribute("include");a&&i.push(...g(a).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(n.textContent=o(n.textContent,t)),i.push(n)}e._styles=i}return e._styles}function v(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<i.length;e++){let r=i[e];if(r.import){const e=r.import,i=r.hasAttribute("shady-unscoped");if(i&&!e._unscopedStyle){const t=_(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=_(e));t.push(i?e._unscopedStyle:e._style)}}return t}function w(e){let t=f(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=v(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const r=y(e,t);for(let e=0;e<r.length;e++){let t=r[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const x=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function C(e){return e.indexOf(".")>=0}function P(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function S(e,t){return 0===e.indexOf(t+".")}function E(e,t){return 0===t.indexOf(e+".")}function k(e,t,i){return t+i.slice(e.length)}function A(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let r=e[i].toString().split(".");for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(".")}return e}function T(e){return Array.isArray(e)?A(e).split("."):e.toString().split(".")}function O(e,t,i){let r=e,n=T(t);for(let e=0;e<n.length;e++){if(!r)return;r=r[n[e]]}return i&&(i.path=n.join(".")),r}function N(e,t,i){let r=e,n=T(t),o=n[n.length-1];if(n.length>1){for(let e=0;e<n.length-1;e++){if(r=r[n[e]],!r)return}r[o]=i}else r[t]=i;return n.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const I={},D=/-[a-z]/g,F=/([A-Z])/g;function M(e){return I[e]||(I[e]=e.indexOf("-")<0?e:e.replace(D,e=>e[1].toUpperCase()))}function R(e){return I[e]||(I[e]=e.replace(F,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let L=0,z=0,H=[],B=0,j=document.createTextNode("");new window.MutationObserver((function(){const e=H.length;for(let t=0;t<e;t++){let e=H[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}H.splice(0,e),z+=e})).observe(j,{characterData:!0});const q={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},$={run:e=>(j.textContent=B++,H.push(e),L++),cancel(e){const t=e-z;if(t>=0){if(!H[t])throw new Error("invalid async handle: "+e);H[t]=null}}},U=$,Y=u(e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let r=this.__data[e],n=this._shouldPropertyChange(e,t,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),n}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,U.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i))}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,r){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,r)}_attributeToProperty(e,t,i){if(!this.__serializing){const r=this.__dataAttributes,n=r&&r[e]||e;this[n]=this._deserializeValue(t,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const r=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=x(e)),void 0===r?e.removeAttribute(i):e.setAttribute(i,r)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),V={};let J=HTMLElement.prototype;for(;J;){let e=Object.getOwnPropertyNames(J);for(let t=0;t<e.length;t++)V[e[t]]=!0;J=Object.getPrototypeOf(J)}const X=u(e=>{const t=Y(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(M(e[t]))}static attributeNameForProperty(e){return R(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!V[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),G={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let W=!1,K=!1;function Z(e){(function(){if(!W){W=!0;const e=document.createElement("textarea");e.placeholder="a",K=e.placeholder===e.textContent}return K})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function Q(e){let t=e.getAttribute("is");if(t&&G[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function ee(e,t){let i=t.parentInfo&&ee(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}function te(e,t,i,r){r.id&&(t[r.id]=i)}function ie(e,t,i){if(i.events&&i.events.length)for(let r,n=0,o=i.events;n<o.length&&(r=o[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function re(e,t,i){i.templateInfo&&(t._templateInfo=i.templateInfo)}const ne=u(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let r=!1,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,t,i)||r,Z(n),n.firstChild&&this._parseTemplateChildNodes(n,t,i),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,t,i)||r),r}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let r,n=e.firstChild,o=0;n;n=r){if("template"==n.localName&&(n=Q(n)),r=n.nextSibling,n.nodeType===Node.TEXT_NODE){let i=r;for(;i&&i.nodeType===Node.TEXT_NODE;)n.textContent+=i.textContent,r=i.nextSibling,e.removeChild(i),i=r;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}let a={parentIndex:o,parentInfo:i};this._parseTemplateNode(n,t,a)&&(a.infoIndex=t.nodeInfoList.push(a)-1),n.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,i){let r=e,n=this._parseTemplate(r,t);return(n.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,i){let r=!1,n=Array.from(e.attributes);for(let o,a=n.length-1;o=n[a];a--)r=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,i,r,n){return"on-"===r.slice(0,3)?(e.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(i.id=n,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),i=t.nodeInfoList,r=t.content||e.content,n=document.importNode(r,!0);n.__noInsertionPoint=!t.hasInsertionPoint;let o=n.nodeList=new Array(i.length);n.$={};for(let e,t=0,r=i.length;t<r&&(e=i[t]);t++){let i=o[t]=ee(n,e);te(0,n.$,i,e),re(0,i,e),ie(this,i,e)}return n=n,n}_addMethodEventListenerToNode(e,t,i,r){let n=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||e,0,i);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let oe=0;const ae={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},se=/[A-Z]/;function le(e,t){let i=e[t];if(i){if(!e.hasOwnProperty(t)){i=e[t]=Object.create(e[t]);for(let e in i){let t=i[e],r=i[e]=Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]}}}else i=e[t]={};return i}function ce(e,t,i,r,n,o){if(t){let a=!1,s=oe++;for(let l in i)de(e,t,s,l,i,r,n,o)&&(a=!0);return a}return!1}function de(e,t,i,r,n,o,a,s){let l=!1,c=t[a?P(r):r];if(c)for(let t,d=0,u=c.length;d<u&&(t=c[d]);d++)t.info&&t.info.lastRun===i||a&&!ue(r,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,r,n,o,t.info,a,s),l=!0);return l}function ue(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!S(i,e))||!(!t.wildcard||!E(i,e))}return!0}function he(e,t,i,r,n){let o="string"==typeof n.method?e[n.method]:n.method,a=n.property;o?o.call(e,e.__data[a],r[a]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function pe(e,t,i){let r=P(t);if(r!==t){return me(e,R(r)+"-changed",i[t],t),!0}return!1}function me(e,t,i,r){let n={value:i,queueProperty:!0};r&&(n.path=r),x(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function fe(e,t,i,r,n,o){let a=(o?P(t):t)!=t?t:null,s=a?O(e,a):e.__data[t];a&&void 0===s&&(s=i[t]),me(e,n.eventName,s,a)}function _e(e,t,i,r,n){let o=e.__data[t];c&&(o=c(o,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,o)}function ge(e,t,i,r,n){let o=Pe(e,t,i,r,n),a=n.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,o,!0):e[a]=o}function be(e,t,i,r,n,o,a){i.bindings=i.bindings||[];let s={kind:r,target:n,parts:o,literal:a,isCompound:1!==o.length};if(i.bindings.push(s),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||R(n)+"-changed",s.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<s.parts.length;i++){let r=s.parts[i];r.compoundIndex=i,ye(e,t,s,r,l)}}function ye(e,t,i,r,n){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,a={index:n,binding:i,part:r,evaluator:e};for(let i=0;i<o.length;i++){let r=o[i];"string"==typeof r&&(r=Te(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:ve,info:a,trigger:r})}}}function ve(e,t,i,r,n,o,a){let s=a[n.index],l=n.binding,d=n.part;if(o&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let r=i[t];t=k(d.source,l.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{!function(e,t,i,r,n){n=function(e,t,i,r){if(i.isCompound){let n=e.__dataCompoundStorage[i.target];n[r.compoundIndex]=t,t=n.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,n,i,r),c&&(n=c(n,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,n,i.target);else{let r=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?t[ae.READ_ONLY]&&t[ae.READ_ONLY][r]||t._setPendingProperty(r,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,n)}}(e,s,l,d,n.evaluator._evaluateBinding(e,d,t,i,r,o))}}function we(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,n=new Array(r.length);for(let e=0;e<r.length;e++)n[e]=r[e].literal;let o=t.target;i[o]=n,t.literal&&"property"==t.kind&&("className"===o&&(e=x(e)),e[o]=t.literal)}}function xe(e,t,i){if(i.listenerEvent){let r=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,r,n){let o,a=e.detail,s=a&&a.path;s?(r=k(i,r,s),o=a&&a.value):o=e.currentTarget[i],o=n?!o:o,t[ae.READ_ONLY]&&t[ae.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,o,!0,Boolean(s))||a&&a.queueProperty||t._invalidateProperties()}(e,t,i.target,r.source,r.negate)}))}}function Ce(e,t,i,r,n,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:o};for(let n,o=0;o<t.args.length&&(n=t.args[o]);o++)n.literal||e._addPropertyEffect(n.rootProperty,i,{fn:r,info:a,trigger:n});o&&e._addPropertyEffect(t.methodName,i,{fn:r,info:a})}function Pe(e,t,i,r,n){let o=e._methodHost||e,a=o[n.methodName];if(a){let r=e._marshalArgs(n.args,t,i);return a.apply(o,r)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const Se=[],Ee=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function ke(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function Ae(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Se};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=Te(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Te(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=P(t),i.structured=C(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function Oe(e,t,i){let r=O(e,i);return void 0===r&&(r=t[i]),r}function Ne(e,t,i,r){e.notifyPath(i+".splices",{indexSplices:r}),e.notifyPath(i+".length",t.length)}function Ie(e,t,i,r,n,o){Ne(e,t,i,[{index:r,addedCount:n,removed:o,object:t,type:"splice"}])}const De=u(e=>{const t=ne(X(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return ae}_initializeProperties(){super._initializeProperties(),Fe.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[ae.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==ae.READ_ONLY);let r=le(this,t)[e];r||(r=this[t][e]=[]),r.push(i)}_removePropertyEffect(e,t,i){let r=le(this,t)[e],n=r.indexOf(i);n>=0&&r.splice(n,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,ae.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,ae.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,ae.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,ae.COMPUTE)}_setPendingPropertyOrPath(e,t,i,r){if(r||P(Array.isArray(e)?e[0]:e)!==e){if(!r){let i=O(this,e);if(!(e=N(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let r=e.__dataLinkedPaths;if(r){let n;for(let o in r){let a=r[o];E(o,t)?(n=k(o,a,t),e._setPendingPropertyOrPath(n,i,!0,!0)):E(a,t)&&(n=k(a,o,t),e._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=x(e)),e[t]=i)}_setPendingProperty(e,t,i){let r=this.__dataHasPaths&&C(e),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[ae.NOTIFY]&&this[ae.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[ae.READ_ONLY]&&this[ae.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let r=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,i,r){let n=e[ae.COMPUTE];if(n){let o=t;for(;ce(e,n,o,i,r);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}(this,t,i,r);let n=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,i,r),this._flushClients(),ce(this,this[ae.REFLECT],t,i,r),ce(this,this[ae.OBSERVE],t,i,r),n&&function(e,t,i,r,n){let o,a,s=e[ae.NOTIFY],l=oe++;for(let a in t)t[a]&&(s&&de(e,s,l,a,i,r,n)||n&&pe(e,a,i))&&(o=!0);o&&(a=e.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,n,t,i,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[ae.PROPAGATE]&&ce(this,this[ae.PROPAGATE],e,t,i);let r=this.__templateInfo;for(;r;)ce(this,r.propertyEffects,e,t,i,r.nodeList),r=r.nextTemplateInfo}linkPaths(e,t){e=A(e),t=A(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=A(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};Ne(this,O(this,e,i),i.path,t)}get(e,t){return O(t||this,e)}set(e,t,i){i?N(i,e,t):this[ae.READ_ONLY]&&this[ae.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},r=O(this,e,i),n=r.length,o=r.push(...t);return t.length&&Ie(this,r,i.path,n,t.length,[]),o}pop(e){let t={path:""},i=O(this,e,t),r=Boolean(i.length),n=i.pop();return r&&Ie(this,i,t.path,i.length,0,[n]),n}splice(e,t,i,...r){let n,o={path:""},a=O(this,e,o);return t<0?t=a.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?a.splice(t):a.splice(t,i,...r),(r.length||n.length)&&Ie(this,a,o.path,t,r.length,n),n}shift(e){let t={path:""},i=O(this,e,t),r=Boolean(i.length),n=i.shift();return r&&Ie(this,i,t.path,0,0,[n]),n}unshift(e,...t){let i={path:""},r=O(this,e,i),n=r.unshift(...t);return t.length&&Ie(this,r,i.path,0,t.length,[]),n}notifyPath(e,t){let i;if(1==arguments.length){let r={path:""};t=O(this,e,r),i=r.path}else i=Array.isArray(e)?A(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,ae.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let r={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,ae.OBSERVE,{fn:he,info:r,trigger:{name:e}}),i&&this._addPropertyEffect(t,ae.OBSERVE,{fn:he,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let i=Ae(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");Ce(this,i,ae.OBSERVE,Pe,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,ae.NOTIFY,{fn:fe,info:{eventName:R(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,ae.REFLECT,{fn:_e,info:{attrName:t}})}_createComputedProperty(e,t,i){let r=Ae(t);if(!r)throw new Error("Malformed computed expression '"+t+"'");Ce(this,r,ae.COMPUTE,ge,e,i)}_marshalArgs(e,t,i){const r=this.__data,n=[];for(let o=0,a=e.length;o<a;o++){let{name:a,structured:s,wildcard:l,value:c,literal:d}=e[o];if(!d)if(l){const e=E(a,t),n=Oe(r,i,e?t:a);c={path:e?t:a,value:n,base:e?O(r,a):n}}else c=s?Oe(r,i,a):r[a];n[o]=c}return n}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),r=this.__templateInfo==i;if(!r)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t&&(i=Object.create(i),i.wasPreBound=r,!r&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=i,i.previousTemplateInfo=e,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let r=e.propertyEffects=e.propertyEffects||{};(r[t]=r[t]||[]).push(i)}_stampTemplate(e){Fe.beginHosting(this);let t=super._stampTemplate(e);Fe.endHosting(this);let i=this._bindTemplate(e,!0);if(i.nodeList=t.nodeList,!i.wasPreBound){let e=i.childNodes=[];for(let i=t.firstChild;i;i=i.nextSibling)e.push(i)}return t.templateInfo=i,function(e,t){let{nodeList:i,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let n=r[t],o=i[t],a=n.bindings;if(a)for(let t=0;t<a.length;t++){let i=a[t];we(o,i),xe(o,e,i)}o.__dataHost=e}}(this,i),this.__dataReady&&ce(this,i.propertyEffects,this.__data,null,!1,i.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let i=t.childNodes;for(let e=0;e<i.length;e++){let t=i[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,i,r){let n=t._parseTemplateNode.call(this,e,i,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=ke(t)||" ",be(this,i,r,"text","textContent",t),n=!0)}return n}static _parseTemplateNodeAttribute(e,i,r,n,o){let a=this._parseBindings(o,i);if(a){let t=n,o="property";se.test(n)?o="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),o="attribute");let s=ke(a);return s&&"attribute"==o&&("class"==n&&e.hasAttribute("class")&&(s+=" "+e.getAttribute(n)),e.setAttribute(n,s)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(n=M(n)),be(this,i,r,o,n,a,s),!0}return t._parseTemplateNodeAttribute.call(this,e,i,r,n,o)}static _parseTemplateNestedTemplate(e,i,r){let n=t._parseTemplateNestedTemplate.call(this,e,i,r),o=r.templateInfo.hostProps;for(let e in o){be(this,i,r,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return n}static _parseBindings(e,t){let i,r=[],n=0;for(;null!==(i=Ee.exec(e));){i.index>n&&r.push({literal:e.slice(n,i.index)});let o=i[1][0],a=Boolean(i[2]),s=i[3].trim(),l=!1,c="",d=-1;"{"==o&&(d=s.indexOf("::"))>0&&(c=s.substring(d+2),s=s.substring(0,d),l=!0);let u=Ae(s),h=[];if(u){let{args:e,methodName:i}=u;for(let t=0;t<e.length;t++){let i=e[t];i.literal||h.push(i)}let r=t.dynamicFns;(r&&r[i]||u.static)&&(h.push(i),u.dynamicFn=!0)}else h.push(s);r.push({source:s,mode:o,negate:a,customEvent:l,signature:u,dependencies:h,event:c}),n=Ee.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&r.push({literal:t})}return r.length?r:null}static _evaluateBinding(e,t,i,r,n,o){let a;return a=t.signature?Pe(e,i,r,0,t.signature):i!=t.source?O(e,t.source):o&&C(i)?O(e,i):e.__data[i],t.negate&&(a=!a),a}}});const Fe=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Me=u(e=>{const t=Y(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let i in e){const r=e[i];t[i]="function"==typeof r?{type:r}:r}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),Re=window.ShadyCSS&&window.ShadyCSS.cssBuild,Le=u(e=>{const t=Me(De(e));function i(e,t,i,r){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,r)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,r[i.observer]),e._addPropertyToAttributeMap(t)}function r(e,t,i,r){if(!Re){const n=t.content.querySelectorAll("style"),o=y(t),a=function(e){let t=f(e);return t?v(t):[]}(i),s=t.content.firstElementChild;for(let i=0;i<a.length;i++){let n=a[i];n.textContent=e._processStyleText(n.textContent,r),t.content.insertBefore(n,s)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],a=n[l];a!==i?(i=i.cloneNode(!0),a.parentNode.insertBefore(i,a)):l++,i.textContent=e._processStyleText(i.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i)}return class extends t{static get polymerElementVersion(){return"3.3.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):e=e.cloneNode(!0)),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let r=0;r<e.length;r++)i._createMethodObserver(e[r],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;return e&&(t=m.import(e,"template")),t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=a(e.url);else{const e=m.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=l,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let r=t[i];"value"in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=r)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return o(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;r(this,t,e,i?n(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=x(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=n(this.importPath)),n(e,t)}static _parseTemplateContent(e,i,r){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,r)}static _addTemplatePropertyEffect(e,i,r){return t._addTemplatePropertyEffect.call(this,e,i,r)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ze{constructor(e){this.value=e.toString()}toString(){return this.value}}function He(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof ze)return function(e){if(e instanceof ze)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}(e);throw new Error("non-template value passed to Polymer's html function: "+e)}const Be=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce((t,i,r)=>t+He(i)+e[r+1],e[0]),i},je=Le(HTMLElement),qe=!(window.ShadyDOM&&window.ShadyDOM.inUse);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let $e,Ue;function Ye(e){$e=(!e||!e.shimcssproperties)&&(qe||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Ue=window.ShadyCSS.cssBuild);const Ve=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?$e=window.ShadyCSS.nativeCss:window.ShadyCSS?(Ye(window.ShadyCSS),window.ShadyCSS=void 0):Ye(window.WebComponents&&window.WebComponents.flags);const Je=$e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Xe{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Ge(e){return function e(t,i){let r=i.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;r=i.substring(e,t.start-1),r=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(r),r=r.replace(et.multipleSpaces," "),r=r.substring(r.lastIndexOf(";")+1);let n=t.parsedSelector=t.selector=r.trim();t.atRule=0===n.indexOf(rt),t.atRule?0===n.indexOf(it)?t.type=Ke.MEDIA_RULE:n.match(et.keyframesRule)&&(t.type=Ke.KEYFRAMES_RULE,t.keyframesName=t.selector.split(et.multipleSpaces).pop()):0===n.indexOf(tt)?t.type=Ke.MIXIN_RULE:t.type=Ke.STYLE_RULE}let n=t.rules;if(n)for(let t,r=0,o=n.length;r<o&&(t=n[r]);r++)e(t,i);return t}(function(e){let t=new Xe;t.start=0,t.end=e.length;let i=t;for(let r=0,n=e.length;r<n;r++)if(e[r]===Ze){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new Xe,i.start=r+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[r]===Qe&&(i.end=r+1,i=i.parent||t);return t}(e=e.replace(et.comments,"").replace(et.port,"")),e)}function We(e,t,i=""){let r="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(tt)}(i))for(let e,n=0,o=i.length;n<o&&(e=i[n]);n++)r=We(e,t,r);else r=t?e.cssText:function(e){return function(e){return e.replace(et.mixinApply,"").replace(et.varApply,"")}(e=function(e){return e.replace(et.customProp,"").replace(et.mixinProp,"")}(e))}(e.cssText),r=r.trim(),r&&(r="  "+r+"\n")}return r&&(e.selector&&(i+=e.selector+" "+Ze+"\n"),i+=r,e.selector&&(i+=Qe+"\n\n")),i}const Ke={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Ze="{",Qe="}",et={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},tt="--",it="@media",rt="@",nt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,ot=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,at=/@media\s(.*)/,st=new Set;function lt(e){const t=e.textContent;if(!st.has(t)){st.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function ct(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function dt(e,t){return e?("string"==typeof e&&(e=Ge(e)),t&&ht(e,t),We(e,Je)):""}function ut(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Ge(e.textContent)),e.__cssRules||null}function ht(e,t,i,r){if(!e)return;let n=!1,o=e.type;if(r&&o===Ke.MEDIA_RULE){let t=e.selector.match(at);t&&(window.matchMedia(t[1]).matches||(n=!0))}o===Ke.STYLE_RULE?t(e):i&&o===Ke.KEYFRAMES_RULE?i(e):o===Ke.MIXIN_RULE&&(n=!0);let a=e.rules;if(a&&!n)for(let e,n=0,o=a.length;n<o&&(e=a[n]);n++)ht(e,t,i,r)}window.ShadyDOM&&window.ShadyDOM.wrap;function pt(e){if(void 0!==Ue)return Ue;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function mt(e){return""!==pt(e)}function ft(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function _t(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const gt=/;\s*/m,bt=/^\s*(initial)|(inherit)\s*$/,yt=/\s*!important/;class vt{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let wt=null;class xt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new vt}detectMixin(e){return function(e){const t=ot.test(e)||nt.test(e);return ot.lastIndex=0,nt.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const r=i[e];ct(r)?qe||(lt(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=ut(e);return this.transformRules(i,t),e.textContent=dt(i),i}transformCustomStyle(e){let t=ut(e);return ht(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=dt(t),t}transformRules(e,t){this._currentElement=t,ht(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(nt,(e,i,r,n)=>this._produceCssProperties(e,i,r,n,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let r=!1;return ht(t,t=>{r=r||t===e,r||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=ot.exec(e);){let r=i[0],n=i[1],o=i.index,a=o+r.indexOf("@apply"),s=o+r.length,l=e.slice(0,a),c=e.slice(s),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let u=this._atApplyToCssProperties(n,d);e=`${l}${u}${c}`,ot.lastIndex=o+u.length}return e}_atApplyToCssProperties(e,t){e=e.replace(gt,"");let i=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){let n,o,a;this._currentElement&&(r.dependants[this._currentElement]=!0);const s=r.properties;for(n in s)a=t&&t[n],o=[n,": var(",e,"_-_",n],a&&o.push(",",a.replace(yt,"")),o.push(")"),yt.test(s[n])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=bt.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,r,n=e.split(";"),o={};for(let e,a,s=0;s<n.length;s++)e=n[s],e&&(a=e.split(":"),a.length>1&&(i=a[0].trim(),r=a.slice(1).join(":"),t&&(r=this._replaceInitialOrInherit(i,r)),o[i]=r));return o}_invalidateMixinEntry(e){if(wt)for(let t in e.dependants)t!==this._currentElement&&wt(t)}_produceCssProperties(e,t,i,r,n){if(i&&function e(t,i){let r=t.indexOf("var(");if(-1===r)return i(t,"","","");let n=function(e,t){let i=0;for(let r=t,n=e.length;r<n;r++)if("("===e[r])i++;else if(")"===e[r]&&0==--i)return r;return-1}(t,r+3),o=t.substring(r+4,n),a=t.substring(0,r),s=e(t.substring(n+1),i),l=o.indexOf(",");return-1===l?i(a,o.trim(),"",s):i(a,o.substring(0,l).trim(),o.substring(l+1).trim(),s)}(i,(e,t)=>{t&&this._map.get(t)&&(r=`@apply ${t};`)}),!r)return e;let o=this._consumeCssProperties(""+r,n),a=e.slice(0,e.indexOf("--")),s=this._cssTextToMap(o,!0),l=s,c=this._map.get(t),d=c&&c.properties;d?l=Object.assign(Object.create(d),s):this._map.set(t,l);let u,h,p=[],m=!1;for(u in l)h=s[u],void 0===h&&(h="initial"),d&&!(u in d)&&(m=!0),p.push(`${t}_-_${u}: ${h}`);return m&&this._invalidateMixinEntry(c),c&&(c.properties=l),i&&(a=`${e};${a}`),`${a}${p.join("; ")};`}}xt.prototype.detectMixin=xt.prototype.detectMixin,xt.prototype.transformStyle=xt.prototype.transformStyle,xt.prototype.transformCustomStyle=xt.prototype.transformCustomStyle,xt.prototype.transformRules=xt.prototype.transformRules,xt.prototype.transformRule=xt.prototype.transformRule,xt.prototype.transformTemplate=xt.prototype.transformTemplate,xt.prototype._separator="_-_",Object.defineProperty(xt.prototype,"invalidCallback",{get:()=>wt,set(e){wt=e}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ct={},Pt="_applyShimCurrentVersion",St="_applyShimNextVersion",Et=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function kt(e){let t=Ct[e];t&&function(e){e[Pt]=e[Pt]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[St]=(e[St]||0)+1}(t)}function At(e){return e[Pt]===e[St]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Tt,Ot=null,Nt=window.HTMLImports&&window.HTMLImports.whenReady||null;function It(e){requestAnimationFrame((function(){Nt?Nt(e):(Ot||(Ot=new Promise(e=>{Tt=e}),"complete"===document.readyState?Tt():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Tt()})),Ot.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Dt="__shadyCSSCachedStyle";let Ft=null,Mt=null;class Rt{constructor(){this.customStyles=[],this.enqueued=!1,It(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Mt&&(this.enqueued=!0,It(Mt))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Dt])return e[Dt];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[Dt])continue;const r=this.getStyleForCustomStyle(i);if(r){const e=r.__appliedElement||r;Ft&&Ft(e),i[Dt]=e}}return e}}Rt.prototype.addCustomStyle=Rt.prototype.addCustomStyle,Rt.prototype.getStyleForCustomStyle=Rt.prototype.getStyleForCustomStyle,Rt.prototype.processStyles=Rt.prototype.processStyles,Object.defineProperties(Rt.prototype,{transformCallback:{get:()=>Ft,set(e){Ft=e}},validateCallback:{get:()=>Mt,set(e){let t=!1;Mt||(t=!0),Mt=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Lt=new xt;class zt{constructor(){this.customStyleInterface=null,Lt.invalidCallback=kt}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Lt.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),mt(e))return;Ct[t]=e;let i=Lt.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],r=this.customStyleInterface.getStyleForCustomStyle(i);r&&Lt.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&ft(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",r="";return t?t.indexOf("-")>-1?i=t:(r=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,r=e.extends),{is:i,typeExtension:r}}(e),i=Ct[t];if((!i||!mt(i))&&i&&!At(i)){(function(e){return!At(e)&&e._applyShimValidatingVersion===e[St]})(i)||(this.prepareTemplate(i,t),function(e){e._applyShimValidatingVersion=e[St],e._validating||(e._validating=!0,Et.then((function(){e[Pt]=e[St],e._validating=!1})))}(i));let r=e.shadowRoot;if(r){let e=r.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=dt(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new zt;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,r){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>_t(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:Je,nativeShadow:qe,cssBuild:Ue,disableRuntime:Ve},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Lt;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ht{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Bt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Bt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Ht?e._cancelAsync():e=new Ht,e.setConfig(t,i),e}}let Bt=new Set;const jt=function(e){Bt.add(e)},qt=function(){const e=Boolean(Bt.size);return Bt.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let $t="string"==typeof document.head.style.touchAction,Ut="__polymerGesturesHandled",Yt="__polymerGesturesTouchAction",Vt=["mousedown","mousemove","mouseup","click"],Jt=[0,1,4,2],Xt=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Gt(e){return Vt.indexOf(e)>-1}let Wt=!1;function Kt(e){Gt(e)}!function(){try{let e=Object.defineProperty({},"passive",{get(){Wt=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Zt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Qt=[],ei={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},ti={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function ii(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let r=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<r.length;e++)t.push(r[e])}}return t}let ri=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[Ut]={skip:!0},"click"===e.type)){let t=!1,r=ci(e);for(let e=0;e<r.length;e++){if(r[e].nodeType===Node.ELEMENT_NODE)if("label"===r[e].localName)Qt.push(r[e]);else if(i=r[e],ei[i.localName]){let i=ii(r[e]);for(let e=0;e<i.length;e++)t=t||Qt.indexOf(i[e])>-1}if(r[e]===ai.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function ni(e){let t=Zt?["click"]:Vt;for(let i,r=0;r<t.length;r++)i=t[r],e?(Qt.length=0,document.addEventListener(i,ri,!0)):document.removeEventListener(i,ri,!0)}function oi(e){let t=e.type;if(!Gt(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Xt&&(t=Jt[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let ai={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function si(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function li(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){ai.mouse.mouseIgnoreJob||ni(!0),ai.mouse.target=ci(e)[0],ai.mouse.mouseIgnoreJob=Ht.debounce(ai.mouse.mouseIgnoreJob,q.after(2500),(function(){ni(),ai.mouse.target=null,ai.mouse.mouseIgnoreJob=null}))}),!!Wt&&{passive:!0});const ci=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],di={},ui=[];function hi(e){const t=ci(e);return t.length>0?t[0]:e.target}function pi(e){let t,i=e.type,r=e.currentTarget.__polymerGestures;if(!r)return;let n=r[i];if(n){if(!e[Ut]&&(e[Ut]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(ai.touch.id=t.identifier),ai.touch.id!==t.identifier)return;$t||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)ai.touch.x=t.clientX,ai.touch.y=t.clientY,ai.touch.scrollDecided=!1;else if("touchmove"===i){if(ai.touch.scrollDecided)return;ai.touch.scrollDecided=!0;let i=function(e){let t="auto",i=ci(e);for(let e,r=0;r<i.length;r++)if(e=i[r],e[Yt]){t=e[Yt];break}return t}(e),r=!1,n=Math.abs(ai.touch.x-t.clientX),o=Math.abs(ai.touch.y-t.clientY);e.cancelable&&("none"===i?r=!0:"pan-x"===i?r=o>n:"pan-y"===i&&(r=n>o)),r?e.preventDefault():yi("track")}}(e)}if(t=e[Ut],!t.skip){for(let i,r=0;r<ui.length;r++)i=ui[r],n[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let r,o=0;o<ui.length;o++)r=ui[o],n[r.name]&&!t[r.name]&&(t[r.name]=!0,r[i](e))}}}function mi(e,t,i){return!!di[t]&&(function(e,t,i){let r=di[t],n=r.deps,o=r.name,a=e.__polymerGestures;a||(e.__polymerGestures=a={});for(let t,i,r=0;r<n.length;r++)t=n[r],Zt&&Gt(t)&&"click"!==t||(i=a[t],i||(a[t]=i={_count:0}),0===i._count&&e.addEventListener(t,pi,Kt(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),r.touchAction&&gi(e,r.touchAction)}(e,t,i),!0)}function fi(e,t,i){return!!di[t]&&(function(e,t,i){let r=di[t],n=r.deps,o=r.name,a=e.__polymerGestures;if(a)for(let t,i,r=0;r<n.length;r++)t=n[r],i=a[t],i&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,pi,Kt(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function _i(e){ui.push(e);for(let t=0;t<e.emits.length;t++)di[e.emits[t]]=e}function gi(e,t){$t&&e instanceof HTMLElement&&$.run(()=>{e.style.touchAction=t}),e[Yt]=t}function bi(e,t,i){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,x(e).dispatchEvent(r),r.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function yi(e){let t=function(e){for(let t,i=0;i<ui.length;i++){t=ui[i];for(let i,r=0;r<t.emits.length;r++)if(i=t.emits[r],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function vi(e,t,i,r){t&&bi(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(e){return yi(e)}})}function wi(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let r=Math.abs(e.x-t),n=Math.abs(e.y-i);return r>=5||n>=5}function xi(e,t,i){if(!t)return;let r,n=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],a=o.x-e.x,s=o.y-e.y,l=0;n&&(r=o.x-n.x,l=o.y-n.y),bi(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:a,dy:s,ddx:r,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),r=i;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let n=r;if(r=r.shadowRoot.elementFromPoint(e,t),n===r)break;r&&(i=r)}return i}(i.clientX,i.clientY)}})}function Ci(e,t,i){let r=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),o=hi(i||t);!o||ti[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=hi(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),r=e.pageX,n=e.pageY;return!(r>=i.left&&r<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||bi(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/_i({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){li(this.info)},mousedown:function(e){if(!oi(e))return;let t=hi(e),i=this;si(this.info,(function(e){oi(e)||(vi("up",t,e),li(i.info))}),(function(e){oi(e)&&vi("up",t,e),li(i.info)})),vi("down",t,e)},touchstart:function(e){vi("down",hi(e),e.changedTouches[0],e)},touchend:function(e){vi("up",hi(e),e.changedTouches[0],e)}}),_i({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,li(this.info)},mousedown:function(e){if(!oi(e))return;let t=hi(e),i=this,r=function(e){let r=e.clientX,n=e.clientY;wi(i.info,r,n)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&yi("tap"),i.info.addMove({x:r,y:n}),oi(e)||(i.info.state="end",li(i.info)),t&&xi(i.info,t,e),i.info.started=!0)};si(this.info,r,(function(e){i.info.started&&r(e),li(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=hi(e),i=e.changedTouches[0],r=i.clientX,n=i.clientY;wi(this.info,r,n)&&("start"===this.info.state&&yi("tap"),this.info.addMove({x:r,y:n}),xi(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=hi(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),xi(this.info,t,i))}}),_i({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){oi(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){oi(e)&&Ci(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Ci(this.info,e.changedTouches[0],e)}});const Pi=u(e=>class extends e{_addEventListenerToNode(e,t,i){mi(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){fi(e,t,i)||super._removeEventListenerFromNode(e,t,i)}}),Si=/:host\(:dir\((ltr|rtl)\)\)/g,Ei=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,ki=/:dir\((?:ltr|rtl)\)/,Ai=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Ti=[];
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Oi=null,Ni="";function Ii(){Ni=document.documentElement.getAttribute("dir")}function Di(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Ni)}}function Fi(){Ii(),Ni=document.documentElement.getAttribute("dir");for(let e=0;e<Ti.length;e++)Di(Ti[e])}const Mi=u(e=>{Ai||Oi||(Ii(),Oi=new MutationObserver(Fi),Oi.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=X(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!Ai&&ki.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Si,':host([dir="$1"])'),t=t.replace(Ei,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Oi&&Oi.takeRecords().length&&Fi(),Ti.push(this),Di(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Ti.indexOf(this);e>-1&&Ti.splice(e,1)}}}return i.__activateDir=!1,i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ri(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Li(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?Ri():window.addEventListener("DOMContentLoaded",Ri);function zi(e,t,i,r,n,o){let a,s=0,l=0,c=Math.min(i-t,o-n);if(0==t&&0==n&&(s=function(e,t,i){for(let r=0;r<i;r++)if(!Bi(e[r],t[r]))return r;return i}(e,r,c)),i==e.length&&o==r.length&&(l=function(e,t,i){let r=e.length,n=t.length,o=0;for(;o<i&&Bi(e[--r],t[--n]);)o++;return o}(e,r,c-s)),n+=s,o-=l,(i-=l)-(t+=s)==0&&o-n==0)return[];if(t==i){for(a=Li(t,[],0);n<o;)a.removed.push(r[n++]);return[a]}if(n==o)return[Li(t,[],i-t)];let d=function(e){let t=e.length-1,i=e[0].length-1,r=e[t][i],n=[];for(;t>0||i>0;){if(0==t){n.push(2),i--;continue}if(0==i){n.push(3),t--;continue}let o,a=e[t-1][i-1],s=e[t-1][i],l=e[t][i-1];o=s<l?s<a?s:a:l<a?l:a,o==a?(a==r?n.push(0):(n.push(1),r=a),t--,i--):o==s?(n.push(3),t--,r=s):(n.push(2),i--,r=l)}return n.reverse(),n}(function(e,t,i,r,n,o){let a=o-n+1,s=i-t+1,l=new Array(a);for(let e=0;e<a;e++)l[e]=new Array(s),l[e][0]=e;for(let e=0;e<s;e++)l[0][e]=e;for(let i=1;i<a;i++)for(let o=1;o<s;o++)if(Bi(e[t+o-1],r[n+i-1]))l[i][o]=l[i-1][o-1];else{let e=l[i-1][o]+1,t=l[i][o-1]+1;l[i][o]=e<t?e:t}return l}(e,t,i,r,n,o));a=void 0;let u=[],h=t,p=n;for(let e=0;e<d.length;e++)switch(d[e]){case 0:a&&(u.push(a),a=void 0),h++,p++;break;case 1:a||(a=Li(h,[],0)),a.addedCount++,h++,a.removed.push(r[p]),p++;break;case 2:a||(a=Li(h,[],0)),a.addedCount++,h++;break;case 3:a||(a=Li(h,[],0)),a.removed.push(r[p]),p++}return a&&u.push(a),u}function Hi(e,t){return zi(e,0,e.length,t,0,t.length)}function Bi(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ji(e){return"slot"===e.localName}let qi=class{static getFlattenedNodes(e){const t=x(e);return ji(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>ji(e)?x(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ji(this._target)?this._listenSlots([this._target]):x(this._target).children&&(this._listenSlots(x(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ji(this._target)?this._unlistenSlots([this._target]):x(this._target).children&&(this._unlistenSlots(x(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,$.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=Hi(t,this._effectiveNodes);for(let t,r=0;r<i.length&&(t=i[r]);r++)for(let i,r=0;r<t.removed.length&&(i=t.removed[r]);r++)e.removedNodes.push(i);for(let r,n=0;n<i.length&&(r=i[n]);n++)for(let i=r.index;i<r.index+r.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ji(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ji(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $i=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=qt()}while(e||t)},Ui=Element.prototype,Yi=Ui.matches||Ui.matchesSelector||Ui.mozMatchesSelector||Ui.msMatchesSelector||Ui.oMatchesSelector||Ui.webkitMatchesSelector,Vi=function(e,t){return Yi.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ji{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new qi(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(x(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=x(t).parentNode||x(t).host;return t===this.node}getOwnerRoot(){return x(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?x(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=x(this.node).assignedSlot;for(;t;)e.push(t),t=x(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return x(i).importNode(e,t)}getEffectiveChildNodes(){return qi.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let r,n=0,o=t.length;n<o&&(r=t[n]);n++)r.nodeType===Node.ELEMENT_NODE&&Vi(r,e)&&i.push(r);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function Xi(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})}}class Gi{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Ji.prototype.cloneNode,Ji.prototype.appendChild,Ji.prototype.insertBefore,Ji.prototype.removeChild,Ji.prototype.replaceChild,Ji.prototype.setAttribute,Ji.prototype.removeAttribute,Ji.prototype.querySelector,Ji.prototype.querySelectorAll,Ji.prototype.parentNode,Ji.prototype.firstChild,Ji.prototype.lastChild,Ji.prototype.nextSibling,Ji.prototype.previousSibling,Ji.prototype.firstElementChild,Ji.prototype.lastElementChild,Ji.prototype.nextElementSibling,Ji.prototype.previousElementSibling,Ji.prototype.childNodes,Ji.prototype.children,Ji.prototype.classList,Ji.prototype.textContent,Ji.prototype.innerHTML;let Wi=Ji;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Ji.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=Ji.prototype[t])}),Xi(e.prototype,["classList"]),Wi=e,Object.defineProperties(Gi.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Ki(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const r=i[e];if(Ki(r).getOwnerRoot()===t)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let r=t[i];e[r]=function(){return this.node[r].apply(this.node,arguments)}}}(Ji.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Xi(Ji.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(e){this.node[r]=e},configurable:!0})}}(Ji.prototype,["textContent","innerHTML","className"]);const Ki=function(e){if((e=e||document)instanceof Wi)return e;if(e instanceof Gi)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Gi(e):new Wi(e),e.__domApi=t),t},Zi=window.ShadyDOM,Qi=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function er(e,t){return x(e).getRootNode()===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let tr=window.ShadyCSS;const ir=u(e=>{const t=Mi(Pi(Le(e))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,i,r){t!==i&&(super.attributeChangedCallback(e,t,i,r),this.attributeChanged(e,t,i))}attributeChanged(e,t,i){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let r,n=0;n<i.length&&(r=i[n]);n++){let i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});r.detail=t;let n=i.node||this;return x(n).dispatchEvent(r),r}listen(e,t,i){e=e||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),n=r.get(e);n||(n={},r.set(e,n));let o=t+i;n[o]||(n[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let r=this.__boundListeners&&this.__boundListeners.get(e),n=t+i,o=r&&r[n];o&&(this._removeEventListenerFromNode(e,t,o),r[n]=null)}setScrollDirection(e,t){gi(t||this,i[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=x(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Ki(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Ki(this).getEffectiveChildNodes()}queryDistributedElements(e){return Ki(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,r=0;i=e[r];r++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Ki(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&x(this).contains(e)&&x(this).getRootNode()===x(e).getRootNode()}isLocalDescendant(e){return this.root===x(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Zi||!Qi)return null;if(!Zi.handlesDynamicScoping)return null;const i=Qi.ScopingShim;if(!i)return null;const r=i.scopeForNode(e),n=x(e).getRootNode(),o=e=>{if(!er(e,n))return;const t=Array.from(Zi.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!er(o,n))continue;const a=i.currentScopeForNode(o);a!==r&&(""!==a&&i.unscopeNode(o,a),i.scopeNode(o,r))}};if(o(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return tr.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=Ht.debounce(this._debouncers[e],i>0?q.after(i):$,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?q.run(e.bind(this),t):~$.run(e.bind(this))}cancelAsync(e){e<0?$.cancel(~e):q.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return Vi(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(x(i).setAttribute(e,""),!0):(x(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,r){r=r||this,this.transform("translate3d("+e+","+t+","+i+")",r)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=O(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return r.prototype.is="",r}),rr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},nr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},or=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},nr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ar(e,t,i,r){!function(e,t,i){const r=e._noAccessors,n=Object.getOwnPropertyNames(e);for(let o=0;o<n.length;o++){let a=n[o];if(!(a in i))if(r)t[a]=e[a];else{let i=Object.getOwnPropertyDescriptor(e,a);i&&(i.configurable=!0,Object.defineProperty(t,a,i))}}}(t,e,r);for(let e in rr)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function sr(e,t){for(const i in t){const r=e[i],n=t[i];e[i]=!("value"in n)&&r&&"value"in r?Object.assign({value:r.value},n):n}}function lr(e,t,i){let r;const n={};class o extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let e,t=0;t<r.length;t++)e=r[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(r)for(let e=0;e<r.length;e++)sr(t,r[e].properties);return sr(t,e.properties),t}static get observers(){let t=[];if(r)for(let e,i=0;i<r.length;i++)e=r[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=n.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=o.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered();const t=Object.getPrototypeOf(this);let i=n.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=n.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=n.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=n.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=n.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=n.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=n.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let r=n.attributeChanged;if(r)for(let n=0;n<r.length;n++)r[n].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;r=function e(t,i,r){i=i||[];for(let n=t.length-1;n>=0;n--){let o=t[n];o?Array.isArray(o)?e(o,i):i.indexOf(o)<0&&(!r||r.indexOf(o)<0)&&i.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,e),o.prototype.behaviors=e?e.concat(i):r}return(t=>{r&&function(e,t,i){for(let r=0;r<t.length;r++)ar(e,t[r],i,or)}(t,r,n),ar(t,e,n,nr)})(o.prototype),o.generatedFrom=e,o}const cr=function(e){let t;return t="function"==typeof e?e:cr.Class(e),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function dr(e,t,i,r,n){let o;n&&(o="object"==typeof i&&null!==i,o&&(r=e.__dataTemp[t]));let a=r!==i&&(r==r||i==i);return o&&a&&(e.__dataTemp[t]=i),a}cr.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(ir(HTMLElement)):ir(HTMLElement);return i=lr(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};const ur=u(e=>class extends e{_shouldPropertyChange(e,t,i){return dr(this,e,t,i,!0)}}),hr=u(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return dr(this,e,t,i,this.mutableData)}});ur._mutablePropertyChange=dr;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let pr=null;function mr(){return pr}mr.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:mr,writable:!0}});const fr=De(mr),_r=ur(fr);const gr=De(class{});class br extends gr{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,i)}}_showHideChildren(e){let t=this.children;for(let i=0;i<t.length;i++){let r=t[i];if(Boolean(e)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(e)r.__polymerReplaced__=document.createComment("hidden-slot"),x(x(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const e=r.__polymerReplaced__;e&&x(x(e).parentNode).replaceChild(r,e)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}br.prototype.__dataHost,br.prototype.__templatizeOptions,br.prototype._methodHost,br.prototype.__templatizeOwner,br.prototype.__hostProps;const yr=ur(br);function vr(e,t,i){let r=i.mutableData?yr:br;Pr.mixin&&(r=Pr.mixin(r));let n=class extends r{};return n.prototype.__templatizeOptions=i,n.prototype._bindTemplate(e),function(e,t,i,r){let n=i.hostProps||{};for(let t in r.instanceProps){delete n[t];let i=r.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Cr(t,i)})}if(r.forwardHostProp&&t.__dataHost)for(let t in n)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(n,e,t,i),n}function wr(e,t,i){let r=i.forwardHostProp;if(r&&t.hasHostProps){let n=t.templatizeTemplateClass;if(!n){let e=i.mutableData?_r:fr;n=t.templatizeTemplateClass=class extends e{};let o=t.hostProps;for(let e in o)n.prototype._addPropertyEffect("_host_"+e,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:xr(e,r)}),n.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){pr=e,Object.setPrototypeOf(e,t.prototype),new t,pr=null}(e,n),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function xr(e,t){return function(e,i,r){t.call(e.__templatizeOwner,i.substring("_host_".length),r[i])}}function Cr(e,t){return function(e,i,r){t.call(e.__templatizeOwner,e,i,r[i])}}function Pr(e,t,i){if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let r=(t?t.constructor:br)._parseTemplate(e),n=r.templatizeInstanceClass;n||(n=vr(e,r,i),r.templatizeInstanceClass=n),wr(e,r,i);let o=class extends n{};return o.prototype._methodHost=function(e){let t=e.__dataHost;return t&&t._methodHost||t}(e),o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=r.hostProps,o=o,o}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Sr=Pi(hr(De(HTMLElement)));customElements.define("dom-bind",class extends Sr{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,r){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){x(x(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Er=hr(je);class kr extends Er{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=x(x(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=Pr(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let i=this.__instances;for(let r,n=0;n<i.length&&(r=i[n]);n++)r.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((r=this.as)===(n=t)||S(r,n)||E(r,n)){let r=e[this.itemsIndexAs];t==this.as&&(this.items[r]=i);let n=k(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,t);this.notifyPath(n,i)}var r,n}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=Ht.debounce(this.__renderDebouncer,t>0?q.after(t):$,e.bind(this)),jt(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),$i()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;this.__filterFn&&(t=t.filter((t,i,r)=>this.__filterFn(e[t],i,r))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i]));const i=this.__itemsIdxToInstIdx={};let r=0;const n=Math.min(t.length,this.__limit);for(;r<n;r++){let n=this.__instances[r],o=t[r],a=e[o];i[o]=r,n?(n._setPendingProperty(this.as,a),n._setPendingProperty(this.indexAs,r),n._setPendingProperty(this.itemsIndexAs,o),n._flushProperties()):this.__insertInstance(a,r,o)}for(let e=this.__instances.length-1;e>=r;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=x(t.root);for(let e=0;e<t.children.length;e++){let r=t.children[e];i.appendChild(r)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,i){let r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=i,new this.__ctor(r)}__insertInstance(e,t,i){let r=this.__pool.pop();r?(r._setPendingProperty(this.as,e),r._setPendingProperty(this.indexAs,t),r._setPendingProperty(this.itemsIndexAs,i),r._flushProperties()):r=this.__stampInstance(e,t,i);let n=this.__instances[t+1],o=n?n.children[0]:this;return x(x(this).parentNode).insertBefore(r.root,o),this.__instances[t]=r,r}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),r=i.indexOf("."),n=r<0?i:i.substring(0,r);if(n==parseInt(n,10)){let e=r<0?"":i.substring(r+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[n],a=this.__instances[o];if(a){let i=this.as+(e?"."+e:"");a._setPendingPropertyOrPath(i,t,!1,!0),a._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let i;for(;t;)if(i=t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=x(t).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(this.template,e)}}customElements.define(kr.is,kr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ar extends je{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Ht.debounce(this.__renderDebouncer,$,()=>this.__render()),jt(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=x(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||x(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){$i()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=x(this).parentNode;if(e){if(!this.__ctor){let e=x(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!x(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=Pr(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[P(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(x(this).previousSibling!==t[t.length-1])for(let i,r=0;r<t.length&&(i=t[r]);r++)x(e).insertBefore(i,this)}}else this.__instance=new this.__ctor,x(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=x(e[0]).parentNode;if(t){t=x(t);for(let i,r=0;r<e.length&&(i=e[r]);r++)t.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(Ar.is,Ar);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Tr=u(e=>{let t=Le(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],r=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),r){let e=Hi(i,r);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{let e=i.slice((JSCompiler_renameProperty("items",this)+".").length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let r=e[i];t.forEach((e,i)=>{e<r.index||(e>=r.index+r.removed.length?t.set(i,e+r.addedCount-r.removed.length):t.set(i,-1))});for(let e=0;e<r.addedCount;e++){let i=r.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach((e,r)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(r)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((i,r)=>{t==e++&&this.deselect(r)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(je);class Or extends Tr{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Or.is,Or);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Nr=new Rt;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){Nr.processStyles(),ft(e,t)},styleElement(e){Nr.processStyles()},styleDocument(e){Nr.processStyles(),ft(document.body,e)},getComputedStyleValue:(e,t)=>_t(e,t),flushCustomStyles(){},nativeCss:Je,nativeShadow:qe,cssBuild:Ue,disableRuntime:Ve}),window.ShadyCSS.CustomStyleInterface=Nr;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ir=window.ShadyCSS.CustomStyleInterface;class Dr extends HTMLElement{constructor(){super(),this._style=null,Ir.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=w(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Dr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Fr=ir(HTMLElement).prototype,Mr=Be`
<custom-style>
  <style is="custom-style">
  html {

    /* OFFICIAL 2019-2020 BRAND COLORS */
    --uvalib-brand-blue-lightest: #87B9D9;
    --uvalib-brand-blue-lighter: #3395D4;
    --uvalib-brand-blue-light: #0370B7;
    --uvalib-brand-blue: #232D4B;

    --uvalib-brand-orange-lightest: #FFEAD6;
    --uvalib-brand-orange: #E57200;
    --uvalib-brand-orange-dark: #B35900;

    --uvalib-blue-alt-lightest: #BFE7F7;
    --uvalib-blue-alt: #007BAC;
    --uvalib-blue-alt-dark: #005679;
    --uvalib-blue-alt-darkest: #141E3C;

    --uvalib-teal-lightest: #C8F2F4;
    --uvalib-teal-light: #5BD7DE;
    --uvalib-teal: #1DA1A8;
    --uvalib-teal-dark: #16777C;

    --uvalib-green-lightest: #89CC74;
    --uvalib-green: #62BB46;
    --uvalib-green-dark: #4E9737;

    --uvalib-red-lightest: #FBCFDA;
    --uvalib-red: #EF3F6B;
    --uvalib-red-dark: #DF1E43;
    --uvalib-red-darkest: #B30000;

    --uvalib-yellow-lightest: #FEF6C8;
    --uvalib-yellow: #ECC602;
    --uvalib-yellow-dark: #B99C02;

    --uvalib-beige: #F7EFE1;
    --uvalib-beige-dark: #C0B298;

    --uvalib-grey-lightest: #F1F1F1;
    --uvalib-grey-light: #DADADA;
    --uvalib-grey: #808080;
    --uvalib-grey-dark: #4F4F4F;
    --uvalib-grey-darkest: #2B2B2B;

    --uvalib-text-light: #FFFFFF;
    --uvalib-text: var(--uvalib-grey-dark);
    --uvalib-text-dark: var(--uvalib-grey-darkest);

    --uvalib-red-emergency: var(--uvalib-red-darkest);

    /* PHASE OUT THE CODE BELOW */
    /* Brand Color Palate*/
    --uvalib-main-white: var(--uvalib-white);
    --uvalib-main-black: var(--uvalib-black);
    --uvalib-main-rotunda-orange: #E57200;
    --uvalib-main-jefferson-blue: #232D4B;
    --uvalib-secondary-orange: var(--uvalib-secondary-web-orange);
    --uvalib-secondary-blue: var(--uvalib-secondary-web-blue);
    --uvalib-secondary-lt-grey: #F1F1EF;
    --uvalib-secondary-md-grey: var(--uvalib-secondary-medium-gray);

    /*Secondary Brand Colors*/
    --uvalib-secondary-web-orange: #EB5F0C;
    --uvalib-secondary-web-blue: #141E3C;
    --uvalib-secondary-cyan: #009FDF;
    --uvalib-secondary-yellow: #FDDA24;
    --uvalib-secondary-teal: #25CAD3;
    --uvalib-secondary-magenta: #EF3F6B;
    /*--uvalib-secondary-green: #62BB46; - NOT ADA compliant */
    --uvalib-secondary-green: #008000; /*ADA compliant*/
    --uvalib-secondary-light-gray: #F1F1F1;
    --uvalib-secondary-medium-gray: #DADADA;
    /*--uvalib-secondary-text-gray: #666666; - NOT ADA compliant*/
    --uvalib-text-grey: #595959; /*ADA compliant*/
    --uvalib-text-dk-grey: #474747; /*ADA compliant for hover over shaded table rows*/
    --uvalib-text-almost-black: #212121; /*ADA compliant*/
    /*--uvalib-secondary-emergency-red: #DF1E43; - NOT ADA compliant*/
    --uvalib-secondary-emergency-red: #E00000; /*ADA compliant*/

    /* link colors for body links */
    --uvalib-link-color: #0000FF;
    --uvalib-link-color-visited: #660099;

    /* Other color palette */
    --uvalib-blue-50: #B3D4FF;
    --uvalib-blue-100: #67A9FF;
    --uvalib-blue-200: #2F8AFF;
    --uvalib-blue-300: #0065E6;
    --uvalib-blue-400: #0057C8;
    --uvalib-blue-500: #004AA9;
    --uvalib-blue-600: #003D8A;
    --uvalib-blue-700: #002F6C;
    --uvalib-blue-800: #00224D;
    --uvalib-blue-900: #00142F;
    --uvalib-blue-a100: #82B1FF;
    --uvalib-blue-a200: #448AFF;
    --uvalib-blue-a400: #2979FF;
    --uvalib-blue-a700: #2962FF;

    --uvalib-orange-50: #FFF4EA;
    --uvalib-orange-100: #FFE8D2;
    --uvalib-orange-200: #FFD3A8;
    --uvalib-orange-300: #FFB060;
    --uvalib-orange-400: #FFA042;
    --uvalib-orange-500: #FF9123;
    --uvalib-orange-600: #FF8204;
    --uvalib-orange-700: var(--uvalib-main-rotunda-orange);
    --uvalib-orange-800: #C66300;
    --uvalib-orange-900: #A85400;
    --uvalib-orange-a100: #FFD180;
    --uvalib-orange-a200: #FFAB40;
    --uvalib-orange-a400: #FF9100;
    --uvalib-orange-a700: #FF6D00;

    --uvalib-grey-50: #FAFAFA;
    --uvalib-grey-100: #F5F5F5;
    --uvalib-grey-200: #EEEEEE;
    --uvalib-grey-300: #E0E0E0;
    --uvalib-grey-400: #BDBDBD;
    --uvalib-grey-500: #9E9E9E;
    --uvalib-grey-600: #757575;
    --uvalib-grey-700: #616161;
    --uvalib-grey-800: #424242;
    --uvalib-grey-900: #212121;

    --uvalib-black-alpha-12: rgba(0, 0, 0, 0.12);
    --uvalib-black-alpha-38: rgba(0, 0, 0, 0.38);
    --uvalib-black-alpha-54: rgba(0, 0, 0, 0.54);
    --uvalib-black-alpha-87: rgba(0, 0, 0, 0.87);
    --uvalib-white-alpha-12: rgba(255, 255, 255, 0.12);
    --uvalib-white-alpha-30: rgba(255, 255, 255, 0.30);
    --uvalib-white-alpha-70: rgba(255, 255, 255, 0.70);

    --uvalib-black: #000;
    --uvalib-white: #FFF;
    --uvalib-danger: #B30000; /*old not ADA compliant #C15943;*/
    --uvalib-success: #00D66E;

    /* color variables */
    --color-primary-color: var(--uvalib-brand-blue);/*var(--uvalib-blue-700);*/
    --color-primary-color-dark: var(--uvalib-blue-800);
    --color-primary-color-light: var(--uvalib-blue-500);

    --accent-color: var(--uvalib-orange-a200); /* paper components reference this */
    --color-accent-color: var(--uvalib-orange-a200);
    --color-accent-color-dark: var(--uvalib-orange-a400);
    --color-accent-color-light: var(--uvalib-orange-a100);

    --color-text-blue: var(--uvalib-blue-a400);
    --color-text-gray: var(--uvalib-grey-700);
    --color-text-dark: var(--uvalib-text-grey);
    --color-text-dark-secondary: var(--uvalib-text-grey);
    --color-text-disabled: var(--uvalib-black-alpha-38);
    --color-text-light: var(--uvalib-white);
    --color-text-light-secondary: var(--white-alpha-70);

    --color-primary-orange: var(--uvalib-orange-700);
    --color-primary-blue: var(--uvalib-blue-700);
    --color-white: var(--uvalib-white);
    --color-secondary-orange: #eb5f0c;
    --color-secondary-blue: var(--uvalib-blue-alt-darkest);/*#002359;*/
    --color-medium-blue: #344D9E;
    --color-light-blue: #9FB2CE;
    --color-light-gray: var(--uvalib-grey-100);
    --color-medium-gray: var(--uvalib-grey-400);
    --color-emergency-red: var(--uvalib-danger);

    --color-accessibility-outline: cyan;
    --color-accessibility-outline-light-bg: var(--uvalib-grey-700);
    --color-accessibility-outline-dark-bg: var(--uvalib-grey-400);

    --uvalib-captions-bg: var(--uvalib-grey-200);
    --uvalib-sidebar-bg: var(--uvalib-white);
  }
  </style>
</custom-style>
`;Mr.setAttribute("style","display: none;"),document.head.appendChild(Mr.content),import("./webfontloader-2252c1bc.js").then(e=>{(window.WebFont?window.WebFont:e.default).load({typekit:{id:"tgy5tlj"}})});const Rr=Be`
<custom-style>
  <style is="custom-style">
  /*********************************************/
  /*              BASE ELEMENTS                */
  /*********************************************/

      /* making site background full width */
      body { margin: 0; }

      /* SITE WIDE CUSTOM VARIABLES */
      html {
        /* max display width */
        --uvalib-display-width-max: 1200px;

        /* small media width */
        --small-viewport: { max-width: 30em; }

        /* font variables */
        --font-primary: var(--uva-font-family);

        /*Pulling in fonts via Typekit, weights will pull in font variants*/
        --uva-font-family: 'franklin-gothic-urw',arial,sans-serif;
        --uva-font-family-condensed: 'franklin-gothic-urw-cond',arial narrow,sans-serif;
        /*try to refrain from using this one, difficult to read on small screens*/
        --uva-font-family-compressed: 'franklin-gothic-urw-comp',arial narrow,sans-serif;
        --uva-font-decorative: {
          font-family: 'bodoni-urw',georgia,serif;
          font-style: italic;
          font-weight: 900;
          text-transform: uppercase;
        }

        --font-weight-light: 300; /*not used?*/
        --font-weight-book: 400;
        --font-weight-medium: 500;
        --font-weight-demi: 700;
        --font-weight-heavy: 900;

  /* Main sizing unit - changing this will update most of the font size/spacing variables on the site */
        --uvalib-main-font-size-unit: 16px;

  /* spacing unit of measure */
        --uvalib-spacing-unit: 1em;

  /* typography variables */
        --uvalib-font-base: {
          font-family: var(--font-primary);
          font-weight: 300;
          margin-top: calc(var(--uvalib-spacing-unit)/1);
          margin-bottom: calc(var(--uvalib-spacing-unit)/4);
          text-transform: none;
          color: var(--uvalib-text-grey);
        }

        --h1: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-demi);
          font-size: calc(var(--uvalib-main-font-size-unit)*3.75);
          line-height: calc(var(--uvalib-main-font-size-unit)*3.75);
          color: var(--uvalib-main-jefferson-blue);
          margin-top: calc(var(--uvalib-spacing-unit)/4);
          margin-bottom: calc(var(--uvalib-spacing-unit)/1.5);
          /*text-transform: capitalize; Not using, handling with CMS manual entries*/
        }
        --h2: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: calc(var(--uvalib-main-font-size-unit)*2);
          line-height: calc(var(--uvalib-main-font-size-unit)*2);
          color: var(--uvalib-main-jefferson-blue);
        }
        --h3: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: calc(var(--uvalib-main-font-size-unit)*1.5);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.5);
          /* text-transform: uppercase; Not using to improve cognitive recognition*/
          color: var(--uvalib-main-jefferson-blue);
        }
        --h3-with-flair: {
          @apply --uva-font-decorative;
          font-size: calc(var(--uvalib-main-font-size-unit)*1.5);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.5);
          color: var(--uvalib-main-jefferson-blue);
        }
        --h4: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: calc(var(--uvalib-main-font-size-unit)*1.25);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.25);
          /*text-transform: capitalize; Not using, handling with CMS manual entries*/
          color: var(--uvalib-main-jefferson-blue);
        }
        --h5: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: var(--uvalib-main-font-size-unit);
          line-height: var(--uvalib-main-font-size-unit);
          color: var(--uvalib-main-jefferson-blue);
        }
        --h6: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-book);
          font-size: var(--uvalib-main-font-size-unit);
          line-height: var(--uvalib-main-font-size-unit);
          color: var(--uvalib-text-grey);
        }

        --font-headline: {
          font-family: var(--font-primary);
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          color: var(--uvalib-text-grey);
        };

  /* used for headers in card body */
        --font-title: {
          font-family: var(--font-primary);
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          color: var(--uvalib-text-grey);
        };

  /* main body font */
        --font-body1: {
          font-family: var(--font-primary);
          font-weight: 400;
          font-style: normal;
          font-size: var(--uvalib-main-font-size-unit);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.25);
          color: var(--uvalib-text-grey);
        };

        --uvalib-liame-link-color:  var(--uvalib-link-color);

        --link-hover: {
          text-decoration: underline;
        };

      }

  </style>
</custom-style>`;Rr.setAttribute("style","display: none;"),document.head.appendChild(Rr.content);
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
const Lr=Be`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Lr.setAttribute("style","display: none;"),document.head.appendChild(Lr.content);var zr=document.createElement("style");zr.textContent="[hidden] { display: none !important; }",document.head.appendChild(zr);const Hr=Be`
<dom-module id="uvalib-theme">
  <template>
    <style>
    /*********************************************/
    /*          STRUCTURAL ELEMENTS              */
    /*********************************************/

    :host,
    body {
      @apply --font-body1;

      --accessibility-outline-for-light-bg: {
        outline: var(--color-accessibility-outline-light-bg) dotted 3px;
        padding: .15em;
      }

      ;

      --accessibility-outline-for-dark-bg: {
        outline: var(--color-accessibility-outline-dark-bg) dotted 3px;
        padding: .15em;
      }

      ;
    }

    /* easy way to hide/show elements by setting the hidden attribute */
    [hidden] {
      display: none !important;
    }

    /* Only display on Mobile */
    :host([small-screen]) .largeScreen,
    :host([medium-screen]) .largeScreen {
      display: none;
    }

    /* Only display on Large Screen */
    :host([large-screen]) .visibleMobile,
    :host([medium-screen]) .visibleMobile {
      display: none;
    }

    /* Display on Tablet and Desktop only */
    :host([small-screen]) .visibleAllButMobile {
      display: none;
    }

    article>#content {
      padding-left: var(--uvalib-spacing-unit);
      padding-right: var(--uvalib-spacing-unit);
      margin-bottom: 4em;
    }

    :host([small-screen]) article>#content {
      margin-bottom: 0;
    }

    h1, .h1 {
      @apply --h1;
    }

    h2, .h2 {
      @apply --h2;
      margin-bottom: calc(var(--uvalib-spacing-unit)/8);
    }

    h3, .h3 {
      @apply --h3;
    }

    h4, .h4 {
      @apply --h4;
    }

    h5, .h5 {
      @apply --h5;
    }

    h6, .h6 {
      @apply --h6;
    }

    .paragraph {
      @apply --font-body1;
    }

    /* p { line-height: 1.75; }needs further conditions */

    .all-cap {
      text-transform: uppercase;
    }

    strong {
      font-family: 'franklin-gothic-urw', 'arial', sans-serif;
      font-weight: 700;
    }

    blockquote {
      margin: 20px 0;
      text-transform: none;
      font-style: italic;
      line-height: 1.25;
    }

    blockquote p {
      font-size: calc(var(--uvalib-main-font-size-unit)*1.15);
    }

    blockquote footer {
      text-align: right;
      font-size: calc(var(--uvalib-main-font-size-unit)/1.12);
    }

    ul,
    ol {
      font-family: var(--font-primary);
      font-weight: var(--font-weight-regular);
      line-height: 30px;
      margin: 15px 0px;
      color: var(--color-text-gray);
    }

    article ul li {
      list-style-type: disc;
      line-height: normal;
      padding-bottom: .5em;
    }
    article ul.simple li {
      list-style-type: none;
    }
    article ul.simple li > ul li {
      list-style-type: inherit;
    }

    article ul li li {
      list-style-type: circle;
      line-height: normal;
      padding-bottom: .5em;
    }

    iframe {
      width: 100%;
      height: 100%;
      min-height: 500px;
    }

    a:hover {
      text-decoration: none;
    }

    #menu a {
      text-decoration: none;
    }

    #menu a:hover {
      text-decoration: underline;
    }

    /*END*/

    /* IMAGES */
    [data-align="left"],
    figure.align-left {
      float: left;
    }

    [data-align="center"],
    figure.align-center {
      margin: 0 auto;
    }

    [data-align="right"],
    figure.align-right {
      float: right;
    }

    figure>img {
      max-width: 100%;
    }

    figure {
      display: table;
    }

    figcaption {
      padding: .5em;
      margin-top: -.5em;
      background-color: var(--uvalib-captions-bg);
      display: table-caption;
      caption-side: bottom;
    }

    /* img responsive for all */
    img {
      max-width: 100%;
      height: auto;
    }

    /* deprecated class */
    .img-responsive {
      max-width: 100%;
      height: auto;
    }

    .noBG {
      background-color: inherit;
    }

    :host([small-screen]) article>#content img {
      float: none;
      padding: inherit;
    }

    /*END*/

    /*USEFUL TWEAKS & CLASSES (for when you need a little extra) */
    .shady {
      margin: var(--uvalib-spacing-unit) -1000px var(--uvalib-spacing-unit) -1000px;
      padding: calc(var(--uvalib-spacing-unit)*2) 1000px calc(var(--uvalib-spacing-unit)*2) 1000px;
      background-color: var(--color-light-gray);
    }

    .full-width {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
    }

    iron-image.round {
      border-radius: 50%;
      width: 300px;
      height: 300px;
      --iron-image-width: 300px;
    }

    iron-image.roundSmall {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      --iron-image-width: 150px;
    }

    iron-image.rectangle {
      width: 300px;
      --iron-image-width: 300px;
    }

    .bigFirstLetter:first-letter {
      @apply --uva-font-decorative;
      float: left;
      font-size: calc(var(--uvalib-main-font-size-unit)*5.8);
      line-height: calc(var(--uvalib-spacing-unit)*0.9);
      padding-right: calc(var(--uvalib-spacing-unit)*0.2);
      color: var(--color-primary-orange);
    }
    .dropCap:first-letter {
      @apply --uva-font-decorative;
      float: left;
      font-size: calc(var(--uvalib-main-font-size-unit)*5.8);
      line-height: calc(var(--uvalib-spacing-unit)*0.9);
      padding-right: calc(var(--uvalib-spacing-unit)*0.2);
      color: var(--color-primary-orange);
    }

    .takeNoticeColor,
    .uvalib-alert-text {
      color: var(--uvalib-secondary-emergency-red);
    }

    .takeNoticeSize {
      font-size: calc(var(--uvalib-main-font-size-unit)*1.5);
    }

    .text-center {
      text-align: center;
    }

    .text-right {
      text-align: right;
    }

    .uva-padding {
      padding: var(--uvalib-spacing-unit);
    }

    .uva-padding-left {
      padding-left: var(--uvalib-spacing-unit);
    }

    .uva-padding-right {
      padding-right: var(--uvalib-spacing-unit);
    }

    .uva-padding-left-right {
      padding-left: var(--uvalib-spacing-unit);
      padding-right: var(--uvalib-spacing-unit);
    }

    .uva-padding-top {
      padding-top: var(--uvalib-spacing-unit);
    }

    .uva-padding-bottom {
      padding-bottom: var(--uvalib-spacing-unit);
    }

    .uva-padding-top-bottom {
      padding-top: var(--uvalib-spacing-unit);
      padding-bottom: var(--uvalib-spacing-unit);
    }

    .uva-margin {
      margin: var(--uvalib-spacing-unit);
    }

    .uva-margin-left {
      margin-left: var(--uvalib-spacing-unit);
    }

    .uva-margin-right {
      margin-right: var(--uvalib-spacing-unit);
    }

    .uva-margin-left-right {
      margin-left: var(--uvalib-spacing-unit);
      margin-right: var(--uvalib-spacing-unit);
    }

    .uva-margin-top {
      margin-top: var(--uvalib-spacing-unit);
    }

    .uva-margin-bottom {
      margin-bottom: var(--uvalib-spacing-unit);
    }

    .uva-margin-top-bottom {
      margin-top: var(--uvalib-spacing-unit);
      margin-bottom: var(--uvalib-spacing-unit);
    }

    .uva-margin-top-none {
      margin-top: 0;
    }

    .uva-margin-bottom-none {
      margin-bottom: 0;
    }

    .uva-clear-margin { margin: 0; }
    .uva-clear-padding { padding: 0; }

    /*END*/

    /* GRID */
    .grid-main,
    .grid-container,
    .grid-one-third-right,
    .grid-three-cols {
      display: grid;
      grid-template-columns: 1fr;
      font-size: 18px;
      margin-bottom: 2rem;
    }

    .grid-container {
      grid-gap: 1rem;
    }

    :host([medium-screen]) .grid-three-cols {
      grid-template-columns: 1fr 1fr;
    }

    :host([large-screen]) .grid-three-cols {
      grid-template-columns: 1fr 1fr 1fr;
    }

    :host([large-screen]) .grid-one-third-right {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 2fr 1.5fr;
    }

    :host([large-screen]) .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
      grid-gap: 1rem;
    }

    /* END */

    /* BUTTONS */
    /* phase out use of paper button 09-2019 */
    paper-button {
      border: 1px solid var(--uvalib-secondary-md-grey);
      border-radius: 5px;

      --paper-button-flat-keyboard-focus: {
        @apply --accessibility-outline-for-dark-bg;
      }
    }

    /* Start using this class on anchor links for buttons 09-2019 */
    a.uvalib-btn,
    a.uvalib-btn:link,
    a.uvalib-btn:visited,
    a.uvalib-btn:hover,
    a.uvalib-btn:active {
      padding: calc(var(--uvalib-spacing-unit)/2);
      text-decoration: none;
      background-color: var(--alt-button-color, var(--uvalib-main-rotunda-orange));
      color: var(--alt-button-text-color, #fff);
      text-transform: uppercase;
      border-radius: 5px;
    }

    a.uvalib-btn:hover {
      text-decoration: underline;
    }

    .uvalib-btn-margin {
      margin: var(--uvalib-spacing-unit) !important;
    }

    .uvalib-btn-white {
      --alt-button-color: var(--uvalib-white);
      --alt-button-text-color: var(--uvalib-text-dk-grey);
    }

    .uvalib-btn-blue {
      --alt-button-color: var(--uvalib-main-jefferson-blue);
    }

    .uvalib-btn-outline {
      border: 1px solid var(--uvalib-secondary-md-grey);
    }

    /* .foo { --alt-button-color: green; } */

    .smallButton {
      font-size: .75em;
    }

    .mediumButton {
      font-size: .85em;
    }

    .emergencyButton h3 {
      margin-top: 0;
      margin-bottom: 1em;
    }

    .emergencyButton paper-button {
      background-color: var(--uvalib-secondary-emergency-red);

      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
      }

      ;
    }

    .emergencyButton a paper-button {
      color: var(--color-white);

      --paper-button-raised-keyboard-focus: {
        color: white !important;
      }

      ;
    }

    .give-button {
      margin-top: .5em;
      margin-bottom: 1em;
      margin-left: 0;
      border: none;
      font-size: calc(var(--uvalib-main-font-size-unit)*1.125);
    }

    paper-button.give-button {
      color: var(--color-white);
      background: var(--color-primary-orange);
    }

    /* Make the button orange PHASE OUT */
    .button-pop {
      background-color: var(--uvalib-main-rotunda-orange);
      color: white;
    }

    .button-pop:hover {
      background: var(--uvalib-orange-200);
      color: var(--uvalib-black);
    }

    /* Make the button blue PHASE OUT */
    .button-pop-alt {
      background-color: var(--uvalib-main-jefferson-blue);
      color: white;
    }

    .button-pop-alt:hover {
      background: var(--uvalib-secondary-md-grey);
      color: var(--uvalib-black);
    }

    paper-button:hover {
      text-decoration: underline;
    }

    paper-button[disabled],
    paper-button[toggles][active] {
      background: var(--uvalib-orange-200);
      color: var(--uvalib-black);
    }

    paper-button:focus {
      outline: var(--color-accessibility-outline-dark-bg) dotted 3px;
    }

    /*END*/

    /* TABLES */
    table {
      border-collapse: collapse;
      width: 100%;
    }

    thead {
      display: none;
    }

    th {
      padding: 1.5em;
    }

    tr {
      display: block;
      padding: 0.5em;
    }

    td {
      display: block;
      padding-left: 40%;
    }

    td:before {
      content: attr(data-label);
      display: inline-block;
      width: 50%;
      margin-left: -65%;
      font-weight: bold;
    }

    tbody tr:nth-child(even) {
      background-color: #E0E0E0;
    }

    td ul li {
      list-style-type: none;
    }

    @media screen and (min-width: 60em) {
      thead {
        display: table-header-group;
      }

      thead tr {
        background-color: #AAA;
      }

      tr {
        display: table-row;
      }

      td {
        display: table-cell;
        padding: 1em;
        text-align: center;
      }

      td:before {
        display: none;
      }
    }

    /* END */

            /* CUSTOM TABLES */
    #AlternateTable table,
    #AlternateTable thead,
    #AlternateTable tbody,
    #AlternateTable th,
    #AlternateTable td,
    #AlternateTable tr {
      display: block;
    }

    #AlternateTable caption {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    #AlternateTable thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    #AlternateTable tbody tr:nth-child(even) {
      background-color: inherit;
    }

    #AlternateTable tr {
      padding: 0 0 10px 0;
    }

    #AlternateTable tr th {
      background-color: var(--uvalib-main-jefferson-blue);
      color: var(--uvalib-white);
      padding: 5px;
    }

    #AlternateTable td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    #AlternateTable td::before {
      display: inherit;
      margin: inherit;
      position: absolute;
      top: 6px;
      left: 15px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /* Label the data */
    #AlternateTable td:nth-of-type(1)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }

    #AlternateTable td:nth-of-type(2)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }

    #AlternateTable td:nth-of-type(3)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }

    #AlternateTable td:nth-of-type(4)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }
    /* END */

    /* ACCESSIBILITY */
    a:focus {
      @apply --accessibility-outline-for-light-bg;
    }

    /* a:hover { text-decoration: underline; } */
    nav a:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    /* a { text-decoration: inherit; } */

    a span {
      text-decoration: underline;
      color: var(--uvalib-link-color);
    }

    a span:hover {
      text-decoration: none;
    }

    a span:visited {
      color: var(--uvalib-link-color-visited);
    }

    a:link paper-button {
      text-decoration: none;
    }

    #top #logo a:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    #top #logo a:hover {
      border-bottom: 1px solid var(--color-accessibility-outline-dark-bg);
      padding-bottom: .1em;
    }

    #top .section a:focus,
    #top .section paper-icon-button:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    iron-collapse:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    /* Text meant only for screen readers. Mostly used in the Search Bar and Header components */
    .screen-reader-text {
      clip: rect(1px, 1px, 1px, 1px);
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    .screen-reader-text:focus {
      background-color: #f1f1f1;
      border-radius: 3px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
      clip: auto !important;
      color: #21759b;
      display: block;
      font-size: 14px;
      font-size: 0.875rem;
      font-weight: bold;
      height: auto;
      left: 5px;
      line-height: normal;
      padding: 15px 23px 14px;
      text-decoration: none;
      top: 5px;
      width: auto;
      z-index: 100000;
    }

    /*END*/

    /* Styling Headers with slanted borders */

    /*Code taken from UVA main - need to clean up and standardize*/
    .header-wrapper {
      background: url(https://static.lib.virginia.edu/files/hp-grayhorizline.png) repeat-x center center;
      background-size: 5px auto;
      clear: both;
      margin-top: 48px;
      margin-top: 3rem;
      padding: 0 30px;
      padding: 0 1.875rem;
      margin-bottom: 48px;
      margin-bottom: 3rem;
    }

    .header-wrapper .header-wrapper-bg {
      background: var(--uvalib-main-white);
      border-left: var(--uvalib-grey-500) solid 1px;
      border-right: var(--uvalib-grey-500) solid 1px;
      display: inline-block;
      left: 50%;
      position: relative;
      -moz-transform: skew(-20deg) translateX(-50%);
      -ms-transform: skew(-20deg) translateX(-50%);
      -o-transform: skew(-20deg) translateX(-50%);
      -webkit-transform: skew(-20deg) translateX(-50%);
      transform: skew(-20deg) translateX(-50%);
    }

    .header-wrapper .header-wrapper-bg h1,
    .header-wrapper .header-wrapper-bg h2,
    .header-wrapper .header-wrapper-bg h3 {
      margin-top: calc(var(--uvalib-spacing-unit)/8);
      margin-bottom: calc(var(--uvalib-spacing-unit)/8);
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      line-height: 1;
      padding: 5px 30px;
      -moz-transform: skew(20deg);
      -ms-transform: skew(20deg);
      -o-transform: skew(20deg);
      -webkit-transform: skew(20deg);
      transform: skew(20deg);
    }

    /*END*/

    /*END*/

    /*********************************************/
    /*          PAGE SPECIFIC CSS                */
    /*********************************************/

    /* ASK A LIBRARIAN */
    /* .mobile-small-min { min-width: 320px; max-width: 500px;  } */
    .askalibrarian-container {
      margin-left: var(--uvalib-spacing-unit);
      margin-right: var(--uvalib-spacing-unit);
      margin-bottom: var(--uvalib-spacing-unit);
    }

    /* END */

    /* HOMEPAGE CARDS */
    .events .event {
      padding-bottom: var(--uvalib-spacing-unit);
    }

    .events .category,
    #news-content .title {
      font-family: var(--uva-font-family);
      font-weight: var(--font-weight-demi);
    }

    #news-content .preview {
      margin-top: calc(var(--uvalib-spacing-unit)/-1.25);
    }

    .reno-buttons {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      padding-bottom: 20px;
      margin-top: 180px;
    }

    .reno-buttons paper-button {
      margin-top: 20px;
    }

    :host([medium-screen]) .reno-buttons {
      padding: 0 20px 20px;
    }

    :host([large-screen]) .reno-buttons {
      padding: 0 20px 20px;
    }

    /*END*/

    /* ABOUT US PAGE */
    :host([small-screen]) figure#profileImage {
      margin: 2em auto;
      text-align: center;
    }

    :host([small-screen]) #profileImage figcaption {
      margin-top: 1em;
      width: 300px;
    }

    :host([medium-screen]) figure#profileImage {
      margin-top: 2em;
      text-align: center;
    }

    :host([medium-screen]) #profileImage figcaption {
      margin-top: 1em;
      width: 300px;
    }

    :host([large-screen]) figure#profileImage {
      margin: 2em 0 2em 4em;
      text-align: center;
    }

    :host([large-screen]) #profileImage figcaption {
      margin-top: 1em;
      width: 300px;
    }

    :host([small-screen]) #profile {
      margin-bottom: 2em;
    }

    :host([medium-screen]) #profile {
      margin: 2em;
    }

    :host([large-screen]) #profile {
      margin: 2em 4em 2em 6em;
      min-width: 300px;
    }

    img.aboutSig {
      width: 200px;
    }

    /*END*/

    /* SUPPORT THE LIBRARY */
    #supportAnnualFund,
    #supportCollect,
    #supportConserPreser {
      --uvalib-pc-max-width: 90%;
      --uvalib-pc-min-width: 90%;
    }

    /*END*/

    /* LIBRARY SPECIFIC PAGES (e.g. RMC) */
    #library-template .lt-thumbnail figure {
      border: 1px solid var(--uvalib-grey-500);
    }

    #library-template .lead-image figure {
      margin: 0;
    }

    #library-template paper-button {
      background-color: var(--uvalib-main-rotunda-orange);
      color: var(--uvalib-main-white);
    }

    #library-template dt {
      font-weight: var(--font-weight-medium);
    }

    #library-template dd {
      margin-left: var(--uvalib-spacing-unit);
      margin-bottom: calc(var(--uvalib-spacing-unit)*2);
    }

    /*END*/

    /* RENOVATION PAGES */
    #supportLibrary {
      --paper-card: {
        margin: calc(var(--uvalib-spacing-unit)/8);
        background-color: blue;
        max-width: 600px;
        min-width: 290px;
      }
    }

    #supportLibrary figure {
      margin-left: 0;
      margin-right: 0;
    }

    /*END*/

    /* SERVICES - GRAD STUDENT PAGE */
    /*use this to set the header styles*/
    #services-page h2 {
      text-align: center;
    }

    #services-page h2.background {
      margin: var(--uvalib-spacing-unit) -1000px var(--uvalib-spacing-unit) -1000px;
      padding: calc(var(--uvalib-spacing-unit)/4) 1000px calc(var(--uvalib-spacing-unit)/4) 1000px;
      background-color: var(--uvalib-secondary-light-gray);
    }

    #services-page ul {
      padding-left: 0;
    }

    #services-page ul li {
      list-style-type: none;
    }

    #services-page ul li h3,
    .services-graphic-index h3 {
      margin-bottom: 0;
    }

    #services-page ul li p {
      margin-top: .25em;
      margin-bottom: .25em;
    }

    #services-page ul li a,
    .services-graphic-index a:not(.basic) {
      color: var(--uvalib-main-rotunda-orange);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
    }

    #services-page ul li a:hover,
    .services-graphic-index a:hover:not(.basic) {
      text-decoration: underline;
    }

    /* grid */
    .services-grid-container {
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 2rem;
    }

    .services-grid-container {
      grid-gap: 1rem;
    }

    :host([medium-screen]) .services-grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 1rem;
    }

    :host([large-screen]) .services-grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
    }

    /*grid end*/
    /*individual block with image, title, blurb, and link(if applicable) Use Flexbox*/
    .services-graphic-index {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
      align-items: center;
      border: 2px solid var(--uvalib-secondary-light-gray);
      padding: 1.5em;
    }

    .services-graphic-index img.icon {
      width: 100px;
      height: 100px;
    }

    a.clickbox {
      text-decoration: none;
      color: inherit;
    }

    a.clickbox:hover {
      background-color: var(--uvalib-secondary-light-gray);
    }

    .no-border {
      border: none;
    }

    #Request,
    #Publishing,
    #Instruction,
    #Consultation,
    #Spaces {
      padding-top: 2em;
    }

    /*END*/

    /* COLLECTIONS PAGE */
    :host([small-screen]) #collections {
      @apply --layout-vertical;
    }

    :host([small-screen]) #collections div {
      border-left: none;
    }

    #collections {
      margin-bottom: 2em;
    }

    #collections div {
      border-left: 1px solid var(--uvalib-secondary-md-grey);
      padding-left: 2em;
      padding-right: 2em;
    }

    #collections div:first-child {
      border-left: none;
    }

    #collections p {
      font-style: italic;
    }

    .aldCollectionTable td {
      border-bottom: 1px solid var(--color-medium-gray);
    }

    .aldCollectionTable th,
    .aldCollectionTable td {
      text-align: center;
    }

    .aldCollectionTable th[scope="row"] {
      text-align: left;
      border-bottom: 1px solid var(--color-medium-gray);
    }

    .aldCollectionTable tr:last-child th,
    .aldCollectionTable tr:last-child td {
      border-bottom: none;
    }

    /*new styling August 2019*/
    .collections-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }

    .collections-grid.third {
      grid-template-columns: 250px 1fr;
      margin-top: 2rem;
    }

    :host([small-screen]) .collections-grid,
    :host([small-screen]) .collections-grid.third {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }

    .collections-grid.third div h3 {
      margin-top: 0;
      padding-top: 0;
    }

    .collections-seperator::before,
    .collections-seperator::after {
      content: " ";
      display: block;
      width: 100%;
      height: 1em;
      margin: 0 auto;
      padding: 35px 0;
      background: linear-gradient(to right, #FFF, var(--uvalib-main-rotunda-orange), #FFF) center / 100% 2px no-repeat;
    }

    .collections-section {
      display: block;
      margin-bottom: 2rem;
    }

    #collectionForm {
      height: 450px;
    }

    :host([small-screen]) #collectionForm {
      height: 370px;
    }

    :host([medium-screen]) #collectionForm {
      height: 415px;
    }

    /*END*/

    /* LIBRA LANDING PAGE */
    .libraLanding uvalib-simple-search-box {
      --uvalib-background-search: var(--uvalib-main-jefferson-blue);
    }

    /*END*/

    /* STAFF BIO PAGE */
    :host([small-screen]) #staff-bio-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      margin-bottom: 2rem;
    }

    :host([small-screen]) .bio-quick-details {
      margin-top: 100px;
      margin-bottom: 0px;
      display: block;
    }

    #staff-bio-container {
      display: grid;
      grid-template-rows: 70px 1fr;
      grid-template-columns: 330px 1fr;
      grid-gap: 2em;
      margin-bottom: 2rem;
    }

    .spacer-row {
      grid-column: 1 / 3;
    }

    .bio-quick-details,
    .bio-web-links {
      margin-bottom: 2em;
      background-color: var(--uvalib-secondary-light-gray);
      text-align: center;
      padding: 2em;
    }

    .bio-quick-details .bio-image .round {
      margin-top: -130px;
      width: 260px;
      height: 260px;
    }

    .bio-quick-details .display-name {
      @apply --h2;
      color: var(--uvalib-main-rotunda-orange);
      margin-top: 0.75em;
    }

    .bio-quick-details .job-title,
    .bio-department p,
    .bio-languages p,
    .bio-pronouns p {
      margin-top: calc(var(--uvalib-spacing-unit)/4);
      line-height: 1.15;
    }

    .bio-contact-info,
    .bio-department,
    .bio-languages,
    .bio-pronouns {
      text-align: left;
    }

    .bio-department h4,
    .bio-languages h4,
    .bio-pronouns h4 {
      margin-bottom: 0;
    }

    .bio-pronouns p {
      color: var(--uvalib-main-rotunda-orange);
    }

    .bio-web-links h4 {
      margin: 0 0 0.75em 0;
    }

    .bio-web-links a,
    .bio-web-links a:before {
      color: var(--uvalib-main-rotunda-orange);
      font-size: 1.25em;
      text-decoration: none;
    }

    .bio-web-links a:hover,
    .bio-web-links a:hover:before {
      color: var(--uvalib-main-jefferson-blue);
    }

    a.uvalib-icon-twitter-square:before {
      color: #1DA1F2 !important;
    }

    a.uvalib-icon-linkedin-square:before {
      color: #0077B5 !important;
    }

    a.uvalib-icon-linkedin-square:hover:before,
    a.uvalib-icon-twitter-square:hover:before,
    a.uvalib-ai-orcid:hover:before {
      color: var(--uvalib-main-jefferson-blue) !important;
    }

    #staff-bio-container a paper-button {
      margin-top: var(--uvalib-spacing-unit);
      background-color: var(--uvalib-main-rotunda-orange);
      border-color: var(--uvalib-main-rotunda-orange);
      color: white;

      --paper-button-raised-keyboard-focus: {
        border-color: var(--uvalib-orange-200);
        background-color: var(--uvalib-orange-200) !important;
        color: #000 !important;
      }

      ;
    }

    #staff-bio-container a:hover paper-button {
      background-color: var(--uvalib-orange-200);
      border-color: var(--uvalib-orange-200);
      color: var(--uvalib-black);
      font-weight: bold;
    }

    /*END*/

    /* LEARNING RESOURCES PAGE */
    #tnl-container .tools>div {
      width: 90%;
    }

    #tnl-container uva-accordion {
      --uva-accordion-item-panel-padding: 0 !important;
      /* --uva-accordion-item-heading-border-bottom: 1px solid; */
    }

    #tnl-container uva-accordion:last-child {
      --uva-accordion-item-heading-border-bottom: 1px solid;
    }

    #tnl-container ul {
      margin: 0;
      padding: 0;
    }

    #tnl-container paper-button {
      text-transform: none;
      margin: var(--uvalib-spacing-unit) !important;
    }

    #tnl-container li {
      padding: var(--uvalib-spacing-unit) !important;
      list-style-type: none !important;
    }

    #tnl-container li>h4 {
      margin-top: 0;
    }

    #tnl-container .shaded {
      background-color: var(--uvalib-secondary-lt-grey);
      padding: var(--uvalib-spacing-unit);
    }

    /* #tnl-container li:nth-of-type(even) {
      background-color: var(--uvalib-secondary-lt-grey);
    } */
    #tnl-container div>img {
      float: left;
      /*
      max-width: 80px;
      max-height: 80px;
      */
      padding-right: var(--uvalib-spacing-unit);
    }

    #tnl-container ul li>h4 {
      margin-top: 50px;
    }

    #tnl-container ul li:first-child>h4 {
      margin-top: inherit;
    }

    #tnl-container .linkto {
      font-weight: bold;
      margin: calc(var(--uvalib-spacing-unit)*2) 0;
    }

    #tnl-container .linkto img {
      height: 15px;
      padding-left: calc(var(--uvalib-spacing-unit)*.5)
    }

    #tnl-container uvalib-simple-search-box {
      --uvalib-background-search: var(--uvalib-secondary-web-blue);
    }

    #tnl-container paper-radio-button {
      margin-left: var(--uvalib-spacing-unit);
    }

    #tnl-container .azbody {
      padding: var(--uvalib-spacing-unit);
      /* background-color: var(--uvalib-secondary-lt-grey); */
    }

    #tnl-container uva-accordion-item {
      --uvalib-box-shadow-custom: none;
    }

    #tnl-container .permalink a {
      font-size: calc(var(--uvalib-main-font-size-unit)*0.75);
      padding-top: var(--uvalib-spacing-unit);
    }

    #tnl-container uva-results-highlighter {
      --uva-results-highlighter-color: var(--color-medium-gray);
    }

    #tnl-container .alert {
      margin: var(--uvalib-spacing-unit);
    }

    #tnl-container .cat:not(:first-child) {
      margin-left: -.3em;
    }

    #tnl-container .cat:not(:first-child):before {
      content: ", ";
    }

    uva-results-highlighter {
      --uva-results-highlighter-color: var(--uvalib-secondary-light-gray);
    }

    /*END*/


    /*********************************************/
    /*              BROWSER HACKS                */
    /*********************************************/

    /* Hack to get tables working properl in IE11 */
    .table {
      display: table;
    }

    .thead {
      display: table-header-group;
    }

    .tbody {
      display: table-row-group;
    }

    .tr {
      display: table-row;
    }

    .td,
    .th {
      display: table-cell;
    }

    .colgroup {
      display: table-column-group;
    }

    .col {
      display: table-column;
    }

    </style>
  </template>
</dom-module>
`;Hr.setAttribute("style","display: none;"),document.head.appendChild(Hr.content),import("./uvalib-model-alerts-142fe995.js");class Br extends je{static get is(){return"uvalib-alerts"}static get template(){return Be`

      <custom-style>
        <style include="uvalib-theme">
          :host {
            display: block;
            text-align: left;
            visibility: hidden;
          }
          .alert-item {
            min-height: 41px;
            background-color: var(--color-primary-orange);
            border-width: 2px 0 0 0;
            border-color: var(--color-white);
            border-style: solid;
            color: var(--color-white);
            @apply --layout-horizontal;
            @apply --layout-center-justified;
          }
          .alert-item div {
            width: 100%;
            max-width: var(--uvalib-display-width-max);
            padding: .15em;
          }
          .alert-item.alert1 {
            background-color: var(--color-emergency-red);
          }
          .alert-item.alert2 {
            background-color: var(--color-primary-orange);
          }
          .alert-item.alert3 {
            background-color: var(--uvalib-orange-200);
            color: var(--uvalib-black);
          }
          .alert-item.alert1 p a, .alert-item.alert2 p a {
            text-decoration: underline;
            color: var(--color-white);
          }
          .alert-item.alert2 paper-button:hover {
            background-color: #C54800;
            color: var(--uvalib-white);
          }
          .alert-item.alert3 p a {
            text-decoration: underline;
            color: var(--color-black);
          }
          .alert-item.alert1 p a:hover, .alert-item.alert2 p a:hover, .alert-item.alert3 p a:hover {
            font-style: italic;
          }
          .alert-item.alert1 p a:focus, .alert-item.alert2 p a:focus, .alert-item.alert3 p a:focus {
            outline: var(--color-accessibility-outline-dark-bg) dotted 3px;
            padding: .15em;
          }
          .alert-item.alert3 paper-button {
            color: var(--uvalib-black);
            border-color: var(--color-primary-orange);
          }
          .alert-item.alert3 paper-button:hover {
            background-color: var(--uvalib-secondary-web-orange);
            color: var(--uvalib-white);
          }
          .alert-item.alert1 .alert-head:before, .alert-item.alert2 .alert-head:before {
            font-family: 'uvalib-custom-icons' !important;
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            content: "\f06a";
            font-size: 2em;
            padding-right: .25em;
          }

          .alert-head {
            @apply --layout-horizontal;
          }
          .alert-title {
            @apply --layout-flex;
          }
          [slot="markdown-html"] p {
            margin:0;
            padding:0;
          }
          paper-button {
            color: var(--color-white);
            position: static;
            z-index: auto;
          }
          .hidden {
            display: none;
          }
        </style>
      </custom-style>
      <uvalib-model-alerts id="alertsModel" alerts="{{_alerts}}" seen-count="{{seenCount}}" seen="{{_alertsSeen}}"></uvalib-model-alerts>
      <dom-repeat items="[[_alerts]]" as="alert">
        <template>
          <iron-collapse opened$="[[!alert.seen]]" on-opened-changed="_sizeChanged" on-transitioning-changed="_sizeChanged">
            <div class$="alert-item [[alert.severity]]" uuid="[[alert.uuid]]">
              <div>
              <div class="alert-head">
                <div class="alert-title" on-click="_toggleIt">[[alert.title]]</div>
                <template is="dom-if" if="[[!_isHot(alert.severity)]]">
                  <paper-button class="toggle" on-click="_toggleIt">More</paper-button>
                  <paper-button class="toggle hidden" on-click="_toggleIt">Less</paper-button>
                  <paper-button on-click="_dismissIt">Dismiss</paper-button>
                </template>
              </div>
              <iron-collapse class="body-collapse" opened$="[[_isHot(alert.severity)]]" on-opened-changed="_sizeChanged" on-transitioning-changed="_sizeChanged">
                <div class="alert-body" inner-h-t-m-l="[[alert.body]]"></div>
              </iron-collapse>
              </div>
            </div>
          </iron-collapse>
        </template>
      </dom-repeat>
    `}static get properties(){return{_alerts:{type:Array,observer:"_sizeChanged"},_alertsSeen:Array,seenCount:{type:Number,notify:!0}}}_sizeChanged(){if(this._alerts.length>0){var e=[];e.push(import("./iron-collapse-c8edc6f1.js")),e.push(import("./paper-button-fd69e636.js")),Promise.all(e).then(()=>{this.style.visibility="visible"})}this.dispatchEvent(new CustomEvent("size-changed",{detail:{height:this.clientHeight}}))}_isHot(e){return"alert1"===e}_toggleIt(e){e.currentTarget.parentElement.parentElement.querySelector(".body-collapse").toggle(),e.currentTarget.parentElement.querySelectorAll(".toggle").forEach((function(e){e.classList.toggle("hidden"),e.classList.contains("hidden")||e.focus()}))}_dismissIt(e){var t=e.currentTarget.parentElement.parentElement.parentElement.uuid;this.$.alertsModel.setSeen(t)}unseeAll(){this.set("_alertsSeen",[])}seeAll(){this.$.alertsModel.setAllSeen()}}customElements.define(Br.is,Br);export{Fr as B,cr as P,Ki as d,Be as h,s as u};
