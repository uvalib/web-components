import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import {} from '@polymer/polymer/lib/elements/dom-if.js';
import '@uvalib/uvalib-accordion/uvalib-accordion.js';
import '@uvalib/uvalib-accordion/uvalib-accordion-item.js';

import * as firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.default.initializeApp({
  apiKey: "AIzaSyDsTrjUL9kRug7fw_sNU31cy7JYzJAUvmQ",
  databaseURL: "https://uvalib-api-occupancy.firebaseio.com",
  projectId: "uvalib-api",
  appId: "1:602799472461:web:d56a8ec950c9c85edc8104"
});

/**
 * `uvalib-counts`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibCounts extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        [slot="heading"] {

        }
      </style>
      <uvalib-accordion multi>
        <template is="dom-repeat" items="[[libraries]]" as="library">
          <template is="dom-if" if="[[library.occupancy]]">
            <uvalib-accordion-item opened heading-level="1">
              <div slot="heading">
                <div style="padding: 20px">
                  <h1 inner-h-t-m-l="[[library.name]]"></h1>
                </div>
                <div style="float: left; padding: 20px;">
                  <div style="font-size: 55px; font-weight: bolder;">[[_calcPercent(library.maximumAttendeeCapacity, library.occupancy.value)]]%</div>
                  <div style="font-size: 20px; font-weight: bolder;">Percent Occupied</div>
                  <div style="font-size: 55px; font-weight: bolder;">[[_calcPercent(library.occupancy.value, library.noMaskCount.value)]]%</div>
                  <div style="font-size: 20px; font-weight: bolder;">not wearing masks</div>
                </div>
                <div style="float: right; padding: 20px;">
                  <h2>Capacity: [[library.maximumAttendeeCapacity]]</h2>
                  <h2>Occupancy: [[library.occupancy.value]]</h2>
                  <h2>Mask Non-Compliance: [[library.noMaskCount.value]]</h2>
                </div>
              </div>
              <div slot="body">
                <div style="background-color: lightgrey; padding: 20px;">
                  <template is="dom-repeat" items="[[_values(library.containedInPlace)]]" as="place">
                    <template is="dom-if" if="[[place.occupancy]]">
                      <h3>[[place.name]]</h3>
                      <div>Occupancy: [[place.occupancy.value]] ([[place.occupancy.timestamp]])</div>
                      <div>Mask Violations: [[place.noMaskCount.value]] ([[place.noMaskCount.timestamp]])</div>
                    </template>
                  </template>
                </div>
              </div>
            </uvalib-accordion-item>
          </template>
        </template>
      </uvalib-accordion>
    `;
  }
  static get properties() {
    return {
      libraries: Array
    };
  }
  ready() {
    super.ready();
    this.database = firebase.default.database();
    var countRef = this.database.ref('locations-schemaorg/location');
    countRef.on('value', function(snapshot){
      this.libraries = this._values(snapshot.val());
    }.bind(this));
  }
  _calcPercent(capacity, occupancy){
    return Math.round( ((occupancy/capacity) * 100).toFixed(3) );
  }
  _values(obj){
    return Object.values(obj);
  }
}

window.customElements.define('uvalib-counts', UvalibCounts);
