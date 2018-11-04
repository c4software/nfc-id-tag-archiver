// Require Cordova plugin : phonegap-nfc

<template>
  <v-container align-center justify-center grid-list-md fill-height text-xs-center>

    <div v-if="isCompatible && !nfcDisabled">
      <v-fade-transition mode="out-in">
        <v-icon color="success" size="50" v-if="scanSuccess">check_circle</v-icon>
        <v-progress-circular indeterminate size="50" v-else color="primary" />
      </v-fade-transition>

      <p class="pa-4">{{$t('nfc.waiting')}}</p>
    </div>
    <div v-else-if="nfcDisabled">
      <p class="pa-4">
        {{$t('nfc.disabled')}}
      </p>
      <v-btn @click="showSettings" color="primary">{{$t('enable')}}</v-btn>
    </div>
    <div v-else>
      <p class="pa-4">
        {{$t('nfc.incompatible')}}
      </p>
    </div>

    <v-alert class="bottomToast" transition="fade-transition" :value="scanSuccess" type="success">{{$t('nfc.success')}}</v-alert>

  </v-container>
</template>

<script>
export default {
  name: "nfc",
  data() {
    return {
      scanSuccess: false,
      isCompatible: true,
      nfcDisabled: false,
      items: JSON.parse(localStorage.getItem("nfcScanHistory") || "[]")
    };
  },
  watch: {
    items: function(values) {
      localStorage.setItem("nfcScanHistory", JSON.stringify(values));
    },
    scanSuccess: function(state) {
      if (state) {
        setTimeout(() => {
          this.scanSuccess = false;
        }, 3000);
      }
    }
  },
  mounted() {
    this.registerTagEvent();
  },
  beforeDestroy() {
    this.unregisterTagEvent();
  },
  methods: {
    registerTagEvent() {
      document.removeEventListener("resume", this.registerTagEvent, false);

      if (typeof nfc !== "undefined") {
        // eslint-disable-next-line
        nfc.addTagDiscoveredListener(
          this.scan,
          this.registerSuccess,
          this.registerError
        );
      } else {
        this.registerError();
      }
    },
    registerSuccess() {
      this.isCompatible = true;
      this.nfcDisabled = false;
    },
    unregisterTagEvent() {
      if (typeof nfc !== "undefined") {
        // eslint-disable-next-line
        nfc.removeTagDiscoveredListener(this.scan);
      }
    },
    registerError(e) {
      if (e === "NFC_DISABLED") {
        this.isCompatible = true;
        this.nfcDisabled = true;
      } else {
        this.isCompatible = false;
        this.nfcDisabled = false;
      }
    },
    showSettings() {
      // eslint-disable-next-line
      nfc.showSettings();
      document.addEventListener("resume", this.registerTagEvent, false);
    },
    scan(nfcEvent) {
      let tag = nfcEvent.tag;
      if (tag) {
        // eslint-disable-next-line
        let tagId = nfc.bytesToHexString(tag.id);
        if (this.items.indexOf(tagId) === -1) {
          this.items.push(tagId);
          this.scanSuccess = true;
        }
      }
    }
  }
};
</script>
