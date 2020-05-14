import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@uvalib/uvalib-theme';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import ('@uvalib/uvalib-models/uvalib-model-alerts.js');

/**
 * `uvalib-alerts`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibAlerts extends PolymerElement {
  static get is() { return 'uvalib-alerts'; }
  static get template() {
    return html`

      <custom-style>
        <style include="uvalib-theme">
          :host {
            display: block;
            text-align: left;
            visibility: hidden;
          }
          .alert-item {
            min-height: 41px;
            background-color: var(--color-primary-orange);
            border-width: 2px 0 0 0;
            border-color: var(--color-white);
            border-style: solid;
            color: var(--color-white);
            @apply --layout-horizontal;
            @apply --layout-center-justified;
          }
          .alert-item div {
            width: 100%;
            max-width: var(--uvalib-display-width-max);
            padding: .15em;
          }
          .alert-item.alert1 {
            background-color: var(--color-emergency-red);
          }
          .alert-item.alert2 {
            background-color: var(--color-primary-orange);
          }
          .alert-item.alert3 {
            background-color: var(--uvalib-orange-200);
            color: var(--uvalib-black);
          }
          .alert-item.alert1 p a, .alert-item.alert2 p a {
            text-decoration: underline;
            color: var(--color-white);
          }
          .alert-item.alert2 paper-button:hover {
            background-color: #C54800;
            color: var(--uvalib-white);
          }
          .alert-item.alert3 p a {
            text-decoration: underline;
            color: var(--color-black);
          }
          .alert-item.alert1 p a:hover, .alert-item.alert2 p a:hover, .alert-item.alert3 p a:hover {
            font-style: italic;
          }
          .alert-item.alert1 p a:focus, .alert-item.alert2 p a:focus, .alert-item.alert3 p a:focus {
            outline: var(--color-accessibility-outline-dark-bg) dotted 3px;
            padding: .15em;
          }
          .alert-item.alert3 paper-button {
            color: var(--uvalib-black);
            border-color: var(--color-primary-orange);
          }
          .alert-item.alert3 paper-button:hover {
            background-color: var(--uvalib-secondary-web-orange);
            color: var(--uvalib-white);
          }
          .alert-item.alert1 .alert-head:before, .alert-item.alert2 .alert-head:before {
            font-family: 'uvalib-custom-icons' !important;
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            content: "\f06a";
            font-size: 2em;
            padding-right: .25em;
          }

          .alert-head {
            @apply --layout-horizontal;
          }
          .alert-title {
            @apply --layout-flex;
          }
          [slot="markdown-html"] p {
            margin:0;
            padding:0;
          }
          paper-button {
            color: var(--color-white);
            position: static;
            z-index: auto;
          }
          .hidden {
            display: none;
          }
        </style>
      </custom-style>
      <uvalib-model-alerts id="alertsModel" alerts="{{_alerts}}" seen-count="{{seenCount}}" seen="{{_alertsSeen}}"></uvalib-model-alerts>
      <dom-repeat items="[[_alerts]]" as="alert">
        <template>
          <iron-collapse opened$="[[!alert.seen]]" on-opened-changed="_sizeChanged" on-transitioning-changed="_sizeChanged">
            <div class$="alert-item [[alert.severity]]" uuid="[[alert.uuid]]">
              <div>
              <div class="alert-head">
                <div class="alert-title" on-click="_toggleIt">[[alert.title]]</div>
                <template is="dom-if" if="[[!_isHot(alert.severity)]]">
                  <paper-button class="toggle" on-click="_toggleIt">More</paper-button>
                  <paper-button class="toggle hidden" on-click="_toggleIt">Less</paper-button>
                  <paper-button on-click="_dismissIt">Dismiss</paper-button>
                </template>
              </div>
              <iron-collapse class="body-collapse" opened$="[[_isHot(alert.severity)]]" on-opened-changed="_sizeChanged" on-transitioning-changed="_sizeChanged">
                <div class="alert-body" inner-h-t-m-l="[[alert.body]]"></div>
              </iron-collapse>
              </div>
            </div>
          </iron-collapse>
        </template>
      </dom-repeat>
    `;
  }
  static get properties() {
    return {
      /**
      * listing of alerts.
      */
      _alerts: {
        type: Array,
        observer: '_sizeChanged'
      },
      /**
      * listing of alerts that have been seen/dismissed.
      */
      _alertsSeen: Array,
      /**
      * The count of alerts that have been seen/dismissed.
      */
      seenCount: {
        type: Number,
        notify: true
      }
    };
  }
  _sizeChanged(){
    // only bother loading components if we have something to show
    if (this._alerts.length>0) {
      var imports = [];
      imports.push( import ('@polymer/iron-collapse/iron-collapse.js') );
      imports.push( import ('@polymer/paper-button/paper-button.js') );
      Promise.all(imports).then(()=>{
        this.style.visibility = "visible";
      });
    }
    this.dispatchEvent(new CustomEvent('size-changed', {detail: {height: this.clientHeight}}));
  }
  _isHot(severity){
    return (severity==="alert1");
  }
  _toggleIt(e){
    e.currentTarget.parentElement.parentElement.querySelector('.body-collapse').toggle();
    e.currentTarget.parentElement.querySelectorAll('.toggle').forEach(function(el) {
      el.classList.toggle("hidden");
      if (!el.classList.contains("hidden")) el.focus();
    });
  }
  _dismissIt(e){
    var uuid = e.currentTarget.parentElement.parentElement.parentElement.uuid;
    this.$.alertsModel.setSeen(uuid);
  }
  /**
   * Calling this will set all alerts to an unseen status.
  */
  unseeAll(){
    this.set('_alertsSeen',[]);
  }
  /**
   * Calling this will set all alerts to an seen status.
  */
  seeAll(){
    this.$.alertsModel.setAllSeen();
  }
}

customElements.define(UvalibAlerts.is, UvalibAlerts);
