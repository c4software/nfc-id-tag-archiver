import Vue from "vue";
import Vuetify from "vuetify/lib";
import fr from "vuetify/es5/locale/fr";
import en from "vuetify/es5/locale/en";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  lang: {
    locales: { fr, en },
    current: "fr"
  }
});
