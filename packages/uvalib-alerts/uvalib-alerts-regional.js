import 'construct-style-sheets-polyfill';
import'@uvalib/web-styles/src/fonts.js';
import'@uvalib/web-styles/src/icons.js';
import style from './uvalib-alerts-regional.scss';

// setup constructed style sheet
const uvalibAlertsRegionalStyles = new CSSStyleSheet();
uvalibAlertsRegionalStyles.replaceSync(style);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, uvalibAlertsRegionalStyles];

export class UvalibAlertsRegional extends HTMLElement {

  // listen to these attributes for override info
  static get observedAttributes() {
    return ['override','alerts','url'];
  }

  // getters/setters properties for override info
  get override() {return !!(this._override);}
  set override(newOverride) {this._override = !!(newOverride);}
  get alerts() {return this._alerts;}
  set alerts(newAlerts) {
    this._alerts = (Array.isArray(newAlerts))? newAlerts:[];
    this._updateAlerts(this._alerts);
  }
  get url() {return this._url;}
  set url(newURL) {
    this._url = newURL;
  }

  // attribute values
  attributeChangedCallback(name, oldValue, newValue) {
    switch(name){
      case "override":
        this.override = newValue===""? true:false;
        break;
      case "alerts":
        this.alerts = JSON.parse(newValue);
        break;
      case "url":
        this.url = newValue;
        break;
    }
  }

  constructor() {
    // Always call super first in constructor
    super();
    this._setupDom();
  }

  // attributes should be parsed by the time connected callback is called
  connectedCallback() {
    if (!this.override) 
      this._setupAlertsModel();
  }

  _setupAlertsModel(){
    import ('lodash/debounce').then(function(debounce){    
      import('@uvalib/uvalib-models/uvalib-model-realtime-database.js').then(function(){
        this._alertsModel = document.createElement('uvalib-model-realtime-database');
        this._alertsModel.addEventListener('uvalib-model-data-value',debounce.default(function(e){
          this.alerts = e.detail;
        }.bind(this),300).bind(this));
        this._alertsModel.setAttribute('auto',"");
        this._alertsModel.setAttribute('path', "regionalalerts");
        this._alertsModel.setAttribute('database', "https://uvalib-api.firebaseio.com/");
        this.shadow.appendChild(this._alertsModel);
      }.bind(this));
    }.bind(this));    
  }

  _updateAlerts(alerts){
    if (Array.isArray(alerts) && alerts.length > 0) {
      console.log(alerts)
      alerts = alerts.filter(a=>{return this._matchesURL(a.url);});
      if (Array.isArray(alerts) && alerts.length > 0) {
        console.log(alerts);
        this._alertsContainer.innerHTML = "";
        alerts.forEach(a=>{
          this._alertsContainer.innerHTML += `
            <div class="alertbox alertbox-primary">${a.body}</div>
          `;
        });
        this._setupStyle();
        this._alertsContainer.removeAttribute("hidden");
      } else {
        this._alertsContainer.setAttribute("hidden","");
      }
    }
  }
  _matchesURL(pattern){
    if (!Array.isArray(pattern)) pattern = [{value:pattern}];
    //pattern.forEach(p=>{
    for (var i=0; i<pattern.length; i++) {  
      const p = pattern[i];
      const re = new RegExp(p.value);
      const url = (this.url)? this.url:window.location.href;
      if ( re.test(url.replace(/\/$/,'')) ) {return true};
    };
    return false;
  }

  _setupStyle(){    
    this.shadow.adoptedStyleSheets = [uvalibAlertsRegionalStyles];
  };
  _setupDom(){
    // setup a shadowDOM
    this.shadow = this.attachShadow({mode: 'open'});
    // and a place to stash the alerts
    this._alertsContainer = document.createElement('div');
    this._alertsContainer.setAttribute("hidden","");
    this.shadow.appendChild(this._alertsContainer);
  }

}

window.customElements.define('uvalib-alerts-regional', UvalibAlertsRegional);