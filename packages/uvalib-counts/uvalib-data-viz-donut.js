import 'construct-style-sheets-polyfill';
import './uvalib-viz-donut.js';
import '@uvalib/uvalib-models/uvalib-model-realtime-database.js';
import style from './uvalib-data-viz-donut.scss';

// setup constructed style sheet
var uvalibDataVizDonutStyles = new CSSStyleSheet();
uvalibDataVizDonutStyles.replaceSync(style);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, uvalibDataVizDonutStyles];

class UvalibDataVizDonut extends HTMLElement {
    static get observedAttributes() {
      return ['data-event','library'];
    }
    get library() {
      return this._library;
    }
    set library(newLib) {
      this._library = newLib;
    }

    constructor() {
      // Always call super first in constructor
      super();
      this.dataEvent = "uvalib-model-data-value";
      this.library = "clemons";
    }
  
    connectedCallback() {
      this._setupDom();
      
      this.addEventListener(this.dataEvent, function(e){
        const data = e.detail;
        this.container.setAttribute('class',data.isOpenNow?"open":"closed" );
console.log(data.shortName)        
        this._setValues(this.name, data.shortName);
        this.capacity.innerHTML = data.maximumAttendeeCapacity;
        this.occupied.innerHTML = data.occupancy.value;
        const percent = Math.round( (( data.occupancy.value/data.maximumAttendeeCapacity) * 100).toFixed(3) );
        this.viz.setAttribute('percent',percent);
//        this._setValues(this.percent, `${percent}%`);
//        this.shadowRoot.querySelector('.donut-segment').setAttribute('stroke-dasharray', `${percent} ${100-percent}`);
//        this.shadowRoot.querySelector('.donut-segment').setAttribute('level', `${percent} ${100-percent}`);

        this.style.visibility = 'visible';        
      }.bind(this));
    }

    _isIterable(obj) {
      // checks for null and undefined
      if (obj == null) {
        return false;
      }
      return typeof obj[Symbol.iterator] === 'function';
    }

    _setValues(iterable,value){
      if ( this._isIterable(iterable) )
        iterable.forEach(i=>i.innerHTML=value);
    }

    _setupDom(){
      // setup a shadowDOM
      this.shadow = this.attachShadow({mode: 'open'});
      this.shadow.adoptedStyleSheets = [uvalibDataVizDonutStyles];
      // hidden untill we have alerts to show
      this.shadow.innerHTML = `      
  <style>
      :host {
        visibility: hidden;
      }
  </style>

  <uvalib-model-realtime-database path="/locations-schemaorg/location/${this.library}"></uvalib-model-realtime-database>
  <div id="container">
      <div id="libraryName"><span class="sr-only">Current occupancy and capacity at </span><span class="name"></span></div>
      <div aria-labled-by="libraryName" id="occupancy" class="open">
     
        <uvalib-viz-donut title="Clemons Occupancy">
          <span style="visibility: hidden;" slot="chartTitle"><span class="name"></span></span>
          <div style="visibility: hidden;" slot="caption">Occupancy: <span id="occupied"></span><span class="sr-only"> seats occupied of</span>/<span id="capacity"></span></div>
        </uvalib-viz-donut>

      </div>
      <div id="closed">Library is currently closed</div>
  </div>
      `;
      this.container = this.shadow.querySelector('#container');
      this.name = this.container.querySelectorAll('.name');
//      this.percent = this.container.querySelectorAll('.percent-occupied');
      this.occupied = this.container.querySelector('#occupied');
      this.capacity = this.container.querySelector('#capacity');
      this.viz = this.container.querySelector('uvalib-viz-donut');
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
        case "data-event":
          this.dataEvent = newValue;
          break;
        case "library":
          this.library = newValue;
          break;
      }
    }
  }
  
  window.customElements.define('uvalib-data-viz-donut', UvalibDataVizDonut);