class UVALibHoldBarcodeReader extends HTMLElement {

  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
    const div = document.createElement('div');
    this._input = document.createElement('input');

    // sample barcode input
    this._input.value = this._getTestBarcode();

    div.appendChild(this._input);
    shadow.appendChild(div);

    this.addEventListener("keyup", event => {
      if (event.isComposing || event.keyCode === 13) {
        this._barcodeSubmit(this._input.value);
        this._input.value = this._getTestBarcode();
      }
    });
  }

  _getTestBarcode() {
    return Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
  }

  focus() {
    this._input.focus();
  }

  _barcodeSubmit(val) {
    this.dispatchEvent(new CustomEvent('submit', {detail: {barcode: val}}));
  }
}

customElements.define('uvalib-fill-hold-barcode-reader', UVALibHoldBarcodeReader);
