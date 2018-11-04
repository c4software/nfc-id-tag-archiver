import Vue from "vue";
import Vuetify from "vuetify/lib";
import fr from "vuetify/es5/locale/fr";
import en from "vuetify/es5/locale/en";
import "vuetify/src/stylus/app.styl";
import {
  VCard,
  VCardText,
  VDialog,
  VBtn,
  VSpacer,
  VCardTitle,
  VCardActions
} from "vuetify/lib";
import confirmDialog from "vuetify-vuejs-confirmdialog";

Vue.use(Vuetify, {
  components: {
    VDialog,
    VCard,
    VCardText,
    VBtn,
    VSpacer,
    VCardTitle,
    VCardActions
  },
  iconfont: "md",
  lang: {
    locales: { fr, en },
    current: "fr"
  }
});

Vue.use(confirmDialog);
