(()=>{var n={286:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(n,r,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<n.length;a++){var u=[].concat(n[a]);e&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},39:(n,t,r)=>{function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var o=function(n){"use strict";var t,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(n,t,r){return Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(n){l=function(n,t,r){return n[t]=r}}function f(n,t,r,e){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),c=new M(e||[]);return i._invoke=function(n,t,r){var e=p;return function(o,i){if(e===d)throw new Error("Generator is already running");if(e===y){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=j(c,r);if(a){if(a===b)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===p)throw e=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=d;var u=s(n,t,r);if("normal"===u.type){if(e=r.done?y:h,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(e=y,r.method="throw",r.arg=u.arg)}}}(n,r,c),i}function s(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(n){return{type:"throw",arg:n}}}n.wrap=f;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",b={};function m(){}function v(){}function w(){}var g={};g[c]=function(){return this};var x=Object.getPrototypeOf,O=x&&x(x(P([])));O&&O!==r&&o.call(O,c)&&(g=O);var E=w.prototype=m.prototype=Object.create(g);function S(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function k(n,t){function r(i,c,a,u){var l=s(n[i],n,c);if("throw"!==l.type){var f=l.arg,p=f.value;return p&&"object"===e(p)&&o.call(p,"__await")?t.resolve(p.__await).then((function(n){r("next",n,a,u)}),(function(n){r("throw",n,a,u)})):t.resolve(p).then((function(n){f.value=n,a(f)}),(function(n){return r("throw",n,a,u)}))}u(l.arg)}var i;this._invoke=function(n,e){function o(){return new t((function(t,o){r(n,e,t,o)}))}return i=i?i.then(o,o):o()}}function j(n,r){var e=n.iterator[r.method];if(e===t){if(r.delegate=null,"throw"===r.method){if(n.iterator.return&&(r.method="return",r.arg=t,j(n,r),"throw"===r.method))return b;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=s(e,n.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var i=o.arg;return i?i.done?(r[n.resultName]=i.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function _(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function L(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function M(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(_,this),this.reset(!0)}function P(n){if(n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,i=function r(){for(;++e<n.length;)if(o.call(n,e))return r.value=n[e],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:t,done:!0}}return v.prototype=E.constructor=w,w.constructor=v,v.displayName=l(w,u,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,w):(n.__proto__=w,l(n,u,"GeneratorFunction")),n.prototype=Object.create(E),n},n.awrap=function(n){return{__await:n}},S(k.prototype),k.prototype[a]=function(){return this},n.AsyncIterator=k,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var c=new k(f(t,r,e,o),i);return n.isGeneratorFunction(r)?c:c.next().then((function(n){return n.done?n.value:c.next()}))},S(E),l(E,u,"Generator"),E[c]=function(){return this},E.toString=function(){return"[object Generator]"},n.keys=function(n){var t=[];for(var r in n)t.push(r);return t.reverse(),function r(){for(;t.length;){var e=t.pop();if(e in n)return r.value=e,r.done=!1,r}return r.done=!0,r}},n.values=P,M.prototype={constructor:M,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!n)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,o){return a.type="throw",a.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return e("end");if(c.tryLoc<=this.prev){var u=o.call(c,"catchLoc"),l=o.call(c,"finallyLoc");if(u&&l){if(this.prev<c.catchLoc)return e(c.catchLoc,!0);if(this.prev<c.finallyLoc)return e(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return e(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return e(c.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&o.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=n,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(c)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),b},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),L(r),b}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===n){var e=r.completion;if("throw"===e.type){var o=e.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:P(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),b}},n}("object"===e(n=r.nmd(n))?n.exports:{});try{regeneratorRuntime=o}catch(n){Function("r","regeneratorRuntime = r")(o)}},705:()=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(t,r){return!r||"object"!==n(r)&&"function"!=typeof r?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t):r}function e(n){var t="function"==typeof Map?new Map:void 0;return(e=function(n){if(null===n||(r=n,-1===Function.toString.call(r).indexOf("[native code]")))return n;var r;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,e)}function e(){return o(n,arguments,a(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c(e,n)})(n)}function o(n,t,r){return(o=i()?Reflect.construct:function(n,t,r){var e=[null];e.push.apply(e,t);var o=new(Function.bind.apply(n,e));return r&&c(o,r.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function c(n,t){return(c=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function a(n){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var u=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&c(n,t)}(s,n);var e,o,u,l,f=(e=s,o=i(),function(){var n,t=a(e);if(o){var i=a(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return r(this,n)});function s(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=f.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return u=s,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n       <style>\n           * {\n               margin: 0;\n               padding: 0;\n               box-sizing: border-box;\n           }\n           :host {\n               display: block;\n               width: 100%;\n               background-color: cornflowerblue;\n               color: white;\n               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           }\n           h2 {\n               padding: 16px;\n           }\n       </style>\n       <h2>Club Finder</h2>"}}])&&t(u.prototype,l),s}(e(HTMLElement));customElements.define("app-bar",u)},312:()=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(t,r){return!r||"object"!==n(r)&&"function"!=typeof r?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t):r}function e(n){var t="function"==typeof Map?new Map:void 0;return(e=function(n){if(null===n||(r=n,-1===Function.toString.call(r).indexOf("[native code]")))return n;var r;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,e)}function e(){return o(n,arguments,a(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c(e,n)})(n)}function o(n,t,r){return(o=i()?Reflect.construct:function(n,t,r){var e=[null];e.push.apply(e,t);var o=new(Function.bind.apply(n,e));return r&&c(o,r.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function c(n,t){return(c=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function a(n){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var u=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&c(n,t)}(s,n);var e,o,u,l,f=(e=s,o=i(),function(){var n,t=a(e);if(o){var i=a(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return r(this,n)});function s(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=f.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return u=s,(l=[{key:"render",value:function(){this.shadowDOM.innerHTML='\n           <style>\n               * {\n                   margin: 0;\n                   padding: 0;\n                   box-sizing: border-box;\n               }\n               :host {\n                   display: block;\n                   margin-bottom: 18px;\n                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                   border-radius: 10px;\n                   overflow: hidden;\n               }\n              \n               .fan-art-club {\n                   width: 100%;\n                   max-height: 300px;\n                   object-fit: cover;\n                   object-position: center;\n               }\n              \n               .club-info {\n                   padding: 24px;\n               }\n              \n               .club-info > h2 {\n                   font-weight: lighter;\n               }\n              \n               .club-info > p {\n                   margin-top: 10px;\n                   overflow: hidden;\n                   text-overflow: ellipsis;\n                   display: -webkit-box;\n                   -webkit-box-orient: vertical;\n                   -webkit-line-clamp: 10; /* number of lines to show */\n               }\n\n           </style>\n           <img class="fan-art-club" src="'.concat(this._club.strTeamBadge,'" alt="Fan Art">\n           <div class="club-info">\n               <h2>').concat(this._club.strTeam,"</h2>\n               <p>").concat(this._club.strDescriptionEN,"</p>\n           </div>")}},{key:"club",set:function(n){this._club=n,this.render()}}])&&t(u.prototype,l),s}(e(HTMLElement));customElements.define("club-item",u)},998:()=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(t,r){return!r||"object"!==n(r)&&"function"!=typeof r?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t):r}function e(n){var t="function"==typeof Map?new Map:void 0;return(e=function(n){if(null===n||(r=n,-1===Function.toString.call(r).indexOf("[native code]")))return n;var r;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,e)}function e(){return o(n,arguments,a(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c(e,n)})(n)}function o(n,t,r){return(o=i()?Reflect.construct:function(n,t,r){var e=[null];e.push.apply(e,t);var o=new(Function.bind.apply(n,e));return r&&c(o,r.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function c(n,t){return(c=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function a(n){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var u=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&c(n,t)}(s,n);var e,o,u,l,f=(e=s,o=i(),function(){var n,t=a(e);if(o){var i=a(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return r(this,n)});function s(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=f.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return u=s,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n       <style>\n       .search-container {\n           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           padding: 16px;\n           border-radius: 5px;\n           display: flex;\n           position: sticky;\n           top: 10px;\n           background-color: white;\n           margin-left: 16%;\n           margin-right: 16%;\n       }\n      \n       .search-container > input {\n           width: 75%;\n           padding: 16px;\n           border: 0;\n           border-bottom: 1px solid cornflowerblue;\n           font-weight: bold;\n       }\n      \n       .search-container > input:focus {\n           outline: 0;\n           border-bottom: 2px solid cornflowerblue;\n       }\n      \n       .search-container > input:focus::placeholder {\n           font-weight: bold;\n       }\n      \n       .search-container >  input::placeholder {\n           color: cornflowerblue;\n           font-weight: normal;\n       }\n      \n       .search-container > button {\n           width: 23%;\n           cursor: pointer;\n           margin-left: auto;\n           padding: 16px;\n           background-color: cornflowerblue;\n           color: white;\n           border: 0;\n           text-transform: uppercase;\n       }\n      \n       @media screen and (max-width: 550px){\n           .search-container {\n               flex-direction: column;\n               position: static;\n           }\n      \n           .search-container > input {\n               width: 100%;\n               margin-bottom: 12px;\n           }\n      \n           .search-container > button {\n               width: 100%;\n           }\n       }\n       </style>\n       <div id="search-container" class="search-container">\n           <input placeholder="Search football club" id="searchElement" type="search">\n           <button id="searchButtonElement" type="submit">Search</button>\n       </div>\n       ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}},{key:"clickEvent",set:function(n){this._clickEvent=n,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}}])&&t(u.prototype,l),s}(e(HTMLElement));customElements.define("search-bar",u)},982:(n,t,r)=>{"use strict";r.d(t,{Z:()=>i});var e=r(286),o=r.n(e)()((function(n){return n[1]}));o.push([n.id,"* \r\n{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nclub-list \r\n{\r\n    display: block;\r\n    margin-top: 32px;\r\n    width: 100%;\r\n    padding: 16px;\r\n}\r\n\r\nnav ul a,\r\nnav .brand-logo \r\n{\r\n  color: #444;\r\n}\r\n\r\np \r\n{\r\n  line-height: 2rem;\r\n}\r\n\r\n.opening-time\r\n{\r\n  font-size: 20px;\r\n}\r\n\r\n.sidenav-trigger \r\n{\r\n  color: #26a69a;\r\n}\r\n\r\n.footer-copyright a:link,\r\n.footer-copyright a:visited\r\n{\r\n  color: #fff;\r\n  text-decoration: none;\r\n  border-bottom: 1px solid #fff;\r\n  padding-bottom: 1px;\r\n  -webkit-transition: border-bottom 0.2s, color 0.2s;\r\n  transition: border-bottom 0.2s, color 0.2s;\r\n}\r\n\r\n.footer-copyright a:hover,\r\n.footer-copyright a:active\r\n{\r\n  color: #9ba4b4;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n@media only screen and (max-width : 1184px) \r\n{\r\n  .home .card-content .card-title\r\n  {\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .home .card-content .material-icons\r\n  {\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .home .icon-block h4\r\n  {\r\n    font-size: 28px;\r\n  }\r\n  \r\n  .home .icon-block h5\r\n  {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 1071px) \r\n{\r\n  .home .how-to h2\r\n  {\r\n    font-size: 45px;\r\n  }\r\n  \r\n  .home .how-to h4\r\n  {\r\n    font-size: 28px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 992px) \r\n{\r\n  .home .card-content .card-title\r\n  {\r\n    font-size: 25px;\r\n  }\r\n  \r\n  .home .card-content .material-icons\r\n  {\r\n    font-size: 25px;\r\n  }\r\n  \r\n  #index-banner .section \r\n  {\r\n    top: 10%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 740px) \r\n{\r\n  .contact .icon-block h2\r\n  {\r\n    font-size: 40px;\r\n  }\r\n  \r\n  .contact .icon-block h5\r\n  {\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .contact .icon-block h6\r\n  {\r\n    font-size: 16x;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 710px) \r\n{\r\n  .location .card-content .card-title\r\n  {\r\n    font-size: 19.5px;\r\n  }\r\n  \r\n  .location .card-content .material-icons\r\n  {\r\n    font-size: 17px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 620px) \r\n{\r\n  .home .card-content .card-title\r\n  {\r\n    font-size: 22px;\r\n  }\r\n  \r\n  .home .card-content .material-icons\r\n  {\r\n    font-size: 20px;\r\n  }\r\n  \r\n  #index-banner .section \r\n  {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 600px) \r\n{\r\n   .location .card-content .card-title\r\n  {\r\n    font-size: 22px;\r\n  }\r\n  \r\n  .location .card-content .material-icons\r\n  {\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .contact .icon-block h2\r\n  {\r\n    font-size: 50px;\r\n  }\r\n  \r\n  .contact .icon-block h5\r\n  {\r\n    font-size: 25px;\r\n  }\r\n  \r\n  .contact .icon-block h6\r\n  {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 432px) \r\n{\r\n  .home .card-content .card-title\r\n  {\r\n    font-size: 19px;\r\n  }\r\n  \r\n  .home .card-content .material-icons\r\n  {\r\n    font-size: 17px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 420px) \r\n{\r\n  .location .card-content .card-title\r\n  {\r\n    font-size: 19px;\r\n  }\r\n  \r\n  .location .card-content .material-icons\r\n  {\r\n    font-size: 17px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width : 395px) \r\n{\r\n  .home .card-content .card-title\r\n  {\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .home .card-content .material-icons\r\n  {\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n.icon-block \r\n{\r\n  padding: 0 15px;\r\n}\r\n\r\n.icon-block .material-icons \r\n{\r\n  font-size: inherit;\r\n}\r\n\r\nfooter.page-footer \r\n{\r\n  margin: 0;\r\n}\r\n",""]);const i=o},379:(n,t,r)=>{"use strict";var e,o=function(){var n={};return function(t){if(void 0===n[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[t]=r}return n[t]}}(),i=[];function c(n){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===n){t=r;break}return t}function a(n,t){for(var r={},e=[],o=0;o<n.length;o++){var a=n[o],u=t.base?a[0]+t.base:a[0],l=r[u]||0,f="".concat(u," ").concat(l);r[u]=l+1;var s=c(f),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(i[s].references++,i[s].updater(p)):i.push({identifier:f,updater:y(p,t),references:1}),e.push(f)}return e}function u(n){var t=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var i=r.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(t);else{var c=o(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,f=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function s(n,t,r,e){var o=r?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),c=n.childNodes;c[t]&&n.removeChild(c[t]),c.length?n.insertBefore(i,c[t]):n.appendChild(i)}}function p(n,t,r){var e=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,d=0;function y(n,t){var r,e,o;if(t.singleton){var i=d++;r=h||(h=u(t)),e=s.bind(null,r,i,!1),o=s.bind(null,r,i,!0)}else r=u(t),e=p.bind(null,r,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return e(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var r=a(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<r.length;e++){var o=c(r[e]);i[o].references--}for(var u=a(n,t),l=0;l<r.length;l++){var f=c(r[l]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}r=u}}}}},t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={id:e,loaded:!1,exports:{}};return n[e](o,o.exports,r),o.loaded=!0,o.exports}r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{"use strict";r(39);var n=r(379),t=r.n(n),e=r(982);function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function c(n,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function a(n){var t="function"==typeof Map?new Map:void 0;return(a=function(n){if(null===n||(r=n,-1===Function.toString.call(r).indexOf("[native code]")))return n;var r;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,e)}function e(){return u(n,arguments,s(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,n)})(n)}function u(n,t,r){return(u=l()?Reflect.construct:function(n,t,r){var e=[null];e.push.apply(e,t);var o=new(Function.bind.apply(n,e));return r&&f(o,r.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}t()(e.Z,{insert:"head",singleton:!1}),e.Z.locals,r(705),r(312);var p=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}(u,n);var t,r,e,o,a=(t=u,r=l(),function(){var n,e=s(t);if(r){var o=s(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return c(this,n)});function u(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=a.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return e=u,(o=[{key:"render",value:function(){var n=this;this.shadowDOM.innerHTML="",this._clubs.forEach((function(t){var r=document.createElement("club-item");r.club=t,n.shadowDOM.appendChild(r)}))}},{key:"renderError",value:function(n){this.shadowDOM.innerHTML="\n        <style>\n             .placeholder {\n                   font-weight: lighter;\n                   color: rgba(0,0,0,0.5);\n                   -webkit-user-select: none;\n                   -moz-user-select: none;\n                   -ms-user-select: none;\n                   user-select: none;\n               }\n           </style>",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(n,"</h2>")}},{key:"clubs",set:function(n){this._clubs=n,this.render()}}])&&i(e.prototype,o),u}(a(HTMLElement));function h(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}customElements.define("club-list",p),r(998);const d=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,r;return t=n,r=[{key:"searchClub",value:function(n){return fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=".concat(n)).then((function(n){return n.json()})).then((function(t){return t.teams?Promise.resolve(t.teams):Promise.reject("".concat(n," is not found"))}))}}],null&&h(t.prototype,null),r&&h(t,r),n}();function y(n,t,r,e,o,i,c){try{var a=n[i](c),u=a.value}catch(n){return void r(n)}a.done?t(u):Promise.resolve(u).then(e,o)}document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector("search-bar"),t=document.querySelector("club-list"),r=function(){var t,r=(t=regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.searchClub(n.value);case 3:r=t.sent,e(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),o(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var n=this,r=arguments;return new Promise((function(e,o){var i=t.apply(n,r);function c(n){y(i,e,o,c,a,"next",n)}function a(n){y(i,e,o,c,a,"throw",n)}c(void 0)}))});return function(){return r.apply(this,arguments)}}(),e=function(n){t.clubs=n},o=function(n){t.renderError(n)};n.clickEvent=r}))})()})();