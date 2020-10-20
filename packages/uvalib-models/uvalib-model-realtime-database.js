import '@uvalib/uvalib-account/uvalib-account-fb-init.js';
import firebase from 'firebase/app';
import 'firebase/database';

/**
 * `uvalib-model-ajax`
 */
export default class UvalibModelFBDB extends HTMLElement {
    static get observedAttributes() {
      return ['path','start-key'];
    }
    constructor() {
      super();
    }
    connectedCallback() {
        if (this.path) {
            this.database = firebase.default.database();
            var countRef = this.database.ref(this.path);
            if (this._startKey) {
                countRef = countRef.orderByKey().startAt(this._startKey);
            }
            countRef.on('value', function(snapshot){
              this._data = snapshot.val();
              this.dispatchEvent(new CustomEvent('last-response-changed', {bubbles:true,composed:true} ));
              this.dispatchEvent(new CustomEvent('uvalib-model-data-value', {bubbles:true,composed:true,detail:this.data} ));
            }.bind(this));
        }
    }

    get series() {
        if (this._data) {
            return this._data;
        } else {
            return null;
        }
    }
    get lastResponse() {return this._data;}
    get data() {return this._data;}
    get path() {return this._path;}
    set path(newPath) {this._path = newPath;} 
    get startKey() {return this._startKey;}
    set startKey(newStartKey) {this._startKey = newStartKey.toString()}
 
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
        case "path": this.path = newValue; break;
      }
    }

   }
   
   window.customElements.define('uvalib-model-realtime-database', UvalibModelFBDB);
   