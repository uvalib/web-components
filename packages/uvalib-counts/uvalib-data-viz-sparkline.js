import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import 'highcharts/modules/accessibility';

class UvalibSparkline extends HTMLElement {
    static get observedAttributes() {
      return ['series-name','series-data','series','series-data-event'];
    }
    constructor() {
      // Always call super first in constructor
      super();
    }
    
    get seriesName() {return this._seriesName;}
    set seriesName(sname) {
      this._seriesName = sname;
      this._setSeries();
    }
    get seriesData() {return this._seriesData;}
    set seriesData(sdata) {
      this._seriesData = sdata;
      this._setSeries();
    }
    get series() {return this._series;}
    set series(newSeries) {
      this._series = [];
      for (const [key, value] of Object.entries(newSeries.data)) {
        this._series.push([parseInt(key),value])
      }
      this._seriesName = newSeries.name;
      if (newSeries.id) {
        this._seriesId = newSeries.id;
      } else {
        this._seriesId = newSeries.name;
      }

      this._addSeries();
    }
  
    connectedCallback() {
      this._setupDom();
      
      
  this.chart = Highcharts.chart(this.container, {
    chart: {
      type: 'area',
      backgroundColor: null,
      borderWidth: 0,
      margin: [2, 0, 2, 0],
      width: 120,
      height: 20,
      style: {
        overflow: 'visible'
      },
      // small optimalization, saves 1-2 ms each sparkline
      skipClone: true
    },
    title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        xAxis: {
          type: 'datetime',
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickPositions: []
        },
        yAxis: {
          endOnTick: false,
          startOnTick: false,
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          tickPositions: [0]
        },
        legend: {
          enabled: false
        },
        tooltip: {
          xDateFormat: '%H:%M:%S',
          hideDelay: 0,
          outside: true,
          shared: true
        },
        plotOptions: {
          series: {
            animation: false,
            lineWidth: 1,
            shadow: false,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            marker: {
              radius: 1,
              states: {
                hover: {
                  radius: 2
                }
              }
            },
            fillOpacity: 0.25
          },
          column: {
            negativeColor: '#910000',
            borderColor: 'silver'
          }
        }   
  });
  this._addSeries();
  this.addEventListener(this.seriesDataEvent, function(e){
    const series = e.target.series;
    var sd = {};
    var d = new Date();
    var tzOffset = d.getTimezoneOffset() * 60000;
    if (series) {
      for (const [key, value] of Object.entries(series)) {
        if (value.value) {
          sd[parseInt(key)-tzOffset]=parseInt(value.value);
        }
      }
    }
    this.seriesData = sd;
  }.bind(this));
      
    }
    _setSeries(){
      if (this._seriesName && this._seriesData) this.series = {name:this._seriesName, data: this._seriesData};
    }
    _addSeries(){
      if (this._series && this.chart) {
//console.log(this._series);        
        const series = this.chart.get(this._seriesId);
        if (series) series.remove();
        while (this.chart.series.length > 0) {
          this.chart.series[0].remove(true);
        }
        this.chart.addSeries({
          name: this._seriesName,
          data: this._series
        });
      }
    }
    _setupDom(){
      // setup a shadowDOM
      this.shadow = this.attachShadow({mode: 'open'});
      // hidden untill we have alerts to show
      this.shadow.innerHTML = `
  <style></style>
  <div></div>
      `;
      this.container = this.shadow.querySelector('div');
    }
    attributeChangedCallback(name, oldValue, newValue) {
//      console.log(name);
      switch(name){
        case "series":
          this.series = JSON.parse(newValue);
          break;
        case "series-name":
          this.seriesName = newValue;
          break;
        case "series-data":
          this.seriesData = JSON.parse(newValue);
          break;
        case "series-data-event":
          this.seriesDataEvent = newValue;
          break;
      }
    }
  }
  
  window.customElements.define('uvalib-data-viz-sparkline', UvalibSparkline);