(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"673707e3","chunk-774b3672":"3cae8c74","chunk-cef8ac7c":"843af933","chunk-d8b92b5a":"d8bf7032"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-774b3672":1,"chunk-cef8ac7c":1,"chunk-d8b92b5a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-774b3672":"b1ecc611","chunk-cef8ac7c":"f5b07d5b","chunk-d8b92b5a":"b1ecc611"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){c=l[i],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e),u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15a4":function(e,t,n){var r={"./en.json":"e088","./fr.json":"2394"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="15a4"},2394:function(e){e.exports={appTitle:"Archivage de tags",nfcTitle:"Nfc",qrcodeTitle:"QRcode",settingsTitle:"Paramètres",historyTitle:"Historique",qrcode:{scan:"Scanner un QRCode",success:"Le QRCode a été ajouté à votre historique",error:"Lecture du QRCode impossible"},nfc:{waiting:"En attente de scan d'un nouveau tag",success:"Le tag à bien été ajouté dans votre historique.",disabled:"Le NFC semble actuellement désactivé",incompatible:"Votre mobile ne supporte pas le NFC."},enable:"Activer",confirmTitle:"Etes-vous sûr ?",confirmText:"Attention ! Cette action est irréversible",yes:"Oui",no:"Non"}},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("toolbar"),n("v-content",[n("v-slide-x-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{class:e.toolbarColor,attrs:{flat:e.isHome,"clipped-left":"",app:"",dark:!e.isHome}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[e.isHome?n("v-toolbar-title",{staticClass:"center-title"},[e._v("\n                  "+e._s(e.$t("appTitle"))+"\n              ")]):n("v-toolbar-side-icon",{on:{click:e.back}},[n("v-icon",[e._v("arrow_back")])],1)],1)],1)],1)},c=[],s={name:"toolbar",computed:{isHome(){return null==this.$route.name||"home"===this.$route.name},toolbarColor(){return this.isHome?"transparent":"primary"}},methods:{back:function(){this.$router.go(-1)}}},u=s,l=(n("5c7f"),n("2877")),d=n("6544"),f=n.n(d),p=n("132d"),h=n("0789"),b=n("71d9"),v=n("706c"),m=n("2a7f"),g=Object(l["a"])(u,i,c,!1,null,"b142b84c",null);g.options.__file="toolbar.vue";var y=g.exports;f()(g,{VIcon:p["a"],VSlideYTransition:h["d"],VToolbar:b["a"],VToolbarSideIcon:v["a"],VToolbarTitle:m["a"]});var T={name:"App",components:{toolbar:y}},k=T,w=n("7496"),C=n("549c"),_=Object(l["a"])(k,o,a,!1,null,null,null);_.options.__file="App.vue";var E=_.exports;f()(_,{VApp:w["a"],VContent:C["a"],VSlideXTransition:h["c"]});var j=n("bb71"),x=n("18f2"),O=n.n(x),V=n("da5b"),A=n.n(V),N=(n("da64"),n("169a")),S=n("b0af"),q=n("99d9"),P=n("8336"),R=n("9910"),L=n("12b2"),Q=n("cfc4"),H=n.n(Q);r["a"].use(j["a"],{components:{VDialog:N["a"],VCard:S["a"],VCardText:q["b"],VBtn:P["a"],VSpacer:R["a"],VCardTitle:L["a"],VCardActions:q["a"]},iconfont:"md",lang:{locales:{fr:O.a,en:A.a},current:"fr"}}),r["a"].use(H.a);var $=n("8c4f"),B=[{path:"/",name:"home",component:()=>n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},{path:"/nfc",name:"nfc",component:()=>n.e("chunk-774b3672").then(n.bind(null,"00c5"))},{path:"/qrcode",name:"qrcode",component:()=>n.e("chunk-d8b92b5a").then(n.bind(null,"22f9"))},{path:"/history",name:"history",component:()=>n.e("chunk-cef8ac7c").then(n.bind(null,"e4bb"))}];r["a"].use($["a"]);let F=new $["a"]({routes:B,scrollBehavior(e,t,n){return n||{x:0,y:0}}});var M=F,D=n("a925");function Y(){const e=n("15a4"),t={};return e.keys().forEach(n=>{const r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){const o=r[1];t[o]=e(n)}}),t}r["a"].use(D["a"]);var I=new D["a"]({locale:"fr",fallbackLocale:"en",messages:Y()});function J(){r["a"].config.productionTip=!0,new r["a"]({router:M,i18n:I,render:e=>e(E)}).$mount("#app")}document.addEventListener("deviceready",()=>{console.log("Ready, Render the App"),J()});const U="undefined"!==typeof window.cordova;U||document.dispatchEvent(new CustomEvent("deviceready",{}))},"5c7f":function(e,t,n){"use strict";var r=n("9ceb"),o=n.n(r);o.a},"9ceb":function(e,t,n){},e088:function(e){e.exports={appTitle:"Tag Archiver",nfcTitle:"Nfc",qrcodeTitle:"QRcode",settingsTitle:"Settings",historyTitle:"History",qrcode:{scan:"Scan a QRCode",success:"The QRCode has been added to your history",error:"Error while reading your QRCode"},nfc:{waiting:"Waiting for a tag",success:"The tag has been added to your history.",disabled:"NFC is disabled",incompatible:"Your phone doesn't have an NFC chip."},enable:"Enable",confirmTitle:"Are you sure ?",confirmText:"Warning ! This action is irreversible",yes:"Yes",no:"No"}}});
//# sourceMappingURL=app.bdb364ac.js.map