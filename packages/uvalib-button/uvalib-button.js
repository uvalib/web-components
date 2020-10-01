import '@uvalib/web-styles/src/icons.js';
import style from './uvalib-button.scss';
import 'construct-style-sheets-polyfill';

// setup constructed style sheet
const uvalibButtonStyles = new CSSStyleSheet();
uvalibButtonStyles.replaceSync(style);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, uvalibButtonStyles];

class UvalibButton extends HTMLElement {
  // set which attributes to listen for changes to
  static get observedAttributes() {
    return ['mode','href','icon'];
  }
  // set up property getters/setters to sync attributes with properties
  get mode() {return this._mode;}
  set mode(newMode) {
    this._mode = newMode;
    this._updateButton();
  }
  get href() {return this._href;}
  set href(newHref) {
    this._href = newHref;
    if (this._href) {
      this.mode = "link"
    }
    this._updateButton();
  }
  get icon() {return this._icon;}
  set icon(newIcon) {
    this._icon = newIcon;
    if (this._icon) {
      this.mode = "icon";
    }
    this._updateButton();
  }

  focus() {
    this.button.focus();
  }
  blur() {
    this.button.blur();
  }

  // attribute values being set and changed
  attributeChangedCallback(name, oldValue, newValue) {
    switch(name){
      case "mode": this.mode = newValue; break;
      case "href": this.href = newValue; break;
      case "icon": this.icon = newValue; break;
    }
  }

  constructor() {
    super();
    this._setupDom();
    this._updateButton();
  }

  _setupDom(){
    // setup a shadowDOM
    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.adoptedStyleSheets = [uvalibButtonStyles];
    this.shadow.innerHTML = `
      <button part="button" class="${this._makeClass()}"><i hidden></i><slot><slot></button>
    `;
    this.button = this.shadow.querySelector('button');
    this.iconNode = this.shadow.querySelector('i');
  }
  
  _updateButton(){
    if (this.mode === "icon" && this.icon && this.iconNode) {
      this.iconNode.className = this.icon;
      this.iconNode.removeAttribute('hidden');
    }
    if (this.href) {
      if (!this.link) {
        this.link = document.createElement('a');
        this.link.setAttribute('href', this.href);
        this.link.setAttribute('tabindex','-1');
        this.shadow.replaceChild(this.link, this.button);
        this.link.appendChild(this.button);
        this.button.setAttribute('role','button');
        this.button.addEventListener("keyup",function(event){
          if (event.keyCode === 13) {
            window.location = this.href;
          }
        }.bind(this));
      }
    }
    if (this.button) this.button.className = this._makeClass();
  }
  _makeClass(){
    if (this.mode !== "text" && this.mode !== "icon" && this.mode !== "link") {
      var cls = "uvalib-button";
      if (this.mode === "tertiary") cls += " uvalib-button-tertiary";
      return cls;
    } else if (this.mode === "link" || this.href)
      return "link-button";
    else if (this.mode === 'icon')
      return "icon-button";
    else if (this.mode === 'text')
      return "text-button";
  }
}

window.customElements.define('uvalib-button', UvalibButton);
