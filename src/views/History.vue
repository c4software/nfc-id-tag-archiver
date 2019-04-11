<template>
    <v-container class="start" grid-list-md fill-height fluid align-start justify-start>

        <v-flex xs12>
            <v-card v-if="nfc.length > 0 || qrcode.length > 0">
                <v-card-title class="pa-1">
                    <v-spacer/>
                    <v-btn icon @click="exportData">
                        <v-icon>save_alt</v-icon>
                    </v-btn>
                    <v-btn icon @click="requestClear">
                        <v-icon color="red">delete</v-icon>
                    </v-btn>
                </v-card-title>
            </v-card>
            
            <v-data-table class="elevation-1 mt-3" v-if="nfc.length > 0" :headers="headersNfc" :items="nfc" hide-actions>
                <template slot="items" slot-scope="props">
                    <td>{{ props.item }}</td>
                </template>
            </v-data-table>
            
            <v-data-table class="elevation-1 mt-3" v-if="qrcode.length > 0" :headers="headersQrCode" :items="qrcode" hide-actions>
                <template slot="items" slot-scope="props">
                    <td>{{ props.item }}</td>
                </template>
            </v-data-table>


            <div class="text-xs-center" v-else>
                {{$t('noHistory')}}
            </div>

        </v-flex>

    </v-container>
</template>
<script>
  export default {
    name: "History",
    data() {
      return {
        mode: "any",
        headersQrCode: [{text: `${this.$t('historyTitle')} ${this.$t('qrcodeTitle')}`, value: "tag", sortable: false}],
        headersNfc: [{text: `${this.$t('historyTitle')} ${this.$t('nfcTitle')}`, value: "tag", sortable: false}],
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
    methods: {
      exportData() {
        const exportData = btoa(this.nfc.concat(this.qrcode).join("\n"));
        if (window.plugins && window.plugins.socialsharing) {
          window.plugins.socialsharing.share(null, 'export', 'data:text/csv;base64,' + exportData, null)
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

