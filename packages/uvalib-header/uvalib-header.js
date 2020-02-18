import {html} from '@polymer/polymer/polymer-element.js';
import {UvalibUiBase} from '@uvalib/uvalib-ui-base/uvalib-ui-base.js';
import '@uvalib/uvalib-theme/uvalib-icons.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js';
import '@polymer/iron-meta/iron-meta.js';
import '@uvalib/uvalib-logos/uvalib-logos.js';
import '@polymer/paper-badge/paper-badge.js';
import '@polymer/paper-button/paper-button.js';
import '@uvalib/uvalib-alerts/uvalib-alerts.js';
import '@uvalib/uvalib-search-box/uvalib-search-box';
import '@polymer/paper-dialog/paper-dialog';

/**
 * `uvalib-header`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UvalibHeader extends UvalibUiBase {
  static get is() { return 'uvalib-header'; }
  static get template() {
    return html`
      <div>${super.template}</div>
      <custom-style>
        <style include="uvalib-theme iron-flex iron-flex-alignment iron-flex-factors">

          [hide] paper-badge { opacity: 0; }
          [hide] iron-icon { opacity: .5; }
          :host([simple]) #top #menu { display: inline-block; }
          :host([simple][small-screen]) #spacer { display: none; }
          :host([simple][small-screen]) #top > div { display: block; }
          :host {
            display: block;
            position: relative;
            margin: 0;
            z-index: 1000;
            transition: height 1s ease;
          }
          :host([demo]) {
            z-index: 0;
          }
          :host([large-screen]) #bottom #menu { background-color: var(--uvalib-header-nav-background-color, var(--color-secondary-blue)); }

          /*full header*/
          :host uvalib-logos { max-width: 400px; }
          /*simple header*/
          :host([simple]) uvalib-logos { height: 40px; padding: 0 0 0 10px; }
          /*mobile header*/
          :host([small-screen]) uvalib-logos { height: 45px; padding-top: 0px; padding-left: 0px; }
          /*simple header - mobile*/
          :host([simple][small-screen]) uvalib-logos { height: 38px; padding-top: 5px; }

          app-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            color: var(--color-white);
            background-color: var(--uvalib-header-background-color, var(--color-primary-color));
          }

          :host([demo]) app-header {
            position: relative;
          }

          #top, #bottom #menu {
            @apply --layout-horizontal;
            @apply --layout-center-justified;
            background-color: var(--uvalib-header-background-color, var(--color-primary-color));
          }
          #bottom nav { width: 100%; }
          /*#top > div,*/ #bottom nav { max-width: var(--uvalib-display-width-max); @apply --layout-horizontal; }
          #top #search, #top #menu { @apply --layout-flex; text-align: right; }
          #menuButton { margin-right: var(--uvalib-spacing-unit); }
          #top { padding-top: var(--uvalib-spacing-unit); padding-bottom: var(--uvalib-spacing-unit); width: 100%; }
          :host([simple][small-screen]) #top { padding-top: 0; padding-bottom: 0; }
          :host([medium-screen]) #top { padding-left: var(--uvalib-spacing-unit); padding-right: var(--uvalib-spacing-unit); }

          #search, #menu { padding-right: var(--uvalib-spacing-unit); }
          :host([large-screen]) #search { min-width: 550px; }

          :host([small-screen]) #logo { padding-left: .1em; }
          :host([medium-screen]) #logo { padding-left: 0; }
          #logo { padding-left: var(--uvalib-spacing-unit); }

          :host([medium-screen]) #search, :host([medium-screen]) .largeScreen { display:none }
          :host([small-screen]) #search, :host([small-screen]) .largeScreen { display:none; }
          :host([large-screen]) .visibleMobile, :host([medium-screen]) .visibleMobile { display: none; }

          a, a:link, a:visited { color: inherit; }

          nav { min-height: calc(var(--uvalib-spacing-unit)*2.5); }
          nav ul { list-style-type: none; margin: 0; padding: 0; }
          nav li { display: inline-block; color: var(--color-white); }
          nav a { padding: calc(var(--uvalib-spacing-unit)*0.625); }

          #bottom nav {
            @apply --layout-horizontal;
            @apply --layout-center;
            @apply --layout-justified;
          }
          :host([large-screen]) #bottom nav { @apply --layout-end-justified; }

          #bottom li a iron-icon { display: inline-block; height: calc(var(--uvalib-main-font-size-unit)*1.875);}

          uvalib-search-box { color: var(--color-white);  }

          paper-button { color: var(--color-white); }

          #menuDialog {
            position: fixed;
            margin: 0;
            top:0;
            width: 100%;
            height: 100vh;
            overflow: auto;
            background-color: var(--uvalib-header-background-color, var(--color-primary-color));
          }

          :host([small-screen]) #menuDialogSearch {
            background-color: var(--uvalib-blue-600);
            padding: calc(var(--uvalib-spacing-unit)/2);
            margin-top: var(--uvalib-spacing-unit);
            margin-bottom: var(--uvalib-spacing-unit);
            margin-left: -.5em;
            margin-right: -.5em;
          }

          #menuContainer {
            height: 100%;
            @apply --layout-vertical;
            padding-left: calc(var(--uvalib-spacing-unit)/2);
            padding-right: calc(var(--uvalib-spacing-unit)/2);
          }
          :host([small-screen]) #menuContainer nav li {
            display: block;
            font-size: 130%;
            padding-left: 1.5em;
            padding-bottom: calc(var(--uvalib-spacing-unit)/2);
          }

          /* 11-1-18 */

          .spacer { @apply --layout-flex; }

          #menuButton paper-button {
            min-width: calc(var(--uvalib-spacing-unit)*4);
            border: 1px solid var(--color-white);
            padding-top: .35em;
            padding-bottom: calc(var(--uvalib-spacing-unit)/4);
            margin-right: .75em;
            margin-top: .3em;
          }

          /*Used on Tablet & Mobile*/
          #menuButton.menuLarge paper-button::after {
            font-family: uvalib-custom-icons;
            content: "\f002";
            padding-left: calc(var(--uvalib-spacing-unit)/2);
          }

          #simple-menu { float: right; }
          :host([simple][small-screen]) #simple-menu { float: left; padding-left: var(--uvalib-spacing-unit); }

          /* ALERTS */
          #alert paper-badge, #alertSmall paper-badge {
            --paper-badge-background: var(--color-primary-orange);
            --paper-badge-margin-left: -1.65em;
            --paper-badge-margin-bottom: -0.2em;
          }

          /* disable link if no alerts available */
          a#alert, a#alertSmall { opacity: .5; }
          a#alert[href], a#alertSmall[href] { opacity: 1; }
          a#alert paper-badge, a#alertSmall paper-badge { display:none; }
          a#alert[href] paper-badge, a#alertSmall[href] paper-badge { display: inline-block; }
        </style>
      </custom-style>
      <!--mobile header-->
      <div hidden$="[[!_dialogMenu]]">
        <paper-dialog id="menuDialog" with-backdrop>
          <div id="menuContainer">
            <div id="menuTop" class="layout horizontal justified">
              <a href="[[libraryHomeLink]]"><uvalib-logos simple$="[[simple]]"></uvalib-logos></a>
              <div id="menuButton">
                <paper-button dialog-dismiss aria-label="close menu">Close&nbsp;X</paper-button>
              </div>
            </div>
            <uvalib-search-box relative-links$="[[relativeLinks]]" id="menuDialogSearch" small-screen$="[[smallScreen]]" medium-screen$="[[mediumScreen]]" large-screen$="[[largeScreen]]"></uvalib-search-box>

            <div id="menuDialogNav">
              <nav class="horizontal layout wrap">
                <ul class="vertical layout">
                  <li>
                    <a id="menuDialogFirstItem" href="[[_domain]]/about-uva-library">About</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/research">Research</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/collections">Collections</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/services">Services</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/hours"><iron-icon icon="clock-o"></iron-icon> Hours</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/askalibrarian"><iron-icon icon="comments"></iron-icon> Ask a Librarian</a>
                  </li>
                  <li>
                    <a href="https://search.lib.virginia.edu/account"><iron-icon icon="user"></iron-icon> Account</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </paper-dialog>
      </div>
      <!--default header-->
      <app-header id="header" condenses reveals$="[[!demo]]" fixed$="[[!demo]]" effects="waterfall" role="banner">
        <div id="top">
          <div id="logo" class="flex-2">
            <a href="[[libraryHomeLink]]"><uvalib-logos tabindex="-1" stacked$="[[_and(largeScreen,full)]]" simple$="[[simple]]"></uvalib-logos></a>
          </div>
          <div hidden$="[[_or(simple, largeScreen)]]" id="menuButton" class="menuLarge">
            <paper-button aria-label="open menu" icon="search" reverse outline on-tap="openMenu">Menu</paper-button>
          </div>
          <uvalib-search-box class="flex-4" hidden$="[[simple]]" relative-links$="[[relativeLinks]]" id="search" small-screen$="[[smallScreen]]" medium-screen$="[[mediumScreen]]" large-screen$="[[largeScreen]]"></uvalib-search-box>
          <div id="simple-menu" hidden$="[[full]]">
            <nav>
              <ul>
                <li>
                  <a href="//library.virginia.edu/askalibrarian"><iron-icon  class="largeScreen" icon="comments"></iron-icon> Ask a Librarian</a>
                </li>
                <li>
                  <div style="position: relative; display: inline-block">
                    <a href$="[[_alertLink(_alertSeenCount)]]" id="alertSmall" on-click="viewAllAlerts" aria-label="Alerts">
                      <iron-icon icon="bell" alt="Library Alerts"></iron-icon>
                      <paper-badge id="alertBadgeSmall" for="alertSmall" label="[[_alertSeenCount]]"></paper-badge>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!--hidden with simple header-->
        <div id="bottom" sticky hidden$="[[simple]]">
          <div id="menu">
            <nav>
              <ul>
                <li>
                  <a class="largeScreen" id="menuFirstItem" href="[[_domain]]/about-uva-library">About</a>
                </li>
                <li>
                  <a class="largeScreen" href="[[_domain]]/research">Research</a>
                </li>
                <li>
                  <a class="largeScreen" href="[[_domain]]/collections">Collections</a>
                </li>
                <li>
                  <a class="largeScreen" href="[[_domain]]/services">Services</a>
                </li>
                <li>
                  <a id="menuNotLargeScreenFirstItem" href="[[_domain]]/hours"><iron-icon class="largeScreen" icon="clock-o"></iron-icon> Hours</a>
                </li>
                <li>
                  <a href="[[_domain]]/askalibrarian"><iron-icon class="largeScreen" icon="comments"></iron-icon> Ask a Librarian</a>
                </li>
                <li>
                  <a href="https://search.lib.virginia.edu/account"><iron-icon class="largeScreen" icon="user"></iron-icon> Account</a>
                </li>
                <li>
                  <div style="position: relative; display: inline-block">
                    <a href$="[[_alertLink(_alertSeenCount)]]" id="alert" on-click="viewAllAlerts" aria-label="Alerts">
                      <iron-icon icon="bell" alt="Library Alerts"></iron-icon>
                      <paper-badge hidden$="[[!_alertSeenCount]]" id="alertBadge" for="alert" label="[[_alertSeenCount]]"></paper-badge>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <uvalib-alerts tabindex="-1" id="alerts" seen-count="{{_alertSeenCount}}" on-size-changed="_delayedAdjustHeight"></uvalib-alerts>
      </app-header>
      <iron-meta key="uvalib-header-height" value="{{_height}}"></iron-meta>
      <app-localstorage-document key="uvalib-header-height" data="{{_height}}" session-only></app-localstorage-document>
    </template>
    `;
  }
  static get properties() {
    return {
      /** Set this if you want to overwrite the default (just take the default unless used on the Library App) **/
      libraryHomeLink: {
        type: String,
        value: "https://www.library.virginia.edu"
      },
      full: {
        type: Boolean,
        computed: '_not(simple)',
        notify: true
      },
      simple: {
        type: Boolean,
        value: false,
        observer: '_simpleChange',
        reflectToAttribute: true,
        notify: true
      },
      demo: {
        type: Boolean,
        value: false
      },
      /** Tracks the header components height **/
      _height: {
        type: String,
        notify: true
      },
      _dialogMenu: {
        type: Boolean,
        computed: "_isDialogMenu(simple,largeScreen)"
      }
    };
  }
  static get observers() {
    return [
      '_adjustHeight(smallScreen, mediumScreen, largeScreen)'
    ]
  }
  _alertLink(alertSeenCount) {
    if (alertSeenCount>0) return "#link";
    else return null;
  }
  connectedCallback() {
    super.connectedCallback();
    this._adjustHeight();

    if (!this.simple)
//      this.importLazyGroup('uvalib-header--full').then(function(results){
        this._adjustHeight();
//        this._loadExtraLazyItems();
//      }.bind(this) );
    else this._loadExtraLazyItems();

  }
  _loadExtraLazyItems(){
//    this.importLazyGroup('uvalib-header').then(function(results){
      this._adjustHeight();
//    }.bind(this));
  }
  _stackedLogo(largeScreen,full,smallScreen){
    return (largeScreen && full)? true:
                                  (smallScreen && !full);
  }
  _delayedAdjustHeight(){
    setTimeout(function(){ this._adjustHeight(); }.bind(this), 500);
  }
  _adjustHeight() {
    this._height=this.style.height=this.$.header.clientHeight+"px";
    this.shadowRoot.querySelector('app-header').notifyResize();
  }
  /** Opens the menu dialog (only do this in a smaller screen context) **/
  openMenu(){
    this.shadowRoot.querySelector('#menuDialog').open();
  }
  /** Closes the menu dialog **/
  closeMenu(){
    var menu = this.shadowRoot.querySelector('#menuDialog');
    if (menu) menu.close();
  }

  viewAllAlerts(e){
    e.preventDefault();
    this.$.alerts.unseeAll();
  }

  changeFocusToSearch() {
    if (this.largeScreen) {
      this.$.search.changeFocusToCatalogAdvanced();
    } else {
      this.openMenu();
      this.$.menuDialogSearch.changeFocusToCatalogAdvanced();
    }
  }
  changeFocusToNavigation() {
    if (this.largeScreen) {
      this.shadowRoot.querySelector('#menuFirstItem').focus();
    } else {
      this.openMenu();
      this.shadowRoot.querySelector('#menuDialogFirstItem').focus();
    }
  }
  changeFocusToFirstItem() {
    this.$.logo.querySelector('a').focus();
  }

  _simpleChange() {
//    if (!this.simple) this.importLazyGroup('uvalib-header--full');
    this._delayedAdjustHeight();
  }
  _isDialogMenu(simple,largeScreen) {
    var dialogNeeded = (simple==false && largeScreen==false);
//    if (dialogNeeded) this.importLazyGroup('uvalib-header--dialog');
    return dialogNeeded;
  }
}

window.customElements.define(UvalibHeader.is, UvalibHeader);
