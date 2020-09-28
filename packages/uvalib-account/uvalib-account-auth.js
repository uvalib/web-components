import firebase from 'firebase/app';
import 'firebase/auth';
import './uvalib-account-fb-init.js';

/**
 * `uvalib-model-auth`
 */
export default class UvalibAccountAuth extends HTMLElement {
    static get observedAttributes() {
      return ['auto']; //,'sort-by','sort-order','filter','timeout','poll'];
    }
    constructor() {
      super();
    }
    connectedCallback() {
        var url = new URL(window.location.href);
        this._fbtoken = url.searchParams.get("token")? 
                          url.searchParams.get("token"): 
                          localStorage.getItem('fbtoken')? 
                              localStorage.getItem('fbtoken'):
                              null;
        url.searchParams.delete("token"); 
        window.history.replaceState({}, document.title, url.pathname+url.search);
            
        if (!this._fbtoken) {
            window.location.href = 'http://api.library.virginia.edu/fireauth/helloOccupancy.js?dest='+window.location.href;
        } else {
            firebase.auth().signInWithCustomToken(this._fbtoken)
                .then(function(){
                    localStorage.setItem('fbtoken',this._fbtoken);
                    this.dispatchEvent(new CustomEvent('uvalib-model-authenticated', {bubbles:true,composed:true} ));
                }.bind(this))
                .catch(function(error){
                console.error(`Got an error code of ${error.code} trying to login to Firebase. Reason: ${error.message}`);
                window.location.href = 'http://api.library.virginia.edu/fireauth/helloOccupancy.js?dest='+window.location.href;
                })
        }
            
    }    
    get auto() {return !!(this._auto);}
    set auto(newAuto) {this._auto = !!(newAuto);}

    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
        case "auto": this.auto = newValue===""? true:false; break;
      }
    }
   }
   
   window.customElements.define('uvalib-account-auth', UvalibAccountAuth);   