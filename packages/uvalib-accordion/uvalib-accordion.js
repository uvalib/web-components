import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/custom-style.js';
import "@polymer/iron-collapse/iron-collapse.js";
import "@polymer/iron-selector/iron-selector.js";
import {IronA11yKeysBehavior} from "@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js";
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';


/**
 * `uvalib-accordion`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibAccordion extends mixinBehaviors([IronA11yKeysBehavior],PolymerElement) {
  static get template() {
    return html`
      <custom-style>
        <style>
        :host {
          display: block;
        }
        .Accordion {
          border: 1px solid hsl(0, 0%, 82%);
          border-radius: .3em;
          box-shadow: 0 1px 2px hsl(0, 0%, 82%);
        }
        dl {
          @apply --uvalib-accordion-dl;
        }
        </style>
      </custom-style>
      <dl id="accordionGroup" role="presentation" class="Accordion">
        <iron-selector id="selector" activate-event="[[activateEvent]]" multi="[[multi]]" selected="{{_selectedIndex}}" selected-attribute="opened" selected-item="{{_selectedItem}}" items="{{_items}}">
          <slot></slot>
        </iron-selector>
      </dl>
    `;
  }
  static get properties() {
    return {
      /** If true, multiple selections are allowed **/
      multi: {
        type: Boolean,
        value: false
      },
      /** the currently selected accordion node */
      _selectedItem: {
        type: Object,
        observer: '_selectedItemChanged'
      },
      _items: {
        type: Array,
        observer: '_activate',
      },
      activateEvent: String
    };
  }
  get keyBindings() {
    return {
      'ctrl+pagedown': 'selectNext',
      'down': 'selectNext',
      'ctrl+pageup': 'selectPrevious',
      'up': 'selectPrevious',
      'end': 'selectLast',
      'home': 'selectFirst'
    };
  }
  ready(){
    super.ready();
    this.addEventListener('tap', (e)=>{
      e.stopPropagation();
    })
  }

  _activate() {
    // Iron-selector doesn't init the selected state by attribute so we must do it :(
    this._items.forEach(function(item,index){
      if(item.hasAttribute('opened'))this.$.selector.selectIndex(index)
    }.bind(this));
  }
  selectNext(e) {
    e.preventDefault();
    this.$.selector.selectNext();
    if (this._selectedItem) this._selectedItem.$.accordionId.focus();
  }
  selectPrevious(e) {
    e.preventDefault();
    this.$.selector.selectPrevious();
    if (this._selectedItem) this._selectedItem.$.accordionId.focus();
  }

  selectLast(e) {
    e.preventDefault();
    this.$.selector.selectIndex(this.$.selector.items.length-1);
    if (this._selectedItem) this._selectedItem.$.accordionId.focus();
  }
  // Select and focus the first uvalib-accordion-item.  preventDefault method is run on an event passed as a parameter
  selectFirst(e) {
    e.preventDefault();
    this.$.selector.selectIndex(0);
    if (this._selectedItem) this._selectedItem.$.accordionId.focus();
  }
  // Set disabled state, via aria-disabled, to an expanded / active accordion which is not allowed to be toggled close (when !multi )
  _selectedItemChanged(newNode, oldNode){
    if (!this.multi && newNode) {
      newNode.setAttribute('aria-disabled','');
    } else if (!this.multi && oldNode) {
      oldNode.removeAttribute('aria-disabled');
    }
  }

}

window.customElements.define('uvalib-accordion', UvalibAccordion);
