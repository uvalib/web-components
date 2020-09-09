import style from './uvalib-alerts.scss';
import '@polymer/polymer/lib/elements/dom-bind.js';
import ('@uvalib/uvalib-models/uvalib-model-alerts.js').then(function(){

  class UvalibAlerts extends HTMLElement {
    static get observedAttributes() {
      return ['override','alerts']; //'alerts','data'];
    }
    constructor() {
      // Always call super first in constructor
      super();
      this._setupDom();
      this._container._mainNode = this;
      this._container._toggleIt = this._toggleIt;
      this._container._sizeChanged = this._sizeChanged;
      this._container._isHot = this._isHot;
      this._container._dismissIt = this._dismissIt;
      this._container._updateSeenCount = this._updateSeenCount;
      this._container._observedPropertyChanged = (newVal) => { this._sizeChanged(); };
      this._container._createPropertyObserver('alerts', '_observedPropertyChanged', true);
    }
    _setupDom(){
      // setup a shadowDOM
      this.shadow = this.attachShadow({mode: 'open'});
      // this should take care of our login/logout interactions
      this.shadow.innerHTML = `
        <style>${style}</style>
        <dom-bind id="container"><template>
          <uvalib-model-alerts auto="[[!override]]" id="alertsModel" alerts="{{alerts}}" seen-count="{{seenCount}}" on-seen-count-changed="_updateSeenCount" seen="{{_alertsSeen}}"></uvalib-model-alerts>
          <dom-repeat items="[[alerts]]" as="alert">
            <template>
              <iron-collapse opened$="[[!alert.seen]]" on-opened-changed="_sizeChanged" on-transitioning-changed="_sizeChanged">
                <div class$="alert-item [[alert.severity]]" uuid="[[alert.uuid]]">
                  <div data-title$="[[alert.title]]">
                  <div class="alert-head">
                    <div class="alert-title" on-click="_toggleIt">[[alert.title]]</div>
                    <template is="dom-if" if="[[!_isHot(alert.severity)]]">
                      <paper-button class="toggle" on-click="_toggleIt">More</paper-button>
                      <paper-button class="toggle hidden" on-click="_toggleIt">Less</paper-button>
                      <paper-button data-title$="[[alert.title]]" on-click="_dismissIt">Dismiss</paper-button>
                    </template>
                  </div>
                  <iron-collapse class="body-collapse" opened$="[[_isHot(alert.severity)]]" on-opened-changed="_sizeChanged" on-transitioning-changed="_sizeChanged">
                    <div class="alert-body" inner-h-t-m-l="[[alert.body]]"></div>
                  </iron-collapse>
                  </div>
                </div>
              </iron-collapse>
            </template>
          </dom-repeat>
        </template></dom-bind>
      `;
      // setup some properties to easily interact with parts of our dom
      this._container = this.shadow.getElementById('container');
      this._alertsModel = this.shadow.getElementById('alertsModel');
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
        case "override":
  console.log('changed override value');
          this._container.override = newValue;
          break;
        case "alerts":
  console.log('alerts override set');
          this._container.alerts = JSON.parse(newValue);
          break;
      }
    }
    _updateSeenCount(e){
      if (e.detail && e.detail.seenCount) {
        this._mainNode.seenCount = e.detail.seenCount;
        this._mainNode.setAttribute('seen-count', e.detail.seenCount);
      }
    }
    _toggleIt(e){
      // alert analytics that we have a request to toggle the alert
      this.dispatchEvent(new CustomEvent('uvalib-analytics-event', {bubbles: true, composed: true, detail: {track:['alert',e.currentTarget.textContent,e.currentTarget.parentElement.parentElement.dataset.title]}}));
      e.currentTarget.parentElement.parentElement.querySelector('.body-collapse').toggle();
      e.currentTarget.parentElement.querySelectorAll('.toggle').forEach(function(el) {
        el.classList.toggle("hidden");
        if (!el.classList.contains("hidden")) el.focus();
      });
    }
    _sizeChanged(){
      // only bother loading components if we have something to show
      if (this._container && this._container.alerts && Array.isArray(this._container.alerts) && this._container.alerts.length>0) {
        var imports = [];
        imports.push( import ('@polymer/polymer/lib/elements/dom-repeat.js') );
        imports.push( import ('@uvalib/web-styles/src/fonts.js') );
        imports.push( import ('@uvalib/web-styles/src/icons.js') );
        imports.push( import ('@polymer/iron-collapse/iron-collapse.js') );
        imports.push( import ('@polymer/paper-button/paper-button.js') );
        Promise.all(imports).then(()=>{
          this.style.visibility = "visible";
        });
      }
      this.dispatchEvent(new CustomEvent('size-changed', {detail: {height: this.clientHeight}}));
    }
    _isHot(severity){
      return (severity==="alert1");
    }
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
  }

  window.customElements.define('uvalib-alerts', UvalibAlerts);

});
