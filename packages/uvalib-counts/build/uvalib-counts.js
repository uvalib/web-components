var a,e;(a=window.document).getElementById("livereloadscript")||((e=a.createElement("script")).async=1,e.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",a.getElementsByTagName("head")[0].appendChild(e));import{P as t,h as i,m as l}from"./moment-1766bd71.js";import"./tslib.es6-f3787ca5.js";import{f as n}from"./index.esm-99e5cbb9.js";import"./_commonjsHelpers-1b3b9e2f.js";import("./uvalib-accordion-0b2f37bd.js"),import("./uvalib-accordion-item-b8c216b0.js"),import("./vaadin-number-field-ab7580d0.js"),import("./vaadin-button-ac4bc2bf.js"),import("./paper-toggle-button-0ddccce9.js"),import("./uvalib-model-realtime-database-517a1df4.js"),import("./uvalib-data-viz-sparkline.js");window.customElements.define("uvalib-counts",class extends t{static get template(){return i`
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
        #container {
          padding: 15px;
        }
        .recount {
          background-color: #FEF6C8;
        }
      </style>
<div id="container" class$="[[_isRecount(recount)]]">
      <uvalib-account-auth id="auth" auto></uvalib-account-auth>
      
      <paper-toggle-button checked="{{recount}}">Recount</paper-toggle-button>

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
</div>
    `}static get properties(){return{libraries:Array,_occupancy:{type:String,value:"occupancy"},_noMaskCount:{type:String,value:"noMaskCount"},editMode:{type:Boolean,value:!1,observer:"_setState"},_state:{type:Number,value:1,observer:"_setMode"},type:{type:String,value:null},noMaskTrack:{type:Boolean,value:!1},recount:{type:Boolean,value:!1},_data:{type:Object,value:function(){return{1600266267649:0,1600266798670:0,1600270356460:7,1600274033392:9}}}}}ready(){super.ready(),this.shadowRoot.getElementById("auth").addEventListener("uvalib-model-authenticated",function(){this.database=n.default.database(),this.database.ref("locations-schemaorg/location").on("value",function(a){this._libraries=a.val(),this.libraries=this._values(this._libraries)}.bind(this))}.bind(this))}_isRecount(a){return a?"recount":""}_todayStart(){var a=new Date;return 1*new Date(a.getFullYear(),a.getMonth(),a.getDate())}_isNull(a){return null==a}_calcPercent(a,e){return Math.round((e/a*100).toFixed(3))}_calcInversePercent(a,e){var t=100-this._calcPercent(a,e);return isNaN(t)?100:t}_timeformat(a){return l(a).format("MMMM Do, h:mm:ss a")}_filter(a,e){return e&&Array.isArray(a)?a.filter(a=>!0===a.isActive&&a["@type"]===e):Array.isArray(a)?a.filter(a=>!0===a.isActive):a}_values(a){if(a){var e=[];return Object.keys(a).forEach((function(t){a[t].key=t,e.push(a[t])})),e}return a}_clearCount(a){const e=a.target.libraryId;this.shadowRoot.querySelectorAll('vaadin-number-field[library-id="'+e+'"]').forEach(a=>{a.value=0})}_updateMainCount(a){const e=a.target.libraryId;a.target.actionId;this.shadowRoot.querySelectorAll('vaadin-number-field[library-id="'+e+'"]').forEach(a=>{const t=a.actionId,i=a.value;this.database.ref("locations-schemaorg/location/"+e+"/"+t).update({timestamp:n.default.database.ServerValue.TIMESTAMP,value:i})})}_updateCount(a){const e=a.target.libraryId,t=this.shadowRoot.querySelectorAll('vaadin-number-field[library-id="'+e+'"]');var i=[];t.forEach(a=>{const t=a.getAttribute("place-id"),l=a.actionId,r=a.value,o=this.database.ref("locations-schemaorg/location/"+e+"/containedInPlace/"+t+"/"+l);i.push(o.update({timestamp:n.default.database.ServerValue.TIMESTAMP,value:r}))}),Promise.all(i).then(function(){const a=this._values(this._libraries[e].containedInPlace);var t={timestamp_start:null,timestamp_end:null,value:0},i={timestamp_start:null,timestamp_end:null,value:0};a.forEach(a=>{a.noMaskCount&&((a.noMaskCount.timestamp<t.timestamp_start||!t.timestamp_start)&&(t.timestamp_start=a.noMaskCount.timestamp),(a.noMaskCount.timestamp>t.timestamp_end||!t.timestamp_end)&&(t.timestamp_end=a.noMaskCount.timestamp),t.value=Number(t.value)+Number(a.noMaskCount.value)),a.occupancy&&((a.occupancy.timestamp<i.timestamp_start||!i.timestamp_start)&&(i.timestamp_start=a.occupancy.timestamp),(a.occupancy.timestamp>i.timestamp_end||!i.timestamp_end)&&(i.timestamp_end=a.occupancy.timestamp),i.value=Number(i.value)+Number(a.occupancy.value))}),this.database.ref("locations-schemaorg/location/"+e+"/noMaskCount").update(t),this.database.ref("locations-schemaorg/location/"+e+"/occupancy").update(i)}.bind(this))}});
