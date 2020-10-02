import './uvalib-model-fb-init.js';
import firebase from 'firebase/app';
import 'firebase/database';

/**
 * `uvalib-model-ajax`
 */
export default class UvalibModelFBDB extends HTMLElement {
    static get observedAttributes() {
      return ['path','start-key']; //,'sort-by','sort-order','filter','timeout','poll'];
    }
    constructor() {
      super();
    }
    connectedCallback() {
        if (this._path) {
            this.database = firebase.default.database();
            var countRef = this.database.ref(this._path);
            if (this._startKey) {
//                console.log("start key of "+this._startKey);
                countRef = countRef.orderByKey().startAt(this._startKey);
            }
            countRef.on('value', function(snapshot){
              this._data = snapshot.val();
              this.dispatchEvent(new CustomEvent('uvalib-model-data-value', {bubbles:true,composed:true} ));
            }.bind(this));
        }
    }
 /*   
    get auto() {return !!(this._auto);}
    set auto(newAuto) {this._auto = !!(newAuto); this._eval();}
*/
    get series() {
        if (this._data) {
            return this._data;
        } else {
            return null;
        }
    }
    get data() {return this._data;}
    get path() {return this._path;}
    set path(newPath) {this._path = newPath;} // this._eval();}
    get startKey() {return this._startKey;}
    set startKey(newStartKey) {this._startKey = newStartKey.toString()}
 /*   
    get sortBy() {return this._sortBy;}
    set sortBy(newSortBy) {this._sortBy = newSortBy; this._eval();}
    get sortOrder() {return this._sortOrder;}
    set sortOrder(newSortOrder) {this._sortOrder = newSortOrder; this._eval();}
    get filter() {return this._filter;}
    set filter(newFilter) {this._filter = newFilter; this._eval();}
    get timeout() {return this._timeout;}
    set timeout(newTimeout) {this._timeout = newTimeout; this._eval();}
    get poll() {return this._poll}
    set poll(newPoll) {this._poll = newPoll; this._eval();}
    get items() {
     return this.lastResponse;
    }
 */  
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
//        case "auto": this.auto = newValue===""? true:false; break;
        case "path": this.path = newValue; break;
//        case "sort-by": this.sortBy = newValue; break;
//        case "sort-order": this.sortOrder = newValue; break;
//        case "filter": this.filter = newValue; break;
//        case "timeout": this.timeout = parseInt(newValue); break;
//        case "poll": this.poll = parseInt(newValue); break;
      }
    }
/*    
    _eval(){
      if (this._auto && this._path ) this.generateRequest();
    }
    _makeURL() {
      return this._apidomain+this._apiversion+"/"+this._path;
    }
    generateRequest() {
      if ( (this.hasAttribute('timeout')&&!this._timeout) ||
           (this.hasAttribute('poll')&&!this._poll) ) return;
      // only one request at a time
      if (this._controller && this.loading) this._controller.abort();
      this.loading = true;
      this._controller = new AbortController();
      if (this._timeout) setTimeout( function(){ this._controller.abort(); }.bind(this),this._timeout );
      const signal = this._controller.signal;
      fetch(this._makeURL(),{ signal })
         .then(response => response.json())
         .then(function(data){
           this.loading = false;
           this.lastResponse = data;
           this.dispatchEvent(new CustomEvent('last-response-changed', {bubbles:true,composed:true} ));
         }.bind(this))
         .catch(function(err){
           this.loading = false;
           if (err.name === 'AbortError') {
             console.log('Fetch aborted');
           } else {
             console.error('Uh oh, an error!', err);
           }
         }.bind(this));
    }
*/    
   }
   
   window.customElements.define('uvalib-model-realtime-database', UvalibModelFBDB);
   