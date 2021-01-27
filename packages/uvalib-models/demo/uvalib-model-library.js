import UvalibModelAjax from './uvalib-model-ajax.js';

/**
 * `uvalib-model-library`
 */
class UvalibModelLibrary extends UvalibModelAjax {
  static get observedAttributes() {
    return super.observedAttributes.concat(['firebase']);
  }
  constructor() {
    super();
    this._firebase = false;
    this._firebaseDomain = "https://uvalib-api.firebaseio.com/";
  }
  connectedCallback() {}
  get firebase() {return !!(this._firebase);}
  set firebase(newFirebase) {this._firebase = !!(newFirebase); this._eval();}
  _makeURL() {
    return (this._firebase)? this._firebaseDomain+this._path+'.json': super._makeURL();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    switch(name){
      case "firebase": this.firebase = newValue===""? true:false; break;
    }
  }
}

window.customElements.define('uvalib-model-library', UvalibModelLibrary);

export default UvalibModelLibrary;
