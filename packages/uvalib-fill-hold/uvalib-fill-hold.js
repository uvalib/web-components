import './uvalib-fill-hold-barcode-reader';
import './uvalib-fill-hold-print-queue';

class UVALibHold extends HTMLElement {

  constructor() {
    super();
    // setup a shadowDOM
    const shadow = this.attachShadow({mode: 'open'});

    // setup a barcode reader form to capture barcodes from a scanner
    const reader = document.createElement('uvalib-fill-hold-barcode-reader');
    shadow.appendChild(reader);
    // setup a queue for barcodes
    this.queue = document.createElement('uvalib-fill-hold-print-queue');
    shadow.appendChild(this.queue);

    // set focus to the barcode reader form
    reader.focus();

    // listen for barcodes that have been entered
    reader.addEventListener("submit", function(event) {
      this.addBarcode(event.detail.barcode);
    }.bind(this));
  }

  // Barcodes are simply stored in localStorage
  addBarcode(barcode) {
    this.queue.addBarcode(barcode);
  }

}

customElements.define('uvalib-fill-hold', UVALibHold);
