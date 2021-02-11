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
      this._gotdata = false;
    }

    connectedCallback() {
      super.connectedCallback();
      this._setupDom();
    }

    _dataChanged(value) {


      this._gotdata = true;
      if (this._timeout) {
        window.clearTimeout(this._timeout);
      }

      if (this.timestamp) {
        this._checkTime(value);   
      } else {
        this._adjustDom(value);
      }
    }

    _checkTime(value) {
      // see if we can parse the db value as a datetime           
      if (value && parseInt(value)>0) {
        var d = DateTime.fromMillis( parseInt(value) );
        if (d && DateTime.local().toMillis() < d.toMillis()) {                       
          // poll every few minutes to see if need to continue showing the override
          this._adjustDom(true,this.defaultValue);
          this._timeout = window.setTimeout(function(){this._checkTime(value)}.bind(this), 60000);
        } else {
          this._adjustDom(false);
        }
      } else {       
        this._adjustDom(false);  // show the default
      }
    }

    _adjustDom(isoverride, value){     
      if (isoverride && this._overrideContainer && this._defaultContainer) {
        // we have data to override with
        if (this.defaultValue) {
          this._overrideContent.innerHTML = this.defaultValue;
        }
        this._defaultContainer.setAttribute('hidden','');
        this._overrideContainer.removeAttribute('hidden');
        this.style.display = "block";       
      } else if (this._overrideContainer && this._defaultContainer) {
        // just show the default content
        this._overrideContainer.setAttribute('hidden','');
        this._defaultContainer.removeAttribute('hidden');
        this.style.display = "block";
      }
    }

    _setupDom(){
      // setup a shadowDOM
      this.shadow = this.attachShadow({mode: 'open'});

      this.shadow.innerHTML = `
      <style>
       [hidden] {
         display: none;
       }
      </style>
      <div id="container">
        <div id="override" hidden part="override"><slot name="override"><div id="overrideContent"></div></slot></div>
        <div id="default" hidden part="default"><slot></slot></div>
      </div>
      `;
      this._container = this.shadow.querySelector('#container');
      this._overrideContainer = this.shadow.querySelector('#override');
      this._overrideContent = this.shadow.querySelector('#overrideContent');
      this._defaultContainer = this.shadow.querySelector('#default');
      if (this._data) {
        this._dataChanged(this._data);
      }
    }

}
   
window.customElements.define('uvalib-model-realtime-override', UvalibModelRealtimeOverride);
   
