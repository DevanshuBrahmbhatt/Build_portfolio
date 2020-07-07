<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
     style="background:#191919; color:#d2d2d2;"
    >
      <v-card-title>
        <strong class="headline text-justify" style="color:#d2d2d2;">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          :href="icon.link"
        >
          <v-icon large="">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2  subtitle-1 text-center">
        {{ new Date().getFullYear() }} — <strong>BuildPortfolio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
                {
                    icon:'mdi-gmail',
                    link:'mailto:devanshu.vguj@gmail.com'
                },

                {
                    icon:'mdi-phone',
                    link:'telto:+919773056943'
                },

        
                  {

                    icon:'mdi-linkedin',
                    link:'https://www.linkedin.com/in/devanshubrahmbhatt/',

                },
        
        
        
        
      ],
      
    }),
  }
</script>
