// ****** ToDo namespace localstorage to keys with 'barcode-xxxxx' and use them when clearning list (and checking)
window.barcodeLocalStorage={};
// Setup events for local tab as localStorage events only trigger across tabs/windows
barcodeLocalStorage.setItem = function(key, value) {
  // namespace barcode entries
  localStorage.setItem(`barcode-${key}`, value);
  window.dispatchEvent(new CustomEvent('storage', {detail: {key:key,value:value}}));
};
barcodeLocalStorage.getItem = function(key) {
  // namespace barcode entries
  return localStorage.getItem(`barcode-${key}`);
};
barcodeLocalStorage.clear = function() {
  localStorage.clear();
  window.dispatchEvent(new CustomEvent('storage', {detail: {key: null}}));
};
barcodeLocalStorage.key = function(index) {
  return localStorage.key(index).replace('barcode-','');
}

import './uvalib-fill-hold-print-pdf';
import './uvalib-fill-hold-print-queue-item';

class UVALibHoldPrintQueue extends HTMLElement {

  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    // Setup PDF creator
    this.pdf = document.createElement('uvalib-fill-hold-print-pdf');
    shadow.appendChild(this.pdf);

    // Setup ol container for queue of barcodes
    this.ol = document.createElement('ol');
    shadow.appendChild(this.ol);

    // Load up Queue from localstorage
    this._loadQueue();

    // Listen to localStorage from other tabs/windows for changes to barcode queue
    window.addEventListener("storage", function(e){
      // check for clear event
      if ((e.key == null || (e.detail && e.detail.key == null)) && localStorage.length==0) {
        this._removeAllQueueItems();
      } else {
        this._changeBarcode( e.detail && e.detail.key? e.detail.key: e.key.replace('barcode-',''),
                            e.detail && e.detail.key? JSON.parse(e.detail.value): JSON.parse(e.newValue) );
      }
      this._setupPrintPages();
      console.log("setup print pages!!!")
    }.bind(this));
  }

  _setupPrintPages(){
    var pages = [];
    for (var i=0;  i<localStorage.length; i++) {
      const key = barcodeLocalStorage.key(i);
      const raw = barcodeLocalStorage.getItem(key);
      const value = raw? JSON.parse(barcodeLocalStorage.getItem(key)): {};
      var heading = `Barcode: ${key}\n`;
      if (value.hold) {
        if (value.hold.title) heading += `${value.hold.title}\n`;
        value.hold.error_messages.forEach(m=>{heading+="* "+m+'\n'});
        if (value.user) {
          heading += `
  Author: ${value.hold.author}
  Item ID: ${value.hold.item_id}

  Name: ${value.hold.user_full_name}
  Department: ${value.user.Department}
  Fax: ${value.user.Fax}
  Organization: ${value.user.Organization}
  Country: ${value.user.Country}
  Pickup Location: ${value.hold.pickup_location}
  Status: ${value.user.Status}
  Email: ${value.user.EMailAddress}
  Phone: ${value.user.Phone}
  Mobile Phone: ${value.user.MobilePhone}
  Department: ${value.user.Department}
  Notification Method: ${value.user.NotificationMethod}
  Delivery Method: ${value.user.DeliveryMethod}
  Loan Delivery Method: ${value.user.LoanDeliveryMethod}
  Last Changed: ${value.user.LastChangedDate}
          `;
        }
        var pageText = "";
        pages.push({heading:heading,body:pageText});
      }
    }
    this.pdf.setAttribute( 'pages',JSON.stringify(pages) );
    // Only provide a pdf if we have hold items to make it from
    if (pages.length) this.pdf.removeAttribute('disabled');
    else this.pdf.setAttribute('disabled','');
  }

  // The hold for the item w/ this barcode has changed in this window/tab or another, update ui
  _changeBarcode(barcode,obj) {
    // if the marcode meta is null, it has been deleted
    if (obj == null) this._removeQueueItem(barcode);
    // else add it or update it in our ui list
    else this._addUpQueueItem(barcode,obj);
  }

  // Called with a barcode to add a hold by barcode to the list and lookup
  addBarcode(barcode) {
    if (!this._alreadyHaveBarcode(barcode)) {
      // Add to localstorage
      barcodeLocalStorage.setItem(barcode, JSON.stringify({'loading':true}));
      console.log("New Barcode: "+barcode);
      // Call endpoints (be sure to keep requests in this tab/window)
      this.fetchHold(barcode)
          .then(function(data){
            //this._addUpQueueItem(barcode,data)
            barcodeLocalStorage.setItem(barcode, JSON.stringify(data));
          }.bind(this));
    }
  }

  fetchHold(barcode) {
    // random test till I get the backend worked out
    //const url = (Math.random() >= 0.5)? '../test.json':'../error-test.json';
    //return fetch(url)
    const url = "https://qmo3jwybkg.execute-api.us-east-1.amazonaws.com/production/library/fillholdreader/"+barcode;
    return fetch(url,{method: 'POST'})
      .then(res=>res.json())
      .then(function(data){
        console.log('got data');
        console.log(data);
        return data;
      }.bind(this));
  }

  _removeAllQueueItems() {
    this.ol.innerHTML = "";
    this.pdf.setAttribute( 'pages',JSON.stringify([]) );
  }
  _removeQueueItem(barcode) {
    var item = this.shadowRoot.getElementById(barcode);
    if (item) item.parentNode.removeChild(item);
  }

  // See if we are already tracking a request for an item by barcode
  _alreadyHaveBarcode(barcode) {
    var barcodeLI = this.shadowRoot.getElementById(barcode);
    return barcodeLI;
  }

  _addUpQueueItem(barcode,obj) {
    var barcodeLI = this._alreadyHaveBarcode(barcode);
    if (!barcodeLI) {
      barcodeLI = document.createElement('uvalib-fill-hold-print-queue-item');
      barcodeLI.id = barcode;
      barcodeLI.append(document.createTextNode(barcode));
      this.ol.appendChild(barcodeLI);
    }
    barcodeLI.setAttribute('data',JSON.stringify(obj))
  }

  _loadQueue() {
    for (var i=0;  i<localStorage.length; i++) {
      const key = barcodeLocalStorage.key(i);
      const raw = barcodeLocalStorage.getItem(key);
      const value = raw? JSON.parse(barcodeLocalStorage.getItem(key)): {};

//  ***** ToDo: Check to see if loading, means it didn't finish for some reason in the last session :(

      this._addUpQueueItem(key,value);
    }
    this._setupPrintPages();
    console.log("setup print pages!!!")
  }
}

customElements.define('uvalib-fill-hold-print-queue', UVALibHoldPrintQueue);
