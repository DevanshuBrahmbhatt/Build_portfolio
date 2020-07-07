<template>
  <v-app>
    <div id="header">
      <v-container class="top">
        <v-row justify="center">
          <v-col cols="12" class="text-center mt-8 mt-md-0">
            <v-avatar size="250" color="white" class="black">
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
              <h1 class="name-head white--text">{{ userdetail.fullname }}</h1>
              <h4 class="designation lightgrey--text">{{ userdetail.title }}</h4>
              <v-btn
                dark
                class="ma-2 mx-md-5"
                v-if="userdetail.twitter"
                icon
                :href="userdetail.twitter"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                dark
                class="ma-2 mx-md-5"
                icon
                v-if="userdetail.github"
                :href="userdetail.github"
              >
                <v-icon>mdi-git</v-icon>
              </v-btn>
              <v-btn
                dark
                class="ma-2 mx-md-5"
                icon
                v-if="userdetail.instagram"
                :href="userdetail.instagram"
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
      <h1 class="text-center white--text">
        <v-avatar :color="Color" size="50">
          <v-icon dark>fa-address-book</v-icon>
        </v-avatar>
        <br />About Me
      </h1>
      <v-lazy :options="{ threshold: 1 }" min-height="300" transition="slide-y-reverse-transition">
        <v-container class="about-margin">
          <v-row>
            <v-col cols="12" md="6" class="text-center">
              <span class="mx-1 white--text">
                <strong>Name :</strong>
              </span>
              <span class="content">{{ userdetail.fullname }}</span>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
              <span class="mx-1 white--text">
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

    <v-divider class="dvd" dark></v-divider>

    <div id="resume">
      <v-container>
        <h1 class="text-center white--text">
          <v-avatar :color="Color" size="50">
            <v-icon dark>fa-file</v-icon>
          </v-avatar>
          <br />My Resume
        </h1>
        <div class="resume-margin text-center">
          <v-chip class="text-center mb-5" :color="Color" large>
            <h2 class="pa-5 text-center white--text">
              <v-icon class="mr-2">fa-graduation-cap</v-icon>Education
            </h2>
          </v-chip>
          <div>
            <v-divider class="dvd-resume" dark></v-divider>
            <v-container class="px-5 px-md-10">
              <v-lazy
                :options="{ threshold: 1 }"
                min-height="200"
                transition="slide-y-reverse-transition"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card :elevation="hover ? '8' : '2'">
                    <v-card-title>
                      <div class="text-center resume-card-title">
                        <h2>{{ userdetail.education.degree }}</h2>
                      </div>
                    </v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-container class="text-center">
                      <h4 class="content">
                        {{ userdetail.education.college }}
                        <br class="d-md-none" />
                        ( {{ userdetail.education.from }} - {{ userdetail.education.to }} )
                      </h4>
                    </v-container>
                    <v-card-actions>
                      <v-btn class="mx-auto" icon @click="show = !show" :color="Color">
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                      <div v-show="show">
                        <v-divider></v-divider>
                        <v-container class="exp">
                          <p class="mt-3 mx-2 text-justify">{{ userdetail.education.about }}</p>
                        </v-container>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-hover>
              </v-lazy>
            </v-container>
          </div>
        </div>
        <div class="resume-margin text-center" v-if="userdetail.works[0].company != ''">
          <v-chip class="text-center mb-5" :color="Color" large>
            <h2 class="pa-5 text-center white--text">
              <v-icon class="mr-2">fa-briefcase</v-icon>Work-Experience
            </h2>
          </v-chip>
          <div v-for="(experience,i) in userdetail.works" :key="i">
            <v-divider class="dvd-resume" dark></v-divider>
            <v-container class="px-5 px-md-10">
              <v-lazy
                :options="{ threshold: 1 }"
                min-height="200"
                transition="slide-y-reverse-transition"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card :elevation="hover ? '8' : '2'">
                    <v-card-title>
                      <div class="text-center resume-card-title">
                        <h2>{{ experience.company }}</h2>
                      </div>
                    </v-card-title>
                    <v-divider class="mx-4 my-0"></v-divider>
                    <v-container class="text-center">
                      <h4 class="content">
                        {{ experience.role }}
                        <br class="d-md-none" />
                        ( {{experience.from }} - {{ experience.to }} )
                      </h4>
                    </v-container>
                    <v-card-actions>
                      <v-btn
                        class="mx-auto"
                        icon
                        @click="showWork[i].value = !showWork[i].value"
                        :color="Color"
                      >
                        <v-icon>{{ showWork[i].value ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                      <div v-show="showWork[i].value">
                        <v-divider></v-divider>
                        <v-container class="exp">
                          <p class="mt-3 mx-2 text-justify">{{ experience.details }}</p>
                        </v-container>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-hover>
              </v-lazy>
            </v-container>
          </div>
        </div>
      </v-container>
    </div>

    <div :style="{ backgroundColor : 'white' }" v-if="userdetail.skills[0].skill != ''">
      <div id="skills">
        <h1 class="text-center">
          <v-avatar color="red" size="50">
            <v-icon dark>fa-star</v-icon>
          </v-avatar>
          <br />Skills
        </h1>
        <v-container class="skill-margin">
          <div class="text-center">
            <v-chip large v-for="(value,i) in  userdetail.skills" :key="i" class="ma-4">
              <h2 class="px-4 px-md-8">{{ value.skill }}</h2>
            </v-chip>
          </div>
        </v-container>
      </div>
    </div>

    <div id="projects" v-if="userdetail.projects[0].project != ''">
      <h1 class="text-center white--text">
        <v-avatar :color="Color" size="50">
          <v-icon dark>fa-tasks</v-icon>
        </v-avatar>
        <br />Projects
      </h1>
      <v-container class="projects-margin">
        <div>
          <v-row justify="center">
            <v-col cols="12" md="4" v-for="(project,i) in userdetail.projects" :key="i">
              <v-lazy
                :options="{ threshold: .5 }"
                min-height="150"
                transition="slide-y-reverse-transition"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    :elevation="hover ? 15 : 3"
                    max-width="344"
                    :min-height="showProject[i].value == true ? 200 : 0"
                    class="mx-auto"
                  >
                    <v-card-title>
                      <h3>{{ project.project }}</h3>
                      <v-card-text class="pa-0 mt-2">
                        <h4>( {{ project.from }} - {{ project.to }} )</h4>
                      </v-card-text>
                    </v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-expand-transition>
                      <div v-show="showProject[i].value">
                        <v-card-text class="project-content text-justify">{{ project.description }}</v-card-text>
                      </div>
                    </v-expand-transition>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                      <v-btn bottom text :href="project.gitlink" v-if="project.gitlink">
                        <h4 class="pb-0">
                          <v-icon class="mr-2">mdi-git</v-icon>Github
                        </h4>
                      </v-btn>
                      <v-spacer v-if="project.gitlink || !project.weblink"></v-spacer>
                      <v-btn
                        icon
                        @click="showProject[i].value = !showProject[i].value"
                        :color="Color"
                      >
                        <v-icon>{{ showProject[i].value ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                      <v-spacer v-if="project.weblink || !project.gitlink"></v-spacer>
                      <v-btn bottom text :href="project.weblink" v-if="project.weblink">
                        <h4 class="pb-0">
                          <v-icon class="mr-2">mdi-web</v-icon>Website
                        </h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-lazy>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>

    <div :style="{ backgroundColor : 'white' }">
      <div id="achivements" v-if="userdetail.achievements[0].achievement != ''">
        <h1 class="text-center">
          <v-avatar color="red" size="50">
            <v-icon dark>fa-trophy</v-icon>
          </v-avatar>
          <br />Achivements
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
  background-color: black;
  font-family: "raleway", sans-serif;
}

.black {
  border: 1px solid white;
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
  background: url(../assets/2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
  margin-top: 4%;
}

#resume {
  margin-top: 5%;
  margin-bottom: 5%;
}

.resume-margin {
  margin-top: 10%;
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
}

#skills {
  margin-top: 5%;
  margin-bottom: 5%;
}

.skill-margin {
  margin-top: 3%;
}

#projects {
  padding-top: 5%;
  padding-bottom: 5%;
}

.projects-margin {
  margin-top: 5%;
}

.project-content {
  min-height: 175px;
  margin-top: 0px;
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
    show: false,

    Color: "#E94B3CFF",

    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],

    userdetail: "",
    showWork: [
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      }
    ],
    showProject: [
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      },
      {
        value: false
      }
    ]
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
