import 'jspdf/dist/jspdf.min.js';


// Create a class for the element
class UVALibHoldPrintPDF extends HTMLElement {

  static get observedAttributes() {
    return ['pages','disabled'];
  }

  constructor() {

    // Always call super first in constructor
    super();

    this.pages = [];
    this.disabled = false;

    const shadow = this.attachShadow({mode: 'open'});

    var style = document.createElement('style');
    style.textContent = `
      :host {
        display:block;
        margin-top:10px;
        margin-bottom:10px;
      }

    `;
    shadow.appendChild(style);

    this._button = document.createElement('button');
    this._button.appendChild(document.createTextNode("Create PDF"));

    shadow.appendChild(this._button);

    this.addEventListener("click", this._makePDF);
  }


  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom element attributes changed.');
    if (name=="pages") {
      this.pages = JSON.parse(newValue);
    } else if (name="disabled") {
      if (newValue == null) this._button.removeAttribute('disabled');
      else this._button.setAttribute('disabled',newValue);
    }
  }

  _makePDF(e) {
    var doc = new jsPDF();
    for (var i=0;  i<this.pages.length; i++) {

      var split = doc.splitTextToSize(this.pages[i].heading, 180);
      doc.text(15, 20, split);
//      var split = doc.splitTextToSize(this.pages[i].body, 180);
//      doc.text(15, 120, split);

      if (i+1 != this.pages.length ) doc.addPage();
    }
    doc.autoPrint({variant: 'non-conform'});
    doc.save('Holds.pdf');
  }
}

customElements.define('uvalib-fill-hold-print-pdf', UVALibHoldPrintPDF);
