import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/custom-style.js';
import "@polymer/iron-collapse/iron-collapse.js";
import "@polymer/iron-selector/iron-selector.js";
import {IronA11yKeysBehavior} from "@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js";
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';


/**
`uvalib-accordion` is an accordion.  It allows users to select (open and collapse panels)
by clicking the header.  The header/panels are handled by children `uvalib-accordion-item` elements.

Example:

  <uvalib-accordion>
    <uvalib-accordion-item heading-level="2">
      <div slot="heading">Heading 1</div>
      <div slot="body">Some Content Here!</div>
    </uvalib-accordion-item>
    <uvalib-accordion-item heading-level="2">
      <div slot="heading">Heading 2</div>
      <div slot="body">Some Content Here!</div>
    </uvalib-accordion-item>
  </uvalib-accordion>

### Styling

Style the accordion with CSS as you would a normal DOM element.

  uvalib-accordion {
    color: blue;
    background-color: gray;
  }

The following custom properties and mixins are also available for styling (mixins are polyfilled using @apply syntax waiting on CSS ::part support):

Custom property      | Description                    | Default
---------------------|--------------------------------|----------
`--uvalib-accordion` | Mixin applied to the accordion | `{}`

@slot - The accordion items using the `uvalib-accordion-item` element
@customElement
@polymer
@demo demo/index.html
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
          @apply --uvalib-accordion;
        }
        </style>
      </custom-style>
      <dl id="accordionGroup" role="presentation" class="Accordion">
        <iron-selector id="selector" activate-event="[[_activateEvent]]" multi="[[multi]]" selected="{{_selectedIndex}}" selected-attribute="opened" selected-item="{{_selectedItem}}" items="{{_items}}">
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
      /** The list of items from which a selection can be made. */
      _items: {
        type: Array,
        observer: '_activate',
      },
      /** The event that fires from items when they are selected. */
      _activateEvent: String
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
    });
    this.$.selector.addEventListener('iron-select',function(e){
      console.log(e);
      this.dispatchEvent(new CustomEvent('uvalib-accordion-select', {bubbles: true, composed: true, detail: {selectedItem: this.selectedItem} }));
    }.bind(this));
  }

  /** Sets the selected index of the iron-selector based on the items added to the accordion */
  _activate() {
    // Iron-selector doesn't init the selected state by attribute so we must do it :(
    this._items.forEach(function(item,index){
      if(item.hasAttribute('opened')) this.$.selector.selectIndex(index)
    }.bind(this));
  }
  /** Selects (opens) and focuses the next item in the accordion. */
  selectNext(e) {
    e.preventDefault();
    this.$.selector.selectNext();
    if (this._selectedItem) this._selectedItem.$.accordionId.focus();
  }
  /** Selects (opens) and focuses the previous item in the accordion. */
  selectPrevious(e) {
    e.preventDefault();
    this.$.selector.selectPrevious();
    if (this._selectedItem) this._selectedItem.$.accordionId.focus();
  }
  /** Selects (opens) and focuses the last item in the accordion. */
  selectLast(e) {
    e.preventDefault();
    this.$.selector.selectIndex(this.$.selector.items.length-1);
    if (this._selectedItem) this._selectedItem.$.accordionId.focus();
  }
  /** Select and focus the first uvalib-accordion-item. */
  selectFirst(e) {
    e.preventDefault();
    this.$.selector.selectIndex(0);
    if (this._selectedItem) this._selectedItem.$.accordionId.focus();
  }
  /** Set disabled state, via aria-disabled, to an expanded / active accordion which is not allowed to be toggled close (when !multi ) */
  _selectedItemChanged(newNode, oldNode){
    if (!this.multi && newNode) {
      newNode.setAttribute('aria-disabled','');
    } else if (!this.multi && oldNode) {
      oldNode.removeAttribute('aria-disabled');
    }
  }

/**
  Fired when the accordion is selected.

  @event uvalib-accordion-select
  Event param: {{selectedItem: Number}} detail Contains the selected items index.
*/

}

window.customElements.define('uvalib-accordion', UvalibAccordion);
