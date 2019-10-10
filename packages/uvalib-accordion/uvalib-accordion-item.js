import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/custom-style.js';
import "@polymer/iron-collapse/iron-collapse.js";

/**
`uvalib-accordion-item` is an accordion item, a child of `uvalib-accordion` that has a header button and
panel that is collapsable.  The heading is contained in a slotted container named `heading` and the body
or panel is in a slotted container nameed `body`


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

  uvalib-accordion-item {
    color: blue;
    background-color: gray;
  }

The following custom properties and mixins are also available for styling (mixins are polyfilled using @apply syntax waiting on CSS ::part support):

Custom property                        | Description                              | Default
---------------------------------------|------------------------------------------|----------
`--uvalib-accordion-item-trigger`      | Mixin applied to the trigger             | `{}`
`--uvalib-accordion-item-trigger-focus`| Mixin applied to the trigger when focused| `{}`
`--uvalib-accordion-item-trigger-hover`| Mixin applied to the trigger when hovered| `{}`
`--uvalib-accordion-item-title`        | Mixin applied to the header title        | `{}`
`--uvalib-accordion-item-icon`         | Mixin applied to the header icon         | `{}`
`--uvalib-accordion-item-icon-focus`   | Mixin applied to the header icon focused | `{}`
`--uvalib-accordion-item-icon-hover`   | Mixin applied to the header icon hovered | `{}`
`--uvalib-accordion-item-icon-opened`  | Mixin applied to the header icon opened  | `{}`
`--uvalib-accordion-item-panel`        | Mixin applied to the panel block         | `{}`
`--uvalib-accordion-item-heading`      | Mixin applied to the heading block       | `{}`


@customElement
@polymer
@demo demo/index.html
*/
class UvalibAccordionItem extends PolymerElement {
  static get template() {
    return html`
      <custom-style>
        <style>
          :host {
            height:100%;
            display: block;
            padding: 0;
            margin: 0;
            border-top: 1px solid hsl(0, 0%, 82%);
          }
          .Accordion-trigger {
              background: none;
              border: 0;
              color: hsl(0, 0%, 13%);
              display: block;
              font-size: 1rem;
              font-weight: normal;
              margin: 0;
              padding: 0;
              position: relative;
              text-align: left;
              width: 100%;
              @apply --uvalib-accordion-item-trigger;
          }
          .Accordion-trigger:focus {
            background: hsl(0, 0%, 93%);
            @apply --uvalib-accordion-item-trigger-focus;
          }
          .Accordion-trigger:hover {
            background: hsl(0, 0%, 93%);
            @apply --uvalib-accordion-item-trigger-hover;
          }
          .Accordion-title {
            display: block; /* For Edge bug https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8295099/ */
            pointer-events: none;
            @apply --uvalib-accordion-item-title;
          }
          .Accordion-icon {
            border: solid hsl(0, 0%, 62%);
            border-width: 0 2px 2px 0;
            height: .5rem;
            pointer-events: none;
            position: absolute;
            right: 1.5em;
            top: 50%;
            transform: translateY(-60%) rotate(45deg);
            width: .5rem;
            @apply --uvalib-accordion-item-icon;
          }
          .Accordion-trigger:focus .Accordion-icon {
            border-color: hsl(0, 0%, 13%);
            @apply --uvalib-accordion-item-icon-focus;
          }
          .Accordion-trigger:hover .Accordion-icon {
            border-color: hsl(0, 0%, 13%);
            @apply --uvalib-accordion-item-icon-hover;
          }
          .Accordion-trigger[aria-expanded] .Accordion-icon {
            transform: translateY(-50%) rotate(-135deg);
            @apply --uvalib-accordion-item-icon-opened;
          }
          .Accordion-panel {
            margin: 0;
            padding: 0;
            @apply --uvalib-accordion-item-panel;
          }
          /* For Edge bug https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4806035/ */
          .Accordion-panel[hidden] {
            display: none;
          }
          dt[role="heading"] {
            @apply --uvalib-accordion-item-heading;
          }
        </style>
      <custom-style>
      <dt role="heading" aria-level$="[[headingLevel]]">
        <button tabindex="0" id="accordionId" aria-expanded$="{{opened}}" class="Accordion-trigger" aria-controls="bodysect" type="button">
          <span class="Accordion-title"><slot name="heading"></slot></span>
          <span class="Accordion-icon"></span>
        </button>
      </dt>
      <iron-collapse id="collapse" opened$="{{opened}}" on-tap="_stopEvent">
        <dd id="bodysect" role="region" aria-labelledby="accordionId" class="Accordion-panel">
          <div on-tap="_captureTap"><slot name="body"></slot></div>
        </dd>
      </iron-collapse>
    `;
  }
  static get properties() {
    return {
      /** true if the accordion item is open */
      opened: {
        type: Boolean,
        notify: true,
        value: false
      },
      /** The heading level assigned to the items heading */
      headingLevel: {
        type: Number,
        value: 3
      }
    };
  }
  _captureTap(e){
    e.stopPropagation();
  }
  _stopEvent(e) {
    e.stopPropagation();
  }
}

window.customElements.define('uvalib-accordion-item', UvalibAccordionItem);
