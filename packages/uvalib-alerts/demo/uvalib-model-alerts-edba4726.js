class t extends HTMLElement{static get observedAttributes(){return["auto","path","sort-by","sort-order","filter","timeout","poll"]}constructor(){super(),this._apidomain="https://api.devhub.virginia.edu/",this._apiversion="v1"}connectedCallback(){}get auto(){return!!this._auto}set auto(t){this._auto=!!t,this._eval()}get path(){return this._path}set path(t){this._path=t,this._eval()}get sortBy(){return this._sortBy}set sortBy(t){this._sortBy=t,this._eval()}get sortOrder(){return this._sortOrder}set sortOrder(t){this._sortOrder=t,this._eval()}get filter(){return this._filter}set filter(t){this._filter=t,this._eval()}get timeout(){return this._timeout}set timeout(t){this._timeout=t,this._eval()}get poll(){return this._poll}set poll(t){this._poll=t,this._eval()}get items(){return this.lastResponse}attributeChangedCallback(t,e,s){switch(t){case"auto":this.auto=""===s;break;case"path":this.path=s;break;case"sort-by":this.sortBy=s;break;case"sort-order":this.sortOrder=s;break;case"filter":this.filter=s;break;case"timeout":this.timeout=parseInt(s);break;case"poll":this.poll=parseInt(s)}}_eval(){this._auto&&this._path&&this.generateRequest(),this._poll&&(console.log("setup interval"),this._interval&&clearInterval(this._interval),this._interval=setInterval(this.generateRequest.bind(this),this._poll))}_makeURL(){return this._apidomain+this._apiversion+"/"+this._path}generateRequest(){if(this.hasAttribute("timeout")&&!this._timeout||this.hasAttribute("poll")&&!this._poll)return;console.log(this._makeURL()),this._controller&&this.loading&&this._controller.abort(),this.loading=!0,this._controller=new AbortController,this._timeout&&setTimeout(function(){this._controller.abort()}.bind(this),this._timeout);const t=this._controller.signal;fetch(this._makeURL(),{signal:t}).then(t=>t.json()).then(function(t){this.loading=!1,this.lastResponse=t,this.dispatchEvent(new CustomEvent("last-response-changed",{bubbles:!0,composed:!0}))}.bind(this)).catch(function(t){this.loading=!1,"AbortError"===t.name?console.log("Fetch aborted"):console.error("Uh oh, an error!",t)}.bind(this))}}window.customElements.define("uvalib-model-ajax",t);class e extends t{static get observedAttributes(){return super.observedAttributes.concat(["firebase"])}constructor(){super(),this._firebase=!1,this._firebaseDomain="https://uvalib-api.firebaseio.com/"}connectedCallback(){}get firebase(){return!!this._firebase}set firebase(t){this._firebase=!!t,this._eval()}_makeURL(){return this._firebase?this._firebaseDomain+this._path+".json":super._makeURL()}attributeChangedCallback(t,e,s){switch(super.attributeChangedCallback(t,e,s),t){case"firebase":this.firebase=""===s}}}window.customElements.define("uvalib-model-library",e);class s extends e{static get observedAttributes(){return super.observedAttributes.concat([])}get alerts(){}get seen(){const t=JSON.parse(localStorage.getItem("uvalib-alerts-seen"));return Array.isArray(t)?t:[]}set seen(t){localStorage.setItem("uvalib-alerts-seen",JSON.stringify(t)),this.dispatchEvent(new CustomEvent("seen-count-changed",{bubbles:!0,composed:!0,detail:{seenCount:t.length}}))}get seenCount(){return this.seen.length}get alerts(){return Array.isArray(this.lastResponse)&&this.lastResponse.length>0?this.lastResponse.map(function(t){return"alert3"===t.severity&&this.setSeen(t.uuid),this.seen&&this.seen.indexOf(t.uuid)>-1?t.seen=!0:t.seen=!1,t}.bind(this)).sort((function(t,e){return t.severity>e.severity})):[]}constructor(){super(),this.path="library/alerts",this.poll=3e5}connectedCallback(){this.addEventListener("last-response-changed",function(t){this.dispatchEvent(new CustomEvent("alerts-changed",{bubbles:!0,composed:!0}))}.bind(this)),window.addEventListener("storage",function(){this.dispatchEvent(new CustomEvent("seen-count-changed",{bubbles:!0,composed:!0,detail:{seenCount:this.seen.length}}))}.bind(this)),this.dispatchEvent(new CustomEvent("seen-count-changed",{bubbles:!0,composed:!0,detail:{seenCount:this.seenCount}}))}setSeen(t){var e=new Set(this.seen);e.add(t),this.seen=[...e]}setAllUnSeen(){this.seen=[]}setAllSeen(){this.seen=this.alerts.map(t=>t.uuid)}}window.customElements.define("uvalib-model-alerts",s);export default s;