<template>
  <div id="header" > 
  


    <v-toolbar 
    color="#191919"
      :extended="extended"
      :prominent="prominent"
      :dense="dense"
      :collapse="collapse"
      :flat="flat"
      :extension-height="extensionHeight"
        
    >
      <!-- <v-toolbar-title class="white--text  display-2">  Portfolio    </v-toolbar-title> -->


      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text ><router-link to="/"  class=" subtitle-2 font-weight-medium" style="color:#d2d2d2!important;" >Home</router-link></v-btn>
        <v-btn text ><router-link to="/developers"  class=" subtitle-2 font-weight-medium" style="color:#d2d2d2!important;" >Developers</router-link></v-btn>
        <v-btn text><router-link to="/themes" class=" subtitle-2 font-weight-medium" style="color:#d2d2d2!important;" >Themes</router-link></v-btn>
         <v-btn  text  v-if="user==true"   href="https://www.buildportfolio.in/api/logout"  class="subtitle-2 font-weight-medium" style="color:#d2d2d2!important;"><U> Log Out</U></v-btn>
        <v-btn text v-else   href="https://www.buildportfolio.in/api/auth/google" class="subtitle-2 font-weight-medium" style="color:#d2d2d2!important;"><U> Log In</U></v-btn>
        
        
      </v-toolbar-items>

   


    </v-toolbar>
  </div>
</template>

<script>


import axios from 'axios';
import url from '../../url';

  export default {



   mounted(){


    axios.
    get(url.url+'/api/getuser')
    .then((response)=>{
     this.user = true
     console.log(response.data.length);
    })
    
    .catch((err)=>{
      console.log(err);
    })
  },




    data: () => ({
      extended: true,
      extendedSlot:false,
      prominent: false,
      dense: false,
      collapse: false,
      flat: true,
      extensionHeight: 40,
      user:false
     
      
    }),
  }
</script>

<style scoped>

</style>
