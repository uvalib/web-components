(function () {
  var link = document.createElement('link');
  link.rel = "stylesheet";
  link.href = "https://use.fontawesome.com/releases/v5.14.0/css/all.css";
  document.head.appendChild(link);
})();

var css_248z = ".fa,.fab,.facebook-square,.fad,.fal,.far,.fas,.instagram,.twitter-square{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.fas.fa-pull-left{margin-right:.3em}.fas.fa-pull-right{margin-left:.3em}.fa,.far,.fas{font-family:Font Awesome\\ 5 Free}.fa,.fas{font-weight:900}.fab,.facebook-square,.instagram,.twitter-square{font-family:Font Awesome\\ 5 Brands}.fab,.facebook-square,.far,.instagram,.twitter-square{font-weight:400}.instagram:before{content:\"\\f16d\"}.facebook-square:before{content:\"\\f082\"}.twitter-square:before{content:\"\\f081\"}\n/*!\nPure v2.0.3\nCopyright 2013 Yahoo!\nLicensed under the BSD License.\nhttps://github.com/pure-css/pure/blob/master/LICENSE.md\n*/.pure-button,.uvalib-button{display:inline-block;line-height:normal;white-space:nowrap;vertical-align:middle;text-align:center;cursor:pointer;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box}.pure-button::-moz-focus-inner,.uvalib-button::-moz-focus-inner{padding:0;border:0}.pure-button-group{letter-spacing:-.31em;text-rendering:optimizespeed}.opera-only :-o-prefocus,.pure-button-group{word-spacing:-.43em}.pure-button-group .pure-button,.pure-button-group .uvalib-button{letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-button,.uvalib-button{font-family:inherit;font-size:100%;padding:.5em 1em;color:rgba(0,0,0,.8);border:transparent;background-color:#e6e6e6;text-decoration:none;border-radius:2px}.pure-button-hover,.pure-button:focus,.pure-button:hover,.uvalib-button:focus,.uvalib-button:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(40%,rgba(0,0,0,.05)),to(rgba(0,0,0,.1)));background-image:linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))}.pure-button:focus,.uvalib-button:focus{outline:0}.pure-button-active,.pure-button:active,.uvalib-button:active{-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 0 6px rgba(0,0,0,.2) inset;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 6px rgba(0,0,0,.2);border-color:#000}.pure-button-disabled,.pure-button-disabled:active,.pure-button-disabled:focus,.pure-button-disabled:hover,.pure-button[disabled],.uvalib-button[disabled]{border:none;background-image:none;opacity:.4;cursor:not-allowed;-webkit-box-shadow:none;box-shadow:none;pointer-events:none}.pure-button-hidden{display:none}.pure-button-primary,.pure-button-selected,.uvalib-button-primary,a.pure-button-primary,a.pure-button-selected,a.uvalib-button-primary{background-color:#0078e7;color:#fff}.pure-button-group .pure-button,.pure-button-group .uvalib-button{margin:0;border-radius:0;border-right:1px solid rgba(0,0,0,.2)}.pure-button-group .pure-button:first-child,.pure-button-group .uvalib-button:first-child{border-top-left-radius:2px;border-bottom-left-radius:2px}.pure-button-group .pure-button:last-child,.pure-button-group .uvalib-button:last-child{border-top-right-radius:2px;border-bottom-right-radius:2px;border-right:none}button.text-button{border:none;background:none;padding:0;font-weight:500;color:#005679;cursor:pointer;display:inline-block}button.text-button:hover{opacity:1;text-decoration:underline}button.text-button:focus{outline:0;box-shadow:0 0 0 .2rem var(--uvalib-accessibility-highlight,#0370b7)}button.icon-button{border:none;background:none;padding:2px;margin:0;outline:none}button.icon-button:focus{outline:0;box-shadow:0 0 0 .2rem var(--uvalib-accessibility-highlight,#0370b7)}.link-button{border-radius:5px;font-weight:400;text-transform:uppercase;background-color:#e57200;color:#fff;border:none;padding:10px 12px}.link-button:hover{background-color:#dadada;color:#2b2b2b}.link-button:focus{outline:0;box-shadow:0 0 0 .2rem var(--uvalib-accessibility-highlight,#0370b7)}.uvalib-button{background-color:var(--uvalib-button-background-color)}.uvalib-button:hover{background-color:var(--uvalib-button-hover-background-color)}.uvalib-button-primary{background-color:var(--uvalib-button-background-color)}.uvalib-button-primary,.uvalib-button-small{background-color:var(--uvalib-button-background-color,#0370b7);border:1px solid #0370b7}.uvalib-button-primary:hover,.uvalib-button-small:hover{background-color:#3395d4;border:1px solid #3395d4;transition:all .3s ease}.uvalib-button-tertiary{background-color:var(--uvalib-button-background-color,#f1f1f1);border:1px solid grey;color:#000}.uvalib-button-tertiary:hover{background-color:var(--uvalib-button-hover-background-color,#dadada)}.uvalib-button-primary,.uvalib-button-small,.uvalib-button-tertiary{margin:0 0 5px 10px;border-radius:5px;font-weight:400}.uvalib-button-primary:focus,.uvalib-button-small:focus,.uvalib-button-tertiary:focus{outline:0;box-shadow:0 0 0 .2rem var(--uvalib-accessibility-highlight,#0370b7)}.uvalib-button.disabled{@pure-button .disabled\n   cursor: default;opacity:.25}:host{display:inline-block}";

(function () {

  if ('adoptedStyleSheets' in document) { return; }

  var hasShadyCss = 'ShadyCSS' in window && !window.ShadyCSS.nativeShadow;
  var deferredStyleSheets = [];
  var deferredDocumentStyleElements = [];
  var adoptedSheetsRegistry = new WeakMap();
  var sheetMetadataRegistry = new WeakMap();
  var locationRegistry = new WeakMap();
  var observerRegistry = new WeakMap();
  var appliedActionsCursorRegistry = new WeakMap();
  var state = {
    loaded: false
  };
  var frame = {
    body: null,
    CSSStyleSheet: null
  };
  var OldCSSStyleSheet = CSSStyleSheet;

  var importPattern = /@import\surl(.*?);/gi;
  function instanceOfStyleSheet(instance) {
    return instance instanceof OldCSSStyleSheet || instance instanceof frame.CSSStyleSheet;
  }
  function checkAndPrepare(sheets, container) {
    var locationType = container === document ? 'Document' : 'ShadowRoot';
    if (!Array.isArray(sheets)) {
      throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
    }
    if (!sheets.every(instanceOfStyleSheet)) {
      throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
    }
    var uniqueSheets = sheets.filter(function (value, index) {
      return sheets.indexOf(value) === index;
    });
    adoptedSheetsRegistry.set(container, uniqueSheets);
    return uniqueSheets;
  }
  function isDocumentLoading() {
    return document.readyState === 'loading';
  }
  function getAdoptedStyleSheet(location) {
    return adoptedSheetsRegistry.get(location.parentNode === document.documentElement ? document : location);
  }
  function rejectImports(contents) {
    var imports = contents.match(importPattern, '') || [];
    var sheetContent = contents;
    if (imports.length) {
      console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
      imports.forEach(function (_import) {
        sheetContent = sheetContent.replace(_import, '');
      });
    }
    return sheetContent;
  }

  var cssStyleSheetMethods = ['addImport', 'addPageRule', 'addRule', 'deleteRule', 'insertRule', 'removeImport', 'removeRule'];
  var cssStyleSheetNewMethods = ['replace', 'replaceSync'];
  function updatePrototype(proto) {
    cssStyleSheetNewMethods.forEach(function (methodKey) {
      proto[methodKey] = function () {
        return ConstructStyleSheet.prototype[methodKey].apply(this, arguments);
      };
    });
    cssStyleSheetMethods.forEach(function (methodKey) {
      var oldMethod = proto[methodKey];
      proto[methodKey] = function () {
        var args = arguments;
        var result = oldMethod.apply(this, args);
        if (sheetMetadataRegistry.has(this)) {
          var _sheetMetadataRegistr = sheetMetadataRegistry.get(this),
              adopters = _sheetMetadataRegistr.adopters,
              actions = _sheetMetadataRegistr.actions;
          adopters.forEach(function (styleElement) {
            if (styleElement.sheet) {
              styleElement.sheet[methodKey].apply(styleElement.sheet, args);
            }
          });
          actions.push([methodKey, args]);
        }
        return result;
      };
    });
  }
  function updateAdopters(sheet) {
    var _sheetMetadataRegistr2 = sheetMetadataRegistry.get(sheet),
        adopters = _sheetMetadataRegistr2.adopters,
        basicStyleElement = _sheetMetadataRegistr2.basicStyleElement;
    adopters.forEach(function (styleElement) {
      styleElement.innerHTML = basicStyleElement.innerHTML;
    });
  }
  var ConstructStyleSheet =
  function () {
    function ConstructStyleSheet() {
      var basicStyleElement = document.createElement('style');
      if (state.loaded) {
        frame.body.appendChild(basicStyleElement);
      } else {
        document.head.appendChild(basicStyleElement);
        basicStyleElement.disabled = true;
        deferredStyleSheets.push(basicStyleElement);
      }
      var nativeStyleSheet = basicStyleElement.sheet;
      sheetMetadataRegistry.set(nativeStyleSheet, {
        adopters: new Map(),
        actions: [],
        basicStyleElement: basicStyleElement
      });
      return nativeStyleSheet;
    }
    var _proto = ConstructStyleSheet.prototype;
    _proto.replace = function replace(contents) {
      var _this = this;
      var sanitized = rejectImports(contents);
      return new Promise(function (resolve, reject) {
        if (sheetMetadataRegistry.has(_this)) {
          var _sheetMetadataRegistr3 = sheetMetadataRegistry.get(_this),
              basicStyleElement = _sheetMetadataRegistr3.basicStyleElement;
          basicStyleElement.innerHTML = sanitized;
          resolve(basicStyleElement.sheet);
          updateAdopters(_this);
        } else {
          reject(new Error("Can't call replace on non-constructed CSSStyleSheets."));
        }
      });
    };
    _proto.replaceSync = function replaceSync(contents) {
      var sanitized = rejectImports(contents);
      if (sheetMetadataRegistry.has(this)) {
        var _sheetMetadataRegistr4 = sheetMetadataRegistry.get(this),
            basicStyleElement = _sheetMetadataRegistr4.basicStyleElement;
        basicStyleElement.innerHTML = sanitized;
        updateAdopters(this);
        return basicStyleElement.sheet;
      } else {
        throw new Error("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
      }
    };
    return ConstructStyleSheet;
  }();
  Object.defineProperty(ConstructStyleSheet, Symbol.hasInstance, {
    configurable: true,
    value: instanceOfStyleSheet
  });

  function adoptStyleSheets(location) {
    var newStyles = document.createDocumentFragment();
    var sheets = getAdoptedStyleSheet(location);
    var observer = observerRegistry.get(location);
    for (var i = 0, len = sheets.length; i < len; i++) {
      var _sheetMetadataRegistr = sheetMetadataRegistry.get(sheets[i]),
          adopters = _sheetMetadataRegistr.adopters,
          basicStyleElement = _sheetMetadataRegistr.basicStyleElement;
      var elementToAdopt = adopters.get(location);
      if (elementToAdopt) {
        observer.disconnect();
        newStyles.appendChild(elementToAdopt);
        if (!elementToAdopt.innerHTML || elementToAdopt.sheet && !elementToAdopt.sheet.cssText) {
          elementToAdopt.innerHTML = basicStyleElement.innerHTML;
        }
        observer.observe();
      } else {
        elementToAdopt = document.createElement('style');
        elementToAdopt.innerHTML = basicStyleElement.innerHTML;
        locationRegistry.set(elementToAdopt, location);
        appliedActionsCursorRegistry.set(elementToAdopt, 0);
        adopters.set(location, elementToAdopt);
        newStyles.appendChild(elementToAdopt);
      }
      if (location === document.head) {
        deferredDocumentStyleElements.push(elementToAdopt);
      }
    }
    location.insertBefore(newStyles, location.firstChild);
    for (var _i = 0, _len = sheets.length; _i < _len; _i++) {
      var _sheetMetadataRegistr2 = sheetMetadataRegistry.get(sheets[_i]),
          _adopters = _sheetMetadataRegistr2.adopters,
          actions = _sheetMetadataRegistr2.actions;
      var adoptedStyleElement = _adopters.get(location);
      var cursor = appliedActionsCursorRegistry.get(adoptedStyleElement);
      if (actions.length > 0) {
        for (var _i2 = cursor, _len2 = actions.length; _i2 < _len2; _i2++) {
          var _actions$_i = actions[_i2],
              key = _actions$_i[0],
              args = _actions$_i[1];
          adoptedStyleElement.sheet[key].apply(adoptedStyleElement.sheet, args);
        }
        appliedActionsCursorRegistry.set(adoptedStyleElement, actions.length - 1);
      }
    }
  }
  function removeExcludedStyleSheets(location, oldSheets) {
    var sheets = getAdoptedStyleSheet(location);
    for (var i = 0, len = oldSheets.length; i < len; i++) {
      if (sheets.indexOf(oldSheets[i]) > -1) {
        continue;
      }
      var _sheetMetadataRegistr3 = sheetMetadataRegistry.get(oldSheets[i]),
          adopters = _sheetMetadataRegistr3.adopters;
      var observer = observerRegistry.get(location);
      var styleElement = adopters.get(location);
      if (!styleElement) {
        styleElement = adopters.get(document.head);
      }
      observer.disconnect();
      styleElement.parentNode.removeChild(styleElement);
      observer.observe();
    }
  }

  function adoptAndRestoreStylesOnMutationCallback(mutations) {
    for (var i = 0, len = mutations.length; i < len; i++) {
      var _mutations$i = mutations[i],
          addedNodes = _mutations$i.addedNodes,
          removedNodes = _mutations$i.removedNodes;
      for (var _i = 0, _len = removedNodes.length; _i < _len; _i++) {
        var location = locationRegistry.get(removedNodes[_i]);
        if (location) {
          adoptStyleSheets(location);
        }
      }
      if (!hasShadyCss) {
        for (var _i2 = 0, _len2 = addedNodes.length; _i2 < _len2; _i2++) {
          var iter = document.createNodeIterator(addedNodes[_i2], NodeFilter.SHOW_ELEMENT, function (node) {
            return node.shadowRoot && node.shadowRoot.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          },
          null, false);
          var node = void 0;
          while (node = iter.nextNode()) {
            adoptStyleSheets(node.shadowRoot);
          }
        }
      }
    }
  }
  function createObserver(location) {
    var observer = new MutationObserver(adoptAndRestoreStylesOnMutationCallback);
    var observerTool = {
      observe: function observe() {
        observer.observe(location, {
          childList: true,
          subtree: true
        });
      },
      disconnect: function disconnect() {
        observer.disconnect();
      }
    };
    observerRegistry.set(location, observerTool);
    observerTool.observe();
  }

  function initPolyfill() {
    var iframe = document.createElement('iframe');
    iframe.hidden = true;
    document.body.appendChild(iframe);
    frame.body = iframe.contentWindow.document.body;
    frame.CSSStyleSheet = iframe.contentWindow.CSSStyleSheet;
    updatePrototype(iframe.contentWindow.CSSStyleSheet.prototype);
    createObserver(document.body);
    state.loaded = true;
    var fragment = document.createDocumentFragment();
    for (var i = 0, len = deferredStyleSheets.length; i < len; i++) {
      deferredStyleSheets[i].disabled = false;
      fragment.appendChild(deferredStyleSheets[i]);
    }
    frame.body.appendChild(fragment);
    for (var _i = 0, _len = deferredDocumentStyleElements.length; _i < _len; _i++) {
      fragment.appendChild(deferredDocumentStyleElements[_i]);
    }
    document.body.insertBefore(fragment, document.body.firstChild);
    deferredStyleSheets.length = 0;
    deferredDocumentStyleElements.length = 0;
  }
  function initAdoptedStyleSheets() {
    var adoptedStyleSheetAccessors = {
      configurable: true,
      get: function get() {
        return adoptedSheetsRegistry.get(this) || [];
      },
      set: function set(sheets) {
        var oldSheets = adoptedSheetsRegistry.get(this) || [];
        checkAndPrepare(sheets, this);
        var location = this === document ?
        isDocumentLoading() ? this.head : this.body : this;
        var isConnected = 'isConnected' in location ? location.isConnected : document.body.contains(location);
        window.requestAnimationFrame(function () {
          if (isConnected) {
            adoptStyleSheets(location);
            removeExcludedStyleSheets(location, oldSheets);
          }
        });
      }
    };
    Object.defineProperty(Document.prototype, 'adoptedStyleSheets', adoptedStyleSheetAccessors);
    if (typeof ShadowRoot !== 'undefined') {
      var attachShadow = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function () {
        var location = hasShadyCss ? this : attachShadow.apply(this, arguments);
        createObserver(location);
        return location;
      };
      Object.defineProperty(ShadowRoot.prototype, 'adoptedStyleSheets', adoptedStyleSheetAccessors);
    }
  }

  updatePrototype(OldCSSStyleSheet.prototype);
  window.CSSStyleSheet = ConstructStyleSheet;
  initAdoptedStyleSheets();
  if (isDocumentLoading()) {
    document.addEventListener('DOMContentLoaded', initPolyfill);
  } else {
    initPolyfill();
  }

}());

// setup constructed style sheet
const uvalibButtonStyles = new CSSStyleSheet();
uvalibButtonStyles.replace(css_248z);
document.adoptedStyleSheets = [uvalibButtonStyles];

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
      this.mode = "link";
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
      <button class="${this._makeClass()}"><i hidden></i><slot><slot></button>
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
