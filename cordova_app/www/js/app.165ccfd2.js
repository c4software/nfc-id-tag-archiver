(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"c5ea2b56","chunk-36efb0b7":"420fe3a0","chunk-5347e498":"2720e4e7","chunk-582b1b43":"c7b9570a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-36efb0b7":1,"chunk-5347e498":1,"chunk-582b1b43":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-36efb0b7":"b1ecc611","chunk-5347e498":"b1ecc611","chunk-582b1b43":"637edfbf"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15a4":function(e,t,n){var r={"./en.json":"e088","./fr.json":"2394"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="15a4"},2394:function(e){e.exports={appTitle:"Archivage de tags",nfcTitle:"Nfc",qrcodeTitle:"QRcode",settingsTitle:"Paramètres",historyTitle:"Historique",qrcode:{scan:"Scanner un QRCode",success:"Le QRCode a été ajouté à votre historique",error:"Lecture du QRCode impossible"},nfc:{waiting:"En attente de scan d'un nouveau tag",success:"Le tag à bien été ajouté dans votre historique.",disabled:"Le NFC semble actuellement désactivé",incompatible:"Votre mobile ne supporte pas le NFC."},enable:"Activer",confirmTitle:"Etes-vous sûr ?",confirmText:"Attention ! Cette action est irréversible",yes:"Oui",no:"Non"}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("toolbar"),n("v-content",[n("v-slide-x-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{class:e.toolbarColor,attrs:{flat:e.isHome,"clipped-left":"",app:"",dark:!e.isHome}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[e.isHome?n("v-toolbar-title",{staticClass:"center-title"},[e._v("\n                  "+e._s(e.$t("appTitle"))+"\n              ")]):n("v-toolbar-side-icon",{on:{click:e.back}},[n("v-icon",[e._v("arrow_back")])],1)],1)],1)],1)},c=[],u=(n("7f7f"),{name:"toolbar",computed:{isHome:function(){return null==this.$route.name||"home"===this.$route.name},toolbarColor:function(){return this.isHome?"transparent":"primary"}},methods:{back:function(){this.$router.go(-1)}}}),s=u,l=(n("5c7f"),n("2877")),d=n("6544"),f=n.n(d),p=n("132d"),h=n("0789"),b=n("71d9"),v=n("706c"),m=n("2a7f"),g=Object(l["a"])(s,i,c,!1,null,"b142b84c",null),y=g.exports;f()(g,{VIcon:p["a"],VSlideYTransition:h["d"],VToolbar:b["a"],VToolbarSideIcon:v["a"],VToolbarTitle:m["a"]});var T={name:"App",components:{toolbar:y}},k=T,w=n("7496"),C=n("549c"),E=Object(l["a"])(k,o,a,!1,null,null,null),j=E.exports;f()(E,{VApp:w["a"],VContent:C["a"],VSlideXTransition:h["c"]});var x=n("bb71"),_=n("18f2"),O=n.n(_),V=n("da5b"),A=n.n(V),N=(n("da64"),n("169a")),S=n("b0af"),q=n("99d9"),P=n("8336"),R=n("9910"),L=n("12b2"),Q=n("cfc4"),H=n.n(Q);r["a"].use(x["a"],{components:{VDialog:N["a"],VCard:S["a"],VCardText:q["b"],VBtn:P["a"],VSpacer:R["a"],VCardTitle:L["a"],VCardActions:q["a"]},iconfont:"md",lang:{locales:{fr:O.a,en:A.a},current:"fr"}}),r["a"].use(H.a);var $=n("8c4f"),B=[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/nfc",name:"nfc",component:function(){return n.e("chunk-36efb0b7").then(n.bind(null,"00c5"))}},{path:"/qrcode",name:"qrcode",component:function(){return n.e("chunk-5347e498").then(n.bind(null,"22f9"))}},{path:"/history",name:"history",component:function(){return n.e("chunk-582b1b43").then(n.bind(null,"e4bb"))}}];r["a"].use($["a"]);var F=new $["a"]({routes:B,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),M=F,D=(n("4917"),n("ac6a"),n("a925"));function Y(){var e=n("15a4"),t={};return e.keys().forEach(function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n)}}),t}r["a"].use(D["a"]);var I=new D["a"]({locale:"fr",fallbackLocale:"en",messages:Y()});function J(){r["a"].config.productionTip=!0,new r["a"]({router:M,i18n:I,render:function(e){return e(j)}}).$mount("#app")}document.addEventListener("deviceready",function(){console.log("Ready, Render the App"),J()});var U="undefined"!==typeof window.cordova;U||document.dispatchEvent(new CustomEvent("deviceready",{}))},"5c7f":function(e,t,n){"use strict";var r=n("e695"),o=n.n(r);o.a},e088:function(e){e.exports={appTitle:"Tag Archiver",nfcTitle:"Nfc",qrcodeTitle:"QRcode",settingsTitle:"Settings",historyTitle:"History",qrcode:{scan:"Scan a QRCode",success:"The QRCode has been added to your history",error:"Error while reading your QRCode"},nfc:{waiting:"Waiting for a tag",success:"The tag has been added to your history.",disabled:"NFC is disabled",incompatible:"Your phone doesn't have an NFC chip."},enable:"Enable",confirmTitle:"Are you sure ?",confirmText:"Warning ! This action is irreversible",yes:"Yes",no:"No"}},e695:function(e,t,n){}});
//# sourceMappingURL=app.165ccfd2.js.map