<template>
    <v-container grid-list-md>

        <v-flex xs12>
            <v-data-table :headers="headers" :items="values" hide-actions class="elevation-1">
                <template slot="items" slot-scope="props">
                    <td>{{ props.item }}</td>
                </template>
            </v-data-table>
        </v-flex>

    </v-container>
</template>
<script>
export default {
  name: "History",
  data() {
    return {
      mode: "any",
      headers: [{ text: "Tag", value: "tag", sortable: false }],
      nfc: JSON.parse(localStorage.getItem("nfcScanHistory") || "[]"),
      qrcode: JSON.parse(localStorage.getItem("qrcodeScanHistory") || "[]")
    };
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
  }
};
</script>
