import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "./uvalib-model-ajax.js";

/**
 * `uvalib-model-library`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibModelLibrary extends customElements.get('uvalib-model-ajax') {
  static get properties() {
    return {
      /**
        If `uuid` is set will return an item from the result set that matches or null.
        When `uuid` is not set, will simply return the first item from the list of results
      */
      item: {
        type: Object,
        computed: '_makeItem(lastResponse,uuid,items)',
        notify: true
      },
      /** The uuid to filter by */
      uuid: {
        type: String
      },
      /** If true will return the first item from the list of items given no uuid */
      returnFirst: {
        type: Boolean,
        value: true
      },
      firebase: {
        type: Boolean,
        value: false
      }
    };
  }
  _makeURL(path,apiVersion) {
    return this.firebase?
      "https://uvalib-api.firebaseio.com/"+path+".json":
      this._apidomain+apiVersion+"/library/"+path;
  }
  _makeItem(lastResponse, uuid) {
    if (this.lastResponse && this.lastResponse.length>0) {
      if (uuid) {
        return this.lastResponse.find((e)=>{return (e.uuid==uuid)});
      } else if (this.returnFirst) {
        return this.lastResponse[0];
      } else {
        return null;
      }
    }
  }
}

window.customElements.define('uvalib-model-library', UvalibModelLibrary);
