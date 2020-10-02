!function(){if(!("adoptedStyleSheets"in document)){var n="ShadyCSS"in window&&!window.ShadyCSS.nativeShadow,e=[],o=[],t=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,s=new WeakMap,i={loaded:!1},c={body:null,CSSStyleSheet:null},d=CSSStyleSheet,h=/@import\surl(.*?);/gi,u=["addImport","addPageRule","addRule","deleteRule","insertRule","removeImport","removeRule"],p=["replace","replaceSync"],m=function(){function n(){var n=document.createElement("style");i.loaded?c.body.appendChild(n):(document.head.appendChild(n),n.disabled=!0,e.push(n));var o=n.sheet;return r.set(o,{adopters:new Map,actions:[],basicStyleElement:n}),o}var o=n.prototype;return o.replace=function(n){var e=this,o=C(n);return new Promise((function(n,t){if(r.has(e)){var a=r.get(e).basicStyleElement;a.innerHTML=o,n(a.sheet),v(e)}else t(new Error("Can't call replace on non-constructed CSSStyleSheets."))}))},o.replaceSync=function(n){var e=C(n);if(r.has(this)){var o=r.get(this).basicStyleElement;return o.innerHTML=e,v(this),o.sheet}throw new Error("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")},n}();Object.defineProperty(m,Symbol.hasInstance,{configurable:!0,value:y}),b(d.prototype),window.CSSStyleSheet=m,function(){var e={configurable:!0,get:function(){return t.get(this)||[]},set:function(n){var e=t.get(this)||[];!function(n,e){var o=e===document?"Document":"ShadowRoot";if(!Array.isArray(n))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Iterator getter is not callable.");if(!n.every(y))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Failed to convert value to 'CSSStyleSheet'");var r=n.filter((function(e,o){return n.indexOf(e)===o}));t.set(e,r)}(n,this);var o=this===document?f()?this.head:this.body:this,a="isConnected"in o?o.isConnected:document.body.contains(o);window.requestAnimationFrame((function(){a&&(S(o),function(n,e){for(var o=g(n),t=0,a=e.length;t<a;t++)if(!(o.indexOf(e[t])>-1)){var s=r.get(e[t]).adopters,i=l.get(n),c=s.get(n);c||(c=s.get(document.head)),i.disconnect(),c.parentNode.removeChild(c),i.observe()}}(o,e))}))}};if(Object.defineProperty(Document.prototype,"adoptedStyleSheets",e),"undefined"!=typeof ShadowRoot){var o=Element.prototype.attachShadow;Element.prototype.attachShadow=function(){var e=n?this:o.apply(this,arguments);return w(e),e},Object.defineProperty(ShadowRoot.prototype,"adoptedStyleSheets",e)}}(),f()?document.addEventListener("DOMContentLoaded",A):A()}function y(n){return n instanceof d||n instanceof c.CSSStyleSheet}function f(){return"loading"===document.readyState}function g(n){return t.get(n.parentNode===document.documentElement?document:n)}function C(n){var e=n.match(h,"")||[],o=n;return e.length&&(console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),e.forEach((function(n){o=o.replace(n,"")}))),o}function b(n){p.forEach((function(e){n[e]=function(){return m.prototype[e].apply(this,arguments)}})),u.forEach((function(e){var o=n[e];n[e]=function(){var n=arguments,t=o.apply(this,n);if(r.has(this)){var a=r.get(this),l=a.adopters,s=a.actions;l.forEach((function(o){o.sheet&&o.sheet[e].apply(o.sheet,n)})),s.push([e,n])}return t}}))}function v(n){var e=r.get(n),o=e.adopters,t=e.basicStyleElement;o.forEach((function(n){n.innerHTML=t.innerHTML}))}function S(n){for(var e=document.createDocumentFragment(),t=g(n),i=l.get(n),c=0,d=t.length;c<d;c++){var h=r.get(t[c]),u=h.adopters,p=h.basicStyleElement,m=u.get(n);m?(i.disconnect(),e.appendChild(m),(!m.innerHTML||m.sheet&&!m.sheet.cssText)&&(m.innerHTML=p.innerHTML),i.observe()):((m=document.createElement("style")).innerHTML=p.innerHTML,a.set(m,n),s.set(m,0),u.set(n,m),e.appendChild(m)),n===document.head&&o.push(m)}n.insertBefore(e,n.firstChild);for(var y=0,f=t.length;y<f;y++){var C=r.get(t[y]),b=C.adopters,v=C.actions,S=b.get(n),B=s.get(S);if(v.length>0){for(var w=B,A=v.length;w<A;w++){var E=v[w],k=E[0],_=E[1];S.sheet[k].apply(S.sheet,_)}s.set(S,v.length-1)}}}function B(e){for(var o=0,t=e.length;o<t;o++){for(var r=e[o],l=r.addedNodes,s=r.removedNodes,i=0,c=s.length;i<c;i++){var d=a.get(s[i]);d&&S(d)}if(!n)for(var h=0,u=l.length;h<u;h++)for(var p=document.createNodeIterator(l[h],NodeFilter.SHOW_ELEMENT,(function(n){return n.shadowRoot&&n.shadowRoot.adoptedStyleSheets.length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),m=void 0;m=p.nextNode();)S(m.shadowRoot)}}function w(n){var e=new MutationObserver(B),o={observe:function(){e.observe(n,{childList:!0,subtree:!0})},disconnect:function(){e.disconnect()}};l.set(n,o),o.observe()}function A(){var n=document.createElement("iframe");n.hidden=!0,document.body.appendChild(n),c.body=n.contentWindow.document.body,c.CSSStyleSheet=n.contentWindow.CSSStyleSheet,b(n.contentWindow.CSSStyleSheet.prototype),w(document.body),i.loaded=!0;for(var t=document.createDocumentFragment(),r=0,a=e.length;r<a;r++)e[r].disabled=!1,t.appendChild(e[r]);c.body.appendChild(t);for(var l=0,s=o.length;l<s;l++)t.appendChild(o[l]);document.body.insertBefore(t,document.body.firstChild),e.length=0,o.length=0}}();import("./fonts-ac694799.js"),import("./icons-89ae3148.js");const n=new CSSStyleSheet;n.replaceSync('/** @color Black */\n/** @color White */\n/** @color Danger */\n/** @color Success */\n/* OFFICIAL 2019-2020 BRAND COLORS */\n/**\n * @color Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (lighter)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Dark\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Darkest\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Text Light\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red Emergency\n * @section 2019-2020 Brand Colors\n */\n/*Secondary Brand Colors*/\n/**\n * @color Secondary Web Orange\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Web Blue\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Cyan\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Yellow\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Teal\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Magenta\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Green (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Light Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Medium Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Text Grey (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Dark Grey (ADA compliant for hover over shaded table rows)\n * @section Secondary Brand Colors\n */\n/*ADA compliant for hover over shaded table rows*/\n/**\n * @color Secondary Text Almost Black (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Emergency Red (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/** @color Black */\n/** @color White */\n/** @color Danger */\n/** @color Success */\n/* OFFICIAL 2019-2020 BRAND COLORS */\n/**\n * @color Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (lighter)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Dark\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Darkest\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Text Light\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red Emergency\n * @section 2019-2020 Brand Colors\n */\n/*Secondary Brand Colors*/\n/**\n * @color Secondary Web Orange\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Web Blue\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Cyan\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Yellow\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Teal\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Magenta\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Green (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Light Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Medium Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Text Grey (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Dark Grey (ADA compliant for hover over shaded table rows)\n * @section Secondary Brand Colors\n */\n/*ADA compliant for hover over shaded table rows*/\n/**\n * @color Secondary Text Almost Black (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Emergency Red (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/* common scsss variables for V4 client */\n/* small media width */\n/* spacing unit of measure */\n/* font variables */\n/* be sure to load fonts.js */\n/*Pulling in fonts via Typekit, weights will pull in font variants*/\n/*try to refrain from using this one, difficult to read on small screens*/\n/*not used?*/\n/* Main sizing unit - changing this will update most of the font size/spacing variables on the site */\n/* typography variables */\n/* used for headers in card body */\n/* main body font */\n.fa, .fab, .instagram, .facebook-square, .twitter-square, .fad, .fal, .far, .fas {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.fas.fa-pull-left {\n  margin-right: .3em; }\n\n.fas.fa-pull-right {\n  margin-left: .3em; }\n\n.fa, .far, .fas {\n  font-family: "Font Awesome 5 Free"; }\n\n.fa, .fas {\n  font-weight: 900; }\n\n.fab, .instagram, .facebook-square, .twitter-square {\n  font-family: "Font Awesome 5 Brands"; }\n\n.fab, .instagram, .facebook-square, .twitter-square, .far {\n  font-weight: 400; }\n\n/**\n * @icon .instagram\n * @markup\n *  <i class="instagram"></i>\n */\n.instagram:before {\n  content: "\\f16d"; }\n\n/**\n * @icon .facebook-square\n * @markup\n *  <i class="facebook-square"></i>\n */\n.facebook-square:before {\n  content: "\\f082"; }\n\n/**\n * @icon .twitter-square\n * @markup\n *  <i class="twitter-square"></i>\n */\n.twitter-square:before {\n  content: "\\f081"; }\n\n/* common scsss variables for V4 client */\n/* small media width */\n/* spacing unit of measure */\n:host {\n  display: none;\n  /*block;*/\n  text-align: left;\n  visibility: visible;\n  font-family: "franklin-gothic-urw", arial, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  line-height: calc($uvalib-main-font-size-unit*1.25);\n  color: #595959; }\n\n[hidden] {\n  display: none; }\n\n.alert-item {\n  min-height: 41px;\n  background-color: #ECC602;\n  border-width: 2px 0 0 0;\n  border-color: #FFF;\n  border-style: solid;\n  color: #2B2B2B;\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.alert-item div {\n  width: 100%;\n  max-width: 1200px;\n  padding: .15em; }\n\n.alert-item.alert1 {\n  background-color: #B30000;\n  color: #FFF; }\n\n.alert-item.alert2 {\n  background-color: #ECC602; }\n\n.alert-item.alert3 {\n  background-color: #FEF6C8;\n  color: #000; }\n\n.alert-item.alert1 p a {\n  text-decoration: underline;\n  color: #FFF; }\n\n.alert-item.alert3 p a {\n  text-decoration: underline; }\n\n.alert-item.alert1 p a:hover, .alert-item.alert2 p a:hover, .alert-item.alert3 p a:hover {\n  font-style: italic; }\n\n.alert-item.alert1 p a:focus, .alert-item.alert2 p a:focus, .alert-item.alert3 p a:focus {\n  outline: #BDBDBD dotted 3px;\n  padding: .15em; }\n\n.alert-item.alert3 uvalib-button {\n  color: #000;\n  border-color: #B99C02; }\n\n.alert-item.alert3 uvalib-button:hover {\n  background-color: #ECC602; }\n\n.alert-item.alert1 .alert-head:before, .alert-item.alert2 .alert-head:before {\n  font-family: "Font Awesome 5 Free";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  text-transform: none;\n  line-height: 1;\n  font-weight: 900;\n  speak: none;\n  content: "\\f06a";\n  font-size: 2em;\n  padding-right: .25em; }\n\n.alert-head {\n  display: flex;\n  flex-direction: row; }\n\n.alert-title {\n  flex: 1;\n  flex-basis: 0.000000001px; }\n\n[slot="markdown-html"] p {\n  margin: 0;\n  padding: 0; }\n\nuvalib-button {\n  color: #2B2B2B;\n  position: static;\n  z-index: auto; }\n\nuvalib-button:visited, uvalib-button:focus, uvalib-button:hover, uvalib-button:active {\n  font-weight: normal; }\n\nuvalib-button::part(button) {\n  text-transform: uppercase;\n  border: 1px solid #DADADA;\n  color: #2B2B2B;\n  background-color: inherit; }\n\n.alert-item.alert2 uvalib-button:hover::part(button) {\n  background-color: #B99C02;\n  color: #000; }\n'),document.adoptedStyleSheets=[...document.adoptedStyleSheets,n];class e extends HTMLElement{static get observedAttributes(){return["override","alerts"]}constructor(){super()}connectedCallback(){this._setupDom(),this.override||this._setupAlertsModel()}_setupAlertsModel(){import("./uvalib-model-alerts-9cb26981.js").then(function(){this._alertsModel=document.createElement("uvalib-model-alerts"),import("./debounce-2d1f3432.js").then(function(n){this._alertsModel.addEventListener("seen-count-changed",n.default(function(n){console.log("seen count changed");const e=n.detail&&n.detail.seenCount?parseInt(n.detail.seenCount):0;this.seenCount=e,this.setAttribute("seen-count",e),this._alertsSeen=this._alertsModel.seen,this._updateAlerts(this._alertsModel.alerts)}.bind(this),300).bind(this)),this._alertsModel.addEventListener("alerts-changed",n.default(function(n){console.log("alerts changed"),this._alertsSeen=this._alertsModel.seen,this._updateAlerts(this._alertsModel.alerts)}.bind(this),300).bind(this))}.bind(this)),this._alertsModel.setAttribute("auto",""),this.shadow.appendChild(this._alertsModel)}.bind(this))}_updateAlerts(n){if(Array.isArray(n)&&n.length>0){this._setupStyle();var e=document.createElement("div");console.log(this._alertsSeen),n.filter(function(n){return console.log(n),!this._alertsSeen.includes(n.uuid)}.bind(this)).forEach(function(n){this._addAlert(e,n)}.bind(this)),this.shadow.replaceChild(e,this._alertsContainer),this._alertsContainer=e}else this._alertsContainer.innerHTML=""}_addAlert(n,e){var o=[];o.push(import("./debounce-2d1f3432.js")),o.push(import("./uvalib-button-41526681.js")),o.push(import("./uvalib-collapse-a90f3281.js")),Promise.all(o).then(function(o){o[0].default;var t=document.createElement("uvalib-collapse");t.innerHTML=`\n        <div class="alert-item ${e.severity}" uuid="${e.uuid}">\n          <div data-title="${e.title}">\n            <div class="alert-head">\n              <div class="alert-title" >${e.title}</div>\n              <uvalib-button mode="tertiary" class="moreButton toggle" ${this._isHot(e.severity)?"hidden ":""}>More</uvalib-button>\n              <uvalib-button mode="tertiary" class="lessButton toggle" ${this._isHot(e.severity)?"":"hidden"}>Less</uvalib-button>\n              <uvalib-button mode="tertiary" class="dismissButton" ${this._isHot(e.severity)?"hidden ":""}>Dismiss</uvalib-button>\n            </div>\n            <uvalib-collapse class="bodyCollapse" ${this._isHot(e.severity)?"opened":""} ${this._isHot(e.severity)?"opened":""}>\n              <div class="alert-body">${e.body}</div>\n            </uvalib-collapse>\n          </div>\n        </div>\n      `,this._moreButton=t.querySelector(".moreButton"),this._moreButton.addEventListener("click",this._toggleIt.bind(this)),this._lessButton=t.querySelector(".lessButton"),this._lessButton.addEventListener("click",this._toggleIt.bind(this)),this._dismissButton=t.querySelector(".dismissButton"),this._dismissButton.addEventListener("click",this._dismissIt.bind(this)),t.setAttribute("opened",e.seen?null:""),t.addEventListener("opened-changed",this._sizeChanged.bind(this)),t.addEventListener("transitioning-changed",this._sizeChanged.bind(this)),n.appendChild(t),this.style.display="block"}.bind(this))}_setupStyle(){this.shadow.adoptedStyleSheets=[n]}_setupDom(){this.shadow=this.attachShadow({mode:"open"}),this._alertsContainer=document.createElement("div"),this.shadow.appendChild(this._alertsContainer)}attributeChangedCallback(n,e,o){switch(n){case"override":this.override=""===o;break;case"alerts":this.alerts=JSON.parse(o)}}_sizeChanged(){this.dispatchEvent(new CustomEvent("size-changed",{detail:{height:this.clientHeight}}))}_isHot(n){return"alert1"===n}_toggleIt(n){const e=n.currentTarget.parentElement.parentElement;this.dispatchEvent(new CustomEvent("uvalib-analytics-event",{bubbles:!0,composed:!0,detail:{track:["alert",e.dataset.title]}})),e.parentElement.querySelector(".bodyCollapse").toggle(),n.currentTarget.parentElement.querySelectorAll(".toggle").forEach((function(n){""!==n.getAttribute("hidden")?n.setAttribute("hidden",""):(n.removeAttribute("hidden"),n.focus())}))}_dismissIt(n){var e=n.currentTarget.parentElement.parentElement.parentElement.getAttribute("uuid");this.dispatchEvent(new CustomEvent("uvalib-analytics-event",{bubbles:!0,composed:!0,detail:{track:["alert","dismissed",n.currentTarget.parentElement.parentElement.dataset.title]}})),this._alertsModel.setSeen(e)}}window.customElements.define("uvalib-alerts",e);
