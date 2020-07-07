<template>
  <v-app>
    <div id="header">
      <v-container class="top">
        <v-row align="center">
          <v-col cols="12" md="4" class="text-center">
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
          <v-col cols="12" md="6" class="name-head" align-self="center">
            <div class="text-center">
              <h1 class="name-head white--text">{{ userdetail.fullname }}</h1>
              <h4 class="designation white--text">{{ userdetail.title }}</h4>
              <v-btn
                class="ma-2 mx-md-5"
                v-if="userdetail.twitter"
                icon
                :href="userdetail.twitter"
                dark
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                class="ma-2 mx-md-5"
                icon
                v-if="userdetail.github"
                :href="userdetail.github"
                dark
              >
                <v-icon>mdi-git</v-icon>
              </v-btn>
              <v-btn
                class="ma-2 mx-md-5"
                icon
                v-if="userdetail.instagram"
                :href="userdetail.instagram"
                dark
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                dark
                class="ma-2 mx-md-5"
                icon
                v-if="userdetail.facebook"
                :href="userdetail.facebook"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                dark
                class="ma-2 mx-md-5"
                icon
                v-if="userdetail.linkdin"
                :href="userdetail.linkdin"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn dark class="ma-2 mx-md-5" icon v-if="userdetail.blog" :href="userdetail.blog">
                <v-icon>fa-quote-left</v-icon>
              </v-btn>
              <v-btn
                dark
                class="ma-2 mx-md-5"
                icon
                v-if="userdetail.other"
                :href="userdetail.other"
              >
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
          <v-row align="center">
            <v-col cols="12" md="5">
              <p class="mx-1">
                <strong>Name :</strong>
              </p>
              <p class="content">{{ userdetail.fullname }}</p>
              <p class="mx-1">
                <strong>Email :</strong>
              </p>
              <p class="content">{{ userdetail.email }}</p>
            </v-col>
            <v-col cols="12" md="7">
              <p class="text-justify mx-1 content">{{ userdetail.about }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-lazy>
    </div>

    <v-divider class="dvd"></v-divider>

    <div id="resume">
      <v-container>
        <h1 class="text-center">
          <v-avatar :color="Color" size="50" class="mr-2">
            <v-icon dark>fa-file</v-icon>
          </v-avatar>My Resume
        </h1>
        <v-lazy
          :options="{ threshold: 1 }"
          min-height="300"
          transition="slide-y-reverse-transition"
        >
          <div class="resume-margin">
            <v-alert :color="Color" border="top" dense dark elevation="8">
              <h2 class="pb-0 text-center">
                <v-icon class="mr-2">fa-graduation-cap</v-icon>Education
              </h2>
            </v-alert>
            <div>
              <v-divider width="75%"></v-divider>
              <div class="exp mx-2 my-10">
                <h2 font-weight-bold>
                  <v-avatar color="red" size="20"></v-avatar>
                  {{ userdetail.education.degree }}
                </h2>
                <h4 class="content">
                  {{ userdetail.education.college }}
                  <br class="d-md-none" />
                  ( {{ userdetail.education.from }} to {{ userdetail.education.to }} )
                </h4>
                <p class="mt-3 text-justify">{{ userdetail.education.about }}</p>
              </div>
            </div>
          </div>
        </v-lazy>

        <div class="resume-margin" v-if="userdetail.works[0].company != ''">
          <v-alert :color="Color" border="top" dense dark elevation="8">
            <h2 class="pb-0 text-center">
              <v-icon class="mr-2">fa-briefcase</v-icon>Work-Experience
            </h2>
          </v-alert>
          <div v-for="(experience,i) in userdetail.works" :key="i">
            <v-divider width="75%"></v-divider>
            <v-lazy
              :options="{ threshold: 1 }"
              min-height="200"
              transition="slide-y-reverse-transition"
            >
              <div class="exp mx-2 my-10">
                <h2 font-weight-bold>
                  <v-avatar color="red" size="20"></v-avatar>
                  {{ experience.company }}
                </h2>
                <h4 class="content">
                  {{ experience.role }}
                  <br class="d-md-none" />
                  ( {{experience.from }} to {{experience.to }} )
                </h4>
                <p class="mt-3 text-justify">{{experience.details }}</p>
              </div>
            </v-lazy>
          </div>
        </div>
      </v-container>
    </div>

    <div :style="{ backgroundColor : Color }" v-if="userdetail.skills[0].skill != ''">
      <div id="skills">
        <h1 class="text-center white--text">
          <v-avatar color="white" size="50" class="mr-2">
            <v-icon>fa-star</v-icon>
          </v-avatar>Skills
        </h1>
        <v-container class="skill-margin">
          <div class="text-center">
            <v-progress-circular
              v-for="(value,i) in userdetail.skills"
              :key="i"
              size="200"
              color="white"
              width="8"
              value="true"
            >
              <h3>{{ value.skill }}</h3>
            </v-progress-circular>
          </div>
        </v-container>
      </div>
    </div>

    <div id="projects" v-if="userdetail.projects[0].project != ''">
      <h1 class="text-center">
        <v-avatar :color="Color" size="50" class="mr-2">
          <v-icon dark>fa-tasks</v-icon>
        </v-avatar>Projects
      </h1>
      <v-container class="projects-margin">
        <div>
          <v-row justify="center" align="stretch">
            <v-col cols="12" md="4" v-for="(project,i) in userdetail.projects" :key="i">
              <v-lazy
                :options="{ threshold: .5 }"
                min-height="300"
                transition="slide-y-reverse-transition"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 15 : 3"
                    max-width="344"
                    min-height="320"
                    class="mx-auto"
                  >
                    <v-card-title class="white--text mb-5" :style="{ backgroundColor : Color }">
                      <h3>{{ project.project }}</h3>
                      <v-card-text class="pa-0 mt-2">
                        <h4>( {{ project.from }} to {{ project.to }} )</h4>
                      </v-card-text>
                    </v-card-title>
                    <v-card-text class="project-content text-justify">{{ project.description }}</v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                      <v-btn
                        bottom
                        :color="Color"
                        text
                        :href="project.gitlink"
                        v-if="project.gitlink"
                      >
                        <h4 class="pb-0">
                          <v-icon class="mr-2">mdi-git</v-icon>Github
                        </h4>
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn
                        bottom
                        text
                        :color="Color"
                        :href="project.weblink"
                        v-if="project.weblink"
                      >
                        <h4 class="pb-0">
                          <v-icon class="mr-2">mdi-web</v-icon>Website
                        </h4>
                      </v-btn>
                      <v-btn v-if="!project.weblink && !project.gitlink" disabled icon></v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-lazy>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>

    <div :style="{ backgroundColor : Color }">
      <div id="achivements" v-if="userdetail.achievements[0].achievement != ''">
        <h1 class="text-center white--text">
          <v-avatar color="white" size="50" class="mr-2">
            <v-icon>fa-trophy</v-icon>
          </v-avatar>Achivements
        </h1>
        <v-container class="achivements-margin">
          <p
            class="white--text mx-2 mx-sm-10 px-md-10"
            v-for="(ach,i) in userdetail.achievements"
            :key="i"
          >{{ ach.achievement }}</p>
        </v-container>
      </div>
      <v-container class="text-center">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              color="red"
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
    </div>

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
  font-family: "Poppins", sans-serif;
}

.dvd {
  margin-left: 72px;
  margin-right: 72px;
}

.content {
  color: darkgray;
}

#header {
  height: 752px;
  background: url(../assets/1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.v-progress-circular {
  margin: 1rem;
}

.top {
  margin-top: 16%;
  margin-bottom: 16%;
}

.name-head {
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
}

.designation {
  font-size: 2rem;
  font-weight: 500;
  padding-top: 20px;
  color: grey;
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
  margin-top: 5%;
}

#resume {
  margin-top: 5%;
  margin-bottom: 5%;
}

.resume-margin {
  margin-top: 10%;
}

.exp p {
  color: #757575;
}

#skills {
  margin-top: 5%;
  margin-bottom: 5%;
}

.skill-margin {
  margin-top: 5%;
}

#projects {
  margin-top: 5%;
  margin-bottom: 5%;
}

.projects-margin {
  margin-top: 5%;
}

.project-content {
  min-height: 175px;
}

#achivements {
  margin-top: 5%;
  margin-bottom: 5%;
}

.achivements-margin {
  margin-top: 5%;
}
</style>

<script>
import axios from "axios";
import url from "../url";

export default {
  data: () => ({
    Color: "#2196F3",

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
