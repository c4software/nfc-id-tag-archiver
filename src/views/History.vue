<template>
    <v-container class="start" grid-list-md fill-height fluid align-start justify-start>

        <v-flex xs12>
            <v-data-table :headers="headers" :items="values" hide-actions class="elevation-1">
                <template slot="items" slot-scope="props">
                    <td>{{ props.item }}</td>
                </template>
            </v-data-table>
        </v-flex>

        <v-btn v-if="this.values.length > 0" fab flat class="floatAction" @click="showConfirm = true">
            <v-icon>delete</v-icon>
        </v-btn>

        <confirmDialog v-model="showConfirm" :title="$t('confirmTitle')" :text="$t('confirmText')" :cancelText="$t('no')" :confirmText="$t('yes')" v-on:cancelAction="() => this.showConfirm = false" v-on:confirmAction="clear" />
    </v-container>
</template>
<script>
import confirmDialog from "vuetify-vuejs-confirmdialog/src/component/VuetifyConfirm.vue";

export default {
  name: "History",
  components: { confirmDialog },
  data() {
    return {
      showConfirm: false,
      mode: "any",
      headers: [{ text: "Tag", value: "tag", sortable: false }],
      nfc: JSON.parse(localStorage.getItem("nfcScanHistory") || "[]"),
      qrcode: JSON.parse(localStorage.getItem("qrcodeScanHistory") || "[]")
    };
  },
  watch: {
    nfc: function(values) {
      localStorage.setItem("nfcScanHistory", JSON.stringify(values));
    },
    qrcode: function(values) {
      localStorage.setItem("qrcodeScanHistory", JSON.stringify(values));
    }
  },
  computed: {
    values() {
      switch (this.mode) {
        case "qrcode":
          return this.qrcode;
        case "nfc":
          return this.nfc;
        default:
          return this.nfc.concat(this.qrcode);
      }
    }
  },
  methods: {
    clear() {
      this.nfc = [];
      this.qrcode = [];
      this.showConfirm = false;
    }
  }
};
</script>

<style>
.start {
  align-items: start !important;
}
</style>

