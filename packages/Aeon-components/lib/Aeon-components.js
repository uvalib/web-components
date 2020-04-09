import '@uvalib/uvalib-theme/aeon-styles.js';
import('@uvalib/uvalib-header').then(()=>{
  import('@uvalib/uvalib-footer');



  document.body.style.visibility="visible";
});

// Setup our header
var header = document.createElement('uvalib-header');
header.setAttribute('simple',true);
document.querySelector('header h1').replaceWith(header);

// Setup our footer
var footer = document.querySelector('footer');
document.body.append( footer )
var uvalibFooter = document.createElement('uvalib-footer');
var slotcont = document.createElement('div');
slotcont.setAttribute('slot','bottom-bar');
while (footer.childNodes.length > 0) {
  slotcont.appendChild(footer.childNodes[0]);
}
uvalibFooter.appendChild(slotcont);
footer.appendChild(uvalibFooter);
