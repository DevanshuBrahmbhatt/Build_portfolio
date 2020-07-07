<template>
  <v-app>
    <div id="header">
      <v-container class="top">
        <v-row justify="center" class="ml-md-10 pl-md-10">
          <v-col cols="12" class="text-center mt-8 mt-md-0">
            <v-avatar size="250">
              <v-img :src="userdetail.profilepic">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" class="name-head" align-self="center">
            <div class="text-center">
              <h1 class="name-head darkgrey--text">{{ userdetail.fullname }}</h1>
              <h4 class="designation lightgrey--text">
                <span class="title-padding d-none d-md-inline"></span>
                {{ userdetail.title }}
              </h4>
              <v-btn class="ma-2 mx-md-5" v-if="userdetail.twitter" icon :href="userdetail.twitter">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn class="ma-2 mx-md-5" icon v-if="userdetail.github" :href="userdetail.github">
                <v-icon>mdi-git</v-icon>
              </v-btn>
              <v-btn
                class="ma-2 mx-md-5"
                icon
                v-if="userdetail.instagram"
                :href="userdetail.instagram"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                class="ma-2 mx-md-5"
                icon
                v-if="userdetail.facebook"
                :href="userdetail.facebook"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn class="ma-2 mx-md-5" icon v-if="userdetail.linkdin" :href="userdetail.linkdin">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn class="ma-2 mx-md-5" icon v-if="userdetail.blog" :href="userdetail.blog">
                <v-icon>fa-quote-left</v-icon>
              </v-btn>
              <v-btn class="ma-2 mx-md-5" icon v-if="userdetail.other" :href="userdetail.other">
                <v-icon>fa-file-alt</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="about">
      <h1 class="text-center">
        <v-avatar :color="Color" size="50" class="mr-2">
          <v-icon dark>fa-address-book</v-icon>
        </v-avatar>About Me
      </h1>
      <v-lazy :options="{ threshold: 1 }" min-height="300" transition="slide-y-reverse-transition">
        <v-container class="about-margin">
          <v-row>
            <v-col cols="12" class="text-center">
              <span class="mx-1">
                <strong>Name :</strong>
              </span>
              <span class="content">{{ userdetail.fullname }}</span>
            </v-col>
            <v-col cols="12" class="text-center pt-0">
              <span class="mx-1">
                <strong>Email :</strong>
              </span>
              <span class="content">{{ userdetail.email }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <br />
              <p class="text-justify mx-1 content">{{ userdetail.about }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-lazy>
    </div>

    <v-divider class="dvd"></v-divider>
    <v-card>
      <div id="resume">
        <h1 class="text-center">
          <v-avatar :color="Color" size="50" class="mr-2">
            <v-icon dark>fa-file</v-icon>
          </v-avatar>My Resume
        </h1>
        <v-container class="resume-margin">
          <v-lazy
            :options="{ threshold: 1 }"
            min-height="200"
            transition="slide-y-reverse-transition"
          >
            <v-row justify="center" class="fill-height">
              <v-col cols="10" md="3" id="education" class="ma-5 text-center" order="1">
                <h1 class="white--text mt-5">Education</h1>
                <v-btn
                  light
                  large
                  @click="(active == 'education') ? active='' :  active='education'"
                >See Details</v-btn>
              </v-col>

              <v-col
                cols="10"
                md="3"
                id="work"
                class="ma-5 pt-6 text-center"
                order="3"
                order-md="2"
              >
                <h1 class="white--text mt-5">
                  Work
                  <br />Experience
                </h1>
                <v-btn
                  light
                  large
                  @click="(active == 'work') ? active='' :  active='work'"
                >See Details</v-btn>
              </v-col>

              <v-col cols="10" md="3" id="skills" class="ma-5 text-center" order="5" order-md="3">
                <h1 class="white--text mt-5">Skills</h1>
                <v-btn
                  light
                  large
                  @click="(active == 'skills') ? active='' :  active='skills'"
                >See Details</v-btn>
              </v-col>

              <v-expand-transition v-show="active == 'education'">
                <v-col cols="12" v-if="active == 'education'" order="2" order-md="4">
                  <div class="resume-margin text-center">
                    <h1 class="text-center resume-margin">
                      <v-avatar :color="Color" size="50" class="mr-2">
                        <v-icon dark>fa-graduation-cap</v-icon>
                      </v-avatar>Education
                    </h1>
                    <div>
                      <v-divider class="dvd-resume"></v-divider>
                      <v-container class="px-5 px-md-10">
                        <v-hover v-slot:default="{ hover }">
                          <v-card :elevation="hover ? '8' : '2'">
                            <v-card-title class="white--text" :style="{ backgroundColor : Color}">
                              <div class="text-center resume-card-title">
                                <h2>{{ userdetail.education.degree }}</h2>
                              </div>
                            </v-card-title>
                            <v-container class="text-center">
                              <h4 class="content">
                                {{ userdetail.education.college }}
                                <br class="d-md-none" />
                                ( {{ userdetail.education.from }} - {{ userdetail.education.to }} )
                              </h4>
                            </v-container>
                            <div>
                              <v-divider></v-divider>
                              <v-container class="exp">
                                <p class="mt-3 mx-2 text-justify">{{ userdetail.education.about }}</p>
                              </v-container>
                            </div>
                          </v-card>
                        </v-hover>
                      </v-container>
                    </div>
                  </div>
                </v-col>

                <v-col
                  cols="12"
                  v-if="active == 'work' && userdetail.works[0].company != ''"
                  order="4"
                  order-md="5"
                >
                  <div class="resume-margin text-center">
                    <h1 class="text-center">
                      <v-avatar :color="Color" size="50" class="mr-2">
                        <v-icon dark>fa-briefcase</v-icon>
                      </v-avatar>Work-Experience
                    </h1>
                    <div v-for="(experience,i) in userdetail.works" :key="i">
                      <v-divider class="dvd-resume"></v-divider>
                      <v-container class="px-5 px-md-10">
                        <v-hover v-slot:default="{ hover }">
                          <v-card :elevation="hover ? '8' : '2'">
                            <v-card-title class="white--text" :style="{ backgroundColor : Color}">
                              <div class="text-center resume-card-title">
                                <h2>{{ experience.company }}</h2>
                              </div>
                            </v-card-title>
                            <v-container class="text-center">
                              <h4 class="content">
                                {{ experience.role }}
                                <br class="d-md-none" />
                                ( {{experience.from }} - {{ experience.to }} )
                              </h4>
                            </v-container>
                            <div>
                              <v-divider></v-divider>
                              <v-container class="exp">
                                <p class="mt-3 mx-2 text-justify">{{ experience.details }}</p>
                              </v-container>
                            </div>
                          </v-card>
                        </v-hover>
                      </v-container>
                    </div>
                  </div>
                </v-col>
                <v-col
                  cols="12"
                  v-if="active == 'skills' && userdetail.skills[0].skill != ''"
                  order="6"
                  order-md="6"
                >
                  <h1 class="text-center resume-margin">
                    <v-avatar :color="Color" size="50" class="mr-2">
                      <v-icon dark>fa-star</v-icon>
                    </v-avatar>Skills
                    <v-divider class="dvd-resume"></v-divider>
                  </h1>
                  <v-container class="skill-margin">
                    <div class="text-center">
                      <v-chip
                        large
                        v-for="(value,i) in  userdetail.skills"
                        :key="i"
                        class="ma-2 ma-md-4"
                      >
                        <h2 class="px-4 px-md-8">{{ value.skill }}</h2>
                      </v-chip>
                    </div>
                  </v-container>
                </v-col>
              </v-expand-transition>
            </v-row>
          </v-lazy>
        </v-container>
      </div>
    </v-card>

    <div :style="{ backgroundColor : Color }" v-if="userdetail.projects[0].project != ''">
      <div id="projects">
        <h1 class="text-center white--text">
          <v-avatar color="white" size="50" class="mr-2">
            <v-icon>fa-tasks</v-icon>
          </v-avatar>Projects
        </h1>
        <v-carousel
          touch
          height="700"
          hide-delimiter-background
          show-arrows-on-hover
          class="projects-margin"
        >
          <v-carousel-item v-for="(project, i) in userdetail.projects" :key="i">
            <v-sheet :color="Color" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <v-container class="text-center pb-5 pb-md-10 pa-10 project-container">
                  <v-row class="exp fill-height" justify="center" align="center">
                    <v-col cols="12" class="py-0 project-content mt-md-10 pt-md-10">
                      <h1 class="mb-5" :style="{ color : Color }">{{ project.project }}</h1>
                      <p class="ma-0">( {{ project.from }} - {{ project.to }} )</p>
                      <p class="text-justify mx-md-10 px-md-10 pt-5">{{ project.description }}</p>
                    </v-col>
                    <v-col cols="12" align-self="end" class="py-0 mb-md-10 pb-md-10">
                      <v-btn
                        :color="Color"
                        dark
                        small
                        :href="project.gitlink"
                        v-if="project.gitlink"
                        class="ma-1 ma-md-5 py-4"
                      >
                        <p class="mb-0 white--text">
                          <v-icon class="mr-1">mdi-git</v-icon>Github
                        </p>
                      </v-btn>
                      <v-btn
                        :color="Color"
                        dark
                        small
                        :href="project.weblink"
                        v-if="project.weblink"
                        class="ma-1 ma-md-5 py-4"
                      >
                        <p class="mb-0 white--text">
                          <v-icon class="mr-1">mdi-web</v-icon>Website
                        </p>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>

    <div id="achivements" v-if="userdetail.achievements[0].achievement != ''">
      <h1 class="text-center">
        <v-avatar :color="Color" size="50" class="mr-2">
          <v-icon dark>fa-trophy</v-icon>
        </v-avatar>Achivements
      </h1>
      <v-container class="achivements-margin">
        <p
          class="mx-2 mx-sm-10 px-md-10"
          v-for="(ach,i) in userdetail.achievements"
          :key="i"
        >{{ ach.achievement }}</p>
      </v-container>
    </div>
    <v-container class="text-center">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            color="#B1624EFF"
            v-on="on"
            dark
            rounded
            @click="$vuetify.goTo('#header', { duration :2000, easing : 'easeInOutQuad' })"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </template>
        <span>Go to Top</span>
      </v-tooltip>
    </v-container>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <h4 class="py-10 my-10 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>BuildPortfolio</strong>
        </h4>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style scoped>
#app {
  background-color: white;
  font-family: "Montserrat", sans-serif;
}

.dvd {
  margin-left: 72px;
  margin-right: 72px;
}

.content {
  color: darkgray;
}

#header {
  background: url(../assets/3.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.v-progress-circular {
  margin: 1rem;
}

.top {
  margin-top: 8%;
  margin-bottom: 10%;
}

.name-head {
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
}

.designation {
  font-size: 2rem;
  font-weight: 500;
  color: grey;
}

.title-padding {
  margin-left: 20%;
}

.v-speed-dial {
  position: fixed;
}

.v-btn--floating {
  position: relative;
}

#about {
  margin-top: 10%;
  margin-bottom: 5%;
}

.about-margin {
  margin-top: 2%;
}

#resume {
  margin-top: 5%;
  margin-bottom: 5%;
}

.resume-margin {
  margin-top: 4%;
}

.resume-card-title {
  width: 100%;
}

.exp p {
  color: #757575;
}

.dvd-resume {
  margin-left: 12.5%;
  margin-right: 12.5%;
  margin-top: 3%;
  margin-bottom: 3%;
}

#education {
  background: url(https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  font-size: 1.3rem;
  border-radius: 10px 10px 10px 10px;
}

#education h1 {
  margin-bottom: 330px;
}

#work {
  background: url(https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  font-size: 1.3rem;
  line-height: 1.2;
  border-radius: 10px 10px 10px 10px;
}

#work h1 {
  margin-bottom: 280px;
}

#skills {
  background: url(https://images.unsplash.com/photo-1533792196748-d4698a011bcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  font-size: 1.4rem;
  border-radius: 10px 10px 10px 10px;
}

#skills h1 {
  margin-bottom: 330px;
}

#projects {
  margin-top: 5%;
  margin-bottom: 5%;
}

.projects-margin {
  margin-top: 5%;
}

.project-container {
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  height: 80%;
  width: 75%;
}

.project-content h1 {
  font-size: 2rem;
}

.project-content p {
  font-size: 1.1rem;
}

#achivements {
  margin-top: 5%;
  margin-bottom: 5%;
}

.achivements-margin {
  margin-top: 5%;
}

.nav-top {
  margin-top: 690px;
  align-self: center;
  position: fixed;
}
</style>

<script>
import axios from "axios";
import url from "../url";

export default {
  data: () => ({
    active: "",

    Color: "#B1624EFF",

    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],

    userdetail: ""
  }),

  mounted() {
    axios
      .get(url.url + "/api/user/" + this.$route.params.username)
      .then(userdetail => {
        console.log("got from template" + userdetail.data.userdetails);
        this.userdetail = userdetail.data.userdetails;
      })

      .catch(err => {
        console.log(err);
      });
  }
};
</script>
