import 'construct-style-sheets-polyfill';
import'@uvalib/web-styles/src/fonts.js';
import'@uvalib/web-styles/src/icons.js';
import style from './uvalib-alerts.scss';

// setup constructed style sheet
const uvalibAlertsStyles = new CSSStyleSheet();
uvalibAlertsStyles.replaceSync(style);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, uvalibAlertsStyles];

export class UvalibAlerts extends HTMLElement {

  // listen to these attributes for override info
  static get observedAttributes() {
    return ['override','alerts'];
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
        this._alertsModel.addEventListener('seen-count-changed',debounce.default(function(e){
console.log("seen count changed");                  
          const count = (e.detail && e.detail.seenCount)? parseInt(e.detail.seenCount):0;
          this.seenCount = count;
          this.setAttribute('seen-count', count);
          this._alertsSeen = this._alertsModel.seen;
//          this._updateAlerts(this._alertsModel.alerts);
        }.bind(this),300).bind(this));
        this._alertsModel.addEventListener('alerts-changed',debounce.default(function(e){
console.log("alerts changed");          
          this._alertsSeen = this._alertsModel.seen;
          this._updateAlerts(this._alertsModel.alerts);
        }.bind(this),300).bind(this));
        this._alertsModel.setAttribute('auto',"");
        this.shadow.appendChild(this._alertsModel);
      }.bind(this));
    }.bind(this));    
  }

  _updateAlerts(alerts){
    if (Array.isArray(alerts) && alerts.length>0) {
      alerts = alerts.filter(alert=>{return this._getLevelCode(alert.severity)!==""}); // filter out any alerts that are not a1,a2,a3  
    }
    if (Array.isArray(alerts) && alerts.length>0) {
      this._setupStyle();
      var newContainer = document.createElement('div');          
      const atemp = alerts.filter(function(alert){ return (this._alertsSeen)? !this._alertsSeen.includes(alert.uuid):true; }.bind(this))
            .sort((a,b)=>(a.severity > b.severity)? 1:-1);
      if (atemp.length > 0) {  
//        var importPromises = [];
//        importPromises.push(import ('@uvalib/uvalib-button'));
//        Promise.all(importPromises).then(function(imports) {       
            atemp.forEach(function(alert){ this._addAlert(newContainer, alert) }.bind(this));
//        }.bind(this))
      }
      this.shadow.replaceChild(newContainer, this._alertsContainer);
      this._alertsContainer = newContainer;
    } else {
      this._alertsContainer.innerHTML = "";
    }
    this._sizeChanged();
  }

  _getLevelCode(severity){
    return (severity === "alert1")? "a1":
           (severity === "alert2")? "a2":
           (severity === "alert3")? "a3":
           "";
  }

  _addAlert(newContainer, alert){
    var node = document.createElement('div');
    node.innerHTML = `
    <div class="uva-alert uva-alert--${this._getLevelCode(alert.severity)} ${this._isHot(alert.severity)? "":"uva-alert--dismissable"}" uuid="${alert.uuid}" data-title="${alert.title}">
      <div class="uva-alert__body">
        <h3 class="uva-alert__heading">${alert.title}</h3>
        <div class="uva-alert__text">${alert.body}</div>
        <a href="#" class="dismissButton uva-alert--close" ${this._isHot(alert.severity)? "hidden":""}><i class="icon-window-close-regular"></i></a>
      </div>
    </div>      
    `;
    node.querySelector('.dismissButton').addEventListener('click',this._dismissIt.bind(this));

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
    this.dispatchEvent(new CustomEvent('size-changed', {detail: {height: this.clientHeight}}));
console.log("alerts size changed");
  }
  _isHot(severity){
    return (severity==="alert1");
  }
  _dismissIt(e){
    e.preventDefault();    
    var uuid = e.currentTarget.parentElement.parentElement.getAttribute('uuid');
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

window.customElements.define('uvalib-alerts', UvalibAlerts);