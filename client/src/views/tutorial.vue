<template>
  <v-app>
    <core-header />
    <v-container fluid>
      <!-- <div class="display-2 font-weight-bold " style="color:#d2d2d2!important;">Welcome to  Home <span class="white--text">  Portfolio </span> </div> -->

      <!--   
<div class="display-1 mb-3" style="color:#d2d2d2!important;">Why You Need Good Portfolio?</div>

<div class="headline " style="color:#646464"><p>Portfolios are a great way to demonstrate the competencies you
   would list on a resume or talk about in an interview they allow you to show and not just tell. During a job search, the portfolio showcases your work  
  to potential employers. It presents evidence of your relevant skills and abilities. Having 
  an issue building your resume? BuildPortfolio will help you with that. </p></div>

<br>

  <div class="display-1 mb-3" style="color:#d2d2d2!important;">Why us?</div>
<div class="headline " style="color:#646464"><p>With BuildPorfolio there is no further need of any
   customization to be made by the user. Other website's  alteration of  the HTML & CSS is to be done by the
    user while with BuildPortfolio, you can all depend on us with impressive templates and hassle free editing 
    of just a single form, and you have created an ingenious portfolio within minutes.</p>
      </div>-->

      <!-- <v-col
        lg="5"
        md="5"
        sm="12"
    
 

      >-->
      <!-- <v-img
                                                      src="../assets/build.png"
                                                      alt="portfolio"
                                                      class="text-center"

                                                      
                                                      
      ></v-img>-->
      <!-- </v-col> -->

      <div class="text-center">
        <v-sheet color="#181818" height="300">
          <div class="display-2" style="color:#d2d2d2;">
            <br />Make Your Profile Great With us!!
          </div>
          <br />
          <div
            class="subtitle-1 text-center"
            style="color:#666666;"
          >Everything We Do Is Determined By Portfolio</div>
        </v-sheet>
      </div>

      <v-sheet color="grey lighten-4" :elevation="20">
        <v-row>
          <v-col lg="12">
            <div class="display-3 font-weight-bold" style="color:#272729!important;">
              <br />
              <br />Simple Yet, Powerful
            </div>
          </v-col>
        </v-row>

        <v-container>
          <v-row>
            <v-col lg="7" cols="12">
              <div class="display-1 mb-3" style="color:#272729!important;">
                <br />
                <br />Design, Details and Done
              </div>
              <div class="headline text-justify" style="color:#b5acac">
                <p class="text-justify mb-2">1. Choose a professional portfolio template.</p>
                <p class="text-justify mb-2">2. Build your portfolio.</p>
                <p class="text-justify mb-2">3. Get the URL to your portfolio.</p>
                <br />
              </div>
            </v-col>

            <v-col lg="5" cols="12">
              <div class="display-1" style="color:#272729!important;">
                <br />
                <br />Quick Setup
              </div>
              <br />

              <v-btn href="/#/themes" color="#00828C" dark large>Create</v-btn>
            </v-col>
          </v-row>

          <div class="display-2 text-center font-weight-black">
            <br />
            <br />What kind of portfolio website will you create?
          </div>
          <br />

          <v-row>
            <v-col lg="5" sm="12" md="5" offset-lg="1">
              <v-img src="../assets/cocept.png"></v-img>
            </v-col>

            <v-col lg="5" md="5" sm="12" offset-lg="1">
              <v-img src="../assets/iconic.png"></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col lg="5" md="5" sm="12" offset-lg="1">
              <v-img src="../assets/enfold.png"></v-img>
            </v-col>

            <v-col lg="5" md="5" sm="12" offset-lg="1">
              <v-img src="../assets/cubic.png"></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col lg="6" offset-lg="6" cols="8" offset="4">
              <v-btn href="/#/themes" color="#00828C" :elevation="15" dark large>Start Now</v-btn>
              <br />
              <br />
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <v-container>
        <br />
        <br />
        <div class="display-2 font-weight-medium" style="color:#d2d2d2;">Global stats</div>

        <v-divider class="mx-4 white" dark></v-divider>
        <br />

        <div class="display-1 font-weight-medium" style="color:#aaa;">
          Trusted by
          <span style="font-size:60px !important; color:#eafafe;">{{ count }}</span> Creatives
        </div>
        <br />
        <br />

        <br />
        <br />

        <div class="display-2 font-weight-bold" style="color:#d2d2d2;">Online portfolio FAQ</div>
        <v-divider class="mx-4 white" dark></v-divider>
        <br />

        <v-row>
          <v-expansion-panels inset>
            <v-expansion-panel v-for="(item,i) in items" :key="i" style="background:#191919">
              <v-expansion-panel-header
                class="title text-justify"
                style="color:#d2d2d2;"
                v-text="item.question"
              ></v-expansion-panel-header>
              <v-divider class="mx-4" dark></v-divider>
              <v-expansion-panel-content
                class="subtitle-1 text-justify"
                style="color:#d2d2d2;"
                v-text="item.answer"
              ></v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <br />
        <br />
      </v-container>
    </v-container>

    <core-footer />
  </v-app>
</template>



<script>
import axios from "axios";
import url from "../url";
export default {
  mounted() {
    axios
      .get(url.url + "/api/count")
      .then(response => {
        //  console.log(response.data)
        this.count = response.data;
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
    count: "",
    items: [
      {
        question: "What is BuildPortfolio?",
        answer:
          "BuildPortfolio is an online portfolio builder that assist job seekers, employees, students, and professionals to create well-formatted, professional-looking portfolio with great ease. It provides everything that you need to write a professional portfolio and deliver your information in a proper format to make a right impression on your hiring manager. It offers plenty of professionally designed portfolio templates, portfolio tips and guidelines and more to enable you build a perfect portfolio for your job search endeavor."
      },
      {
        question: "How does BuildPortfolio work?",
        answer:
          "It is very easy for you to create a well-formatted portfolio with BuildPortfolio. It features a brilliant step-by-step portfolio building wizard that enables you create and edit your portfolio quickly. You just need to choose your desired template and fill appropriate information in each section of portfolio wizard. Once you finish entering your information, you can see the preview of your portfolio. "
      },
      {
        question: "What if I need to update my portfolio?",
        answer:
          "Your progress is automatically saved. Therefore, if you want to update your portfolio, you can log in anytime and edit according to your convenience."
      },
      {
        question: "Can I download my free portfolio?",
        answer:
          "A URL will be created which will lead to the created portfolio. You can further copy the link for further applications."
      },
      {
        question: "Is my personal information secure with BuildPortfolio?",
        answer:
          "Your personal information is completely secured with BuildPortfolio as long as you do not share your Google log in details (Email Id and Password) with anyone else. Your information is protected by the standard security."
      }
    ]
  })
};
</script>

<style scoped>
</style>
