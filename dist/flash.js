!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="C:\\Users\\Ludwig\\Documents\\LibraryBuilding\\css+js\\vanilla_flash",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"flash",function(){return o}),n.d(t,"flashInstaller",function(){return r});var r=function(e){var t=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.document.body;t.classList.remove("flash-folded"),function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"!=typeof n)throw new e.TypeError("The first parameter must be an integer (in ms).");var o=n<100||n>1200?500:n,i=e.scrollY;i>0&&r<150&&(e.scrollBy(0,-(i+10)/10),r+=1,setTimeout(function(){return t(o,r)},o/10.1))}(150),t.onclick=function(){t.classList.add("flash-folded"),setTimeout(function(){return n.removeChild(t)},2e3)}},n=function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.document.body;if("string"!=typeof r)throw new e.TypeError("The message must be a string.");if("string"!=typeof n)throw new e.TypeError("The type of the flash message must be a string");var i=e.document.createElement("DIV"),a=e.document.createElement("P"),u=e.document.createElement("BUTTON");i.classList.add("flash"),a.appendChild(e.document.createTextNode(r)),u.classList.add("flash-close"),u.innerHTML="&#x2716;",i.appendChild(u),i.appendChild(a),i.classList.add("flash-folded"),""!==n&&i.classList.add("flash-".concat(n)),o!=e.document.body&&i.classList.add("flash-embed"),o.prepend(i),e.setTimeout(function(){return t(i,o)},250)};return e.document.addEventListener("DOMContentLoaded",function(){var n;(n=e.document.querySelectorAll(".flash-folded"),[].slice.call(n)).forEach(function(e){return t(e,e.parentElement)})}),["success","failure","info"].forEach(function(e){return n[e]=n.bind(n,e)}),n.default=n.bind(n,""),e.flash=n,n},o=r(window)}]);