import style from './uvalib-image.scss';
import BigPicture from 'bigpicture';

class UvalibImage extends HTMLElement {
  static get observedAttributes() {
    return ['src','alt','enlargable']; //'loading','data'];
  }
  constructor() {
    // Always call super first in constructor
    super();
    this._setupDom();
  }
  _setupDom(){
    // setup a shadowDOM
    this.shadow = this.attachShadow({mode: 'open'});
    // this should take care of our login/logout interactions
    this.shadow.innerHTML = `
      <style>
        ${style}
      </style>
      <span id="image"></span>
    `;
    this._imgContainer = this.shadow.getElementById('image');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch(name){
      case "src":
        this.src = newValue;
        this._updateImg();
        break;
      case "alt":
        this.alt = newValue;
        this._updateImg();
        break;
      case "enlargable":
        console.log('enl: '+newValue);
        this.enlargable = (newValue==='');
        console.log(this.enlargable);
        this._updateImg();
        break;
    }
  }
  _updateImg(){
    // min needed for an image is src and alt attributes!
    if (this.src && this.alt) {
      if (!this.img) {
        this.img = document.createElement('img');
        this._imgContainer.innerHTML = '';
        this._imgContainer.appendChild(this.img);
      }
      this.img.setAttribute('src',this.src);
      this.img.setAttribute('alt',this.alt);
      if (this.enlargable) {
        this.img.addEventListener('click', function(e){
          BigPicture({el: e.target});
        }.bind(this));
      }
      else {
        console.log('not enlargable')
      }
    }
  }
}

window.customElements.define('uvalib-image', UvalibImage);
