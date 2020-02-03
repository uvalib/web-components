import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@uvalib/uvalib-theme';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-media-query/iron-media-query.js';

/**
 * `uvalib-ui-base`
 * Common functionality to extend
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibUiBase extends PolymerElement {
  static get template() {
    return html`
      <custom-style>
        <style include="uvalib-theme iron-flex">
          [hidden] {display:none}
        </style>
      </custom-style>
      <app-location route="{{hash}}" use-hash-as-path url-space-regex="^/nomatchme/"></app-location>
      <iron-media-query query="[[smallScreenQuery]]" query-matches="{{smallScreen}}"></iron-media-query>
      <iron-media-query query="[[mediumScreenQuery]]" query-matches="{{mediumScreen}}"></iron-media-query>
      <iron-media-query query="[[largeScreenQuery]]" query-matches="{{largeScreen}}"></iron-media-query>
    `;
  }
  static get properties() {
    return {
      hash: {
        type: String,
        value: null,
        observer: "_handleAnchor",
        notify: true
      },
      smallScreenQuery: {
        type: String,
        value: "(max-width: 600px)"
      },
      mediumScreenQuery: {
        type: String,
        value: "(min-width: 600px) and (max-width: 992px)"
      },
      largeScreenQuery: {
        type: String,
        value: "(min-width: 993px)"
      },
      smallScreen:{
        type: Boolean,
        reflectToAttribute: true,
        notify: true
      },
      mediumScreen:{
        type: Boolean,
        reflectToAttribute: true,
        notify: true
      },
      largeScreen:{
        type: Boolean,
        reflectToAttribute: true,
        notify: true
      },
      webPsupport: {
        type: Boolean,
        computed: '_supportsWebp()',
        notify: true
      },
      /** Set this to true when you want the links to be relative (when used in library.virginia.edu) **/
      relativeLinks: {
        type: Boolean,
        value: false
      },
      _domain: {
        type: String,
        computed: "_makeLinkDomain(relativeLinks)"
      },
    };
  }
  _handleAnchor(){
    if (this.hash) {
        this._scrollToSelector(window.location.hash);
    }
  }
  _scrollToSelector(selector){
    if (selector) {
      var node = this.shadowRoot.querySelector(selector);
      if (node) node.scrollIntoView();
    }
  }
  _supportsWebp(){
    var elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      // was able or not to get WebP representation
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    else {
      // very old browser like IE 8, canvas not supported
      return false;
    }
  }
  _makeLinkDomain(relLinks) {
    return (relLinks)? "":"https://www.library.virginia.edu";
  }
  _or(...items){
    var i;
    return items.some(i=>!!i);
  }
  _and(t1, t2){
    return (t1 && t2);
  }
  _isOdd(n){
    return !!(n & 1);
  }
  _larger(n1, n2){
    return (n1 > n2);
  }
  _not(b1){
    return !(b1);
  }
  _first(a){
    if (Array.isArray(a) && a.length>0) return a[0];
    else return null;
  }
  _shuffle(thearray) {
    var array;
    if (Array.isArray(thearray)) {
      array = JSON.parse(JSON.stringify(thearray));
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    } else {
      array = thearray;
    }
    return array;
  }
}

window.customElements.define('uvalib-ui-base', UvalibUiBase);
