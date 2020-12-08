import 'construct-style-sheets-polyfill';
import('@uvalib/web-styles/src/fonts.js');
import('@uvalib/web-styles/src/icons.js');
import style from './uvalib-alerts-level4.scss';

// setup constructed style sheet
const uvalibAlertsStyles = new CSSStyleSheet();
uvalibAlertsStyles.replaceSync(style);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, uvalibAlertsStyles];

class UvalibAlertsLevel4 extends HTMLElement {

  // listen to these attributes for override info
  static get observedAttributes() {
    return [];
  }

  // getters/setters properties for override info
  get override() {return !!(this._override);}
  set override(newOverride) {this._override = !!(newOverride); console.log("override set " +this.override)}
  get alerts() {return this._alerts;}
  set alerts(newAlerts) {
    this._alerts = (Array.isArray(newAlerts))? newAlerts:[];
    this._updateAlerts(this._alerts);
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
    var node = document.createElement('uvalib-collapse');
    node.innerHTML = `
      <div class="alertbox alertbox-primary" uuid="${alert.uuid}">
        <div title="${alert.title}">
          <div>${alert.body}</div>
        </div>
      </div>
    `;
    newContainer.appendChild(node);
    this.style.display = "block";
  }

  _setupStyle(){    
    this.shadow.adoptedStyleSheets = [uvalibAlertsStyles];
// todo: attempt to only load constructed styles if called (we have alerts) 
// this was causing an error in Safari
//    if (!document.uvalibSheetLoaded) {
//      import('./uvalib-alerts.scss').then(function(style){
//        sheet.replace(style.default).then(function(){
//          document.uvalibSheetLoaded=true;
//          if (document.adoptedStyleSheets)
//            document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
//          else document.adoptedStyleSheets = [sheet];
//          this.shadow.adoptedStyleSheets = [sheet];
//        }.bind(this));
//      }.bind(this));
//    }
  };
  _setupDom(){
    // setup a shadowDOM
    this.shadow = this.attachShadow({mode: 'open'});
    // and a place to stash the alerts
    this._alertsContainer = document.createElement('div');
    this.shadow.appendChild(this._alertsContainer);
  }
  _sizeChanged(){
    console.log("size changed!" + this.clientHeight);
    this.dispatchEvent(new CustomEvent('size-changed', {detail: {height: this.clientHeight}}));
  }
  _isHot(severity){
    return (severity==="alert1");
  }
  _toggleIt(e){
    // alert analytics that we have a request to toggle the alert   
    const alertElement = e.currentTarget.parentElement.parentElement;
    this.dispatchEvent(new CustomEvent('uvalib-analytics-event', {bubbles: true, composed: true, detail: {track:['alert',alertElement.dataset.title]}}));
    alertElement.parentElement.querySelector('.bodyCollapse').toggle();
    e.currentTarget.parentElement.querySelectorAll('.toggle').forEach(function(el) {
      if (el.getAttribute('hidden')!=="") {
        el.setAttribute('hidden','');
      } else {
        el.removeAttribute('hidden');       
        el.focus();
      }
    });
  }
  _dismissIt(e){
    var uuid = e.currentTarget.parentElement.parentElement.parentElement.getAttribute('uuid');
    // alert analytics that we have a view dismissed alerts event
    this.dispatchEvent(new CustomEvent('uvalib-analytics-event', {bubbles: true, composed: true, detail: {track:['alert','dismissed',e.currentTarget.parentElement.parentElement.dataset.title]}}));
    this._alertsModel.setSeen(uuid);
  } 
  unseeAll(){
    // alert analytics that we have a request to unseen all events (show them as not dismissed again)
    const l = this._alertsModel.seen.length;
    this.dispatchEvent(new CustomEvent('uvalib-analytics-event', {bubbles: true, composed: true, detail: {track:['alerts','unseeAll',l ]}}));
    this._alertsModel.setAllUnSeen();
  }
}

window.customElements.define('uvalib-alerts-level4', UvalibAlertsLevel4);
