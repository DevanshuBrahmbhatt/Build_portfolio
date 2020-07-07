<template>
  <v-app>
    <core-header />

    <v-container>
      <div class="display-2 text-center" style="color:#d2d2d2!important;">Themes</div>
      <br />

      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12" md="6" lg="6">
          <v-img :src="item.src"></v-img>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title
                class="headline mb-1 font-weight-black text-center"
                style="color:#d2d2d2!important;"
                v-text="item.name"
              ></v-list-item-title>
              <v-list-item-subtitle
                class="headline mb-1 text-center"
                style="color:#d2d2d2!important;"
                v-text="item.description"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions class="d-flex justify-center">
            <v-btn
              :href="item.link"
              target="_blank"
              class="subtitle-1 font-weight-bold"
              style="color:#191919!important; background:#afd3d3;"
              large
            >Demo</v-btn>

            <v-btn
              :href="item.create + user_id"
              v-if="user===true"
              class="subtitle-1 font-weight-bold"
              style="color:#191919!important; background:#afd3d3"
              large
            >Create</v-btn>

            <v-btn
              :href="item.login"
              v-else
              class="subtitle-1 font-weight-bold"
              style="color:#191919!important; background:#afd3d3"
              large
            >Create</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <br />

    <core-footer />
  </v-app>
</template>


<script>
import url from "../url";
import axios from "axios";

export default {
  mounted() {
    axios
      .get(url.url + "/api/getuser")
      .then(response => {
        this.user = true;
        this.user_id = response.data;
        console.log(this.user_id);
      })

      .catch(err => {
        console.log(err);
      });
  },

  components: {
    CoreHeader: () => import("@/components/layout/header"),
    CoreFooter: () => import("@/components/layout/footer")
  },
  data: () => ({
    loading: false,
    selection: 1,
    user: false,
    user_id: "",
    items: [
      {
        name: "1. Concept",
        src:
          "https://lh3.googleusercontent.com/N3Gq2-QuouL5WR6WKQv6kHVQ9sShpCO6TeMHhS-BNGdUIemTnGwAt5bs4Gs0j3vCA8f_roSX4G0ffBJmG1PVuNS32J5uAb4a0K5BYjRTjJoXdpKg_VVqnHtaStl7SjhRQA7TFT8rJUQ7fH95jzef0r-PLGFIX8xTnIJ-26eSY7KknpNwN1AyFNxcNBoK-fqaVwVuyN8mE0typ0-PYRDUR0NajDJUn2n125hqFa7TQQyvZFYvi0SOqYMFqwLSnXZjG9z4kMLf1rIQj1LzjzWrQgGGa5bukbyRpuxx7_1w-CX8TGrQS6am0tEPeAgefwirMa9B6PEp97FsbMtzA2DOaIqG9wzgzkkw8hIKN2G8oVqPAhLt3Oj34y7rPrUcXN3afEaD2LZDVXW7eMkxi-l3j8STP9EzOWllqBMo9Tjw31gDwVr0puN_OF2c_2U1MfsVyq9hfzdgl6OO4aQj8pBO2JYg-cA4ftzPTWYLPOL_H6ew9TyirPL_4qIYndpp4MFJM_hFuW1DzEyqN3ZVxrbruOUan474urS_AFI6VeZA92-xKbcvTDdgZNlggJNEvgUZ1jq_VlvBPI1ZH40FrFzfjxvsrxV48_eXTBB9TS9pewUY2ujY_5Om9HntqVRrCauBcZ6C3oJBKLNac8AZucuBuUQBUazd9xe4B4fc89PYq4zFpjItJPJOWkiAmUYUog=w462-h325-no?authuser=0",
        description: "Simple yet proficient",
        link: "/#/1/john2",
        create: "/#/create/1/",
        login: `${url.url}/api/auth/google`
      },
      {
        name: "2. Iconic",
        src:
          "https://lh3.googleusercontent.com/t0vvLDjkz_mpx2uzg6Covh156hRCbfv9LaIYrRkuH2s916xuNyuj_l3tne4BJKUU0nRngpxpvswNPuRjhUp65hThPmRNGTRdwX6J5Ms-w1kbg3hUhfmsceFYQeoSyj-CIinMoD12jkQTmzVqzb5w4aUmANn1NlxDcDhSt4FM7KWi7RGZ_DnVeiUff15_4zPHi23BwEYr20Wf6BRyuYSAbZQs8LYz6qt80t5x08UXBLboWCqoLQljVLoYrgvE_H3XQgapSTLMUSvtAg4lwngTIiqIspV59LyZkfAJWMEV0aOaxTOdQNlY5YX13qsFbqr2OvGs5oAEAeEgQCg1mwA4X6Py9KL2PcaqvgTIesyiucp7TACIVMJov9DvjIwUS_lpE2WFPlNCb1gXJog70MalkCn8pcAa7vpC-qkFVR0r5E9vPVbfuFNiS5IFOjmU3azEhiKZHFB8rMKVbrroYGHGBfvn0KkFyEPeDkikBZz2B-35--S4br5gT1tqvC45jkk1eUISV3N68TL8zu0GZas5qiDf_-qSi2Vb0epNNvbTBoTdu_6sUZ98pfB1s0_gYhgwbVofZi9MCGNjyiAOgG1PwZg6e59wwJ5ZhEWPu4Ngi29gh4GrlVKgNu8mKgXcUvcPBzfQvFagWaaeftcmuQt6KQS1PRTqnNlPh7ttuV45Juo0mhYcE9fCMwQWOw8ymw=w462-h325-no?authuser=0",
        description: "Overcast is the new Light",
        link: "/#/2/john2",
        create: "/#/create/2/",
        login: `${url.url}/api/auth/google`
      },

      {
        name: "3. Enfold",
        src:
          "https://lh3.googleusercontent.com/aSLuDXpmiQ2_eohTwVTKAeFNRbIrRC7ede5Rzbq-PM0vhfawyCmdwf-oZfweYcIreU6ndBzwrWpiG47pDP_L-ELypm1l6L0yKb8m5vLj_SmBPe9M0ATbWt3cvQR8QxMBmGhHTk2o9Lt19ip18SUFQc_3u-rijdHdZOWEhBkQ5jZ_ibBRfRL_1GKqJxJvI2k1J6pUDVPxyN8Eo0S7Bk4hpSQ88peazT4C3hN2sw4Q0xgFJ0dnn0iAtv9FLdKXraUVbD1JZRXN7VnQQ-pLFLHO-4g0Js9yAZpOh7xKgO150AHl7rQFX_-HbMORrnFhAUkoENLK4a5xiVGBUmT5a1vnYgGlk80sX9lEVE-5BMgZJpOig4dUI2R7Yae3jIk-dfl2j15VCy2js3MWJpljeD4UkUl7ZoVyBpA3PAc7u9_MSvNt4lt6jxVIhg1_TkNNbohuKIoTozlhZsI3AkrYXeAcTJ5aGPSIKP-pxP7-fV9uRqVZY19XQbHwgVheNFCOaaUIcjG3BwzOz9Zg1JDG_xRkcRY9gAyqH6s7R-5z3dxPA88-TWryInfRtiSh_AJZJt_IEpzpv4WG9d19YnYlDWK-kqItLDOK6zEKXhwe0GZX_Q5HvcNNt3Rgbo-mtT_dqoxNMQHOuOf3JqltEDJXjivwTFqUwPHd0U5BBgdlVv9DXeVge2eyJaoGpuzT6r0rDA=w462-h325-no?authuser=0",
        description: "Illustrated with creativity ",
        link: "/#/3/john2",
        create: "/#/create/3/",
        login: `${url.url}/api/auth/google`
      },

      {
        name: "4. Cubic",
        src:
          "https://lh3.googleusercontent.com/i6CZOhK366fN3IjkNg782Abu4VqqxsA1pw1KmZZrO7FRZhx4YqaludTs8dgVzRh_BEhteHoBeFeALTAc7JyptxloxCKj8qePTHVobSNeqyCo71yOIOCmzYZr_o7Tuitn8-7U7Z4o04BemKjtdc7toM18O3ZBAxxQPKgd8Fddk3NSlcj8G6RXVqdneZu_DWrHj_DpuA7qGBC6eQiMaUs1kp-qAi2CVZGlTABwx8jcPnm0j5-9ynAK97j4YCEvEMaq_s6Jgpckx06JbTmrJSuQSusKEwPMAQU1V6XakP34wRRUr3AJgJLxscv2CiWOG3_Ip8yXkP8ubgE6DjpOrsTIWDP9XdRxkIvIBRFnRANfdL5E3p2sTmxcj9uhgPi4HWnb0h-ADxAuQdkMpqpBfLTvNziIy7vdkxzwI1ICjeK0JdA5liIbB0BeEvD8wCMeumu2dLa11nYZX0wGSKP8nnmndncmGhlbSn272N-EX-S2l0rLQzBapzKMv7CnJY9lDJQZLE_15dNWxwIO25YULaJFVBOoQKqomvVtIVTFQwpOfI9EFkOUFdhj2TslrUQrMVyfLczFs_RPUrT5AGqbr375ivKAnrYwgIkMPoTZfFN5cSvKUTc0mkd_ZgHVlsg3AL93f8rcCLihPff-Unn-yOq5QIZ7DlzABo4slSDoj8BZGRb8T3YHZP9B23nIO4FpaQ=w462-h325-no?authuser=0",
        description: "Organized with chronology",
        link: "/#/4/john2",
        create: "/#/create/4/",
        login: `${url.url}/api/auth/google`
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
