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
        this.percent.innerHTML = `${percent}%`;
        this.shadowRoot.querySelector('.donut-segment').setAttribute('stroke-dasharray', `${percent} ${100-percent}`);

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
      .open #closed, .closed #occupancy { display:none }
      .closed #open, .open #occupancy { display:block }
  </style>
  <div>
      <div id="occupancy" style="display:flex; flex-direction: column; align-items: center; justify-content: center;">
        <div class="name"></div>
        <!--<span id="percent-occupied"></span>-->
        <figure>
          <div class="figure-content">
            <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut" aria-labelledby="occupancy-title occupancy-desc" role="img">
              <title id="occupancy-title">Capacity</title>
              <desc id="occupancy-desc">Donut chart showing percentage of capacity occupied in the Library currently</desc>
              <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff" role="presentation"></circle>
              <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3" role="presentation"></circle>    
              <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3" stroke-dasharray="0 100" stroke-dashoffset="25" aria-labelledby="donut-segment-1-title donut-segment-1-desc">
                <title id="donut-segment-1-title">Current Occupancy</title>
                <desc id="donut-segment-1-desc"></desc>
              </circle>
              <g class="chart-text">
                <text id="percent-occupied" x="50%" y="50%" class="chart-number"></text>
              </g>
            </svg>
          </div>
          <figcaption class="figure-key">
            <p class="sr-only">Donut chart showing library capacity.</p>
            <div>Occupancy: <span id="occupied"></span>/<span id="capacity"></span></div>
          </figcaption>
        </figure> 
      </div>
      <div id="closed">Library is currently closed</div>
  </div>
      `;
      this.container = this.shadow.querySelector('div');
      this.name = this.container.querySelectorAll('.name');
      this.percent = this.container.querySelector('#percent-occupied');
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