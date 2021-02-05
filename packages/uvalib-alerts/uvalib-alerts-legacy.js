window.WebComponents = window.WebComponents || {};

console.log("foo");

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.5.0/webcomponents-bundle.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

console.log("foobar")

script.onload = ()=>{
    console.log("loaded polyfill");
    var script2 = document.createElement('script');
    script2.type = 'module';
    script2.innerText = `
        console.log("hello from module load");
    `;
    document.getElementsByTagName('head')[0].appendChild(script2);
};

//import('https://static.lib.virginia.edu/js/controllers/components-build/alerts.js');
//})
//    WebComponents.waitFor(async () => {
//        console.log("foobar!!!!");
//        var promises = [];
//        promises.push( import('./uvalib-alerts.js') );
//        promises.push( import('./uvalib-alerts-level4.js') );
//        return Promise.all(promises);
//    })