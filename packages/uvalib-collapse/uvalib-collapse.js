class UvalibCollapse extends HTMLElement {
  static get observedAttributes() {
    return ['opened'];
  }
  get opened() {return !!(this._opened);}
  set opened(newOpened) {
    this._opened = !!(newOpened);
    this._eval().then(function(){
      this.dispatchEvent(new CustomEvent('transitioning-changed', {bubbles: true, composed: true, detail: {opened: this._opened}}));
    }.bind(this));
    this.dispatchEvent(new CustomEvent('opened-changed', {bubbles: true, composed: true, detail: {opened: this._opened}}));
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch(name){
      case "opened":
        if (oldValue != newValue) { this.opened = (newValue===null)? false:true; }
        break;
    }
  }

  constructor() {
    // Always call super first in constructor
    super();
    this.opened = false;    
  }

  connectedCallback() {
    this._eval(false);
    this._setupDom();
  }

  _setupDom(){
    // setup a shadowDOM
    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
          overflow: hidden;
        }
      </style>
      <slot></slot>
    `;
    this.sl = this.shadow.querySelector('slot');
    this.sl.addEventListener('slotchange', function(e) {
      this._eval(false);
    }.bind(this))
  }

  _eval(ani=true){
    var p = Promise.resolve();
    if(ani) {
      var h = this.scrollHeight;
      p = this._animate(h,(!this.opened));
    } else {
      this.style.height = (this.opened)? "auto":"0px";
    }
    return p;
  }
  _animate(h,reverse=false){
    this.transitioning = true;
    var animate = this.animate((reverse)?{height:[h+'px',0]}:{height:[0,h+'px']},{easing:'ease-in-out', duration:h*1.5, fill:"forwards"});
    return animate.finished.then(function(){
        this.style.height = (reverse)?"0":"auto";
        animate.cancel();
        this.transitioning = false;
    }.bind(this));
  }
  toggle(){
    this.opened = !this.opened;
    if (this.opened) {
      this.sl.setAttribute('tabindex',"0");
      this.setAttribute('opened',"");
    } else { 
      this.sl.setAttribute('tabindex',"-1");
      this.removeAttribute('opened');
    }
  }
}

window.customElements.define('uvalib-collapse', UvalibCollapse);
