document.documentElement.setAttribute("id","loading");
/*! loadCSS: load a CSS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. Licensed MIT */
function loadCSS(e,t,n,o){"use strict";function r(){for(var t,o=0;o<l.length;o++)l[o].href&&l[o].href.indexOf(e)>-1&&(t=!0);t?i.media=n||"all":setTimeout(r)}var i=window.document.createElement("link"),d=t||window.document.getElementsByTagName("script")[0],l=window.document.styleSheets;return i.rel="stylesheet",i.href=e,i.media="only x",i.onload=o||function(){},d.parentNode.insertBefore(i,d),r(),i}
/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
function loadJS(e,t){"use strict";var n=window.document.getElementsByTagName("script")[0],o=window.document.createElement("script");return o.src=e,o.async=!0,n.parentNode.insertBefore(o,n),t&&"function"==typeof t&&(o.onload=t),o}
/*! Google Analytics code*/ 
var _gaq=[['_setAccount','UA-21499673-1'],['_trackPageview']];(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src='http://www.google-analytics.com/ga.js';s.parentNode.insertBefore(g,s)}(document,'script'));

loadCSS("/dist/css/{{ page.css }}.css"); // loads a specified css file from YAML Front Matter block
loadJS("/dist/js/{{ page.js }}.js"); // load main JS file. Same for all pages
