import"./index.esm-b47b8ef1.js";import UvalibModelFBDB from"./uvalib-model-realtime-database.js";class UvalibModelAlerts extends UvalibModelFBDB{static get observedAttributes(){return super.observedAttributes.concat([])}get seen(){const e=JSON.parse(localStorage.getItem("uvalib-alerts-seen"));return Array.isArray(e)?e:[]}set seen(e){localStorage.setItem("uvalib-alerts-seen",JSON.stringify(e)),this.dispatchEvent(new CustomEvent("seen-count-changed",{bubbles:!0,composed:!0,detail:{seenCount:e.length}}))}get seenCount(){return this.seen.length}get alerts(){return Array.isArray(this.lastResponse)&&this.lastResponse.length>0?this.lastResponse.map(function(e){return"alert3"===e.severity&&this.setSeen(e.uuid),this.seen&&this.seen.indexOf(e.uuid)>-1?e.seen=!0:e.seen=!1,e}.bind(this)).sort(function(e,t){return e.severity>t.severity}):[]}constructor(){super(),this.path="library-alerts"}connectedCallback(){super.connectedCallback(),this.database="https://uvalib-api.firebaseio.com/",this.addEventListener("uvalib-model-data-value",function(e){this.dispatchEvent(new CustomEvent("alerts-changed",{bubbles:!0,composed:!0}))}.bind(this)),window.addEventListener("storage",function(){this.dispatchEvent(new CustomEvent("seen-count-changed",{bubbles:!0,composed:!0,detail:{seenCount:this.seen.length}}))}.bind(this)),this.dispatchEvent(new CustomEvent("seen-count-changed",{bubbles:!0,composed:!0,detail:{seenCount:this.seenCount}}))}setSeen(e){var t=new Set(this.seen);t.add(e),this.seen=[...t]}setAllUnSeen(){this.seen=[]}setAllSeen(){this.seen=this.alerts.map(e=>e.uuid)}}window.customElements.define("uvalib-model-alerts",UvalibModelAlerts);export default UvalibModelAlerts;
