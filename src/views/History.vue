<template>
    <v-container class="start" grid-list-md fill-height fluid align-start justify-start>

        <v-flex xs12>
            <v-card>
                <v-card-title class="pa-1" v-if="this.values.length > 0">
                    <v-spacer/>
                    <v-btn icon @click="exportData">
                        <v-icon>save_alt</v-icon>
                    </v-btn>
                    <v-btn icon @click="requestClear">
                        <v-icon color="red">delete</v-icon>
                    </v-btn>

                </v-card-title>
                <v-card-text class="pa-1">
                    <v-data-table :headers="headers" :items="values" hide-actions>
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item }}</td>
                        </template>
                    </v-data-table>
                </v-card-text>

            </v-card>
        </v-flex>

    </v-container>
</template>
<script>
  export default {
    name: "History",
    data() {
      return {
        mode: "any",
        headers: [{text: "Historique", value: "tag", sortable: false}],
        nfc: JSON.parse(localStorage.getItem("nfcScanHistory") || "[]"),
        qrcode: JSON.parse(localStorage.getItem("qrcodeScanHistory") || "[]")
      };
    },
    watch: {
      nfc: function (values) {
        localStorage.setItem("nfcScanHistory", JSON.stringify(values));
      },
      qrcode: function (values) {
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
      exportData() {
        const exportData = btoa(this.nfc.concat(this.qrcode).join("\n"));
        if (window.plugins && window.plugins.socialsharing) {
          window.plugins.socialsharing.share(null, 'Android filename', 'data:text/plain;base64,' + exportData, null)
        } else {
          console.error("Working only with Cordova")
        }
      },
      requestClear() {
        this.$vuetifyConfirmDialog
          .open(
            this.$t("confirmTitle"),
            this.$t("confirmText"),
            this.$t("no"),
            this.$t("yes")
          )
          .then(state => {
            if (state) {
              this.nfc = [];
              this.qrcode = [];
            }
          });
      }
    }
  };
</script>

<style>
    .start {
        align-items: start !important;
    }
</style>

