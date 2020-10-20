import{D as t,t as e,m as n,p as o,w as i,d as s}from"./uvalib-counts-d5cc2695.js";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let u="string"==typeof document.head.style.touchAction,c="__polymerGesturesHandled",r="__polymerGesturesTouchAction",l=["mousedown","mousemove","mouseup","click"],a=[0,1,4,2],f=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function d(t){return l.indexOf(t)>-1}let h=!1;function m(t){if(!d(t)&&"touchend"!==t)return u&&h&&o?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){h=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let p=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const v=[],y={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},g={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function w(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let o=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<o.length;t++)e.push(o[t])}}return e}let b=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[c]={skip:!0},"click"===t.type)){let e=!1,o=L(t);for(let t=0;t<o.length;t++){if(o[t].nodeType===Node.ELEMENT_NODE)if("label"===o[t].localName)v.push(o[t]);else if(n=o[t],y[n.localName]){let n=w(o[t]);for(let t=0;t<n.length;t++)e=e||v.indexOf(n[t])>-1}if(o[t]===N.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function E(t){let e=p?["click"]:l;for(let n,o=0;o<e.length;o++)n=e[o],t?(v.length=0,document.addEventListener(n,b,!0)):document.removeEventListener(n,b,!0)}function x(t){let e=t.type;if(!d(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!f&&(e=a[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let N={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function _(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function k(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(n){N.mouse.mouseIgnoreJob||E(!0),N.mouse.target=L(n)[0],N.mouse.mouseIgnoreJob=t.debounce(N.mouse.mouseIgnoreJob,e.after(2500),(function(){E(),N.mouse.target=null,N.mouse.mouseIgnoreJob=null}))}),!!h&&{passive:!0});const L=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],T={},M=[];function D(t){const e=L(t);return e.length>0?e[0]:t.target}function X(t){let e,n=t.type,o=t.currentTarget.__polymerGestures;if(!o)return;let i=o[n];if(i){if(!t[c]&&(t[c]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(N.touch.id=e.identifier),N.touch.id!==e.identifier)return;u||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)N.touch.x=e.clientX,N.touch.y=e.clientY,N.touch.scrollDecided=!1;else if("touchmove"===n){if(N.touch.scrollDecided)return;N.touch.scrollDecided=!0;let n=function(t){let e="auto",n=L(t);for(let t,o=0;o<n.length;o++)if(t=n[o],t[r]){e=t[r];break}return e}(t),o=!1,i=Math.abs(N.touch.x-e.clientX),s=Math.abs(N.touch.y-e.clientY);t.cancelable&&("none"===n?o=!0:"pan-x"===n?o=s>i:"pan-y"===n&&(o=i>s)),o?t.preventDefault():I("track")}}(t)}if(e=t[c],!e.skip){for(let n,o=0;o<M.length;o++)n=M[o],i[n.name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let o,s=0;s<M.length;s++)o=M[s],i[o.name]&&!e[o.name]&&(e[o.name]=!0,o[n](t))}}}function Y(t,e,n){return!!T[e]&&(function(t,e,n){let o=T[e],i=o.deps,s=o.name,u=t.__polymerGestures;u||(t.__polymerGestures=u={});for(let e,n,o=0;o<i.length;o++)e=i[o],p&&d(e)&&"click"!==e||(n=u[e],n||(u[e]=n={_count:0}),0===n._count&&t.addEventListener(e,X,m(e)),n[s]=(n[s]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),o.touchAction&&P(t,o.touchAction)}(t,e,n),!0)}function A(t,e,n){return!!T[e]&&(function(t,e,n){let o=T[e],i=o.deps,s=o.name,u=t.__polymerGestures;if(u)for(let e,n,o=0;o<i.length;o++)e=i[o],n=u[e],n&&n[s]&&(n[s]=(n[s]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,X,m(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function O(t){M.push(t);for(let e=0;e<t.emits.length;e++)T[t.emits[e]]=t}function P(t,e){u&&t instanceof HTMLElement&&n.run(()=>{t.style.touchAction=e}),t[r]=e}function G(t,e,n){let o=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,i(t).dispatchEvent(o),o.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function I(t){let e=function(t){for(let e,n=0;n<M.length;n++){e=M[n];for(let n,o=0;o<e.emits.length;o++)if(n=e.emits[o],n===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function J(t,e,n,o){e&&G(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(t){return I(t)}})}function S(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let o=Math.abs(t.x-e),i=Math.abs(t.y-n);return o>=5||i>=5}function F(t,e,n){if(!e)return;let o,i=t.moves[t.moves.length-2],s=t.moves[t.moves.length-1],u=s.x-t.x,c=s.y-t.y,r=0;i&&(o=s.x-i.x,r=s.y-i.y),G(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:u,dy:c,ddx:o,ddy:r,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),o=n;for(;o&&o.shadowRoot&&!window.ShadyDOM;){let i=o;if(o=o.shadowRoot.elementFromPoint(t,e),i===o)break;o&&(n=o)}return n}(n.clientX,n.clientY)}})}function R(t,e,n){let o=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),s=D(n||e);!s||g[s.localName]&&s.hasAttribute("disabled")||(isNaN(o)||isNaN(i)||o<=25&&i<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=D(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),o=t.pageX,i=t.pageY;return!(o>=n.left&&o<=n.right&&i>=n.top&&i<=n.bottom)}return!1}(e))&&(t.prevent||G(s,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/O({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){k(this.info)},mousedown:function(t){if(!x(t))return;let e=D(t),n=this;_(this.info,(function(t){x(t)||(J("up",e,t),k(n.info))}),(function(t){x(t)&&J("up",e,t),k(n.info)})),J("down",e,t)},touchstart:function(t){J("down",D(t),t.changedTouches[0],t)},touchend:function(t){J("up",D(t),t.changedTouches[0],t)}}),O({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,k(this.info)},mousedown:function(t){if(!x(t))return;let e=D(t),n=this,o=function(t){let o=t.clientX,i=t.clientY;S(n.info,o,i)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&I("tap"),n.info.addMove({x:o,y:i}),x(t)||(n.info.state="end",k(n.info)),e&&F(n.info,e,t),n.info.started=!0)};_(this.info,o,(function(t){n.info.started&&o(t),k(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=D(t),n=t.changedTouches[0],o=n.clientX,i=n.clientY;S(this.info,o,i)&&("start"===this.info.state&&I("tap"),this.info.addMove({x:o,y:i}),F(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=D(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),F(this.info,e,n))}}),O({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){x(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){x(t)&&R(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){R(this.info,t.changedTouches[0],t)}});const j=s(t=>class extends t{_addEventListenerToNode(t,e,n){Y(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){A(t,e,n)||super._removeEventListenerFromNode(t,e,n)}});export{j as G,Y as a,P as s};
