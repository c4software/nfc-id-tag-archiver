(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-cd43581a":"f4b00c7c","chunk-2834751f":"3bcdd02b","chunk-72d2498c":"0e453ddc","chunk-774b3672":"3cae8c74","chunk-d8b92b5a":"d8bf7032"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-cd43581a":1,"chunk-72d2498c":1,"chunk-774b3672":1,"chunk-d8b92b5a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-cd43581a":"fa707c8b","chunk-2834751f":"31d6cfe0","chunk-72d2498c":"adef76b4","chunk-774b3672":"b1ecc611","chunk-d8b92b5a":"b1ecc611"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=a[c],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],u=i.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e),u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15a4":function(e,t,n){var r={"./en.json":"e088","./fr.json":"2394"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="15a4"},2394:function(e){e.exports={appTitle:"Archivage de tags",nfcTitle:"Nfc",qrcodeTitle:"QRcode",settingsTitle:"Paramètres",historyTitle:"Historique",qrcode:{scan:"Scanner un QRCode",success:"Le QRCode a été ajouté à votre historique",error:"Lecture du QRCode impossible"},nfc:{waiting:"En attente de scan d'un nouveau tag",success:"Le tag à bien été ajouté dans votre historique.",disabled:"Le NFC semble actuellement désactivé",incompatible:"Votre mobile ne supporte pas le NFC."},enable:"Activer",confirmTitle:"Etes-vous sûr ?",confirmText:"Attention ! Cette action est irréversible",yes:"Oui",no:"Non"}},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("toolbar"),n("v-content",[n("v-slide-x-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{class:e.toolbarColor,attrs:{flat:e.isHome,"clipped-left":"",app:"",dark:!e.isHome}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[e.isHome?n("v-toolbar-title",{staticClass:"center-title"},[e._v("\n                  "+e._s(e.$t("appTitle"))+"\n              ")]):n("v-toolbar-side-icon",{on:{click:e.back}},[n("v-icon",[e._v("arrow_back")])],1)],1)],1)],1)},i=[],s={name:"toolbar",computed:{isHome(){return null==this.$route.name||"home"===this.$route.name},toolbarColor(){return this.isHome?"transparent":"primary"}},methods:{back:function(){this.$router.go(-1)}}},u=s,l=(n("5c7f"),n("2877")),d=n("6544"),f=n.n(d),p=n("132d"),h=n("0789"),b=n("71d9"),m=n("706c"),v=n("2a7f"),g=Object(l["a"])(u,c,i,!1,null,"b142b84c",null);g.options.__file="toolbar.vue";var y=g.exports;f()(g,{VIcon:p["a"],VSlideYTransition:h["d"],VToolbar:b["a"],VToolbarSideIcon:m["a"],VToolbarTitle:v["a"]});var k={name:"App",components:{toolbar:y}},T=k,w=n("7496"),_=n("549c"),C=Object(l["a"])(T,o,a,!1,null,null,null);C.options.__file="App.vue";var E=C.exports;f()(C,{VApp:w["a"],VContent:_["a"],VSlideXTransition:h["c"]});var j=n("bb71"),x=n("18f2"),O=n.n(x),A=n("da5b"),N=n.n(A);n("da64");r["a"].use(j["a"],{iconfont:"md",lang:{locales:{fr:O.a,en:N.a},current:"fr"}});var P=n("8c4f"),S=[{path:"/",name:"home",component:()=>Promise.all([n.e("chunk-cd43581a"),n.e("chunk-2834751f")]).then(n.bind(null,"bb51"))},{path:"/nfc",name:"nfc",component:()=>Promise.all([n.e("chunk-cd43581a"),n.e("chunk-774b3672")]).then(n.bind(null,"00c5"))},{path:"/qrcode",name:"qrcode",component:()=>Promise.all([n.e("chunk-cd43581a"),n.e("chunk-d8b92b5a")]).then(n.bind(null,"22f9"))},{path:"/history",name:"history",component:()=>Promise.all([n.e("chunk-cd43581a"),n.e("chunk-72d2498c")]).then(n.bind(null,"e4bb"))}];r["a"].use(P["a"]);let q=new P["a"]({routes:S,scrollBehavior(e,t,n){return n||{x:0,y:0}}});var R=q,L=n("a925");function V(){const e=n("15a4"),t={};return e.keys().forEach(n=>{const r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){const o=r[1];t[o]=e(n)}}),t}r["a"].use(L["a"]);var Q=new L["a"]({locale:"fr",fallbackLocale:"en",messages:V()});function H(){r["a"].config.productionTip=!0,new r["a"]({router:R,i18n:Q,render:e=>e(E)}).$mount("#app")}document.addEventListener("deviceready",()=>{console.log("Ready, Render the App"),H()});const $="undefined"!==typeof window.cordova;$||document.dispatchEvent(new CustomEvent("deviceready",{}))},"5c7f":function(e,t,n){"use strict";var r=n("9ceb"),o=n.n(r);o.a},"9ceb":function(e,t,n){},e088:function(e){e.exports={appTitle:"Tag Archiver",nfcTitle:"Nfc",qrcodeTitle:"QRcode",settingsTitle:"Settings",historyTitle:"History",qrcode:{scan:"Scan a QRCode",success:"The QRCode has been added to your history",error:"Error while reading your QRCode"},nfc:{waiting:"Waiting for a tag",success:"The tag has been added to your history.",disabled:"NFC is disabled",incompatible:"Your phone doesn't have an NFC chip."},enable:"Enable",confirmTitle:"Are you sure ?",confirmText:"Warning ! This action is irreversible",yes:"Yes",no:"No"}}});
//# sourceMappingURL=app.e8654364.js.map