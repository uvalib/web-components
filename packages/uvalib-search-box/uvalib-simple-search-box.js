import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "@uvalib/uvalib-theme/uvalib-theme.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/iron-flex-layout/iron-flex-layout.js";
import "@polymer/iron-flex-layout/iron-flex-layout-classes.js";
import "@polymer/iron-icon/iron-icon.js";

/**
 * `uvalib-simple-search-box`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibSimpleSearchBox extends PolymerElement {
  static get template() {
    return html`
      <custom-style>
        <style include="uvalib-theme iron-flex iron-flex-alignment iron-flex-factors">

        :host { display: block; }

        .search-group {
          margin-left: auto;
          margin-right: auto;
          padding-top: .5em;
          padding-bottom: .5em;
          @apply(--layout-horizontal);
          /* max-width: 525px; */
        }

        .search-field {
          margin: 0px;
          padding: 0px;
          width: 91%;
          max-width: 500px;
          background-color: var(--color-white);
          color: var(--color-text-gray);
          border-top: var(--uvalib-search-box-border);
          border-left: var(--uvalib-search-box-border);
          border-bottom: var(--uvalib-search-box-border);
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          line-height: 30px;
          text-align: left;
          padding-left: 10px;
          padding-right: 10px;
          font-size: var(--uvalib-main-font-size-unit);
        }

        .search-button, .reset-button {
          background-color: var(--uvalib-background-search, var(--uvalib-main-rotunda-orange));
          font-weight: 700;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          margin-left: 0;
          color: var(--uvalib-main-white);
          border: none;
        }

        .reset-button {
          background-color: var(--uvalib-background-search-reset, black);
        }

        [hidden] {
          display: none;
        }

        </style>
      </custom-style>
      <div role="search">
        <h2 id="searchStr" class="screen-reader-text">[[label]]</h2>
        <slot></slot>
        <form method="get" action="[[action]]" id="searchForm">
          <template is="dom-repeat" items="[[hiddenInputs]]">
            <input type="hidden" name="[[item.name]]" value="[[item.value]]">
          </template>
          <template is="dom-if" if="[[queryName]]">
            <input type="hidden" name="[[queryName]]" value$="[[value]]">
          </template>
          <label class="screen-reader-text" for="q1">[[placeholder]]</label>
          <div class="search-group">
            <input class="search-field" name="q" id="q1" value="{{value::change}}" placeholder="[[placeholder]]" tabindex="0" autocomplete="off" />
            <paper-button class="search-button" on-tap="submitSearch" alt="Search Virgo" hidden$="[[_showResetButton(searchAgainOption, submitted, value)]]"><span>Search</span></paper-button>
            <paper-button id="reset" class="reset-button" on-tap="resetSearch" alt="Reset Search" hidden$="[[!_showResetButton(searchAgainOption, submitted, value)]]"><span><iron-icon icon="times"></iron-icon></span></paper-button>
          </div>
        </form>
      </div>
    `;
  }
  static get properties() {
    return {
      /* The Label read aloud to screen readers */
      label: {
          type: String,
          value: "Search"
      },
      queryName: {
          type: String,
          value: null
      },
      action: {
          type: String,
          value: null
      },
      value: {
          type: String,
          notify: true,
          value:null
      },
      submitted: {
        type: Boolean,
        value: false
      },
      hiddenInputs: Array,
      placeholder: {
          type: String,
          value: "Search terms here"
      },
      /** Set this to true when you want the links to be relative (when used in library.virginia.edu) **/
      relativeLinks: {
          type: Boolean,
          value: false
      },
      searchAgainOption: {
        type: Boolean,
        value: false
      }
    };
  }
  ready() {
    super.ready();
    this.shadowRoot.querySelector('form').addEventListener('keypress', this._checkForEnter.bind(this));
  }
  changeFocusToCatalogAdvanced() {
      this.$.catalogAdv.focus();
  }

  submitSearch() {
      this.submitted = true;
      this.value = (this.value=="")? null:this.value;
      if (this.value && this.searchAgainOption)
        this.shadowRoot.getElementById('reset').focus();
      if (this.action)
        this.$.searchForm.submit();
      else {
          console.log('submitted');
          this.dispatchEvent(new CustomEvent('submit', {
              detail: {
                  value: this.value
              }
          }));
          // alert analytics that we have a submission
          this.dispatchEvent(new CustomEvent('uvalib-analytics-event', {
            bubbles: true,
            composed: true,
            detail: {track:['simple-search-box','submitted',(this.value)?this.value:""]}
          }));
      }
  }
  resetSearch(){
    this.value = null;
    this.shadowRoot.getElementById('q1').focus();
  }
  _checkForEnter(e) {
      // check if 'enter' was pressed
      if (e.keyCode === 13) {
          e.preventDefault();
          var butt = this.shadowRoot.querySelector('paper-button')
          butt.focus();
          butt.click();
//                    this.submitSearch();
          return false;
      }
  }
  _showResetButton(searchAgainOption, submitted, value){
    return searchAgainOption && (submitted && !!(value));
  }
}

window.customElements.define('uvalib-simple-search-box', UvalibSimpleSearchBox);
