var t,e;(t=window.document).getElementById("livereloadscript")||((e=t.createElement("script")).async=1,e.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",t.getElementsByTagName("head")[0].appendChild(e));import"./moment-1766bd71.js";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=!1,o=[],i=[];function s(){n=!0,requestAnimationFrame((function(){n=!1,function(t){for(;t.length;)c(t.shift())}(o),setTimeout((function(){!function(t){for(let e=0,n=t.length;e<n;e++)c(t.shift())}(i)}))}))}function c(t){const e=t[0],n=t[1],o=t[2];try{n.apply(e,o)}catch(t){setTimeout(()=>{throw t})}}function l(t,e,o){n||s(),i.push([t,e,o])}export{l as a};
