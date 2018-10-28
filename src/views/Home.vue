<template>
  <v-container grid-list-md fill-height>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs4>
          <v-btn block large flat to="nfc">NFC</v-btn>
        </v-flex>
        <v-flex xs4>
          <v-btn block large flat>QRCode</v-btn>
        </v-flex>
        <v-flex xs4>
            <v-btn flat block color="primary" to="history">Historique</v-btn>
        </v-flex>
      </v-layout>

      <v-btn fab small flat class="fixedBottom">
        <v-icon dark>settings</v-icon>
      </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.fixedBottom {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>

