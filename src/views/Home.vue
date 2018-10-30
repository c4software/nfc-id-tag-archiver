<template>
  <v-container grid-list-md fluid fill-height align-center justify-center>
    <div>
      <v-layout row wrap="">
        <v-flex xs12 text-xs-center>
          <v-icon size="120">nfc</v-icon>
        </v-flex>

        <v-flex xs6>
          <v-btn block large flat to="nfc">{{$t('nfcTitle')}}</v-btn>
        </v-flex>

        <v-flex xs6>
          <v-btn block large flat to="qrcode">{{$t('qrcodeTitle')}}</v-btn>
        </v-flex>

        <v-flex xs12>
          <v-btn flat block to="history" color="primary">{{$t('historyTitle')}}</v-btn>
        </v-flex>

        <v-btn fab flat class="settingsAction">
          <v-icon>settings</v-icon>
        </v-btn>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "home"
};
</script>