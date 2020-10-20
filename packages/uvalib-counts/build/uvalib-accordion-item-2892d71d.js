import{f as o,i as e}from"./uvalib-counts-d5cc2695.js";import"./index.esm-e1330966.js";import"./_commonjsHelpers-c8d25406.js";import"./custom-style-e4c9e0f3.js";import"./iron-collapse-5f82b0ec.js";import"./gesture-event-listeners-89af3056.js";window.customElements.define("uvalib-accordion-item",class extends o{static get template(){return e`
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
    `}static get properties(){return{opened:{type:Boolean,notify:!0,value:!1},headingLevel:{type:Number,value:3}}}_captureTap(o){o.stopPropagation()}_stopEvent(o){o.stopPropagation()}});
