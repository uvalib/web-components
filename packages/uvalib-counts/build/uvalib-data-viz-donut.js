import"./index.esm-0a56909b.js";import"./uvalib-model-realtime-database-1730f91c.js";!function(){if(!("adoptedStyleSheets"in document)){var n="ShadyCSS"in window&&!window.ShadyCSS.nativeShadow,e=[],o=[],r=new WeakMap,t=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,s={loaded:!1},i={body:null,CSSStyleSheet:null},d=CSSStyleSheet,h=/@import\surl(.*?);/gi,u=["addImport","addPageRule","addRule","deleteRule","insertRule","removeImport","removeRule"],p=["replace","replaceSync"],y=function(){function n(){var n=document.createElement("style");s.loaded?i.body.appendChild(n):(document.head.appendChild(n),n.disabled=!0,e.push(n));var o=n.sheet;return t.set(o,{adopters:new Map,actions:[],basicStyleElement:n}),o}var o=n.prototype;return o.replace=function(n){var e=this,o=S(n);return new Promise((function(n,r){if(t.has(e)){var a=t.get(e).basicStyleElement;a.innerHTML=o,n(a.sheet),B(e)}else r(new Error("Can't call replace on non-constructed CSSStyleSheets."))}))},o.replaceSync=function(n){var e=S(n);if(t.has(this)){var o=t.get(this).basicStyleElement;return o.innerHTML=e,B(this),o.sheet}throw new Error("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")},n}();Object.defineProperty(y,Symbol.hasInstance,{configurable:!0,value:m}),C(d.prototype),window.CSSStyleSheet=y,function(){var e={configurable:!0,get:function(){return r.get(this)||[]},set:function(n){var e=r.get(this)||[];!function(n,e){var o=e===document?"Document":"ShadowRoot";if(!Array.isArray(n))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Iterator getter is not callable.");if(!n.every(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Failed to convert value to 'CSSStyleSheet'");var t=n.filter((function(e,o){return n.indexOf(e)===o}));r.set(e,t)}(n,this);var o=this===document?g()?this.head:this.body:this,a="isConnected"in o?o.isConnected:document.body.contains(o);window.requestAnimationFrame((function(){a&&(v(o),function(n,e){for(var o=f(n),r=0,a=e.length;r<a;r++)if(!(o.indexOf(e[r])>-1)){var c=t.get(e[r]).adopters,s=l.get(n),i=c.get(n);i||(i=c.get(document.head)),s.disconnect(),i.parentNode.removeChild(i),s.observe()}}(o,e))}))}};if(Object.defineProperty(Document.prototype,"adoptedStyleSheets",e),"undefined"!=typeof ShadowRoot){var o=Element.prototype.attachShadow;Element.prototype.attachShadow=function(){var e=n?this:o.apply(this,arguments);return w(e),e},Object.defineProperty(ShadowRoot.prototype,"adoptedStyleSheets",e)}}(),g()?document.addEventListener("DOMContentLoaded",A):A()}function m(n){return n instanceof d||n instanceof i.CSSStyleSheet}function g(){return"loading"===document.readyState}function f(n){return r.get(n.parentNode===document.documentElement?document:n)}function S(n){var e=n.match(h,"")||[],o=n;return e.length&&(console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),e.forEach((function(n){o=o.replace(n,"")}))),o}function C(n){p.forEach((function(e){n[e]=function(){return y.prototype[e].apply(this,arguments)}})),u.forEach((function(e){var o=n[e];n[e]=function(){var n=arguments,r=o.apply(this,n);if(t.has(this)){var a=t.get(this),l=a.adopters,c=a.actions;l.forEach((function(o){o.sheet&&o.sheet[e].apply(o.sheet,n)})),c.push([e,n])}return r}}))}function B(n){var e=t.get(n),o=e.adopters,r=e.basicStyleElement;o.forEach((function(n){n.innerHTML=r.innerHTML}))}function v(n){for(var e=document.createDocumentFragment(),r=f(n),s=l.get(n),i=0,d=r.length;i<d;i++){var h=t.get(r[i]),u=h.adopters,p=h.basicStyleElement,y=u.get(n);y?(s.disconnect(),e.appendChild(y),(!y.innerHTML||y.sheet&&!y.sheet.cssText)&&(y.innerHTML=p.innerHTML),s.observe()):((y=document.createElement("style")).innerHTML=p.innerHTML,a.set(y,n),c.set(y,0),u.set(n,y),e.appendChild(y)),n===document.head&&o.push(y)}n.insertBefore(e,n.firstChild);for(var m=0,g=r.length;m<g;m++){var S=t.get(r[m]),C=S.adopters,B=S.actions,v=C.get(n),b=c.get(v);if(B.length>0){for(var w=b,A=B.length;w<A;w++){var k=B[w],x=k[0],E=k[1];v.sheet[x].apply(v.sheet,E)}c.set(v,B.length-1)}}}function b(e){for(var o=0,r=e.length;o<r;o++){for(var t=e[o],l=t.addedNodes,c=t.removedNodes,s=0,i=c.length;s<i;s++){var d=a.get(c[s]);d&&v(d)}if(!n)for(var h=0,u=l.length;h<u;h++)for(var p=document.createNodeIterator(l[h],NodeFilter.SHOW_ELEMENT,(function(n){return n.shadowRoot&&n.shadowRoot.adoptedStyleSheets.length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),y=void 0;y=p.nextNode();)v(y.shadowRoot)}}function w(n){var e=new MutationObserver(b),o={observe:function(){e.observe(n,{childList:!0,subtree:!0})},disconnect:function(){e.disconnect()}};l.set(n,o),o.observe()}function A(){var n=document.createElement("iframe");n.hidden=!0,document.body.appendChild(n),i.body=n.contentWindow.document.body,i.CSSStyleSheet=n.contentWindow.CSSStyleSheet,C(n.contentWindow.CSSStyleSheet.prototype),w(document.body),s.loaded=!0;for(var r=document.createDocumentFragment(),t=0,a=e.length;t<a;t++)e[t].disabled=!1,r.appendChild(e[t]);i.body.appendChild(r);for(var l=0,c=o.length;l<c;l++)r.appendChild(o[l]);document.body.insertBefore(r,document.body.firstChild),e.length=0,o.length=0}}();var n=new CSSStyleSheet;n.replaceSync('/** @color Black */\n/** @color White */\n/** @color Danger */\n/** @color Success */\n/* OFFICIAL 2019-2020 BRAND COLORS */\n/**\n * @color Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (lighter)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Dark\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Darkest\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Text Light\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red Emergency\n * @section 2019-2020 Brand Colors\n */\n/*Secondary Brand Colors*/\n/**\n * @color Secondary Web Orange\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Web Blue\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Cyan\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Yellow\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Teal\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Magenta\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Green (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Light Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Medium Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Text Grey (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Dark Grey (ADA compliant for hover over shaded table rows)\n * @section Secondary Brand Colors\n */\n/*ADA compliant for hover over shaded table rows*/\n/**\n * @color Secondary Text Almost Black (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Emergency Red (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/** @color Black */\n/** @color White */\n/** @color Danger */\n/** @color Success */\n/* OFFICIAL 2019-2020 BRAND COLORS */\n/**\n * @color Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (lighter)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Dark\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Darkest\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Text Light\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red Emergency\n * @section 2019-2020 Brand Colors\n */\n/*Secondary Brand Colors*/\n/**\n * @color Secondary Web Orange\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Web Blue\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Cyan\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Yellow\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Teal\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Magenta\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Green (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Light Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Medium Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Text Grey (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Dark Grey (ADA compliant for hover over shaded table rows)\n * @section Secondary Brand Colors\n */\n/*ADA compliant for hover over shaded table rows*/\n/**\n * @color Secondary Text Almost Black (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Emergency Red (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/* common scsss variables for V4 client */\n/* small media width */\n/* spacing unit of measure */\n/* font variables */\n/* be sure to load fonts.js */\n/*Pulling in fonts via Typekit, weights will pull in font variants*/\n/*try to refrain from using this one, difficult to read on small screens*/\n/*not used?*/\n/* Main sizing unit - changing this will update most of the font size/spacing variables on the site */\n/* typography variables */\n/* used for headers in card body */\n/* main body font */\n#percent-occupied {\n  font-family: "franklin-gothic-urw", arial, sans-serif;\n  font-weight: 700;\n  font-size: calc($uvalib-main-font-size-unit*3.75);\n  line-height: calc($uvalib-main-font-size-unit*3.75);\n  color: #232D4B;\n  margin-top: calc($uvalib-spacing-unit/4);\n  margin-bottom: calc($uvalib-spacing-unit/1.5); }\n\n.chart-text {\n  /*font: 16px/1.4em "Montserrat", Arial, sans-serif;*/\n  fill: #000;\n  -moz-transform: translateY(0.25em);\n  -ms-transform: translateY(0.25em);\n  -webkit-transform: translateY(0.25em);\n  transform: translateY(0.25em); }\n\n.chart-number {\n  font-size: 0.6em;\n  line-height: 1;\n  text-anchor: middle;\n  -moz-transform: translateY(-0.25em);\n  -ms-transform: translateY(-0.25em);\n  -webkit-transform: translateY(-0.25em);\n  transform: translateY(-0.25em); }\n\n.chart-label {\n  font-size: 0.2em;\n  text-transform: uppercase;\n  text-anchor: middle;\n  -moz-transform: translateY(0.7em);\n  -ms-transform: translateY(0.7em);\n  -webkit-transform: translateY(0.7em);\n  transform: translateY(0.7em); }\n\nfigure {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  margin-left: -15px;\n  margin-right: -15px; }\n\n@media (min-width: 768px) {\n  figure {\n    flex-direction: row; } }\n\n.figure-content,\n.figure-key {\n  flex: 1;\n  padding-left: 15px;\n  padding-right: 15px;\n  align-self: center; }\n\n.figure-content svg {\n  height: auto; }\n\n.figure-key {\n  min-width: calc(8 / 12); }\n\n.figure-key [class*="shape-"] {\n  margin-right: 6px; }\n\n.figure-key-list {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.figure-key-list li {\n  margin: 0 0 8px;\n  padding: 0; }\n\n.shape-circle {\n  display: inline-block;\n  vertical-align: middle;\n  width: 32px;\n  height: 32px;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%; }\n\n.shape-fuschia {\n  background-color: #ce4b99; }\n\n.shape-lemon-lime {\n  background-color: #b1c94e; }\n\n.shape-blue {\n  background-color: #377bbc; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n'),document.adoptedStyleSheets=[...document.adoptedStyleSheets,n];class e extends HTMLElement{static get observedAttributes(){return["data-event"]}constructor(){super()}connectedCallback(){this._setupDom(),this.addEventListener("uvalib-model-data-value",function(n){const e=n.target.data;this.container.setAttribute("class",e.isOpenNow?"open":"closed"),this._setValues(this.name,e.shortName),this.capacity.innerHTML=e.maximumAttendeeCapacity,this.occupied.innerHTML=e.occupancy.value;const o=Math.round((e.occupancy.value/e.maximumAttendeeCapacity*100).toFixed(3));this.percent.innerHTML=o+"%",this.shadowRoot.querySelector(".donut-segment").setAttribute("stroke-dasharray",`${o} ${100-o}`),this.style.visibility="visible"}.bind(this))}_setValues(n,e){n.forEach(n=>n.innerHTML=e)}_setupDom(){this.shadow=this.attachShadow({mode:"open"}),this.shadow.adoptedStyleSheets=[n],this.shadow.innerHTML='\n  <style>\n      :host {\n        visibility: hidden;\n      }\n      .open #closed, .closed #occupancy { display:none }\n      .closed #open, .open #occupancy { display:block }\n  </style>\n  <div>\n      <div class="name"></div>\n      <div id="occupancy">Occupancy: <span id="percent-occupied"></span> (<span id="occupied"></span>/<span id="capacity"></span>)</div>\n      <div id="closed">Library is currently closed</div>\n    <figure style="display:none">\n      <div class="figure-content">\n        <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut" aria-labelledby="occupancy-title occupancy-desc" role="img">\n          <title id="occupancy-title">Capacity</title>\n          <desc id="occupancy-desc">Donut chart showing percentage of capacity occupied in the Library currently</desc>\n          <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff" role="presentation"></circle>\n          <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3" role="presentation"></circle>    \n          <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3" stroke-dasharray="0 100" stroke-dashoffset="25" aria-labelledby="donut-segment-1-title donut-segment-1-desc">\n            <title id="donut-segment-1-title">Belgian Quadrupels</title>\n            <desc id="donut-segment-1-desc">Pink chart segment spanning 40% of the whole, which is 4 Belgian Quadrupels out of 10 total.</desc>\n          </circle>\n          <g class="chart-text">\n            <text id="percent-occupied" x="50%" y="50%" class="chart-number"></text>\n            <text x="50%" y="50%" class="chart-label">\n              Occupied\n            </text>\n          </g>\n        </svg>\n      </div>\n      <figcaption class="figure-key">\n        <p class="sr-only">Donut chart showing 10 total beers. Two beers are Imperial India Pale Ales, four beers are Belgian Quadrupels, and three are Russian Imperial Stouts. The last remaining beer is unlabeled.</p>\n    \n        <ul class="figure-key-list" aria-hidden="true" role="presentation">\n          <li>\n            <span class="shape-circle shape-fuschia"></span> Belgian Quadrupels (4)\n          </li>\n          <li>\n            <span class="shape-circle shape-lemon-lime"></span> Imperial India Pale Ales (2)\n          </li>\n          <li>\n            <span class="shape-circle shape-blue"></span> Russian Imperial Stouts (3)\n          </li>\n        </ul>\n      </figcaption>\n    </figure>\n  </div>\n      ',this.container=this.shadow.querySelector("div"),this.name=this.container.querySelectorAll(".name"),this.percent=this.container.querySelector("#percent-occupied"),this.occupied=this.container.querySelector("#occupied"),this.capacity=this.container.querySelector("#capacity")}attributeChangedCallback(n,e,o){switch(n){case"data-event":this.dataEvent=o}}}window.customElements.define("uvalib-data-viz-donut",e);
