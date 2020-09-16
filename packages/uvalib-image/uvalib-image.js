import'@uvalib/web-styles/src/icons.js';
import style from './uvalib-image.scss';

import BigPicture from 'bigpicture';

class UvalibImage extends HTMLElement {
  static get observedAttributes() {
    return ['src','alt','enlargable','title'];
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
      <button hidden><i class="fas fa-search-plus"></i><span class="sr-only">enlarge image</span></button>
      <span id="image"></span>
    `;
    this._button = this.shadow.querySelector('button');
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
      case "title":
        this.title = newValue;
        this._updateImg();
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
    if (!this.alt) this.alt = "click to enlarge";
    if (this.src && this.alt) {
      if (!this.img) {
        this.img = document.createElement('img');
        this._imgContainer.innerHTML = '';
        this._imgContainer.appendChild(this.img);
      }
      this.img.setAttribute('src',this.src);
      this.img.setAttribute('alt',this.alt);
      if (!this.title) this.image.setAttribute('title',this.alt);
      if (this.enlargable) {
        this.img.addEventListener('click', function(e){
          BigPicture({el: e.target});
        }.bind(this));
        this._button.removeAttribute('hidden');
        this._button.addEventListener('click', function(e){
          BigPicture({el: this.img});
        }.bind(this));
      }
      else {
        console.log('not enlargable')
      }
    }
  }
}

window.customElements.define('uvalib-image', UvalibImage);
