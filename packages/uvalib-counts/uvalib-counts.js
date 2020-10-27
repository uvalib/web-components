import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import {} from '@polymer/polymer/lib/elements/dom-if.js';
import '@uvalib/uvalib-account/uvalib-account-auth.js';
import('@uvalib/uvalib-accordion/uvalib-accordion.js');
import('@uvalib/uvalib-accordion/uvalib-accordion-item.js');
import('@vaadin/vaadin-text-field/vaadin-number-field.js');
import('@vaadin/vaadin-button/vaadin-button.js');

import '@uvalib/uvalib-account/uvalib-account-fb-init.js';
import('@uvalib/uvalib-models/uvalib-model-realtime-database.js');
import('./uvalib-data-viz-sparkline.js');

import moment from 'moment';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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
        uvalib-data-viz-sparkline {
          display: inline-block;
          padding-left: 20px;
        }
      </style>

      <uvalib-account-auth id="auth" auto></uvalib-account-auth>
      
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
                    <div>
                      <uvalib-data-viz-sparkline series-name="occupancy" series-data-event="uvalib-model-data-value">
                        <uvalib-model-realtime-database start-key="[[_todayStart()]]" path="/locationsLogs/[[library.key]]/occupancylogs"></uvalib-model-realtime-database>
                      </uvalib-data-viz-sparkline>
                    </div>
                    <template is="dom-if" if="[[!_isNull(library.estimatedOccupancy.value)]]">
                      <h2 hidden$="[[_isNull(library.estimatedOccupancy.value)]]">Estimated Occupancy: [[library.estimatedOccupancy.value]]<br/>
                      In: [[library.estimatedOccupancy.totalIn]], Out: [[library.estimatedOccupancy.totalOut]]<br />
                      <span class="time">[[_timeformat(library.estimatedOccupancy.timestamp)]]</span></h2>
                      <div>
                        <uvalib-data-viz-sparkline series-name="estimated occupancy" series-data-event="uvalib-model-data-value">
                          <uvalib-model-realtime-database start-key="[[_todayStart()]]" path="/locationsLogs/[[library.key]]/estimatedOccupancylog"></uvalib-model-realtime-database>
                        </uvalib-data-viz-sparkline>
                      </div>
                    </template>
                    <h2 hidden$="[[noMaskTrack]]">Mask Non-Compliance: [[library.noMaskCount.value]]<br/>
                    <span class="time">[[_timeformat(library.noMaskCount.timestamp_end)]]</span></h2>
                    <div>
                      <uvalib-data-viz-sparkline series-name="no mask" series-data-event="uvalib-model-data-value">
                        <uvalib-model-realtime-database start-key="[[_todayStart()]]" path="/locationsLogs/[[library.key]]/noMaskCountlogs"></uvalib-model-realtime-database>
                      </uvalib-data-viz-sparkline>
                    </div>
                  </div>
                </div>
                <div slot="body">
                  <div style="background-color: lightgrey; padding: 20px;">
                  <template is="dom-if" if="[[!library.containedInPlace]]">
                    <vaadin-button theme="error primary" library-id="[[library.key]]" on-click="_clearCount">Clear</vaadin-button><br />
                    <div>Occupancy:
                      <vaadin-number-field hidden$="[[!editMode]]" library-id$="[[library.key]]" action-id="[[_occupancy]]" value="0" min="0" has-controls></vaadin-number-field> ([[library.occupancy.value]])
                    </div>
                    <div hidden$="[[noMaskTrack]]">Mask Violations:
                      <vaadin-number-field hidden$="[[!editMode]]" library-id$="[[library.key]]" action-id="[[_noMaskCount]]" value="0" min="0" has-controls></vaadin-number-field> ([[library.noMaskCount.value]])
                    </div>
                    <vaadin-button hidden$="[[!editMode]]" theme="success primary" library-id="[[library.key]]" on-click="_updateMainCount">Submit</vaadin-button>
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
                              <uvalib-data-viz-sparkline series-name="occupancy" series-data-event="uvalib-model-data-value">
                                <uvalib-model-realtime-database start-key="[[_todayStart()]]" path="/locationsLogs/[[library.key]]/[[place.key]]/occupancylogs"></uvalib-model-realtime-database>
                              </uvalib-data-viz-sparkline>
                            </div>
                            <div hidden$="[[noMaskTrack]]">Mask Violations:
                              <vaadin-number-field hidden$="[[!editMode]]" library-id$="[[library.key]]" place-id$="[[place.key]]" action-id="[[_noMaskCount]]" value="0" min="0" has-controls></vaadin-number-field>
                              <span>([[place.noMaskCount.value]])</span>
                              <uvalib-data-viz-sparkline series-name="no masks" series-data-event="uvalib-model-data-value">
                                <uvalib-model-realtime-database start-key="[[_todayStart()]]" path="/locationsLogs/[[library.key]]/[[place.key]]/noMaskCountlogs"></uvalib-model-realtime-database>
                              </uvalib-data-viz-sparkline>
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
      },
      _data: {
        type: Object,
        value: function(){
          return {"1600266267649":0,"1600266798670":0,"1600270356460":7,"1600274033392":9};
        }
      }
    };
  }
  ready() {
    super.ready();
       
    this.shadowRoot.getElementById('auth').addEventListener('uvalib-model-authenticated',function(){
      this.database = firebase.default.database();
      var countRef = this.database.ref('locations-schemaorg/location');
      countRef.on('value', function(snapshot){
        this._libraries = snapshot.val();
        this.libraries = this._values(this._libraries);
      }.bind(this));
    }.bind(this));

  }

  _todayStart() {
    var now = new Date();
    var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//    console.log("start of the day "+startOfDay*1);
    return startOfDay*1;
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
      return libraries.filter(lib=>{return lib.isActive===true && lib['@type']===type});
    } else if (Array.isArray(libraries))
      return libraries.filter(lib=>{return lib.isActive===true});
    else return libraries;
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
    const fields = this.shadowRoot.querySelectorAll('vaadin-number-field[library-id="'+libId+'"]');
    fields.forEach(f=>{
      const actionId = f.actionId;
      const value = f.value;
//      console.log('locations-schemaorg/location/'+libId+'/'+actionId);
      const dbRef = this.database.ref('locations-schemaorg/location/'+libId+'/'+actionId);
      dbRef.update({timestamp:firebase.default.database.ServerValue.TIMESTAMP, value:value});
    });
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
//          console.log('locations-schemaorg/location/'+libId+'/containedInPlace/'+placeId+'/'+actionId);
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
//        console.log("nomask value: "+noMask.value)
        this.database.ref('locations-schemaorg/location/'+libId+'/noMaskCount').update(noMask);
        this.database.ref('locations-schemaorg/location/'+libId+'/occupancy').update(headCount);

      }.bind(this));

  }
}

window.customElements.define('uvalib-counts', UvalibCounts);
