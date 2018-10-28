<template>
    <div>
      <v-toolbar :class="toolbarColor" :flat="isHome" clipped-left app :dark="!isHome">
          <v-slide-y-transition mode="out-in">
                  <v-toolbar-side-icon  v-if="!isHome" @click="back">
                      <v-icon>arrow_back</v-icon>
                  </v-toolbar-side-icon>
                  <v-toolbar-title v-else class="center-title">
                      Tag Archiver
                  </v-toolbar-title>
          </v-slide-y-transition>
      </v-toolbar>
    </div>
</template>

<script>
export default {
  name: "toolbar",
  computed: {
    isHome() {
      return this.$route.name == null || this.$route.name === "home";
    },
    toolbarColor() {
      return this.isHome ? "transparent" : "primary";
    }
  },
  methods: {
    back: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.center-title {
  width: 100%;
  text-align: center;
}
</style>

