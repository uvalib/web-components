import 'construct-style-sheets-polyfill';
import style from './uvalib-viz-donut.scss';

// setup constructed style sheet
var uvalibVizDonutStyles = new CSSStyleSheet();
uvalibVizDonutStyles.replaceSync(style);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, uvalibVizDonutStyles];

class UvalibDonut extends HTMLElement {
    static get observedAttributes() {
      return ['percent'];
    }

    get percent(){
      return this._percent;
    }
    set percent(newPercent){
      this._percent = parseInt(newPercent);
      this._setValues(this.percentNodes, `${this._percent}%`);
      if (this.segment) {
        this.segment.setAttribute('stroke-dasharray', `${this._percent} ${100-this._percent}`);
        this.segment.setAttribute('level', `${this._percent} ${100-this._percent}`);
        if (this._percent>33 && this._percent<66) {
          this.segment.setAttribute('med',"");
          this.segment.removeAttribute('high');
        } else if (this._percent>66) {
          this.segment.setAttribute('high',"");
          this.segment.removeAttribute('med');
        } else {
          this.segment.removeAttribute('high');
          this.segment.removeAttribute('med');
        }
      }
    }

    constructor() {
      // Always call super first in constructor
      super();
      this._setupDom();
    }
  
    connectedCallback() {
      this.querySelectorAll('[slot]').forEach(e=>e.style.visibility='visible')
    }

    _setValues(iterable,value){
      if (iterable)
        iterable.forEach(i=>i.innerHTML=value);
    }

    _setupDom(){
      // setup a shadowDOM
      this.shadow = this.attachShadow({mode: 'open'});
      this.shadow.adoptedStyleSheets = [uvalibVizDonutStyles];
      // hidden untill we have alerts to show
      this.shadow.innerHTML = `
  <style>
      :host {
        display: inline-block;
      }
  </style>
  <div id="container">
    <div id="occupancy">
      <figure role="status" aria-live="polite">
        <div class="figure-content">
          <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut" aria-labelledby="occupancy-title occupancy-desc" role="img">
            <title id="occupancy-title"><slot name="chartTitle"></slot></title>
            <desc id="occupancy-desc"><slot name="chartDesc"></slot></desc>
            <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" role="presentation"></circle>
            <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" role="presentation"></circle>    
            <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke-dasharray="0 100" stroke-dashoffset="25" aria-labelledby="donut-segment-1-title donut-segment-1-desc">
              <title id="donut-segment-1-title"><slot name="dataTitle"></slot></title>
              <desc id="donut-segment-1-desc"><slot name="dataDesc"></slot></desc>
            </circle>
            <g class="chart-text">
              <text id="percent-occupied" class="percent-occupied chart-number" x="50%" y="50%"></text>
            </g>
          </svg>
        </div>
        <figcaption class="figure-key"><slot name="caption"></slot></figcaption>
      </figure> 
    </div>
  </div>
      `;
      this.container = this.shadow.querySelector('#container');
      this.chartTitle = this.container.querySelector('#occupancy-title');
      this.percentNodes = this.container.querySelectorAll('.percent-occupied');
      this.occupied = this.container.querySelector('#occupied');
      this.capacity = this.container.querySelector('#capacity');
      this.segment = this.container.querySelector('.donut-segment');
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name){
        case "percent":
          this.percent = newValue;
          break;
      }
    }
  }
  
  window.customElements.define('uvalib-viz-donut', UvalibDonut);