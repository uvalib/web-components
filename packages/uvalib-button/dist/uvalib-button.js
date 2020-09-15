(function () {
  var link = document.createElement('link');
  link.rel = "stylesheet";
  link.href = "https://use.fontawesome.com/releases/v5.14.0/css/all.css";
  document.head.appendChild(link);
})();

var css_248z = ".fa,.fab,.fad,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.fas.fa-pull-left{margin-right:.3em}.fas.fa-pull-right{margin-left:.3em}.fa,.far,.fas{font-family:Font Awesome\\ 5 Free}.fa,.fas{font-weight:900}.fab{font-family:Font Awesome\\ 5 Brands}.fab,.far{font-weight:400}.fa-instagram:before{content:\"\\f16d\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-twitter-square:before{content:\"\\f081\"}\n/*!\nPure v2.0.3\nCopyright 2013 Yahoo!\nLicensed under the BSD License.\nhttps://github.com/pure-css/pure/blob/master/LICENSE.md\n*/.pure-button,.uvalib-button{display:inline-block;line-height:normal;white-space:nowrap;vertical-align:middle;text-align:center;cursor:pointer;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box}.pure-button::-moz-focus-inner,.uvalib-button::-moz-focus-inner{padding:0;border:0}.pure-button-group{letter-spacing:-.31em;text-rendering:optimizespeed}.opera-only :-o-prefocus,.pure-button-group{word-spacing:-.43em}.pure-button-group .pure-button,.pure-button-group .uvalib-button{letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-button,.uvalib-button{font-family:inherit;font-size:100%;padding:.5em 1em;color:rgba(0,0,0,.8);border:transparent;background-color:#e6e6e6;text-decoration:none;border-radius:2px}.pure-button-hover,.pure-button:focus,.pure-button:hover,.uvalib-button:focus,.uvalib-button:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(40%,rgba(0,0,0,.05)),to(rgba(0,0,0,.1)));background-image:linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))}.pure-button:focus,.uvalib-button:focus{outline:0}.pure-button-active,.pure-button:active,.uvalib-button:active{-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 0 6px rgba(0,0,0,.2) inset;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 6px rgba(0,0,0,.2);border-color:#000}.pure-button-disabled,.pure-button-disabled:active,.pure-button-disabled:focus,.pure-button-disabled:hover,.pure-button[disabled],.uvalib-button[disabled]{border:none;background-image:none;opacity:.4;cursor:not-allowed;-webkit-box-shadow:none;box-shadow:none;pointer-events:none}.pure-button-hidden{display:none}.pure-button-primary,.pure-button-selected,.uvalib-button-primary,a.pure-button-primary,a.pure-button-selected,a.uvalib-button-primary{background-color:#0078e7;color:#fff}.pure-button-group .pure-button,.pure-button-group .uvalib-button{margin:0;border-radius:0;border-right:1px solid rgba(0,0,0,.2)}.pure-button-group .pure-button:first-child,.pure-button-group .uvalib-button:first-child{border-top-left-radius:2px;border-bottom-left-radius:2px}.pure-button-group .pure-button:last-child,.pure-button-group .uvalib-button:last-child{border-top-right-radius:2px;border-bottom-right-radius:2px;border-right:none}button.text-button{border:none;background:none;padding:0;font-weight:500;color:#005679;cursor:pointer;display:inline-block}button.text-button:hover{opacity:1;text-decoration:underline}button.text-button:focus{outline:0;box-shadow:0 0 0 .2rem var(--uvalib-accessibility-highlight,#0370b7)}button.icon-button{border:none;background:none;padding:2px;margin:0;outline:none}button.icon-button:focus{outline:0;box-shadow:0 0 0 .2rem var(--uvalib-accessibility-highlight,#0370b7)}.link-button{border-radius:5px;font-weight:400;text-transform:uppercase;background-color:#e57200;color:#fff;border:none;padding:10px 12px}.link-button:hover{background-color:#dadada;color:#2b2b2b}.link-button:focus{outline:0;box-shadow:0 0 0 .2rem var(--uvalib-accessibility-highlight,#0370b7)}.uvalib-button-primary,.uvalib-button-small{background-color:#0370b7;border:1px solid #0370b7}.uvalib-button-primary:hover,.uvalib-button-small:hover{background-color:#3395d4;border:1px solid #3395d4;transition:all .3s ease}.uvalib-button-tertiary{background-color:#f1f1f1;border:1px solid grey;color:#000}.uvalib-button-tertiary:hover{background-color:#dadada}.uvalib-button-primary,.uvalib-button-small,.uvalib-button-tertiary{margin:0 0 5px 10px;border-radius:5px;font-weight:400}.uvalib-button-primary:focus,.uvalib-button-small:focus,.uvalib-button-tertiary:focus{outline:0;box-shadow:0 0 0 .2rem var(--uvalib-accessibility-highlight,#0370b7)}.uvalib-button.disabled{@pure-button .disabled\n   cursor: default;opacity:.25}";

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
        ${css_248z}
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
        console.log("mode changed to "+this.mode);
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
  }
}

window.customElements.define('uvalib-button', UvalibButton);
