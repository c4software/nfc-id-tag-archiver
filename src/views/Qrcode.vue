<template>
  <v-container align-center justify-center grid-list-md fill-height>
    <v-btn @click="doScan" color="primary">{{$t('qrcode.scan')}}</v-btn>

    <v-alert class="bottomToast" transition="fade-transition" :value="scanSuccess" type="success">{{$t('qrcode.success')}}</v-alert>

  </v-container>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      scanSuccess: false,
      items: JSON.parse(localStorage.getItem("qrcodeScanHistory") || "[]")
    };
  },
  watch: {
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
      }
    }
  },
  methods: {
    doScan(data) {
      if (data) {
        this.items.push(data);
        this.scanSuccess = true;
      }
    }
  }
};
</script>
