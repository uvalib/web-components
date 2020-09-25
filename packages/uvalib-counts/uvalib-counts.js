import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import {} from '@polymer/polymer/lib/elements/dom-if.js';
import '@uvalib/uvalib-accordion/uvalib-accordion.js';
import '@uvalib/uvalib-accordion/uvalib-accordion-item.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';
//import '@vaadin/vaadin-tabs/vaadin-tabs.js';
//import '@vaadin/vaadin-tabs/vaadin-tab.js';
import moment from 'moment';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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
        .time {
          font-style: italic;
          font-size: smaller;
          font-weight: lighter;
        }
      </style>
      <!--
      <vaadin-tabs selected="[[_state]]">
        <vaadin-tab>Edit</vaadin-tab>
        <vaadin-tab>Watch</vaadin-tab>
      </vaadin-tabs>
      -->
      <uvalib-accordion multi>
        <template is="dom-repeat" items="[[_filter(libraries,type)]]" as="library">
          <template is="dom-if" if="[[library.occupancy]]">
              <uvalib-accordion-item opened$="[[editMode]]" heading-level="1">
                <div slot="heading">
                  <div style="padding: 20px">
                    <h1 inner-h-t-m-l="[[library.name]]"></h1>
                  </div>
                  <div style="float: left; padding: 20px;">
                    <div hidden$="[[!library.maximumAttendeeCapacity]]" style="font-size: 55px; font-weight: bolder;">[[_calcPercent(library.maximumAttendeeCapacity, library.occupancy.value)]]%</div>
                    <div hidden$="[[!library.maximumAttendeeCapacity]]" style="font-size: 20px; font-weight: bolder;">Percent Occupied</div>
                    <div hidden$="[[noMaskTrack]]" style="font-size: 55px; font-weight: bolder;">[[_calcInversePercent(library.occupancy.value,library.noMaskCount.value)]]%</div>
                    <div hidden$="[[noMaskTrack]]" style="font-size: 20px; font-weight: bolder;">Mask Compliance</div>
                  </div>
                  <div style="float: right; padding: 20px;">
                    <h2 hidden$="[[!library.maximumAttendeeCapacity]]">Capacity: [[library.maximumAttendeeCapacity]]</h2>
                    <h2>Occupancy: 
                      <span>[[library.occupancy.value]]</span>
                      <br/><span class="time">[[_timeformat(library.occupancy.timestamp_end)]]</span></h2>
                    <h2 hidden$="[[_isNull(library.estimatedOccupancy.value)]]">Estimated Occupancy: [[library.estimatedOccupancy.value]]<br/><span class="time">[[_timeformat(library.estimatedOccupancy.timestamp)]]</span></h2>
                    <h2 hidden$="[[noMaskTrack]]">Mask Non-Compliance: [[library.noMaskCount.value]]<br/><span class="time">[[_timeformat(library.noMaskCount.timestamp_end)]]</span></h2>
                  </div>
                </div>
                <div slot="body">
                  <div style="background-color: lightgrey; padding: 20px;">
                  <template is="dom-if" if="[[!library.containedInPlace]]">
                    <vaadin-number-field hidden$="[[!editMode]]" on-change="_updateMainCount" library-id="[[library.key]]" action-id="[[_occupancy]]" value="[[library.occupancy.value]]" min="0" has-controls></vaadin-number-field>
                  </template>
                  <template is="dom-if" if="[[library.containedInPlace]]">
                    <div hidden$="[[!editMode]]">
                      <vaadin-button theme="error primary" library-id="[[library.key]]" on-click="_clearCount">Clear</vaadin-button>
                    </div>
                    <template is="dom-repeat" items="[[_values(library.containedInPlace)]]" as="place">
                      <template is="dom-if" if="[[place.occupancy]]">
                        <h3>[[place.name]]</h3>
                        <div style="display:flex; flex-direction:row">
                          <div style="flex:1">
                            <div>Occupancy:
                              <vaadin-number-field hidden$="[[!editMode]]" library-id$="[[library.key]]" place-id$="[[place.key]]" action-id="[[_occupancy]]" value="0" min="0" has-controls></vaadin-number-field>
                              <span>([[place.occupancy.value]])</span>
                            </div>
                            <div>Mask Violations:
                              <vaadin-number-field hidden$="[[!editMode]]" library-id$="[[library.key]]" place-id$="[[place.key]]" action-id="[[_noMaskCount]]" value="0" min="0" has-controls></vaadin-number-field>
                              <span>([[place.noMaskCount.value]])</span>
                            </div>
                          </div>
                        </div>
                      </template>
                    </template>
                    <div><vaadin-button hidden$="[[!editMode]]" theme="success primary" library-id="[[library.key]]" on-click="_updateCount">Submit</vaadin-button></div>
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
      libraries: Array,
      _occupancy: {
        type: String,
        value: "occupancy"
      },
      _noMaskCount: {
        type: String,
        value: "noMaskCount"
      },
      editMode: {
        type: Boolean,
        value: false,
        observer: "_setState"
      },
      _state: {
        type: Number,
        value: 1,
        observer: "_setMode"
      },
      type: {
        type: String,
        value: null
      },
      noMaskTrack: {
        type: Boolean,
        value: false
      }
    };
  }
  ready() {
    super.ready();

    var url = new URL(window.location.href);
    this.fbtoken = url.searchParams.get("token")? 
                      url.searchParams.get("token"): 
                      localStorage.getItem('fbtoken')? 
                          localStorage.getItem('fbtoken'):
                          null;  
                      
    if (!this.fbtoken) {
      window.location.href = 'http://api.library.virginia.edu/fireauth/helloOccupancy.js?dest='+window.location.href;
    } else {
      firebase.auth().signInWithCustomToken(this.fbtoken)
        .then(function(){
          this.database = firebase.default.database();
          var countRef = this.database.ref('locations-schemaorg/location');
          countRef.on('value', function(snapshot){
            this._libraries = snapshot.val();
            this.libraries = this._values(this._libraries);
            console.log("updated hours");
          }.bind(this));
          localStorage.setItem('fbtoken',this.fbtoken);
          url.searchParams.delete("token"); 
          window.history.replaceState({}, document.title, url.pathname+url.search); 
        }.bind(this))
        .catch(function(error){
          console.error(`Got an error code of ${error.code} trying to login to Firebase. Reason: ${error.message}`);
          url.searchParams.delete("token"); 
          window.history.replaceState({}, document.title, url.pathname+url.search);
          window.location.href = 'http://api.library.virginia.edu/fireauth/helloOccupancy.js?dest='+window.location.href;
        })
    }

  }
  
  _isNull(val) {
    return val==null;
  }
  _calcPercent(capacity, occupancy){
    return Math.round( ((occupancy/capacity) * 100).toFixed(3) );
  }
  _calcInversePercent(capacity, occupancy){
    var v = 100 - this._calcPercent(capacity, occupancy);
    return isNaN(v)? 100:v;
  }
  _timeformat(t){
    return moment(t).format('MMMM Do, h:mm:ss a');
  }
  _filter(libraries,type) {
    if (type && Array.isArray(libraries)) {
      return libraries.filter(lib=>{return lib['@type']===type});
    } else 
      return libraries;
  }
  _values(obj){
    if (obj) {  
      var items = [];
      Object.keys(obj).forEach(function(key){
        obj[key].key = key;
        items.push(obj[key]);
      });
      return items;
    } else 
      return obj;
  }
  _clearCount(e){
    const libId = e.target.libraryId;
    const fields = this.shadowRoot.querySelectorAll('vaadin-number-field[library-id="'+libId+'"]')
    fields.forEach(f=>{f.value=0;});
  }
  _updateMainCount(e){
    const libId = e.target.libraryId;
    const actionId = e.target.actionId;
    const value = e.target.value;
    console.log('locations-schemaorg/location/'+libId+'/'+actionId);
    const dbRef = this.database.ref('locations-schemaorg/location/'+libId+'/'+actionId);
    dbRef.update({timestamp:firebase.default.database.ServerValue.TIMESTAMP, value:value});
  }
  _updateCount(e){
    const libId = e.target.libraryId;
    const fields = this.shadowRoot.querySelectorAll('vaadin-number-field[library-id="'+libId+'"]');
    var promises = [];
    fields.forEach(f=>{
        const placeId = f.getAttribute('place-id');
        const actionId = f.actionId;
        const value = f.value;
//        if (placeId) {
          console.log('locations-schemaorg/location/'+libId+'/containedInPlace/'+placeId+'/'+actionId);
          const dbRef = this.database.ref('locations-schemaorg/location/'+libId+'/containedInPlace/'+placeId+'/'+actionId);
          promises.push(dbRef.update({timestamp:firebase.default.database.ServerValue.TIMESTAMP, value:value}));
//        } else {
//          console.log('locations-schemaorg/location/'+libId+'/'+actionId);
//          const dbRef = this.database.ref('locations-schemaorg/location/'+libId+'/'+actionId);
//          promises.push(dbRef.update({timestamp:firebase.default.database.ServerValue.TIMESTAMP, value:value}));
//        }
    });
/*
    this.database.ref('locations-schemaorg/location/'+e.target.libraryId+'/containedInPlace/'+e.target.placeId+'/'+e.target.actionId)
      .update({timestamp:firebase.default.database.ServerValue.TIMESTAMP, value:e.target.value})
*/
    Promise.all(promises)
      .then(function(){
        const places = this._values(this._libraries[libId]["containedInPlace"]);
        var noMask = {"timestamp_start":null, "timestamp_end":null, value:0};
        var headCount = {"timestamp_start":null, "timestamp_end":null, value:0};
        places.forEach(place=>{
          if (place.noMaskCount) {
            if (place.noMaskCount.timestamp < noMask['timestamp_start'] || !noMask['timestamp_start'] )
              noMask['timestamp_start']=place.noMaskCount.timestamp;
            if (place.noMaskCount.timestamp > noMask['timestamp_end'] || !noMask['timestamp_end'] )
              noMask['timestamp_end']=place.noMaskCount.timestamp;
            noMask.value = Number(noMask.value) + Number(place.noMaskCount.value);
          }
          if (place.occupancy) {
            if (place.occupancy.timestamp < headCount['timestamp_start'] || !headCount['timestamp_start'] )
                headCount['timestamp_start']=place.occupancy.timestamp;
            if (place.occupancy.timestamp > headCount['timestamp_end'] || !headCount['timestamp_end'] )
                headCount['timestamp_end']=place.occupancy.timestamp;
            headCount.value = Number(headCount.value) + Number(place.occupancy.value);
          }
        });
        console.log("nomask value: "+noMask.value)
        this.database.ref('locations-schemaorg/location/'+libId+'/noMaskCount').update(noMask);
        this.database.ref('locations-schemaorg/location/'+libId+'/occupancy').update(headCount);

      }.bind(this));

  }
}

window.customElements.define('uvalib-counts', UvalibCounts);
