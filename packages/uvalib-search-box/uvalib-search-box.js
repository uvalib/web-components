import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "@uvalib/uvalib-theme/uvalib-theme.js";
import "./uvalib-simple-search-box.js";

/**
 * `uvalib-search-box`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibSearchBox extends PolymerElement {
  static get template() {
    return html`
      <custom-style>
        <style include="uvalib-theme">

          a, a:link, a:visited { color: inherit; }
          li a span { text-decoration: underline; color: var(--uvalib-main-white);}
          li a span:visited { color: var(--uvalib-main-white); }
          li a span:hover { text-decoration: none; }

          nav ul { list-style-type: none; margin: 0; padding: 0; }
          nav li { display: inline-block; color: var(--color-white); }

          :host([small-screen]) nav li {
            display: block;
            font-size: 120%;
            padding-bottom: .5em;
          }
          nav a { padding: 10px; }

        </style>
      </custom-style>
      <uvalib-simple-search-box placeholder="[[placeholder]]" action="[[_virgoSearchUrl]]" value="{{_query}}" query-name="q" hidden-inputs='[[_hi]]'>
        <nav hidden$="[[noLinks]]">
          <ul>
            <li>
              <a id="catalogAdv" href="https://search.lib.virginia.edu/catalog/advanced" aria-labelledby="catalogAdv searchStr">Catalog Advanced <span aria-hidden="true">&gt;</span></a>
            </li>
            <li>
              <a id="articleAdv" href="https://search.lib.virginia.edu/articles/advanced" aria-labelledby="articleAdv searchStr">Article Advanced <span aria-hidden="true">&gt;</span></a>
            </li>
            <li>
              <a href="[[_domain]]/search">Site Search <span aria-hidden="true">&gt;</span></a>
            </li>
          </ul>
        </nav>
      </uvalib-simple-search-box>
    `;
  }
  static get properties() {
    return {
      _virgoSearchUrl: {
        type: String,
        value: "https://search.lib.virginia.edu/catalog"
      },
      _query: String,
      placeholder: {
        type: String,
        value: "Search Virgo for books, articles, digital materials, and more."
      },
      /** Set this to true when you want the links to be relative (when used in library.virginia.edu) **/
      relativeLinks: {
        type: Boolean,
        value: false
      },
      noLinks: {
        type: Boolean,
        value: false
      },
      _domain: {
        type: String,
        computed: "_makeLinkDomain(relativeLinks)"
      },
      _hiddenInputs: {
        type: Array,
        value: function(){
          return [{"name":"catalog_select","value":"all"}];
        }
      },
      hiddenInputs: Array,
      _hi: {
        type: Array,
        computed: '_mergehiddenInputs(_hiddenInputs, hiddenInputs)'
      }
    };
  }
  _mergehiddenInputs(_hiddenInputs, hiddenInputs){
    if (!hiddenInputs && _hiddenInputs) return _hiddenInputs
    else {
      var merged = {};
      _hiddenInputs.forEach(i => { merged[i.name] = i.value; });
      hiddenInputs.forEach(i => { merged[i.name] = i.value; });
      var result = [];
      for (name in merged) {
        result.push({name:name, value:merged[name]});
      }
      return result;
    }
    return [];
  }
  changeFocusToCatalogAdvanced() {
    this.$.catalogAdv.focus();
  }

  submitCatalogSearch() {
    this.$.virgoSearchForm.submit();
  }
  _checkForEnterVirgo(e) {
      // check if 'enter' was pressed
      if (e.keyCode === 13) {
          this.submitCatalogSearch();
      }
  }
  _makeLinkDomain(relLinks) {
    return (relLinks)? "":"https://www.library.virginia.edu";
  }
}

window.customElements.define('uvalib-search-box', UvalibSearchBox);
