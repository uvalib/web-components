import 'jspdf/dist/jspdf.min.js';

// Create a class for the element
class UVALibHoldPrintPDF extends HTMLElement {

  static get observedAttributes() {
//    return ['c', 'l'];
    return ['pages'];
  }

  constructor() {
    // Always call super first in constructor
    super();

    this.pages = [];

    const shadow = this.attachShadow({mode: 'open'});
    const button = document.createElement('button');
    button.appendChild(document.createTextNode("Create PDF"));

    shadow.appendChild(button);

    this.addEventListener("click", this._makePDF);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom element attributes changed.');
    if (name=="pages") {
      this.pages = JSON.parse(newValue);
    }
  }

  _makePDF(e) {
    var doc = new jsPDF();
//    doc.text(20, 20, 'Hello world.');
    for (var i=0;  i<this.pages.length; i++) {
      doc.text(this.pages[i],5,15);
      if (i+1 != this.pages.length ) doc.addPage();
    }
    doc.save('Holds.pdf');
  }
}

customElements.define('uvalib-fill-hold-print-pdf', UVALibHoldPrintPDF);
