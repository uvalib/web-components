import '@polymer/polymer/polymer-legacy.js';
import './color.js';
import './fonts.js';
import './properties.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`
<dom-module id="uvalib-theme">
  <template>
    <style>
    /*********************************************/
    /*          STRUCTURAL ELEMENTS              */
    /*********************************************/

    :host,
    body {
      @apply --font-body1;

      --accessibility-outline-for-light-bg: {
        outline: var(--color-accessibility-outline-light-bg) dotted 3px;
        padding: .15em;
      }

      ;

      --accessibility-outline-for-dark-bg: {
        outline: var(--color-accessibility-outline-dark-bg) dotted 3px;
        padding: .15em;
      }

      ;
    }

    /* easy way to hide/show elements by setting the hidden attribute */
    [hidden] {
      display: none !important;
    }

    /* Only display on Mobile */
    :host([small-screen]) .largeScreen,
    :host([medium-screen]) .largeScreen {
      display: none;
    }

    /* Only display on Large Screen */
    :host([large-screen]) .visibleMobile,
    :host([medium-screen]) .visibleMobile {
      display: none;
    }

    /* Display on Tablet and Desktop only */
    :host([small-screen]) .visibleAllButMobile {
      display: none;
    }

    article>#content {
      padding-left: var(--uvalib-spacing-unit);
      padding-right: var(--uvalib-spacing-unit);
      margin-bottom: 4em;
    }

    :host([small-screen]) article>#content {
      margin-bottom: 0;
    }

    h1, .h1 {
      @apply --h1;
    }

    h2, .h2 {
      @apply --h2;
      margin-bottom: calc(var(--uvalib-spacing-unit)/8);
    }

    h3, .h3 {
      @apply --h3;
    }

    h4, .h4 {
      @apply --h4;
    }

    h5, .h5 {
      @apply --h5;
    }

    h6, .h6 {
      @apply --h6;
    }

    .paragraph {
      @apply --font-body1;
    }

    /* p { line-height: 1.75; }needs further conditions */

    .all-cap {
      text-transform: uppercase;
    }

    strong {
      font-family: 'franklin-gothic-urw', 'arial', sans-serif;
      font-weight: 700;
    }

    blockquote {
      margin: 20px 0;
      text-transform: none;
      font-style: italic;
      line-height: 1.25;
    }

    blockquote p {
      font-size: calc(var(--uvalib-main-font-size-unit)*1.15);
    }

    blockquote footer {
      text-align: right;
      font-size: calc(var(--uvalib-main-font-size-unit)/1.12);
    }

    ul,
    ol {
      font-family: var(--font-primary);
      font-weight: var(--font-weight-regular);
      line-height: 30px;
      margin: 15px 0px;
      color: var(--color-text-gray);
    }

    article ul li {
      list-style-type: disc;
      line-height: normal;
      padding-bottom: .5em;
    }
    article ul.simple li {
      list-style-type: none;
    }
    article ul.simple li > ul li {
      list-style-type: inherit;
    }

    article ul li li {
      list-style-type: circle;
      line-height: normal;
      padding-bottom: .5em;
    }

    iframe {
      width: 100%;
      height: 100%;
      min-height: 500px;
    }

    a:hover {
      text-decoration: none;
    }

    #menu a {
      text-decoration: none;
    }

    #menu a:hover {
      text-decoration: underline;
    }

    /*END*/

    /* IMAGES */
    [data-align="left"],
    figure.align-left {
      float: left;
    }

    [data-align="center"],
    figure.align-center {
      margin: 0 auto;
    }

    [data-align="right"],
    figure.align-right {
      float: right;
    }

    figure>img {
      max-width: 100%;
    }

    figure {
      display: table;
    }

    figcaption {
      padding: .5em;
      margin-top: -.5em;
      background-color: var(--uvalib-captions-bg);
      display: table-caption;
      caption-side: bottom;
    }

    /* img responsive for all */
    img {
      max-width: 100%;
      height: auto;
    }

    /* deprecated class */
    .img-responsive {
      max-width: 100%;
      height: auto;
    }

    .noBG {
      background-color: inherit;
    }

    :host([small-screen]) article>#content img {
      float: none;
      padding: inherit;
    }

    /*END*/

    /*USEFUL TWEAKS & CLASSES (for when you need a little extra) */
    .shady {
      margin: var(--uvalib-spacing-unit) -1000px var(--uvalib-spacing-unit) -1000px;
      padding: calc(var(--uvalib-spacing-unit)*2) 1000px calc(var(--uvalib-spacing-unit)*2) 1000px;
      background-color: var(--color-light-gray);
    }

    .full-width {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
    }

    iron-image.round {
      border-radius: 50%;
      width: 300px;
      height: 300px;
      --iron-image-width: 300px;
    }

    iron-image.roundSmall {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      --iron-image-width: 150px;
    }

    iron-image.rectangle {
      width: 300px;
      --iron-image-width: 300px;
    }

    .bigFirstLetter:first-letter {
      @apply --uva-font-decorative;
      float: left;
      font-size: calc(var(--uvalib-main-font-size-unit)*5.8);
      line-height: calc(var(--uvalib-spacing-unit)*0.9);
      padding-right: calc(var(--uvalib-spacing-unit)*0.2);
      color: var(--color-primary-orange);
    }
    .dropCap:first-letter {
      @apply --uva-font-decorative;
      float: left;
      font-size: calc(var(--uvalib-main-font-size-unit)*5.8);
      line-height: calc(var(--uvalib-spacing-unit)*0.9);
      padding-right: calc(var(--uvalib-spacing-unit)*0.2);
      color: var(--color-primary-orange);
    }

    .takeNoticeColor,
    .uvalib-alert-text {
      color: var(--uvalib-secondary-emergency-red);
    }

    .takeNoticeSize {
      font-size: calc(var(--uvalib-main-font-size-unit)*1.5);
    }

    .text-center {
      text-align: center;
    }

    .text-right {
      text-align: right;
    }

    .uva-padding {
      padding: var(--uvalib-spacing-unit);
    }

    .uva-padding-left {
      padding-left: var(--uvalib-spacing-unit);
    }

    .uva-padding-right {
      padding-right: var(--uvalib-spacing-unit);
    }

    .uva-padding-left-right {
      padding-left: var(--uvalib-spacing-unit);
      padding-right: var(--uvalib-spacing-unit);
    }

    .uva-padding-top {
      padding-top: var(--uvalib-spacing-unit);
    }

    .uva-padding-bottom {
      padding-bottom: var(--uvalib-spacing-unit);
    }

    .uva-padding-top-bottom {
      padding-top: var(--uvalib-spacing-unit);
      padding-bottom: var(--uvalib-spacing-unit);
    }

    .uva-margin {
      margin: var(--uvalib-spacing-unit);
    }

    .uva-margin-left {
      margin-left: var(--uvalib-spacing-unit);
    }

    .uva-margin-right {
      margin-right: var(--uvalib-spacing-unit);
    }

    .uva-margin-left-right {
      margin-left: var(--uvalib-spacing-unit);
      margin-right: var(--uvalib-spacing-unit);
    }

    .uva-margin-top {
      margin-top: var(--uvalib-spacing-unit);
    }

    .uva-margin-bottom {
      margin-bottom: var(--uvalib-spacing-unit);
    }

    .uva-margin-top-bottom {
      margin-top: var(--uvalib-spacing-unit);
      margin-bottom: var(--uvalib-spacing-unit);
    }

    .uva-margin-top-none {
      margin-top: 0;
    }

    .uva-margin-bottom-none {
      margin-bottom: 0;
    }

    .uva-clear-margin { margin: 0; }
    .uva-clear-padding { padding: 0; }

    /*END*/

    /* GRID */
    .grid-main,
    .grid-container,
    .grid-one-third-right,
    .grid-three-cols {
      display: grid;
      grid-template-columns: 1fr;
      font-size: 18px;
      margin-bottom: 2rem;
    }

    .grid-container {
      grid-gap: 1rem;
    }

    :host([medium-screen]) .grid-three-cols {
      grid-template-columns: 1fr 1fr;
    }

    :host([large-screen]) .grid-three-cols {
      grid-template-columns: 1fr 1fr 1fr;
    }

    :host([large-screen]) .grid-one-third-right {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 2fr 1.5fr;
    }

    :host([large-screen]) .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
      grid-gap: 1rem;
    }

    /* END */

    /* BUTTONS */
    /* phase out use of paper button 09-2019 */
    paper-button {
      border: 1px solid var(--uvalib-secondary-md-grey);
      border-radius: 5px;

      --paper-button-flat-keyboard-focus: {
        @apply --accessibility-outline-for-dark-bg;
      }
    }

    /* Start using this class on anchor links for buttons 09-2019 */
    a.uvalib-btn,
    a.uvalib-btn:link,
    a.uvalib-btn:visited,
    a.uvalib-btn:hover,
    a.uvalib-btn:active {
      padding: calc(var(--uvalib-spacing-unit)/2);
      text-decoration: none;
      background-color: var(--alt-button-color, var(--uvalib-main-rotunda-orange));
      color: var(--alt-button-text-color, #fff);
      text-transform: uppercase;
      border-radius: 5px;
    }

    a.uvalib-btn:hover {
      text-decoration: underline;
    }

    .uvalib-btn-margin {
      margin: var(--uvalib-spacing-unit) !important;
    }

    .uvalib-btn-white {
      --alt-button-color: var(--uvalib-white);
      --alt-button-text-color: var(--uvalib-text-dk-grey);
    }

    .uvalib-btn-blue {
      --alt-button-color: var(--uvalib-main-jefferson-blue);
    }

    .uvalib-btn-outline {
      border: 1px solid var(--uvalib-secondary-md-grey);
    }

    /* .foo { --alt-button-color: green; } */

    .smallButton {
      font-size: .75em;
    }

    .mediumButton {
      font-size: .85em;
    }

    .emergencyButton h3 {
      margin-top: 0;
      margin-bottom: 1em;
    }

    .emergencyButton paper-button {
      background-color: var(--uvalib-secondary-emergency-red);

      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
      }

      ;
    }

    .emergencyButton a paper-button {
      color: var(--color-white);

      --paper-button-raised-keyboard-focus: {
        color: white !important;
      }

      ;
    }

    .give-button {
      margin-top: .5em;
      margin-bottom: 1em;
      margin-left: 0;
      border: none;
      font-size: calc(var(--uvalib-main-font-size-unit)*1.125);
    }

    paper-button.give-button {
      color: var(--color-white);
      background: var(--color-primary-orange);
    }

    /* Make the button orange PHASE OUT */
    .button-pop {
      background-color: var(--uvalib-main-rotunda-orange);
      color: white;
    }

    .button-pop:hover {
      background: var(--uvalib-orange-200);
      color: var(--uvalib-black);
    }

    /* Make the button blue PHASE OUT */
    .button-pop-alt {
      background-color: var(--uvalib-main-jefferson-blue);
      color: white;
    }

    .button-pop-alt:hover {
      background: var(--uvalib-secondary-md-grey);
      color: var(--uvalib-black);
    }

    paper-button:hover {
      text-decoration: underline;
    }

    paper-button[disabled],
    paper-button[toggles][active] {
      background: var(--uvalib-orange-200);
      color: var(--uvalib-black);
    }

    paper-button:focus {
      outline: var(--color-accessibility-outline-dark-bg) dotted 3px;
    }

    /*END*/

    /* TABLES */
    table {
      border-collapse: collapse;
      width: 100%;
    }

    thead {
      display: none;
    }

    th {
      padding: 1.5em;
    }

    tr {
      display: block;
      padding: 0.5em;
    }

    td {
      display: block;
      padding-left: 40%;
    }

    td:before {
      content: attr(data-label);
      display: inline-block;
      width: 50%;
      margin-left: -65%;
      font-weight: bold;
    }

    tbody tr:nth-child(even) {
      background-color: #E0E0E0;
    }

    td ul li {
      list-style-type: none;
    }

    @media screen and (min-width: 60em) {
      thead {
        display: table-header-group;
      }

      thead tr {
        background-color: #AAA;
      }

      tr {
        display: table-row;
      }

      td {
        display: table-cell;
        padding: 1em;
        text-align: center;
      }

      td:before {
        display: none;
      }
    }

    /* END */

            /* CUSTOM TABLES */
    #AlternateTable table,
    #AlternateTable thead,
    #AlternateTable tbody,
    #AlternateTable th,
    #AlternateTable td,
    #AlternateTable tr {
      display: block;
    }

    #AlternateTable caption {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    #AlternateTable thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    #AlternateTable tbody tr:nth-child(even) {
      background-color: inherit;
    }

    #AlternateTable tr {
      padding: 0 0 10px 0;
    }

    #AlternateTable tr th {
      background-color: var(--uvalib-main-jefferson-blue);
      color: var(--uvalib-white);
      padding: 5px;
    }

    #AlternateTable td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    #AlternateTable td::before {
      display: inherit;
      margin: inherit;
      position: absolute;
      top: 6px;
      left: 15px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /* Label the data */
    #AlternateTable td:nth-of-type(1)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }

    #AlternateTable td:nth-of-type(2)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }

    #AlternateTable td:nth-of-type(3)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }

    #AlternateTable td:nth-of-type(4)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }
    /* END */

    /* ACCESSIBILITY */
    a:focus {
      @apply --accessibility-outline-for-light-bg;
    }

    /* a:hover { text-decoration: underline; } */
    nav a:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    /* a { text-decoration: inherit; } */

    a span {
      text-decoration: underline;
      color: var(--uvalib-link-color);
    }

    a span:hover {
      text-decoration: none;
    }

    a span:visited {
      color: var(--uvalib-link-color-visited);
    }

    a:link paper-button {
      text-decoration: none;
    }

    #top #logo a:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    #top #logo a:hover {
      border-bottom: 1px solid var(--color-accessibility-outline-dark-bg);
      padding-bottom: .1em;
    }

    #top .section a:focus,
    #top .section paper-icon-button:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    iron-collapse:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    /* Text meant only for screen readers. Mostly used in the Search Bar and Header components */
    .screen-reader-text {
      clip: rect(1px, 1px, 1px, 1px);
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    .screen-reader-text:focus {
      background-color: #f1f1f1;
      border-radius: 3px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
      clip: auto !important;
      color: #21759b;
      display: block;
      font-size: 14px;
      font-size: 0.875rem;
      font-weight: bold;
      height: auto;
      left: 5px;
      line-height: normal;
      padding: 15px 23px 14px;
      text-decoration: none;
      top: 5px;
      width: auto;
      z-index: 100000;
    }

    /*END*/

    /* Styling Headers with slanted borders */

    /*Code taken from UVA main - need to clean up and standardize*/
    .header-wrapper {
      background: url(https://static.lib.virginia.edu/files/hp-grayhorizline.png) repeat-x center center;
      background-size: 5px auto;
      clear: both;
      margin-top: 48px;
      margin-top: 3rem;
      padding: 0 30px;
      padding: 0 1.875rem;
      margin-bottom: 48px;
      margin-bottom: 3rem;
    }

    .header-wrapper .header-wrapper-bg {
      background: var(--uvalib-main-white);
      border-left: var(--uvalib-grey-500) solid 1px;
      border-right: var(--uvalib-grey-500) solid 1px;
      display: inline-block;
      left: 50%;
      position: relative;
      -moz-transform: skew(-20deg) translateX(-50%);
      -ms-transform: skew(-20deg) translateX(-50%);
      -o-transform: skew(-20deg) translateX(-50%);
      -webkit-transform: skew(-20deg) translateX(-50%);
      transform: skew(-20deg) translateX(-50%);
    }

    .header-wrapper .header-wrapper-bg h1,
    .header-wrapper .header-wrapper-bg h2,
    .header-wrapper .header-wrapper-bg h3 {
      margin-top: calc(var(--uvalib-spacing-unit)/8);
      margin-bottom: calc(var(--uvalib-spacing-unit)/8);
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      line-height: 1;
      padding: 5px 30px;
      -moz-transform: skew(20deg);
      -ms-transform: skew(20deg);
      -o-transform: skew(20deg);
      -webkit-transform: skew(20deg);
      transform: skew(20deg);
    }

    /*END*/

    /*END*/

    /*********************************************/
    /*          PAGE SPECIFIC CSS                */
    /*********************************************/

    /* ASK A LIBRARIAN */
    /* .mobile-small-min { min-width: 320px; max-width: 500px;  } */
    .askalibrarian-container {
      margin-left: var(--uvalib-spacing-unit);
      margin-right: var(--uvalib-spacing-unit);
      margin-bottom: var(--uvalib-spacing-unit);
    }

    /* END */

    /* HOMEPAGE CARDS */
    .events .event {
      padding-bottom: var(--uvalib-spacing-unit);
    }

    .events .category,
    #news-content .title {
      font-family: var(--uva-font-family);
      font-weight: var(--font-weight-demi);
    }

    #news-content .preview {
      margin-top: calc(var(--uvalib-spacing-unit)/-1.25);
    }

    .reno-buttons {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      padding-bottom: 20px;
      margin-top: 180px;
    }

    .reno-buttons paper-button {
      margin-top: 20px;
    }

    :host([medium-screen]) .reno-buttons {
      padding: 0 20px 20px;
    }

    :host([large-screen]) .reno-buttons {
      padding: 0 20px 20px;
    }

    /*END*/

    /* ABOUT US PAGE */
    :host([small-screen]) figure#profileImage {
      margin: 2em auto;
      text-align: center;
    }

    :host([small-screen]) #profileImage figcaption {
      margin-top: 1em;
      width: 300px;
    }

    :host([medium-screen]) figure#profileImage {
      margin-top: 2em;
      text-align: center;
    }

    :host([medium-screen]) #profileImage figcaption {
      margin-top: 1em;
      width: 300px;
    }

    :host([large-screen]) figure#profileImage {
      margin: 2em 0 2em 4em;
      text-align: center;
    }

    :host([large-screen]) #profileImage figcaption {
      margin-top: 1em;
      width: 300px;
    }

    :host([small-screen]) #profile {
      margin-bottom: 2em;
    }

    :host([medium-screen]) #profile {
      margin: 2em;
    }

    :host([large-screen]) #profile {
      margin: 2em 4em 2em 6em;
      min-width: 300px;
    }

    img.aboutSig {
      width: 200px;
    }

    /*END*/

    /* SUPPORT THE LIBRARY */
    #supportAnnualFund,
    #supportCollect,
    #supportConserPreser {
      --uvalib-pc-max-width: 90%;
      --uvalib-pc-min-width: 90%;
    }

    /*END*/

    /* LIBRARY SPECIFIC PAGES (e.g. RMC) */
    #library-template .lt-thumbnail figure {
      border: 1px solid var(--uvalib-grey-500);
    }

    #library-template .lead-image figure {
      margin: 0;
    }

    #library-template paper-button {
      background-color: var(--uvalib-main-rotunda-orange);
      color: var(--uvalib-main-white);
    }

    #library-template dt {
      font-weight: var(--font-weight-medium);
    }

    #library-template dd {
      margin-left: var(--uvalib-spacing-unit);
      margin-bottom: calc(var(--uvalib-spacing-unit)*2);
    }

    /*END*/

    /* RENOVATION PAGES */
    #supportLibrary {
      --paper-card: {
        margin: calc(var(--uvalib-spacing-unit)/8);
        background-color: blue;
        max-width: 600px;
        min-width: 290px;
      }
    }

    #supportLibrary figure {
      margin-left: 0;
      margin-right: 0;
    }

    /*END*/

    /* SERVICES - GRAD STUDENT PAGE */
    /*use this to set the header styles*/
    #services-page h2 {
      text-align: center;
    }

    #services-page h2.background {
      margin: var(--uvalib-spacing-unit) -1000px var(--uvalib-spacing-unit) -1000px;
      padding: calc(var(--uvalib-spacing-unit)/4) 1000px calc(var(--uvalib-spacing-unit)/4) 1000px;
      background-color: var(--uvalib-secondary-light-gray);
    }

    #services-page ul {
      padding-left: 0;
    }

    #services-page ul li {
      list-style-type: none;
    }

    #services-page ul li h3,
    .services-graphic-index h3 {
      margin-bottom: 0;
    }

    #services-page ul li p {
      margin-top: .25em;
      margin-bottom: .25em;
    }

    #services-page ul li a,
    .services-graphic-index a:not(.basic) {
      color: var(--uvalib-main-rotunda-orange);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
    }

    #services-page ul li a:hover,
    .services-graphic-index a:hover:not(.basic) {
      text-decoration: underline;
    }

    /* grid */
    .services-grid-container {
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 2rem;
    }

    .services-grid-container {
      grid-gap: 1rem;
    }

    :host([medium-screen]) .services-grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 1rem;
    }

    :host([large-screen]) .services-grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
    }

    /*grid end*/
    /*individual block with image, title, blurb, and link(if applicable) Use Flexbox*/
    .services-graphic-index {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
      align-items: center;
      border: 2px solid var(--uvalib-secondary-light-gray);
      padding: 1.5em;
    }

    .services-graphic-index img.icon {
      width: 100px;
      height: 100px;
    }

    a.clickbox {
      text-decoration: none;
      color: inherit;
    }

    a.clickbox:hover {
      background-color: var(--uvalib-secondary-light-gray);
    }

    .no-border {
      border: none;
    }

    #Request,
    #Publishing,
    #Instruction,
    #Consultation,
    #Spaces {
      padding-top: 2em;
    }

    /*END*/

    /* COLLECTIONS PAGE */
    :host([small-screen]) #collections {
      @apply --layout-vertical;
    }

    :host([small-screen]) #collections div {
      border-left: none;
    }

    #collections {
      margin-bottom: 2em;
    }

    #collections div {
      border-left: 1px solid var(--uvalib-secondary-md-grey);
      padding-left: 2em;
      padding-right: 2em;
    }

    #collections div:first-child {
      border-left: none;
    }

    #collections p {
      font-style: italic;
    }

    .aldCollectionTable td {
      border-bottom: 1px solid var(--color-medium-gray);
    }

    .aldCollectionTable th,
    .aldCollectionTable td {
      text-align: center;
    }

    .aldCollectionTable th[scope="row"] {
      text-align: left;
      border-bottom: 1px solid var(--color-medium-gray);
    }

    .aldCollectionTable tr:last-child th,
    .aldCollectionTable tr:last-child td {
      border-bottom: none;
    }

    /*new styling August 2019*/
    .collections-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }

    .collections-grid.third {
      grid-template-columns: 250px 1fr;
      margin-top: 2rem;
    }

    :host([small-screen]) .collections-grid,
    :host([small-screen]) .collections-grid.third {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }

    .collections-grid.third div h3 {
      margin-top: 0;
      padding-top: 0;
    }

    .collections-seperator::before,
    .collections-seperator::after {
      content: " ";
      display: block;
      width: 100%;
      height: 1em;
      margin: 0 auto;
      padding: 35px 0;
      background: linear-gradient(to right, #FFF, var(--uvalib-main-rotunda-orange), #FFF) center / 100% 2px no-repeat;
    }

    .collections-section {
      display: block;
      margin-bottom: 2rem;
    }

    #collectionForm {
      height: 450px;
    }

    :host([small-screen]) #collectionForm {
      height: 370px;
    }

    :host([medium-screen]) #collectionForm {
      height: 415px;
    }

    /*END*/

    /* LIBRA LANDING PAGE */
    .libraLanding uvalib-simple-search-box {
      --uvalib-background-search: var(--uvalib-main-jefferson-blue);
    }

    /*END*/

    /* STAFF BIO PAGE */
    :host([small-screen]) #staff-bio-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      margin-bottom: 2rem;
    }

    :host([small-screen]) .bio-quick-details {
      margin-top: 100px;
      margin-bottom: 0px;
      display: block;
    }

    #staff-bio-container {
      display: grid;
      grid-template-rows: 70px 1fr;
      grid-template-columns: 330px 1fr;
      grid-gap: 2em;
      margin-bottom: 2rem;
    }

    .spacer-row {
      grid-column: 1 / 3;
    }

    .bio-quick-details,
    .bio-web-links {
      margin-bottom: 2em;
      background-color: var(--uvalib-secondary-light-gray);
      text-align: center;
      padding: 2em;
    }

    .bio-quick-details .bio-image .round {
      margin-top: -130px;
      width: 260px;
      height: 260px;
    }

    .bio-quick-details .display-name {
      @apply --h2;
      color: var(--uvalib-main-rotunda-orange);
      margin-top: 0.75em;
    }

    .bio-quick-details .job-title,
    .bio-department p,
    .bio-languages p,
    .bio-pronouns p {
      margin-top: calc(var(--uvalib-spacing-unit)/4);
      line-height: 1.15;
    }

    .bio-contact-info,
    .bio-department,
    .bio-languages,
    .bio-pronouns {
      text-align: left;
    }

    .bio-department h4,
    .bio-languages h4,
    .bio-pronouns h4 {
      margin-bottom: 0;
    }

    .bio-pronouns p {
      color: var(--uvalib-main-rotunda-orange);
    }

    .bio-web-links h4 {
      margin: 0 0 0.75em 0;
    }

    .bio-web-links a,
    .bio-web-links a:before {
      color: var(--uvalib-main-rotunda-orange);
      font-size: 1.25em;
      text-decoration: none;
    }

    .bio-web-links a:hover,
    .bio-web-links a:hover:before {
      color: var(--uvalib-main-jefferson-blue);
    }

    a.uvalib-icon-twitter-square:before {
      color: #1DA1F2 !important;
    }

    a.uvalib-icon-linkedin-square:before {
      color: #0077B5 !important;
    }

    a.uvalib-icon-linkedin-square:hover:before,
    a.uvalib-icon-twitter-square:hover:before,
    a.uvalib-ai-orcid:hover:before {
      color: var(--uvalib-main-jefferson-blue) !important;
    }

    #staff-bio-container a paper-button {
      margin-top: var(--uvalib-spacing-unit);
      background-color: var(--uvalib-main-rotunda-orange);
      border-color: var(--uvalib-main-rotunda-orange);
      color: white;

      --paper-button-raised-keyboard-focus: {
        border-color: var(--uvalib-orange-200);
        background-color: var(--uvalib-orange-200) !important;
        color: #000 !important;
      }

      ;
    }

    #staff-bio-container a:hover paper-button {
      background-color: var(--uvalib-orange-200);
      border-color: var(--uvalib-orange-200);
      color: var(--uvalib-black);
      font-weight: bold;
    }

    /*END*/

    /* LEARNING RESOURCES PAGE */
    #tnl-container .tools>div {
      width: 90%;
    }

    #tnl-container uva-accordion {
      --uva-accordion-item-panel-padding: 0 !important;
      /* --uva-accordion-item-heading-border-bottom: 1px solid; */
    }

    #tnl-container uva-accordion:last-child {
      --uva-accordion-item-heading-border-bottom: 1px solid;
    }

    #tnl-container ul {
      margin: 0;
      padding: 0;
    }

    #tnl-container paper-button {
      text-transform: none;
      margin: var(--uvalib-spacing-unit) !important;
    }

    #tnl-container li {
      padding: var(--uvalib-spacing-unit) !important;
      list-style-type: none !important;
    }

    #tnl-container li>h4 {
      margin-top: 0;
    }

    #tnl-container .shaded {
      background-color: var(--uvalib-secondary-lt-grey);
      padding: var(--uvalib-spacing-unit);
    }

    /* #tnl-container li:nth-of-type(even) {
      background-color: var(--uvalib-secondary-lt-grey);
    } */
    #tnl-container div>img {
      float: left;
      /*
      max-width: 80px;
      max-height: 80px;
      */
      padding-right: var(--uvalib-spacing-unit);
    }

    #tnl-container ul li>h4 {
      margin-top: 50px;
    }

    #tnl-container ul li:first-child>h4 {
      margin-top: inherit;
    }

    #tnl-container .linkto {
      font-weight: bold;
      margin: calc(var(--uvalib-spacing-unit)*2) 0;
    }

    #tnl-container .linkto img {
      height: 15px;
      padding-left: calc(var(--uvalib-spacing-unit)*.5)
    }

    #tnl-container uvalib-simple-search-box {
      --uvalib-background-search: var(--uvalib-secondary-web-blue);
    }

    #tnl-container paper-radio-button {
      margin-left: var(--uvalib-spacing-unit);
    }

    #tnl-container .azbody {
      padding: var(--uvalib-spacing-unit);
      /* background-color: var(--uvalib-secondary-lt-grey); */
    }

    #tnl-container uva-accordion-item {
      --uvalib-box-shadow-custom: none;
    }

    #tnl-container .permalink a {
      font-size: calc(var(--uvalib-main-font-size-unit)*0.75);
      padding-top: var(--uvalib-spacing-unit);
    }

    #tnl-container uva-results-highlighter {
      --uva-results-highlighter-color: var(--color-medium-gray);
    }

    #tnl-container .alert {
      margin: var(--uvalib-spacing-unit);
    }

    #tnl-container .cat:not(:first-child) {
      margin-left: -.3em;
    }

    #tnl-container .cat:not(:first-child):before {
      content: ", ";
    }

    uva-results-highlighter {
      --uva-results-highlighter-color: var(--uvalib-secondary-light-gray);
    }

    /*END*/


    /*********************************************/
    /*              BROWSER HACKS                */
    /*********************************************/

    /* Hack to get tables working properl in IE11 */
    .table {
      display: table;
    }

    .thead {
      display: table-header-group;
    }

    .tbody {
      display: table-row-group;
    }

    .tr {
      display: table-row;
    }

    .td,
    .th {
      display: table-cell;
    }

    .colgroup {
      display: table-column-group;
    }

    .col {
      display: table-column;
    }

    </style>
  </template>
</dom-module>
`;

template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
