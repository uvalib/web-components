import './uvalib-loading';

// Create a class for the element
class UVALibHoldPrintQueueItem extends HTMLElement {

  static get observedAttributes() {
    return ['loading','data'];
  }

  constructor() {
    // Always call super first in constructor
    super();

    const shadow = this.attachShadow({mode: 'open'});

    var style = document.createElement('style');
    style.textContent = `
      :host {display:list-item;}
      [hidden] {display:none}
      uvalib-loading {
        --circle-size: 10px;
        padding-top: 10px;
        padding-left: 10px;
      }
    `;
    shadow.appendChild(style);

    this._container = document.createElement('div');

    //Title
    this._title = document.createElement('div')
    this._title.classList.add('title');
    this._titleText = document.createTextNode("");
    this._title.appendChild(this._titleText);
    this._container.appendChild(this._title);
    //barcode
    this._barcode = document.createElement('div')
    this._barcode.classList.add('barcode');
    this._barcodeText = document.createTextNode("");
    this._barcode.appendChild(this._barcodeText);
    this._container.appendChild(this._barcode);
    //user
    this._user = document.createElement('div')
    this._user.classList.add('user');
    this._userText = document.createTextNode("");
    this._user.appendChild(this._userText);
    this._container.appendChild(this._user);
    //error
    this._error = document.createElement('div')
    this._error.classList.add('error');
    this._errorText = document.createTextNode("");
    this._error.appendChild(this._errorText);
    this._container.appendChild(this._error);

    shadow.appendChild(this._container);

    this.loadingEl = document.createElement('uvalib-loading');
    this.loadingEl.setAttribute('hidden','');
    this._container.appendChild(this.loadingEl);
    this.data = {};
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name){
      case "loading":
        if (newValue||newValue=='') {
          console.log("it's loading");
          this.loadingEl.removeAttribute('hidden');
        } else {
          console.log("it's not loading");
          this.loadingEl.setAttribute('hidden','');
        }
        break;
      case "data":
        this.data = JSON.parse(newValue);
        this._displayItem(this.data);
        break;
    }
  }

  _displayItem(data){
    // Are we loading?
    if (data.loading) this.setAttribute("loading",'');
    else this.removeAttribute("loading");
    this._titleText.nodeValue = data.hold.title;
    this._barcodeText.nodeValue = this.id;
    if (data.hold.error_messages.length > 0) {
      this._errorText.nodeValue = "";
      for (var i=0; i<data.hold.error_messages.length; i++) {
        this._errorText.nodeValue += data.hold.error_messages[i] + "; ";
      }
    }
    if (data.user) {
      this._userText.nodeValue = `${data.user.FirstName} ${data.user.LastName} (${data.hold.user_id})`;
    }
  }

}

customElements.define('uvalib-fill-hold-print-queue-item', UVALibHoldPrintQueueItem);
