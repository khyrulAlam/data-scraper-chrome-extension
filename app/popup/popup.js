!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=5)}([function(n,r,e){var t=e(1);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(3)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(r=n.exports=e(2)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,500,600&display=swap);",""]),r.push([n.i,'h3,\r\nh1,\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  width: 350px;\r\n  height: 400px;\r\n  margin: 0 auto;\r\n  font-family: "Fira Sans Condensed", sans-serif;\r\n}\r\n#header {\r\n  padding: 5px 10px;\r\n  border: 1px solid #3333333d;\r\n  background: #ffeb3b;\r\n  height: 18vh;\r\n}\r\n\r\n#header h1 {\r\n  font-family: "Fira Sans Condensed", sans-serif;\r\n  margin: 0;\r\n  text-align: center;\r\n  padding-bottom: 8px;\r\n  color: #818c11;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.header-opt > input {\r\n  font-family: "Fira Sans Condensed", sans-serif;\r\n  width: 65%;\r\n  height: 25px;\r\n  border-radius: 15px;\r\n  border: none;\r\n  padding-left: 3px;\r\n}\r\n.header-opt > button {\r\n  font-family: "Fira Sans Condensed", sans-serif;\r\n  height: 27px;\r\n  border-radius: 15px;\r\n  width: 32%;\r\n  background: #86901d;\r\n  border: 0px solid #fff;\r\n  color: #f9e851;\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\n#footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  background: #ffeb3b;\r\n  padding: 5px 0px;\r\n  color: #86901d;\r\n  font-family: "Fira Sans Condensed", sans-serif;\r\n}\r\n\r\n#main {\r\n  height: 75vh;\r\n  background: #f7f7f7;\r\n  font-family: "Fira Sans Condensed", sans-serif;\r\n}\r\n#homePage {\r\n  padding: 3px;\r\n}\r\n#homePage .article {\r\n  padding: 10px;\r\n  margin-bottom: 3px;\r\n  background: #fff;\r\n  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.12);\r\n  position: relative;\r\n}\r\n#homePage .article h3 {\r\n  margin-bottom: 3px;\r\n}\r\n#homePage .article .run {\r\n  color: #86901d;\r\n  position: absolute;\r\n  right: 3%;\r\n  top: 25%;\r\n  border: none;\r\n  background: #ffeb3b;\r\n  padding: 5px 11px;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n}\r\n',""])},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(a=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+e+"}":e}).join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&t[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),r.push(a))}},r}},function(n,r,e){var t,o,i={},a=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=t.apply(this,arguments)),o}),s=function(n){var r={};return function(n,e){if("function"==typeof n)return n();if(void 0===r[n]){var t=function(n,r){return r?r.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}}(),f=null,c=0,u=[],d=e(4);function l(n,r){for(var e=0;e<n.length;e++){var t=n[e],o=i[t.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](t.parts[a]);for(;a<t.parts.length;a++)o.parts.push(g(t.parts[a],r))}else{var s=[];for(a=0;a<t.parts.length;a++)s.push(g(t.parts[a],r));i[t.id]={id:t.id,refs:1,parts:s}}}}function p(n,r){for(var e=[],t={},o=0;o<n.length;o++){var i=n[o],a=r.base?i[0]+r.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(s):e.push(t[a]={id:a,parts:[s]})}return e}function h(n,r){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=u[u.length-1];if("top"===n.insertAt)t?t.nextSibling?e.insertBefore(r,t.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),u.push(r);else if("bottom"===n.insertAt)e.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(r,o)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=u.indexOf(n);r>=0&&u.splice(r,1)}function m(n){var r=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return e.nc}();t&&(n.attrs.nonce=t)}return v(r,n.attrs),h(n,r),r}function v(n,r){Object.keys(r).forEach(function(e){n.setAttribute(e,r[e])})}function g(n,r){var e,t,o,i;if(r.transform&&n.css){if(!(i="function"==typeof r.transform?r.transform(n.css):r.transform.default(n.css)))return function(){};n.css=i}if(r.singleton){var a=c++;e=f||(f=m(r)),t=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(r,n.attrs),h(n,r),r}(r),t=function(n,r,e){var t=e.css,o=e.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(t=d(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,r),o=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(r),t=function(n,r){var e=r.css,t=r.media;t&&n.setAttribute("media",t);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){b(e)});return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=a()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var e=p(n,r);return l(e,r),function(n){for(var t=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,t.push(s)}n&&l(p(n,r),r);for(o=0;o<t.length;o++){var s;if(0===(s=t[o]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete i[s.id]}}}};var y,x=(y=[],function(n,r){return y[n]=r,y.filter(Boolean).join("\n")});function w(n,r,e,t){var o=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=x(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=r.protocol+"//"+r.host,t=e+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,r,e){"use strict";e.r(r);e(0);const t={active:!0,currentWindow:!0};chrome.runtime.id;document.querySelector("#newSchema").addEventListener("click",function(n){chrome.tabs.query(t,function(n){var r={text:"create_iframe",tabId:n[0].id};chrome.runtime.sendMessage(r),chrome.tabs.sendMessage(n[0].id,r),setTimeout(function(){window.close()},400)})})}]);