<template>
    <v-container align-center justify-center grid-list-md fill-height text-xs-center>
        <div>
            <v-fade-transition mode="out-in">
                <v-icon color="success" size="50" v-if="scanSuccess">check_circle</v-icon>
                <v-progress-circular indeterminate size="50" v-else color="primary" />
            </v-fade-transition>

            <p class="pa-4">{{$t('nfc.waiting')}}</p>
        </div>

            <v-alert class="bottomToast" transition="fade-transition" :value="scanSuccess" type="success">
                {{$t('nfc.success')}}
            </v-alert>

    </v-container>
</template>

<script>
export default {
  name: "nfc",
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
  }
};
</script>

<style scoped>
.bottomToast {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: -1px;
}
</style>

