<template>
  <v-app>
    <core-header />
    <v-container>
      <div
        class="display-2 font-weight-medium"
        style="color:#d2d2d2!important;"
      >Leader Board For the week</div>
      <v-divider class="mx-4" dark></v-divider>
      <v-divider class="mx-4" dark></v-divider>
      <v-divider class="mx-4" dark></v-divider>

      <br />
      <br />

      <v-hover>
        <template v-slot="{ hover }">
          <div :class="`elevation-${hover ? 24 : 6}`" class="transition-swing" outlined>
            <v-row align="center" class="spacer" no-gutters>
              <v-col col="4" lg="4">
                <v-avatar size="150px">
                  <v-img src="../assets/devanshu.jpg" alt="profile"></v-img>
                </v-avatar>
              </v-col>

              <v-col col="6" lg="6">
                <div class="display-1" style="color:#d2d2d2!important;">Devanshu Brahmbhatt</div>
              </v-col>

              <v-col col="2" lg="2">
                <v-btn color="#d2d2d2" class="subtitle-1 font-weight-medium">View Profile</v-btn>
              </v-col>
            </v-row>
          </div>
        </template>
      </v-hover>
    </v-container>

    <core-footer />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreHeader: () => import("@/components/layout/header"),
    CoreFooter: () => import("@/components/layout/footer")
  },

  data: () => ({})
};
</script>
