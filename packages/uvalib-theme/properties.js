import '@polymer/polymer/polymer-legacy.js';
import './color.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';
const template = html`
<custom-style>
  <style is="custom-style">
  /*********************************************/
  /*              BASE ELEMENTS                */
  /*********************************************/

      /* making site background full width */
      body { margin: 0; }

      /* SITE WIDE CUSTOM VARIABLES */
      html {
        /* max display width */
        --uvalib-display-width-max: 1200px;

        /* small media width */
        --small-viewport: { max-width: 30em; }

        /* font variables */
        --font-primary: var(--uva-font-family);

        /*Pulling in fonts via Typekit, weights will pull in font variants*/
        --uva-font-family: 'franklin-gothic-urw',arial,sans-serif;
        --uva-font-family-condensed: 'franklin-gothic-urw-cond',arial narrow,sans-serif;
        /*try to refrain from using this one, difficult to read on small screens*/
        --uva-font-family-compressed: 'franklin-gothic-urw-comp',arial narrow,sans-serif;
        --uva-font-decorative: {
          font-family: 'bodoni-urw',georgia,serif;
          font-style: italic;
          font-weight: 900;
          text-transform: uppercase;
        }

        --font-weight-light: 300; /*not used?*/
        --font-weight-book: 400;
        --font-weight-medium: 500;
        --font-weight-demi: 700;
        --font-weight-heavy: 900;

  /* Main sizing unit - changing this will update most of the font size/spacing variables on the site */
        --uvalib-main-font-size-unit: 16px;

  /* spacing unit of measure */
        --uvalib-spacing-unit: 1em;

  /* typography variables */
        --uvalib-font-base: {
          font-family: var(--font-primary);
          font-weight: 300;
          margin-top: calc(var(--uvalib-spacing-unit)/1);
          margin-bottom: calc(var(--uvalib-spacing-unit)/4);
          text-transform: none;
          color: var(--uvalib-text-grey);
        }

        --h1: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-demi);
          font-size: calc(var(--uvalib-main-font-size-unit)*3.75);
          line-height: calc(var(--uvalib-main-font-size-unit)*3.75);
          color: var(--uvalib-main-jefferson-blue);
          margin-top: calc(var(--uvalib-spacing-unit)/4);
          margin-bottom: calc(var(--uvalib-spacing-unit)/1.5);
          /*text-transform: capitalize; Not using, handling with CMS manual entries*/
        }
        --h2: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: calc(var(--uvalib-main-font-size-unit)*2);
          line-height: calc(var(--uvalib-main-font-size-unit)*2);
          color: var(--uvalib-main-jefferson-blue);
        }
        --h3: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: calc(var(--uvalib-main-font-size-unit)*1.5);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.5);
          /* text-transform: uppercase; Not using to improve cognitive recognition*/
          color: var(--uvalib-main-jefferson-blue);
        }
        --h3-with-flair: {
          @apply --uva-font-decorative;
          font-size: calc(var(--uvalib-main-font-size-unit)*1.5);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.5);
          color: var(--uvalib-main-jefferson-blue);
        }
        --h4: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: calc(var(--uvalib-main-font-size-unit)*1.25);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.25);
          /*text-transform: capitalize; Not using, handling with CMS manual entries*/
          color: var(--uvalib-main-jefferson-blue);
        }
        --h5: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: var(--uvalib-main-font-size-unit);
          line-height: var(--uvalib-main-font-size-unit);
          color: var(--uvalib-main-jefferson-blue);
        }
        --h6: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-book);
          font-size: var(--uvalib-main-font-size-unit);
          line-height: var(--uvalib-main-font-size-unit);
          color: var(--uvalib-text-grey);
        }

        --font-headline: {
          font-family: var(--font-primary);
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          color: var(--uvalib-text-grey);
        };

  /* used for headers in card body */
        --font-title: {
          font-family: var(--font-primary);
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          color: var(--uvalib-text-grey);
        };

  /* main body font */
        --font-body1: {
          font-family: var(--font-primary);
          font-weight: 400;
          font-style: normal;
          font-size: var(--uvalib-main-font-size-unit);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.25);
          color: var(--uvalib-text-grey);
        };

        --uvalib-liame-link-color:  var(--uvalib-link-color);

        --link-hover: {
          text-decoration: underline;
        };

      }

  </style>
</custom-style>`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
