<template>
  <v-app>
    <router-view />
  </v-app>
</template>


<script>
export default {
  name: "app",

  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Space Mono", monospace;
  font-size: 20px;
  background: #191919;
}

.theme--light.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: #d2d2d2 !important;
}
</style>
