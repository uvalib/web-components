import {apiapp, occupancyapp} from '@uvalib/uvalib-account/uvalib-account-fb-init.js';
import firebase from 'firebase/app';
import 'firebase/database';

/**
 * `uvalib-model-ajax`
 */
export default class UvalibModelFBDB extends HTMLElement {
    static get observedAttributes() {
      return ['path','database','start-key'];
    }

    get path() {return this._path}
    set path(newPath) {this._path = newPath;}
    get database() {return this._database;}
    set database(newDb) {this._database = newDb;}
    get startKey() {return this._startKey;}
    set startKey(newStartKey) {this._startKey=newStartKey;} 

    constructor() {
      super();
    }
    connectedCallback() {
        if ( this._database &&  this._database.indexOf('uvalib-api')>-1 ) {
          this.fbdatabase = firebase.database(apiapp);
        } else {
          this.fbdatabase = firebase.database(occupancyapp);
        }
        //if () {}
        if (this.path) {
            
            var countRef = this.fbdatabase.ref(this.path);
            if (this._startKey) {
                countRef = countRef.orderByKey().startAt(this._startKey);
            }
            countRef.on('value', function(snapshot){  
              this._data = snapshot.val();
              this.dispatchEvent(new CustomEvent('last-response-changed', {bubbles:true,composed:true} ));
              this.dispatchEvent(new CustomEvent('uvalib-model-data-value', {bubbles:true,composed:true, detail:this._data } ));
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
        case "database": this.database = newValue; break;
        case "start-key": this.startKey = newValue; break;
      }
    }

   }
   
   window.customElements.define('uvalib-model-realtime-database', UvalibModelFBDB);
   