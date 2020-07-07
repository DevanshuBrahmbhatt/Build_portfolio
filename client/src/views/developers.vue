
<template>
  <v-app>
    <core-header />

    <v-container>
      <div class="display-2 text-center" style="color:#d2d2d2!important;">
        Web Developers
        <br />
        <br />
      </div>
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
          <v-card class="pa-2" outlined tile :loading="loading">
            <v-img height="250" :src="item.src"></v-img>

            <v-card-title
              class="headline font-weight-bold"
              style="background:#d2d2d2!important;  color:#191919"
              v-text="item.name"
            ></v-card-title>

            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>

            <v-card-title class="headline">Social Media</v-card-title>

            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <v-btn class="ma-2" color="#191919" :href="item.linkdin" target="_blank" dark>
                <v-icon dark left>mdi-linkedin</v-icon>
              </v-btn>

              <v-btn class="ma-2" color="#191919" :href="item.instagram" target="_blank" dark>
                <v-icon dark left>mdi-instagram</v-icon>
              </v-btn>

              <v-btn class="ma-2" color="#191919" :href="item.facebook" target="_blank" dark>
                <v-icon dark left>mdi-facebook</v-icon>
              </v-btn>

              <v-btn class="ma-2" color="#191919" :href="item.gmail" target="_blank" dark>
                <v-icon dark left>mdi-gmail</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br />
      <br />

      <div class="display-2 text-center" style="color:#d2d2d2!important;">
        Content Writer
        <br />
        <br />
      </div>
      <v-row justify="center">
        <v-col v-for="(item, i) in itemss" :key="i" cols="12" md="4">
          <v-card class="pa-2" outlined tile :loading="loading">
            <v-img height="250" :src="item.src"></v-img>

            <v-card-title
              class="headline font-weight-bold"
              style="background:#d2d2d2!important;  color:#191919"
              v-text="item.name"
            ></v-card-title>

            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>

            <v-card-title class="headline">Social Media</v-card-title>

            <v-divider class="mx-4"></v-divider>
            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <v-btn class="ma-2" color="#191919" :href="item.linkdin" target="_blank" dark>
                <v-icon dark left>mdi-linkedin</v-icon>
              </v-btn>

              <v-btn class="ma-2" color="#191919" :href="item.instagram" target="_blank" dark>
                <v-icon dark left>mdi-instagram</v-icon>
              </v-btn>

              <v-btn class="ma-2" color="#191919" :href="item.facebook" target="_blank" dark>
                <v-icon dark left>mdi-facebook</v-icon>
              </v-btn>

              <v-btn class="ma-2" color="#191919" :href="item.gmail" target="_blank" dark>
                <v-icon dark left>mdi-gmail</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <br />

    <core-footer />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreHeader: () => import("@/components/layout/header"),
    CoreFooter: () => import("@/components/layout/footer")
  },
  data: () => ({
    loading: false,
    selection: 1,
    items: [
      {
        src:
          "https://lh3.googleusercontent.com/pw/ACtC-3dATRRWgEoCkqJBohfUEoNAfvg8vnbQl_VBGwr09Kfq1gInvyqM0jXHHDphD7r9Nua0xPaIHGg7vkm6gFDblyS6n35mOk_jnu29rAXW2GYAdmfJ20v1mgl4nbBKDnaZA1qMP67mILn7Ji7V6X1sPmZ37g=w1280-h780-no?authuser=0",
        name: "Devanshu Brahmbhatt",
        linkdin: "https://www.linkedin.com/in/devanshubrahmbhatt/",
        facebook: "https://www.facebook.com/devanshu.brahmbhatt",
        instagram: "https://www.instagram.com/devanshu.brahmbhatt/",
        gmail: "mailto:devanshu.vguj@gmail.com"
      },
      {
        src:
          "https://lh3.googleusercontent.com/pw/ACtC-3c1TOJGpnRl7Kuh7RSMb-Djav5OdgL2Ur8VicEulwXcE_2by9PYb8J9_QXW83rJIfhXqlR-qAu69krOdiVsPf1tthyMI8Mp_hUkjUKllBEZne-K-cODU25SpaCh9q7JOj0CKmjvJBZ816mSQ7-wMeGEtw=w1280-h791-no?authuser=0",
        name: "Jaimin Desai",
        linkdin: "https://www.linkedin.com/in/jaimin-desai-6a3378176/",
        facebook: "https://www.facebook.com/jaimin.desai.1088",
        instagram: "https://www.instagram.com/jd_jaku/",
        gmail: "mailto:desaijaimin5@gmail.com"
      },

      {
        src:
          "https://lh3.googleusercontent.com/pw/ACtC-3cwN18E26W4YZ57MnHU1nYjMdbGJHrtvQ1rNAajvwPjQTsVW1XU6KO2go_emA9eaJPDRnUDbFdvZCM4S92-BNhivxRbZEadtCoabJwgOvr2FqvPxmj019x9NE6cEuomDpRUzz4TPtEhj5VJ7sBBoM25uA=w640-h688-no?authuser=0",
        name: "Sachin Thakkar",
        linkdin: "https://www.linkedin.com/in/sachin-thakkar-20a464154/",
        facebook: "https://www.facebook.com/thakkar.sachin.100",
        instagram: "https://www.instagram.com/mr_ts16/",
        gmail: "mailto:sachinthakkarst1@gmail.com"
      }
    ],

    itemss: [
      {
        src:
          "https://lh3.googleusercontent.com/pw/ACtC-3eXnp0ILrSrtJqj4nhK9X1AkSPksG1zUDfelVxn2jrtO8mnGZlqtOH5X9LL_Lz3rtkIjw7gCawxiVvOLOHvie7jeFurBdFc-MKHyk2EP-6NnCqqsnvw1o1xUY_V7WBm-IHzSm5IJMxnhX_UhvN3pnA-Nw=w930-h984-no?authuser=0",
        name: "Ritesh Nair",
        linkdin: "https://www.linkedin.com/in",
        facebook: "https://www.facebook.com/ritesh.nair.7165",
        instagram: "https://instagram.com/ritesh.prpoj?igshid=1a9x02mlpk662",
        gmail: "mailto:riteshnair2000@gmail.com"
      }
    ]
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
