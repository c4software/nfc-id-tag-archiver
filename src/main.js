import Vue from "vue";
import App from "./App.vue";
import "./plugins/vuetify";
import router from "./router/";
import i18n from "./i18n/";

function init() {
  Vue.config.productionTip = true;
  new Vue({
    router,
    i18n,
    render: h => h(App)
  }).$mount("#app");
}

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  // eslint-disable-next-line
  console.log("Ready, Render the App");
  init();
});

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = typeof window.cordova !== "undefined";
if (!isCordovaApp) {
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}
