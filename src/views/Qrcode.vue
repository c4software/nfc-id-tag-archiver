<template>
    <v-container grid-list-md fill-height>
        <v-layout align-center justify-center row fill-height>
            <v-btn @click="doScan" color="primary">Scan a tag</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "History",
  methods: {
    doScan() {}
  }
};
</script>
