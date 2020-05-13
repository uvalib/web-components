import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "@polymer/app-storage/app-localstorage/app-localstorage-document.js";
import "./uvalib-model-library.js";

/**
 * `uvalib-model-library`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibModelAlerts extends customElements.get('uvalib-model-library') {
  static get template() {
    return html`
      <div>${super.template}</div>
      <app-localstorage-document key="uvalib-alerts-seen" data="{{seen}}"></app-localstorage-document>
    `;
  }
  static get properties() {
    return {
      lastResponse: {
        type: Array,
        observer: '_copyAlerts'
      },
      alerts: {
        type: Array,
        notify: true,
        value: function(){return [];}
      },
      seen: {
        type: Array,
        notify: true,
        observer: '_evalAlerts',
        value: []
      },
      poll: {
        type: Number,
        value: 300000
      },
      seenCount: {
        type: Number,
        notify: true,
        computed: '_getSeenCount(alerts,_force)'
      },
      _force: {
        type: Boolean,
        value: true
      }
    };
  }
  _copyAlerts(){
    if (Array.isArray(this.lastResponse) && this.lastResponse.length>0) {
      this.set('alerts', this.lastResponse.map(function(alert) {
        if (alert.severity==="alert3") {this.setSeen(alert.uuid)}
        if (this.seen.indexOf(alert.uuid)>-1) {alert.seen = true;}
        else {alert.seen = false;}
        return alert;
      }.bind(this)).sort(function(x,y){return x.severity>y.severity}) );
    }
  }
  setSeen(uuid){
    var seen = this.seen;
    if (seen.indexOf(uuid)===-1) {
      seen.push(uuid);
    }
    this.set('seen',[]);
    this.set('seen',seen);
  }
  _evalAlerts(){
    if(Array.isArray(this.alerts) && this.alerts.length>0) {
      this.alerts.forEach(function(alert,i){
        if (this.seen.indexOf(alert.uuid)>-1 && !this.alerts[i].seen) {
          this.set('alerts.'+i+'.seen', true);
          this.set('_force', !this._force);
        } else if (this.alerts[i].seen) {
          this.set('alerts.'+i+'.seen', false);
          this.set('_force', !this._force);
        }
      }.bind(this));
    }
  }
  _makeURL(path,apiVersion) {
    return this._apidomain+apiVersion+"/library/alerts";
  }
  _getSeenCount(alerts){
    var cnt = alerts.filter(a => a.seen).length;
    this.dispatchEvent(new CustomEvent('seen-count-changed', {bubbles: true, composed: true, detail: {seenCount: cnt}}));
    return cnt;
  }

/**
Fired when the seenCount property changes.
This is useful if you want to display
the count on some sort of notification badge
showing the user a count of notifications dismissed.

@event seen-count-changed
Event param: {{seenCount: Number}} detail Contains the count of unseen alerts.
*/
}

window.customElements.define('uvalib-model-alerts', UvalibModelAlerts);
