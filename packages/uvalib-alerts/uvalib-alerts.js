import('@uvalib/web-styles/src/fonts.js');
import('@uvalib/web-styles/src/icons.js');
class UvalibAlerts extends HTMLElement {
  static get observedAttributes() {
    return ['override','alerts'];
  }
  constructor() {
    // Always call super first in constructor
    super();
  }
  connectedCallback() {
    this._setupDom();
    if (!this.override) this._setupAlertsModel();
  }
  _setupAlertsModel(){
    import('@uvalib/uvalib-models/uvalib-model-alerts.js').then(function(){
      this._alertsModel = document.createElement('uvalib-model-alerts');
      import ('lodash/debounce').then(function(debounce){
        this._alertsModel.addEventListener('seen-count-changed',debounce.default(function(e){
          const count = (e.detail && e.detail.seenCount)? parseInt(e.detail.seenCount):0;
          this.seenCount = count;
          this.setAttribute('seen-count', count);
          this._alertsSeen = this._alertsModel.seen;
        }.bind(this),300).bind(this));
        this._alertsModel.addEventListener('alerts-changed',debounce.default(function(e){
          this._updateAlerts(this._alertsModel.alerts);
        }.bind(this),300).bind(this));
      }.bind(this));
      this._alertsModel.setAttribute('auto',"");
      this.shadow.appendChild(this._alertsModel);
    }.bind(this));
  }
  _updateAlerts(alerts){
    if (Array.isArray(alerts) && alerts.length>0) {
      // be sure that we have style, uvalib-collapse, and uvalib-button
      this._setupStyle();
      var newContainer = document.createElement('div');
      alerts.forEach(function(alert){ this._addAlert(newContainer, alert) }.bind(this));
      this.shadow.replaceChild(newContainer, this._alertsContainer);
      this._alertsContainer = newContainer;
    } else {
      this._alertsContainer.innerHTML = "";
    }
  }
  _addAlert(newContainer, alert){
    var importPromises = [];
    importPromises.push(import ('lodash/debounce'));
    importPromises.push(import ('@uvalib/uvalib-button'));
    importPromises.push(import('@uvalib/uvalib-collapse'));
    Promise.all(importPromises).then(function(imports){
      var debounce = imports[0].default;
      var node = document.createElement('uvalib-collapse');
      node.innerHTML = `
        <div class="alert-item ${alert.severity}" uuid="${alert.uuid}">
          <div data-title="${alert.title}">
          <div class="alert-head">
            <div class="alert-title" >${alert.title}</div>
            <uvalib-button class="moreButton toggle" ${this._isHot(alert.severity)? "hidden ":""}>More</uvalib-button>
            <uvalib-button class="lessButton toggle" ${this._isHot(alert.severity)? "":"hidden"}>Less</uvalib-button>
            <uvalib-button class="dismissButton" ${this._isHot(alert.severity)? "hidden ":""}>Dismiss</uvalib-button>
          </div>
          <uvalib-collapse class="bodyCollapse" ${this._isHot(alert.severity)?"opened":""} ${(this._isHot(alert.severity))?"opened":""}>
            <div class="alert-body">${alert.body}</div>
          </uvalib-collapse>
          </div>
        </div>
      `;
      node.querySelector(".moreButton").addEventListener('click',this._toggleIt.bind(this));
      node.querySelector(".lessButton").addEventListener('click',this._toggleIt.bind(this));
      node.setAttribute('opened',(alert.seen)?null:"");
      node.addEventListener('opened-changed',this._sizeChanged.bind(this));
      node.addEventListener('transitioning-changed',this._sizeChanged.bind(this));
      newContainer.appendChild(node);
    }.bind(this));
  }
  _setupStyle(){
    if (!this._style) {
      this._style = document.createElement('style');
      this.shadow.appendChild(this._style);
      import('./uvalib-alerts.scss').then(function(style){
        this._style.innerHTML = style.default;
      }.bind(this));
    }
  };
  _setupDom(){
    // setup a shadowDOM
    this.shadow = this.attachShadow({mode: 'open'});
    // hidden untill we have alerts to show
    this.shadow.innerHTML = `<style>:host {visibility: hidden;}</style>`;
    // and a place to stash the alerts
    this._alertsContainer = document.createElement('div');
    this.shadow.appendChild(this._alertsContainer);
  }
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
  _sizeChanged(){
    this.dispatchEvent(new CustomEvent('size-changed', {detail: {height: this.clientHeight}}));
  }
  _isHot(severity){
    return (severity==="alert1");
  }
  _toggleIt(e){
    // alert analytics that we have a request to toggle the alert
    this.dispatchEvent(new CustomEvent('uvalib-analytics-event', {bubbles: true, composed: true, detail: {track:['alert',e.currentTarget.textContent,e.currentTarget.parentElement.parentElement.dataset.title]}}));
    e.currentTarget.parentElement.parentElement.querySelector('.bodyCollapse').toggle();
    e.currentTarget.parentElement.querySelectorAll('.toggle').forEach(function(el) {
      if (el.getAttribute('hidden')!=="") {
        el.setAttribute('hidden','');
      } else {
        el.removeAttribute('hidden');
        el.focus();
      }
    });
  }
/*
  _dismissIt(e){
    var uuid = e.currentTarget.parentElement.parentElement.parentElement.uuid;
    // alert analytics that we have a view dismissed alerts event
    this.dispatchEvent(new CustomEvent('uvalib-analytics-event', {bubbles: true, composed: true, detail: {track:['alert','dismissed',e.currentTarget.dataset.title]}}));
    this.$.alertsModel.setSeen(uuid);
  }
  unseeAll(){
    // alert analytics that we have a request to unseen all events (show them as not dismissed again)
    const l = (this._container && this._container._alertsSeen && Array.isArray() )? this._container._alertsSeen.length:0;
    this.dispatchEvent(new CustomEvent('uvalib-analytics-event', {bubbles: true, composed: true, detail: {track:['alerts','unseeAll',l ]}}));
    this._alertsModel.setAllUnSeen();
    this.seenCount = 0;
    this.setAttribute('seen-count', 0);
  }
*/
}

window.customElements.define('uvalib-alerts', UvalibAlerts);
