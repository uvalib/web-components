import {UvalibAlerts} from './uvalib-alerts.js';

export class UvalibAlertsLevel4 extends UvalibAlerts {

  _setupAlertsModel(){
    import ('lodash/debounce').then(function(debounce){    
      import('@uvalib/uvalib-models/uvalib-model-alerts.js').then(function(){       
        this._alertsModel = document.createElement('uvalib-model-alerts');
        this._alertsModel.addEventListener('alerts-changed',debounce.default(function(e){
          if (Array.isArray(this._alertsModel.data)) {

            this.alert = this._alertsModel.data.filter(alert => alert.severity==="alert4");
            if (this.alert) this._updateAlerts(this.alert);
          }
        }.bind(this),300).bind(this));
        this._alertsModel.setAttribute('auto',"");
        this.shadow.appendChild(this._alertsModel);
      }.bind(this));
    }.bind(this));
  }

  _updateAlerts(alerts){
    if (Array.isArray(alerts) && alerts.length>0) {
      this._setupStyle();
      var newContainer = document.createElement('div');          
      this._addAlert(newContainer, alerts[0]);
      this.shadow.replaceChild(newContainer, this._alertsContainer);
      this._alertsContainer = newContainer;
    } else {
      this._alertsContainer.innerHTML = "";
    }
  }

  _addAlert(newContainer, alert){
    var node = document.createElement('div');
    node.innerHTML = `
      <div class="uva-alert uva-alert--a4" uuid="${alert.uuid}">
        <div class=""uva-alert__body">
          <h3 class="uva-alert__heading">${alert.title}</h3>
          <p class="uva-alert__text">${alert.body}</p>
        </div>
      </div>
    `;
    newContainer.appendChild(node);
    this.style.display = "block";
  }
}

window.customElements.define('uvalib-alerts-level4', UvalibAlertsLevel4);
