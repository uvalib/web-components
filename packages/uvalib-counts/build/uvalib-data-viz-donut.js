import"./index.esm-0a56909b.js";import"./uvalib-model-realtime-database-1730f91c.js";!function(){if(!("adoptedStyleSheets"in document)){var n="ShadyCSS"in window&&!window.ShadyCSS.nativeShadow,o=[],e=[],t=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,i={loaded:!1},s={body:null,CSSStyleSheet:null},d=CSSStyleSheet,u=/@import\surl(.*?);/gi,h=["addImport","addPageRule","addRule","deleteRule","insertRule","removeImport","removeRule"],p=["replace","replaceSync"],y=function(){function n(){var n=document.createElement("style");i.loaded?s.body.appendChild(n):(document.head.appendChild(n),n.disabled=!0,o.push(n));var e=n.sheet;return r.set(e,{adopters:new Map,actions:[],basicStyleElement:n}),e}var e=n.prototype;return e.replace=function(n){var o=this,e=f(n);return new Promise((function(n,t){if(r.has(o)){var a=r.get(o).basicStyleElement;a.innerHTML=e,n(a.sheet),B(o)}else t(new Error("Can't call replace on non-constructed CSSStyleSheets."))}))},e.replaceSync=function(n){var o=f(n);if(r.has(this)){var e=r.get(this).basicStyleElement;return e.innerHTML=o,B(this),e.sheet}throw new Error("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")},n}();Object.defineProperty(y,Symbol.hasInstance,{configurable:!0,value:S}),C(d.prototype),window.CSSStyleSheet=y,function(){var o={configurable:!0,get:function(){return t.get(this)||[]},set:function(n){var o=t.get(this)||[];!function(n,o){var e=o===document?"Document":"ShadowRoot";if(!Array.isArray(n))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+e+": Iterator getter is not callable.");if(!n.every(S))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+e+": Failed to convert value to 'CSSStyleSheet'");var r=n.filter((function(o,e){return n.indexOf(o)===e}));t.set(o,r)}(n,this);var e=this===document?m()?this.head:this.body:this,a="isConnected"in e?e.isConnected:document.body.contains(e);window.requestAnimationFrame((function(){a&&(v(e),function(n,o){for(var e=g(n),t=0,a=o.length;t<a;t++)if(!(e.indexOf(o[t])>-1)){var c=r.get(o[t]).adopters,i=l.get(n),s=c.get(n);s||(s=c.get(document.head)),i.disconnect(),s.parentNode.removeChild(s),i.observe()}}(e,o))}))}};if(Object.defineProperty(Document.prototype,"adoptedStyleSheets",o),"undefined"!=typeof ShadowRoot){var e=Element.prototype.attachShadow;Element.prototype.attachShadow=function(){var o=n?this:e.apply(this,arguments);return b(o),o},Object.defineProperty(ShadowRoot.prototype,"adoptedStyleSheets",o)}}(),m()?document.addEventListener("DOMContentLoaded",w):w()}function S(n){return n instanceof d||n instanceof s.CSSStyleSheet}function m(){return"loading"===document.readyState}function g(n){return t.get(n.parentNode===document.documentElement?document:n)}function f(n){var o=n.match(u,"")||[],e=n;return o.length&&(console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),o.forEach((function(n){e=e.replace(n,"")}))),e}function C(n){p.forEach((function(o){n[o]=function(){return y.prototype[o].apply(this,arguments)}})),h.forEach((function(o){var e=n[o];n[o]=function(){var n=arguments,t=e.apply(this,n);if(r.has(this)){var a=r.get(this),l=a.adopters,c=a.actions;l.forEach((function(e){e.sheet&&e.sheet[o].apply(e.sheet,n)})),c.push([o,n])}return t}}))}function B(n){var o=r.get(n),e=o.adopters,t=o.basicStyleElement;e.forEach((function(n){n.innerHTML=t.innerHTML}))}function v(n){for(var o=document.createDocumentFragment(),t=g(n),i=l.get(n),s=0,d=t.length;s<d;s++){var u=r.get(t[s]),h=u.adopters,p=u.basicStyleElement,y=h.get(n);y?(i.disconnect(),o.appendChild(y),(!y.innerHTML||y.sheet&&!y.sheet.cssText)&&(y.innerHTML=p.innerHTML),i.observe()):((y=document.createElement("style")).innerHTML=p.innerHTML,a.set(y,n),c.set(y,0),h.set(n,y),o.appendChild(y)),n===document.head&&e.push(y)}n.insertBefore(o,n.firstChild);for(var S=0,m=t.length;S<m;S++){var f=r.get(t[S]),C=f.adopters,B=f.actions,v=C.get(n),A=c.get(v);if(B.length>0){for(var b=A,w=B.length;b<w;b++){var M=B[b],D=M[0],k=M[1];v.sheet[D].apply(v.sheet,k)}c.set(v,B.length-1)}}}function A(o){for(var e=0,t=o.length;e<t;e++){for(var r=o[e],l=r.addedNodes,c=r.removedNodes,i=0,s=c.length;i<s;i++){var d=a.get(c[i]);d&&v(d)}if(!n)for(var u=0,h=l.length;u<h;u++)for(var p=document.createNodeIterator(l[u],NodeFilter.SHOW_ELEMENT,(function(n){return n.shadowRoot&&n.shadowRoot.adoptedStyleSheets.length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),y=void 0;y=p.nextNode();)v(y.shadowRoot)}}function b(n){var o=new MutationObserver(A),e={observe:function(){o.observe(n,{childList:!0,subtree:!0})},disconnect:function(){o.disconnect()}};l.set(n,e),e.observe()}function w(){var n=document.createElement("iframe");n.hidden=!0,document.body.appendChild(n),s.body=n.contentWindow.document.body,s.CSSStyleSheet=n.contentWindow.CSSStyleSheet,C(n.contentWindow.CSSStyleSheet.prototype),b(document.body),i.loaded=!0;for(var t=document.createDocumentFragment(),r=0,a=o.length;r<a;r++)o[r].disabled=!1,t.appendChild(o[r]);s.body.appendChild(t);for(var l=0,c=e.length;l<c;l++)t.appendChild(e[l]);document.body.insertBefore(t,document.body.firstChild),o.length=0,e.length=0}}();var n=new CSSStyleSheet;n.replaceSync('/** @color Black */\n/** @color White */\n/** @color Danger */\n/** @color Success */\n/* OFFICIAL 2019-2020 BRAND COLORS */\n/**\n * @color Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (lighter)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Dark\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Darkest\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Text Light\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red Emergency\n * @section 2019-2020 Brand Colors\n */\n/*Secondary Brand Colors*/\n/**\n * @color Secondary Web Orange\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Web Blue\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Cyan\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Yellow\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Teal\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Magenta\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Green (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Light Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Medium Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Text Grey (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Dark Grey (ADA compliant for hover over shaded table rows)\n * @section Secondary Brand Colors\n */\n/*ADA compliant for hover over shaded table rows*/\n/**\n * @color Secondary Text Almost Black (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Emergency Red (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/* STATUS COLORS - ADA COMPLIANT - IBM MODEL */\n/**\n * @color Status Lite Orange (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Orange (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Magenta (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Purple (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Blue (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Available (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Modified (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Not Available (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/** @color Black */\n/** @color White */\n/** @color Danger */\n/** @color Success */\n/* OFFICIAL 2019-2020 BRAND COLORS */\n/**\n * @color Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (lighter)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Dark\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Darkest\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Text Light\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red Emergency\n * @section 2019-2020 Brand Colors\n */\n/*Secondary Brand Colors*/\n/**\n * @color Secondary Web Orange\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Web Blue\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Cyan\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Yellow\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Teal\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Magenta\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Green (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Light Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Medium Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Text Grey (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Dark Grey (ADA compliant for hover over shaded table rows)\n * @section Secondary Brand Colors\n */\n/*ADA compliant for hover over shaded table rows*/\n/**\n * @color Secondary Text Almost Black (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Emergency Red (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/* STATUS COLORS - ADA COMPLIANT - IBM MODEL */\n/**\n * @color Status Lite Orange (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Orange (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Magenta (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Purple (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Blue (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Available (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Modified (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/**\n * @color Status Not Available (ADA compliant - IBM Model)\n * @section Status Colors\n */\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/* common scsss variables for V4 client */\n/* small media width */\n/* spacing unit of measure */\n/* font variables */\n/* be sure to load fonts.js */\n/*Pulling in fonts via Typekit, weights will pull in font variants*/\n/*try to refrain from using this one, difficult to read on small screens*/\n/*not used?*/\n/* Main sizing unit - changing this will update most of the font size/spacing variables on the site */\n/* typography variables */\n/* used for headers in card body */\n/* main body font */\n#container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n#occupancy {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n.open #closed, .closed #occupancy {\n  display: none; }\n\n.closed #open, .open #occupancy {\n  display: block; }\n\n.closed {\n  font-family: "franklin-gothic-urw", arial, sans-serif;\n  font-weight: 700;\n  font-size: calc($uvalib-main-font-size-unit*3.75);\n  line-height: calc($uvalib-main-font-size-unit*3.75);\n  color: #232D4B;\n  margin-top: calc($uvalib-spacing-unit/4);\n  margin-bottom: calc($uvalib-spacing-unit/1.5); }\n\n.name {\n  font-family: "franklin-gothic-urw", arial, sans-serif;\n  font-weight: 700;\n  font-size: calc($uvalib-main-font-size-unit*3.75);\n  line-height: calc($uvalib-main-font-size-unit*3.75);\n  color: #232D4B;\n  margin-top: calc($uvalib-spacing-unit/4);\n  margin-bottom: calc($uvalib-spacing-unit/1.5);\n  font-size: xx-large; }\n\n.chart-text {\n  font-family: "franklin-gothic-urw", arial, sans-serif;\n  font-weight: 700;\n  font-size: calc($uvalib-main-font-size-unit*3.75);\n  line-height: calc($uvalib-main-font-size-unit*3.75);\n  color: #232D4B;\n  margin-top: calc($uvalib-spacing-unit/4);\n  margin-bottom: calc($uvalib-spacing-unit/1.5);\n  fill: #000;\n  transform: translateY(0.25em); }\n\n.chart-number {\n  font-size: 0.6em;\n  line-height: 1;\n  text-anchor: middle; }\n\nfigure {\n  margin: 0;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column; }\n\n@media (min-width: 768px) {\n  figure {\n    flex-direction: column; } }\n\n.figure-content,\n.figure-key {\n  font-family: "franklin-gothic-urw", arial, sans-serif;\n  font-weight: 700;\n  font-size: calc($uvalib-main-font-size-unit*3.75);\n  line-height: calc($uvalib-main-font-size-unit*3.75);\n  color: #232D4B;\n  margin-top: calc($uvalib-spacing-unit/4);\n  margin-bottom: calc($uvalib-spacing-unit/1.5);\n  flex: 1;\n  align-self: center;\n  max-width: 200px; }\n\n.figure-content svg {\n  height: auto; }\n\n.figure-key {\n  min-width: calc(8 / 12); }\n\n.shape-circle {\n  display: inline-block;\n  vertical-align: middle;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%; }\n\n.donut-hole {\n  fill: #FFF; }\n\n.donut-ring {\n  stroke: #DADADA;\n  stroke-width: 5px; }\n\n.donut-segment {\n  stroke: #648FFF;\n  stroke-width: 5px; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n'),document.adoptedStyleSheets=[...document.adoptedStyleSheets,n];class o extends HTMLElement{static get observedAttributes(){return["data-event"]}constructor(){super()}connectedCallback(){this._setupDom(),this.addEventListener("uvalib-model-data-value",function(n){const o=n.target.data;this.container.setAttribute("class",o.isOpenNow?"open":"closed"),this._setValues(this.name,o.shortName),this.capacity.innerHTML=o.maximumAttendeeCapacity,this.occupied.innerHTML=o.occupancy.value;const e=Math.round((o.occupancy.value/o.maximumAttendeeCapacity*100).toFixed(3));this._setValues(this.percent,e+"%"),this.shadowRoot.querySelector(".donut-segment").setAttribute("stroke-dasharray",`${e} ${100-e}`),this.shadowRoot.querySelector(".donut-segment").setAttribute("level",`${e} ${100-e}`),this.style.visibility="visible"}.bind(this))}_setValues(n,o){n.forEach(n=>n.innerHTML=o)}_setupDom(){this.shadow=this.attachShadow({mode:"open"}),this.shadow.adoptedStyleSheets=[n],this.shadow.innerHTML='\n  <style>\n      :host {\n        visibility: hidden;\n      }\n  </style>\n  <div id="container">\n      <div id="libraryName"><span class="sr-only">Current occupancy and capacity at </span><span class="name"></span></div>\n      <div labled-by="libraryName" id="occupancy" class="open">\n        <figure>\n          <div class="figure-content">\n            <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut" aria-labelledby="occupancy-title occupancy-desc" role="img">\n              <title id="occupancy-title">Capacity</title>\n              <desc id="occupancy-desc">Donut chart showing <span class="percent-occupied"></span> occupied of capacity in <span class="name"></span> Library currently</desc>\n              <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" role="presentation"></circle>\n              <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" role="presentation"></circle>    \n              <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke-dasharray="0 100" stroke-dashoffset="25" aria-labelledby="donut-segment-1-title donut-segment-1-desc">\n                <title id="donut-segment-1-title">Current Occupancy</title>\n                <desc id="donut-segment-1-desc"></desc>\n              </circle>\n              <g class="chart-text">\n                <text id="percent-occupied" class="percent-occupied chart-number" x="50%" y="50%"></text>\n              </g>\n            </svg>\n          </div>\n          <figcaption class="figure-key">\n            <div>Occupancy: <span id="occupied"></span><span class="sr-only"> seats occupied of</span>/<span id="capacity"></span></div>\n          </figcaption>\n        </figure> \n      </div>\n      <div id="closed">Library is currently closed</div>\n  </div>\n      ',this.container=this.shadow.querySelector("#container"),this.name=this.container.querySelectorAll(".name"),this.percent=this.container.querySelectorAll(".percent-occupied"),this.occupied=this.container.querySelector("#occupied"),this.capacity=this.container.querySelector("#capacity")}attributeChangedCallback(n,o,e){switch(n){case"data-event":this.dataEvent=e}}}window.customElements.define("uvalib-data-viz-donut",o);
