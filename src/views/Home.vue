<template>
  <v-container grid-list-md justify-center>
      <v-layout row fill-height wrap>
        <v-flex xs6>
          <v-btn block large flat>NFC</v-btn>
        </v-flex>
        <v-flex xs6>
          <v-btn block large flat>QRCode</v-btn>
        </v-flex>
        <v-flex xs12>
            <v-btn flat block color="primary" to="/history">Historique</v-btn>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'home',
}
</script>
