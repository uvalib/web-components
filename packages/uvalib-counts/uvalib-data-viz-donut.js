import 'construct-style-sheets-polyfill';
import '@uvalib/uvalib-models/uvalib-model-realtime-database.js';
import style from './uvalib-data-viz-donut.scss';

// setup constructed style sheet
var uvalibDataVizDonutStyles = new CSSStyleSheet();
uvalibDataVizDonutStyles.replaceSync(style);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, uvalibDataVizDonutStyles];

class UvalibDonut extends HTMLElement {
    static get observedAttributes() {
      return ['data-event'];
    }


    constructor() {
      // Always call super first in constructor
      super();
    }
  
    connectedCallback() {
      this._setupDom();
      
      this.addEventListener("uvalib-model-data-value", function(e){
        const data = e.target.data;
        this.container.setAttribute('class',data.isOpenNow?"open":"closed" );
        this._setValues(this.name, data.shortName);
        this.capacity.innerHTML = data.maximumAttendeeCapacity;
        this.occupied.innerHTML = data.occupancy.value;
        const percent = Math.round( (( data.occupancy.value/data.maximumAttendeeCapacity) * 100).toFixed(3) )
//        this.percent.innerHTML = `${percent}%`;
        this._setValues(this.percent, `${percent}%`);
        this.shadowRoot.querySelector('.donut-segment').setAttribute('stroke-dasharray', `${percent} ${100-percent}`);
        this.shadowRoot.querySelector('.donut-segment').setAttribute('level', `${percent} ${100-percent}`);
        this.style.visibility = 'visible';
      }.bind(this));
    }

    _setValues(iterable,value){
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
  <div id="container">
      <div id="libraryName"><span class="sr-only">Current occupancy and capacity at </span><span class="name"></span></div>
      <div labled-by="libraryName" id="occupancy" class="open">
        <figure>
          <div class="figure-content">
            <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut" aria-labelledby="occupancy-title occupancy-desc" role="img">
              <title id="occupancy-title">Capacity</title>
              <desc id="occupancy-desc">Donut chart showing <span class="percent-occupied"></span> occupied of capacity in <span class="name"></span> Library currently</desc>
              <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" role="presentation"></circle>
              <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" role="presentation"></circle>    
              <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke-dasharray="0 100" stroke-dashoffset="25" aria-labelledby="donut-segment-1-title donut-segment-1-desc">
                <title id="donut-segment-1-title">Current Occupancy</title>
                <desc id="donut-segment-1-desc"></desc>
              </circle>
              <g class="chart-text">
                <text id="percent-occupied" class="percent-occupied chart-number" x="50%" y="50%"></text>
              </g>
            </svg>
          </div>
          <figcaption class="figure-key">
            <div>Occupancy: <span id="occupied"></span><span class="sr-only"> seats occupied of</span>/<span id="capacity"></span></div>
          </figcaption>
        </figure> 
      </div>
      <div id="closed">Library is currently closed</div>
  </div>
      `;
      this.container = this.shadow.querySelector('#container');
      this.name = this.container.querySelectorAll('.name');
      this.percent = this.container.querySelectorAll('.percent-occupied');
      this.occupied = this.container.querySelector('#occupied');
      this.capacity = this.container.querySelector('#capacity');
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
        case "data-event":
          this.dataEvent = newValue;
          break;
      }
    }
  }
  
  window.customElements.define('uvalib-data-viz-donut', UvalibDonut);