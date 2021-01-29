import UvalibModelFBDB from "./uvalib-model-realtime-database.js";

/**
 * `uvalib-model-realtime-override`
 */
export default class UvalibModelRealtimeOverride extends UvalibModelFBDB {

    constructor() {
      super();
      this.database = 'uvalib-api';
    }

    connectedCallback() {
      super.connectedCallback();
      this._setupDom();
      this.addEventListener('uvalib-model-data-value',function(e){
        if (e.detail) {
          // we have data to override with
          this._overrideContainer.innerHTML = e.detail;
          this._defaultContainer.style.display = "none";
          this._overrideContainer.style.display = "block";
          this.style.display = "block";
        } else {
          // just show the default content
          this._overrideContainer.style.display = "none";
          this._defaultContainer.style.display = "block";
          this.style.display = "block";
        }
      }.bind(this));
    }

    _setupDom(){
      // setup a shadowDOM
      this.shadow = this.attachShadow({mode: 'open'});
      // and a place to stash the alerts
      this._container = document.createElement('div');
      this._overrideContainer = document.createElement('div');
      this._overrideContainer.id = "override";
      this._overrideContainer.style.display="none";
      this._container.appendChild(this._overrideContainer);
      this._defaultContainer = document.createElement('div');
      this._defaultContainer.id = "default";
      this._defaultContainer.style.display="none";
      this._defaultContainer.appendChild( document.createElement('slot') );
      this._container.appendChild(this._defaultContainer);
      this.shadow.appendChild(this._container);
    }

}
   
window.customElements.define('uvalib-model-realtime-override', UvalibModelRealtimeOverride);
   