import firebase from 'firebase/app';
import 'firebase/auth';
import './uvalib-account-fb-init.js';

/**
 * `uvalib-model-auth`
 */
export default class UvalibAccountAuth extends HTMLElement {
    static get observedAttributes() {
      return ['auto','userkey'];
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
            
        console.log("we have a key");
        console.log(this.userkey);
        if (!this._fbtoken && this.userkey) {
          window.location.href = 'http://api.library.virginia.edu/fireauthkeyed/helloOccupancy.js?userkey='+this.userkey+'&dest='+window.location.href.replace(/\?.*/,'');
        } else if (!this._fbtoken) {
          window.location.href = 'http://api.library.virginia.edu/fireauth/helloOccupancy.js?dest='+window.location.href;
        } else {
            firebase.auth().signInWithCustomToken(this._fbtoken)
                .then(function(){
                    localStorage.setItem('fbtoken',this._fbtoken);
                    this.dispatchEvent(new CustomEvent('uvalib-model-authenticated', {bubbles:true,composed:true} ));
                }.bind(this))
                .catch(function(error){
                console.error(`Got an error code of ${error.code} trying to login to Firebase. Reason: ${error.message}`);
//                  window.location.href = 'http://api.library.virginia.edu/fireauth/helloOccupancy.js?dest='+window.location.href;
                })
        }
            
    }    
    get auto() {return !!(this._auto);}
    set auto(newAuto) {this._auto = !!(newAuto);}

    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
        case "auto": this.auto = newValue===""? true:false; break;
        case "userkey": this.userkey = newValue;
      }
    }
   }
   
   window.customElements.define('uvalib-account-auth', UvalibAccountAuth);   