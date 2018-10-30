<template>
  <v-container align-center justify-center grid-list-md fill-height>
    <v-btn @click="doScan" color="primary">Scan a tag</v-btn>

    <v-alert class="bottomToast" transition="fade-transition" :value="scanSuccess" type="success">{{$t('qrcode.success')}}</v-alert>

  </v-container>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      scanSuccess: false
    };
  },
  watch: {
    scanSuccess(state) {
      if (state) {
        // If state success
        setTimeout(() => {
          // After delay reset the state to waiting new scan
          this.scanSuccess = false;
        }, 3000);
      }
    }
  },
  methods: {
    doScan() {
      this.scanSuccess = true;
    }
  }
};
</script>
