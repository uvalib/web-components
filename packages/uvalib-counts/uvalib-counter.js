import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import {} from '@polymer/polymer/lib/elements/dom-if.js';

import '@uvalib/uvalib-account/uvalib-account-auth.js';

import('@vaadin/vaadin-text-field/vaadin-number-field.js');
import'@vaadin/vaadin-select/vaadin-select.js';

import '@uvalib/uvalib-account/uvalib-account-fb-init.js';
import('@uvalib/uvalib-models/uvalib-model-realtime-database.js');

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
class UvalibCounter extends PolymerElement {
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
        #container {
          padding: 15px;
        }
        .recount {
          /*background-color: #FEF6C8;*/
        }

        .lineCount {
          font-size: xxx-large;
        }
        .lineCount::part(increase-button) {
          background-color: green;
          color: white
        }
        .lineCount::part(decrease-button) {
          background-color: red;
          color: white
        }
      </style>
<div id="container" class$="[[_isRecount(recount)]]">
      <uvalib-account-auth id="auth" auto userkey="[[_getUserKey()]]"></uvalib-account-auth>
   
<vaadin-select value="{{selectedLocation}}" label="Location">
  <template>
    <vaadin-list-box>
      <template is="dom-repeat" items="[[_filter(libraries,type)]]" as="location">
        <vaadin-item value="[[location.key]]">[[location.name]]</vaadin-item>
      </template>
    </vaadin-list-box>
  </template>
</vaadin-select>

<template is="dom-repeat" items="[[_filter(libraries,type)]]" as="library">
  <template is="dom-if" if="[[library.occupancy]]">
  <div hidden$="[[!_isEqual(library.key,selectedLocation)]]">
        <div slot="heading">
          <div style="padding: 20px">
            <h1 inner-h-t-m-l="[[library.name]]"></h1>
          </div>
          <div style="float: right; padding: 20px;">
            <h2>Line Length: 
              <span>[[library.occupancy.value]]</span>
              <br/><span class="time">[[_timeformat(library.occupancy.timestamp_end)]]</span></h2>
          </div>
        </div>
        <div slot="body">
          <div style="padding: 20px;">
            <template is="dom-if" if="[[!library.containedInPlace]]">
              <div><vaadin-number-field class="lineCount" label="Line Length" library-id="[[library.key]]" action-id="[[_occupancy]]" value="[[library.occupancy.value]]" on-change="_updateMainCount" min="0" has-controls></vaadin-number-field></div>
              <div><vaadin-number-field label="Server Count" library-id="[[library.key]]" action-id="[[_servers]]" value="[[library.servers.value]]" on-change="_updateMainCount" min="0" has-controls></vaadin-number-field></div>

              <vaadin-select value="[[library.duration.value]]" label="Current Processing Time" library-id="[[library.key]]" action-id="[[_duration]]" on-change="_updateMainCount">
                <template>
                  <vaadin-list-box>
                    <vaadin-item value="30">30 Seconds</vaadin-item>
                    <vaadin-item value="60">1 minute</vaadin-item>
                    <vaadin-item value="90">1 minute 30 seconds</vaadin-item>
                    <vaadin-item value="120">2 minutes</vaadin-item>
                    <vaadin-item value="150">2 minutes 30 seconds</vaadin-item>
                  </vaadin-list-box>
                </template>
              </vaadin-select>

              </template>  
          </div>
        </div>
  </div>
  </template>
</template>

</div>
    `;
  }
  static get properties() {
    return {
      libraries: Array,
      _occupancy: {
        type: String,
        value: "occupancy"
      },
      _servers: {
        type: String,
        value: "servers"
      },
      _duration: {
        type: String,
        value: "duration"
      },
      _state: {
        type: Number,
        value: 1,
//        observer: "_setMode"
      },
      selectedLocation: {
        type: String,
        value: "centralGarageCovidTesting"
      },
      type: {
        type: String,
        value: null
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

  _isSelected(a,b){
    return (a==b);
  }

  _getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
  }

  _getUserKey() {
    return this._getQueryVariable('userkey');
  }

  _isEqual(a,b) {
    return (a==b);
  }

  _selected(slug) {
    console.log(slug);
  }

  _isRecount(recount) {
    if (recount) return "recount";
    else return "";
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
  _updateMainCount(e){  
    var f = e.currentTarget; 
    const libId = f.libraryId;
    const actionId = f.actionId;
    const value = f.value;
    console.log('locations-schemaorg/location/'+libId+'/'+actionId);
    console.log(value);
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
        var headCount = {"timestamp_start":null, "timestamp_end":null, value:0};
        places.forEach(place=>{
          if (place.occupancy) {
            if (place.occupancy.timestamp < headCount['timestamp_start'] || !headCount['timestamp_start'] )
                headCount['timestamp_start']=place.occupancy.timestamp;
            if (place.occupancy.timestamp > headCount['timestamp_end'] || !headCount['timestamp_end'] )
                headCount['timestamp_end']=place.occupancy.timestamp;
            headCount.value = Number(headCount.value) + Number(place.occupancy.value);
          }
        });
        this.database.ref('locations-schemaorg/location/'+libId+'/occupancy').update(headCount);
      }.bind(this));
  }
}

window.customElements.define('uvalib-counter', UvalibCounter);
