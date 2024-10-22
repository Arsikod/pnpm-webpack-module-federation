(()=>{"use strict";var e,t,r,n,o,a,i={332:(e,t,r)=>{var n=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof aboutApp)return e();r.l("http://localhost:9001/remoteEntry.js",(r=>{if("undefined"!=typeof aboutApp)return e();var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,t(n)}),"aboutApp")})).then((()=>aboutApp))},746:(e,t,r)=>{var n=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof dashboardApp)return e();r.l("http://localhost:9002/remoteEntry.js",(r=>{if("undefined"!=typeof dashboardApp)return e();var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,t(n)}),"dashboardApp")})).then((()=>dashboardApp))}},u={};function f(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return i[e](r,r.exports,f),r.exports}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}f.m=i,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);f.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,f.d(o,a),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>e+"."+{13:"6e440a1aa3f4a0514d50",23:"6f6f51f2d41abc363d6c"}[e]+".js",f.miniCssF=e=>{},f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="host:",f.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var s=l[p];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+o){i=s;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",n+o),i.src=e),r[e]=[t];var d=(t,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={13:[13],23:[23]},a={13:["default","./About",332],23:["default","./Dashboard",746]},f.f.remotes=(e,t)=>{f.o(o,e)&&o[e].forEach((e=>{var r=f.R;r||(r=[]);var n=a[e];if(!(r.indexOf(n)>=0)){if(r.push(n),n.p)return t.push(n.p);var o=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),f.m[e]=()=>{throw t},n.p=0},i=(e,r,a,i,u,f)=>{try{var l=e(r,a);if(!l||!l.then)return u(l,i,f);var p=l.then((e=>u(e,i)),o);if(!f)return p;t.push(n.p=p)}catch(e){o(e)}},u=(e,t,o)=>i(t.get,n[1],r,0,l,o),l=t=>{n.p=1,f.m[e]=e=>{e.exports=t()}};i(f,n[2],0,0,((e,t,r)=>e?i(f.I,n[0],0,e,u,r):o()),1)}}))},(()=>{f.S={};var e={},t={};f.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];f.o(f.S,r)||(f.S[r]={}),f.S[r];var a=e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(t));var t};try{var o=f(e);if(!o)return;var a=e=>e&&e.init&&e.init(f.S[r],n);if(o.then)return i.push(o.then(a,t));var u=a(o);if(u&&u.then)return i.push(u.catch(t))}catch(e){t(e)}},i=[];return"default"===r&&(a(332),a(746)),i.length?e[r]=Promise.all(i).then((()=>e[r]=1)):e[r]=1}}})(),f.p="http://localhost:9999/",(()=>{var e={792:0};f.f.j=(t,r)=>{var n=f.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(792==t){var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=f.p+f.u(t),i=new Error;f.l(a,(r=>{if(f.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,r)=>{var n,o,[a,i,u]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in i)f.o(i,n)&&(f.m[n]=i[n]);u&&u(f)}for(t&&t(r);l<a.length;l++)o=a[l],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkhost=self.webpackChunkhost||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(new(function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(t=[{key:"render",value:function(e){var t=e.map((function(e){var t=document.createElement("li"),r=document.createElement("a");return r.href=e.url,r.textContent=e.title,t.appendChild(r),t})),r=document.createElement("ul");t.forEach((function(e){r.appendChild(e)})),document.body.appendChild(r)}}])&&p(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}())).render([{url:"/about",title:"About"},{url:"/dashboard",title:"Dashboard"}]);var d=window.location.pathname;"/about"===d&&f.e(13).then(f.t.bind(f,13,23)).then((function(e){(new(0,e.default)).render()})),"/dashboard"===d&&f.e(23).then(f.t.bind(f,23,23)).then((function(e){(new(0,e.default)).render()})),console.log("Host is here")})();