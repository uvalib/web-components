import '@uvalib/uvalib-models/uvalib-model-realtime-database.js';
import style from './uvalib-data-viz-donut.scss';

// setup constructed style sheet
const uvalibDataVizDonutStyles = new CSSStyleSheet();
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
        this.name.innerHTML = data.shortName;
        this.capacity.innerHTML = data.maximumAttendeeCapacity;
        this.occupied.innerHTML = data.occupancy.value;
        this.percent.innerHTML = Math.round( (( data.occupancy.value/data.maximumAttendeeCapacity) * 100).toFixed(3) ) + '%'
        this.style.visibility = 'visible';
      }.bind(this));
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
  <div>
      <div id="name"></div>
      <div id="percent-occupied"></div>
      <div>Occupancy: <span id="occupied"></span>/<span id="capacity"></span>
  </div>
      `;
      this.container = this.shadow.querySelector('div');
      this.name = this.container.querySelector('#name');
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