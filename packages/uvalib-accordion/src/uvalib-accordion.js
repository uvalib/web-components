import {html} from 'lit-element';
import {UvaLitElement} from 'uvalib-theme/src/uvalib-lit-element.js';
import '@patternfly/pfe-accordion/pfe-accordion.js';

class UvaLibAccordion extends UvaLitElement {
  static get properties() {
    return {
      list: Array
    };
  }
  firstUpdated() {
    this.list = [];
    super.connectedCallback();
    this.observer = new MutationObserver((mutationsList, observer)=>{
      this.__getDefLists();
    });
    this.observer.observe(this, {attributes: true, childList: true, subtree: true});
    if (this.querySelector('dl'))
    this.observer.observe(this.querySelector('dl'), {attributes: true, childList: true, subtree: true});
    this.__getDefLists();
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  __getDefLists() {
    const defList = this.querySelector('dl');
    const accordion = this.shadowRoot.getElementById('accordion');
    if (accordion.children && accordion.children.length>0) {
      while ( accordion.children.length > 0) {
        accordion.removeChild(accordion.children[0]);
      }
    }
    if (defList) {
      for (var i=0; i<defList.children.length; i++) {
          const child = defList.children[i];
          if (child.tagName === "DT"){
            var header = document.createElement("pfe-accordion-header");
            this.__cloneChildren(child, header);
            accordion.appendChild(header);
          }
          else if (child.tagName === "DD"){
            var body = document.createElement("pfe-accordion-panel");
            this.__cloneChildren(child, body);
            accordion.appendChild(body);
          }
      }

    }
  }
  __cloneChildren(fromParent, toParent){
    if (fromParent.childNodes.length > 0)
      for (var i=0; i<fromParent.childNodes.length; i++) {
        toParent.appendChild(fromParent.childNodes[i].cloneNode(true));
      }
  }
  render() {
    return html`
    <pfe-accordion id="accordion"></pfe-accordion>
    `;
  }
}

customElements.define('uvalib-accordion', UvaLibAccordion);
