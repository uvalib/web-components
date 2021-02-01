import UvalibModelFBDB from "./uvalib-model-realtime-database.js";
import { DateTime } from "luxon";
DateTime.local();

/**
 * `uvalib-model-realtime-override`
 */
export default class UvalibModelRealtimeOverride extends UvalibModelFBDB {

    get timestamp() {return this._timestamp}
    set timestamp(newTS) {this._timestamp = !!newTS;}
    get defaultValue() {return this._default}
    set defaultValue(newDefault) {this._default = newDefault}
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
        case "timestamp": this.timestamp = !!(newValue!=null); break;
        case "default-value": this.defaultValue = newValue; break;
        default: super.attributeChangedCallback(name, oldValue, newValue); 
      }
    }

    static get observedAttributes() {
      return super.observedAttributes.concat(['timestamp','default-value']);
    }

    constructor() {
      super();
      this.database = 'uvalib-api';
    }

    connectedCallback() {
      super.connectedCallback();
      this._setupDom();
    }

    _dataChanged(value) {
      if (this._timeout) {
        window.clearTimeout(this._timeout);
      }

      if (value && this.timestamp && this.defaultValue) {
        this._checkTime(value);   
      } else {
        this._adjustDom(value);
      }
    }

    _checkTime(value) {
      // see if we can parse the db value as a datetime     
      var d = DateTime.fromMillis(value);      

      if (DateTime.local().toMillis() < d.toMillis()) {              
        // poll every few minutes to see if need to continue showing the override
        this._adjustDom(this.defaultValue);
        this._timeout = window.setTimeout(function(){this._checkTime(value)}.bind(this), 60000);
      } else {       
        this._adjustDom();  // show the default
      }
    }

    _adjustDom(value){
      if (value && this._overrideContainer && this._defaultContainer) {
        // we have data to override with
        this._overrideContainer.innerHTML = value;
        this._defaultContainer.style.display = "none";
        this._overrideContainer.style.display = "block";
        this.style.display = "block";
      } else if (this._overrideContainer && this._defaultContainer) {
        // just show the default content
        this._overrideContainer.style.display = "none";
        this._defaultContainer.style.display = "block";
        this.style.display = "block";
      }
    }

    _setupDom(){
      // setup a shadowDOM
      this.shadow = this.attachShadow({mode: 'open'});
      // and a place to stash the alerts
      this._container = document.createElement('div');
      this._overrideContainer = document.createElement('div');
      this._overrideContainer.id = "override";
      this._overrideContainer.style.display="none";
      this._overrideContainer.setAttribute('part','override');
      this._container.appendChild(this._overrideContainer);
      this._defaultContainer = document.createElement('div');
      this._defaultContainer.id = "default";
      this._defaultContainer.style.display="none";
      this._defaultContainer.appendChild( document.createElement('slot') );
      this._defaultContainer.setAttribute('part','default');
      this._container.appendChild(this._defaultContainer);
      this.shadow.appendChild(this._container);
    }

}
   
window.customElements.define('uvalib-model-realtime-override', UvalibModelRealtimeOverride);
   
