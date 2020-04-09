import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax';
import 'lodash-es/filter';
import 'lodash-es/orderBy';

/**
 * `uvalib-model-ajax`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibModelAjax extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host { display: none; }
      </style>
      <iron-ajax id="ajax" auto="[[auto]]" url="[[_url]]" handle-as="[[_requestType]]" loading="{{loading}}" last-response="{{_lastResponse}}" on-response="_reqFinished" headers="[[_headers]]"></iron-ajax>
    `;
  }
  static get properties() {
    return {
      /** URL used to get the content from the UVA APIs */
      _url: {
        type: String,
        computed: '_makeURL(path,apiVersion)'
      },
      /** If true, automatically performs an Ajax request when parameters change */
      auto: {
        type: Boolean,
        value: true
      },
      /** The API path used in the request */
      path: {
        type: String,
        value: ""
      },
      /** True while requests are in flight to the API */
      loading: {
        type: Boolean,
        notify: true,
      },
      /** captures the last response in case we need to parse it */
      _lastResponse: {
        type: Object,
        observer: "_parseResponse"
      },
      /** The last response */
      lastResponse: {
        type: Object,
        notify: true,
        readOnly: true
      },
      /** The version (path) of the UVA data api */
      apiVersion: {
        type: String,
        value: "v1"
      },
      /** To poll the api for changes, set this to the number of milliseconds between response and new request */
      poll: Number,
      /** If `true` and the API supports CSV then the CSV feed will be used and parsed to save on the amount of data (no duplicate property names) */
      csv: {
        type: Boolean,
        value: false,
        observer: "_CSVobserver"
      },
      _requestType: {
        type: String,
        computed: "_typeOfRequest(csv)"
      },
      _contentType: String,
      _apidomain: {
        type: String,
        value: "https://api.devhub.virginia.edu/"
      },
      items: {
        type: Array,
        computed: '_getItems(lastResponse,filter,sortBy)',
        notify: true
      },
      sortBy: String,
      sortOrder: {
        type: String,
        value: 'asc'
      },
      filter: Object
    };
  }
  generateRequest() {
    this.$.ajax.generateRequest();
  }
  _getItems(lastResponse) {
    if (Array.isArray(lastResponse)) {
      var items = this.lastResponse;
      if (this.filter) {
        items = _.filter(items,this.filter);
      }
      if (this.sortBy) {
        items = _.orderBy(items, this.sortBy, this.sortOrder);
      }
      return items;
    }
    return null;
  }
  /** Helper method for when you need a hash instead of an array **/
  getHash(key, vals) {
    if (Array.isArray(this.lastResponse)) {
      var hash = {};
      this.lastResponse.forEach(function(x) {
        if (x[key]) {
          hash[x[key]]={};
          vals.forEach( (y) => {
            hash[x[key]][y] = x[y];
          });
        }
      }.bind(this));
      return hash;
    }
    return {};
  }
  /** Loads the CSV parser if needed */
  _CSVobserver() {
//    if (this.csv) {
//      Polymer.importHref("../../uva-helper-libs/papaparse.html");
//      this._headers = { "accept":"text/csv" };
//    } else {
      this._headers = { "accept":"application/json" };
//    }
  }
  _parseResponse() {
//    this._debouncer = Polymer.Debouncer.debounce(this._debouncer,
//        Polymer.Async.timeOut.after(200),
//        () => {
      if (this.csv) {
        // parse the csv
        this._setLastResponse(Papa.parse(this._lastResponse,{header:true,skipEmptyLines:true}).data);
      } else {
        this._setLastResponse(this._lastResponse);
      }

//    });
  }
  _typeOfRequest(csv) {
    return (csv)? "text":"json";
  }
  _makeURL(path,apiVersion) {
    return this._apidomain+apiVersion+"/"+path;
  }
  _reqFinished() {
    if (this.poll) {
      this._timeout = setTimeout(function(){
        this.shadowRoot.querySelector('#ajax').generateRequest();
        this._timeout = null;
      }.bind(this),this.poll)
    }
  }
}

window.customElements.define('uvalib-model-ajax', UvalibModelAjax);
