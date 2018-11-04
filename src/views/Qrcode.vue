<template>
  <v-container align-center justify-center grid-list-md fill-height>
    <v-btn @click="doScan" color="primary">{{$t('qrcode.scan')}}</v-btn>

    <v-alert class="bottomToast" transition="fade-transition" :value="scanSuccess" type="success">{{$t('qrcode.success')}}</v-alert>
    <v-alert class="bottomToast" transition="fade-transition" :value="scanError" type="error">{{$t('qrcode.error')}}</v-alert>
  </v-container>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      scanSuccess: false,
      scanError: false,
      items: JSON.parse(localStorage.getItem("qrcodeScanHistory") || "[]")
    };
  },
  watch: {
    items: function(values) {
      localStorage.setItem("qrcodeScanHistory", JSON.stringify(values));
    },
    scanSuccess: function(state) {
      if (state) {
        setTimeout(() => {
          this.scanSuccess = false;
        }, 3000);
      }
    },
    scanError: function(state) {
      if (state) {
        setTimeout(() => {
          this.scanSuccess = false;
        }, 3000);
      }
    }
  },
  methods: {
    doScan() {
      // eslint-disable-next-line
      cordova.plugins.barcodeScanner.scan(this.scan, this.error);
    },
    scan(data) {
      if (data.text && this.items.indexOf(data.text) === -1) {
        this.items.push(data.text);
        this.scanSuccess = true;
      }
    },
    error() {
      this.scanError = true;
    }
  }
};
</script>
