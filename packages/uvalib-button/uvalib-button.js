import '@uvalib/web-styles/src/icons.js';
import style from './uvalib-button.scss';

class UvalibButton extends HTMLElement {
  static get observedAttributes() {
    return ['mode','href','icon'];
  }
  constructor() {
    // Always call super first in constructor
    super();

  }
  connectedCallback() {
    this._setupDom();
    this._updateButton();
  }
  _setupDom(){
    // setup a shadowDOM
    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.innerHTML = `
      <style>
        :host {
          display: inline-block;
/*          visibility: hidden; */
        }
        ${style}
        .fa-bars:before{content:'\f0c9'}
      </style>
      <button class="${this._makeClass()}"><i hidden></i><slot><slot></button>
    `;
    this.button = this.shadow.querySelector('button');
    this.iconNode = this.shadow.querySelector('i');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch(name){
      case "mode":
//        if (oldValue != newValue) {
//          this.opened = (newValue===null)? false:true;
//          this._eval().then(function(){
//            this.dispatchEvent(new CustomEvent('transitioning-changed', {detail: {opened: this.opened}}));
//          }.bind(this));
//          this.dispatchEvent(new CustomEvent('opened-changed', {detail: {opened: this.opened}}));
//        }
        this.mode = newValue;
        console.log("mode changed to "+this.mode)
        break;
      case "href":
        if (newValue) {
          this.href = newValue;
          this.mode = "link";
          console.log("href changed to "+this.href);
        }
        break;
      case "icon":
        if (newValue) {
          this.icon = newValue;
          this.mode = "icon";
        } else {
          this.icon = null;
        }
        break;
    }
    this._updateButton();
  }
  _updateButton(){
    if (this.mode === "icon" && this.icon && this.iconNode) {
      this.iconNode.className = this.icon;
      this.iconNode.removeAttribute('hidden');
    }
    if (this.button) this.button.className = this._makeClass();
  }
  _makeClass(){
    console.log(this.mode);
    console.log(this.href);
    if (this.mode !== "text" && this.mode !== "icon" && this.mode !== "link")
      return "uvalib-button";
    else if (this.mode === "link" || this.href)
      return "link-button";
    else if (this.mode === 'icon')
      return "icon-button"
    else "";
  }
}

window.customElements.define('uvalib-button', UvalibButton);
