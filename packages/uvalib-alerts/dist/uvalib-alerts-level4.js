import{UvalibAlerts as e}from"./uvalib-alerts.js";class t extends e{_setupAlertsModel(){import("./debounce-2d1f3432.js").then(function(e){import("./uvalib-model-alerts-f6ba98ea.js").then(function(){this._alertsModel=document.createElement("uvalib-model-alerts"),this._alertsModel.addEventListener("alerts-changed",e.default(function(e){Array.isArray(this._alertsModel.data)&&(this.alert=this._alertsModel.data.filter(e=>"alert4"===e.severity),this.alert&&this._updateAlerts(this.alert))}.bind(this),300).bind(this)),this._alertsModel.setAttribute("auto",""),this.shadow.appendChild(this._alertsModel)}.bind(this))}.bind(this))}_updateAlerts(e){if(Array.isArray(e)&&e.length>0){this._setupStyle();var t=document.createElement("div");this._addAlert(t,e[0]),this.shadow.replaceChild(t,this._alertsContainer),this._alertsContainer=t}else this._alertsContainer.innerHTML=""}_addAlert(e,t){var a=document.createElement("div");a.innerHTML=`\n      <div class="uva-alert uva-alert--a4" uuid="${t.uuid}">\n        <div class=""uva-alert__body">\n          <h3 class="uva-alert__heading">${t.title}</h3>\n          <p class="uva-alert__text">${t.body}</p>\n        </div>\n      </div>\n    `,e.appendChild(a),this.style.display="block"}}window.customElements.define("uvalib-alerts-level4",t);export{t as UvalibAlertsLevel4};
