import UvalibModelAjax from"./uvalib-model-ajax.js";class UvalibModelLibrary extends UvalibModelAjax{static get observedAttributes(){return super.observedAttributes.concat(["firebase"])}constructor(){super(),this._firebase=!1,this._firebaseDomain="https://uvalib-api.firebaseio.com/"}connectedCallback(){}get firebase(){return!!this._firebase}set firebase(e){this._firebase=!!e,this._eval()}_makeURL(){return this._firebase?this._firebaseDomain+this._path+".json":super._makeURL()}attributeChangedCallback(e,i,a){switch(super.attributeChangedCallback(e,i,a),e){case"firebase":this.firebase=""===a}}}window.customElements.define("uvalib-model-library",UvalibModelLibrary);export default UvalibModelLibrary;
