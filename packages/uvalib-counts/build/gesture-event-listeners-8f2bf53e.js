var e,t;(e=window.document).getElementById("livereloadscript")||((t=e.createElement("script")).async=1,t.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t));import{D as n,t as o,c as i,q as s,w as u,d as c}from"./moment-daae90fe.js";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let r="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",a="__polymerGesturesTouchAction",f=["mousedown","mousemove","mouseup","click"],d=[0,1,4,2],h=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function m(e){return f.indexOf(e)>-1}let p=!1;function v(e){if(!m(e)&&"touchend"!==e)return r&&p&&s?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){p=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let y=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const g=[],w={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},E={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function b(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let o=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<o.length;e++)t.push(o[e])}}return t}let x=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[l]={skip:!0},"click"===e.type)){let t=!1,o=M(e);for(let e=0;e<o.length;e++){if(o[e].nodeType===Node.ELEMENT_NODE)if("label"===o[e].localName)g.push(o[e]);else if(n=o[e],w[n.localName]){let n=b(o[e]);for(let e=0;e<n.length;e++)t=t||g.indexOf(n[e])>-1}if(o[e]===T.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function N(e){let t=y?["click"]:f;for(let n,o=0;o<t.length;o++)n=t[o],e?(g.length=0,document.addEventListener(n,x,!0)):document.removeEventListener(n,x,!0)}function _(e){let t=e.type;if(!m(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!h&&(t=d[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let T={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function k(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function L(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){T.mouse.mouseIgnoreJob||N(!0),T.mouse.target=M(e)[0],T.mouse.mouseIgnoreJob=n.debounce(T.mouse.mouseIgnoreJob,o.after(2500),(function(){N(),T.mouse.target=null,T.mouse.mouseIgnoreJob=null}))}),!!p&&{passive:!0});const M=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],D={},X=[];function Y(e){const t=M(e);return t.length>0?t[0]:e.target}function A(e){let t,n=e.type,o=e.currentTarget.__polymerGestures;if(!o)return;let i=o[n];if(i){if(!e[l]&&(e[l]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(T.touch.id=t.identifier),T.touch.id!==t.identifier)return;r||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)T.touch.x=t.clientX,T.touch.y=t.clientY,T.touch.scrollDecided=!1;else if("touchmove"===n){if(T.touch.scrollDecided)return;T.touch.scrollDecided=!0;let n=function(e){let t="auto",n=M(e);for(let e,o=0;o<n.length;o++)if(e=n[o],e[a]){t=e[a];break}return t}(e),o=!1,i=Math.abs(T.touch.x-t.clientX),s=Math.abs(T.touch.y-t.clientY);e.cancelable&&("none"===n?o=!0:"pan-x"===n?o=s>i:"pan-y"===n&&(o=i>s)),o?e.preventDefault():S("track")}}(e)}if(t=e[l],!t.skip){for(let n,o=0;o<X.length;o++)n=X[o],i[n.name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let o,s=0;s<X.length;s++)o=X[s],i[o.name]&&!t[o.name]&&(t[o.name]=!0,o[n](e))}}}function O(e,t,n){return!!D[t]&&(function(e,t,n){let o=D[t],i=o.deps,s=o.name,u=e.__polymerGestures;u||(e.__polymerGestures=u={});for(let t,n,o=0;o<i.length;o++)t=i[o],y&&m(t)&&"click"!==t||(n=u[t],n||(u[t]=n={_count:0}),0===n._count&&e.addEventListener(t,A,v(t)),n[s]=(n[s]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),o.touchAction&&I(e,o.touchAction)}(e,t,n),!0)}function P(e,t,n){return!!D[t]&&(function(e,t,n){let o=D[t],i=o.deps,s=o.name,u=e.__polymerGestures;if(u)for(let t,n,o=0;o<i.length;o++)t=i[o],n=u[t],n&&n[s]&&(n[s]=(n[s]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,A,v(t)));e.removeEventListener(t,n)}(e,t,n),!0)}function G(e){X.push(e);for(let t=0;t<e.emits.length;t++)D[e.emits[t]]=e}function I(e,t){r&&e instanceof HTMLElement&&i.run(()=>{e.style.touchAction=t}),e[a]=t}function J(e,t,n){let o=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,u(e).dispatchEvent(o),o.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function S(e){let t=function(e){for(let t,n=0;n<X.length;n++){t=X[n];for(let n,o=0;o<t.emits.length;o++)if(n=t.emits[o],n===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function B(e,t,n,o){t&&J(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(e){return S(e)}})}function F(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let o=Math.abs(e.x-t),i=Math.abs(e.y-n);return o>=5||i>=5}function R(e,t,n){if(!t)return;let o,i=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],u=s.x-e.x,c=s.y-e.y,r=0;i&&(o=s.x-i.x,r=s.y-i.y),J(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:u,dy:c,ddx:o,ddy:r,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),o=n;for(;o&&o.shadowRoot&&!window.ShadyDOM;){let i=o;if(o=o.shadowRoot.elementFromPoint(e,t),i===o)break;o&&(n=o)}return n}(n.clientX,n.clientY)}})}function j(e,t,n){let o=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),s=Y(n||t);!s||E[s.localName]&&s.hasAttribute("disabled")||(isNaN(o)||isNaN(i)||o<=25&&i<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Y(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),o=e.pageX,i=e.pageY;return!(o>=n.left&&o<=n.right&&i>=n.top&&i<=n.bottom)}return!1}(t))&&(e.prevent||J(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/G({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){L(this.info)},mousedown:function(e){if(!_(e))return;let t=Y(e),n=this;k(this.info,(function(e){_(e)||(B("up",t,e),L(n.info))}),(function(e){_(e)&&B("up",t,e),L(n.info)})),B("down",t,e)},touchstart:function(e){B("down",Y(e),e.changedTouches[0],e)},touchend:function(e){B("up",Y(e),e.changedTouches[0],e)}}),G({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,L(this.info)},mousedown:function(e){if(!_(e))return;let t=Y(e),n=this,o=function(e){let o=e.clientX,i=e.clientY;F(n.info,o,i)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&S("tap"),n.info.addMove({x:o,y:i}),_(e)||(n.info.state="end",L(n.info)),t&&R(n.info,t,e),n.info.started=!0)};k(this.info,o,(function(e){n.info.started&&o(e),L(n.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Y(e),n=e.changedTouches[0],o=n.clientX,i=n.clientY;F(this.info,o,i)&&("start"===this.info.state&&S("tap"),this.info.addMove({x:o,y:i}),R(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Y(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),R(this.info,t,n))}}),G({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){_(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){_(e)&&j(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){j(this.info,e.changedTouches[0],e)}});const C=c(e=>class extends e{_addEventListenerToNode(e,t,n){O(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){P(e,t,n)||super._removeEventListenerFromNode(e,t,n)}});export{C as G,O as a,I as s};