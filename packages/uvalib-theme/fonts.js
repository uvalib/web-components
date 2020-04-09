import ('webfontloader').then((ex)=>{
  var loader = (window.WebFont)? window.WebFont: ex.default;
  loader.load({
    typekit: {id: 'tgy5tlj'}
  });
});
//import * as WebFont from 'webfontloader';

//eval("webfontloader.load({typekit: {id: 'tgy5tlj'} })");
//window.WebFont.load({typekit: {id: 'tgy5tlj'} });
