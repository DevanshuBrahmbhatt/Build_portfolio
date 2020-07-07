<template>
  <v-app>
    <core-header />

    <v-content>
      <v-container>
        <div
          class="display-2 font-weight-medium"
          style="color:#d2d2d2!important;"
        >Please add your details here</div>
        <v-divider class="mx-4" dark></v-divider>
        <v-divider class="mx-4" dark></v-divider>
        <v-divider class="mx-4" dark></v-divider>
        <br />
        <br />

        <div
          class="display-1 font-weight-medium"
          style="color:#d2d2d2!important;"
        >1. Personal Details</div>
        <v-divider class="mx-4" dark></v-divider>
        <br />
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Fullname"
              placeholder="Fullname"
              v-model="userdetails.fullname"
              name="fullname"
              type="text"
              id="fullname"
              required
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <template>
              <p style="color:#d2d2d2!important;" class="subtitle-1">{{responseMessage}}</p>
            </template>

            <v-text-field
              label="Username"
              placeholder="Username Please choose wisely it will be in URL"
              v-model="userdetails.username"
              name="username"
              type="text"
              id="username"
              required
              :rules="nameRules"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
              @keyup="checkUsername()"
            ></v-text-field>

            <!-- '<span  style="color:#d2d2d2!important;"  v-bind:class="isAvailable" >{{responseMessage}}</span> -->

            <v-text-field
              label="Tagline"
              placeholder="Tagline eg. Web Developer"
              v-model="userdetails.title"
              name="tagline"
              type="text"
              required
              id="tagline"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-text-field
              label="Email"
              placeholder="Email"
              v-model="userdetails.email"
              name="email"
              type="text"
              required
              id="email"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-textarea
              label="About"
              v-model="userdetails.about"
              placeholder="About Yourself"
              name="about"
              type="text"
              id="about"
              required
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-file-input
              v-model="userdetails.profilepic"
              placeholder="Pick an avatar it should be less than 2 MB"
              prepend-icon="mdi-camera"
              label="Avatar"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
              @change="postprofile()"
            ></v-file-input>

            <v-text-field
              label="github"
              v-model="userdetails.github"
              placeholder="github link"
              name="github"
              type="text"
              id="github"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-text-field
              label="linkdin"
              v-model="userdetails.linkdin"
              placeholder="linkdin link"
              name="linkdin"
              type="text"
              id="linkdin"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-text-field
              label="facebook"
              v-model="userdetails.facebook"
              placeholder="facebook link"
              name="facebook"
              type="text"
              id="facebook"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-text-field
              label="instagram"
              v-model="userdetails.instagram"
              placeholder="instagram link"
              name="instagram"
              type="text"
              id="instagram"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-text-field
              label="Blog"
              v-model="userdetails.blog"
              placeholder="Blog link"
              name="blog"
              type="text"
              id="blog"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />
            <v-text-field
              label="twitter"
              v-model="userdetails.twitter"
              placeholder="twitter link"
              name="twitter"
              type="text"
              id="twitter"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-text-field
              label="Other"
              placeholder="Other link"
              v-model="userdetails.other"
              name="Other"
              type="text"
              id="other"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <br />
            <div class="display-1 font-weight-medium" style="color:#d2d2d2!important;">
              2. Add Your Projects
              <v-btn
                @click="addNewProject"
                style="cursor:pointer; color:#191919"
                class="subtitle-2 ml-auto"
              >Add Project</v-btn>
            </div>
            <br />
            <v-divider class="mx-4" dark></v-divider>

            <v-col v-for="(project,i) in userdetails.projects" :key="i">
              <br />

              <v-row>
                <v-col lg="6" md="6" sm="6">
                  <div
                    class="headline font-weight-medium"
                    style="color:#d2d2d2!important;"
                  >{{i+1}}. Projects</div>
                </v-col>

                <v-col lg="6" md="6">
                  <v-btn
                    @click="deleteProject(i)"
                    style="cursor:pointer; color:#191919"
                    class="subtitle-2 float-right"
                  >Cancel</v-btn>
                </v-col>
              </v-row>

              <v-text-field
                label="Project Name"
                placeholder="Project Name"
                name="project"
                type="text"
                id="project"
                v-model="project.project"
                style="color:#d2d2d2!important;"
                background-color="#191919"
                outlined
                color="#d2d2d2"
                class="title"
                dark
              />

              <v-row>
                <v-col cols="10" sm="5">
                  <v-menu>
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="project.from"
                        label="Start Month"
                        prepend-icon="event"
                        :value="project.from"
                        v-on="on"
                        style="color:#d2d2d2!important;"
                        background-color="#191919"
                        outlined
                        color="#d2d2d2"
                        class="title"
                        dark
                      ></v-text-field>
                    </template>
                    <v-date-picker type="month" v-model="project.from"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="10" sm="5">
                  <v-menu>
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="project.to"
                        label="End Month"
                        prepend-icon="event"
                        :value="project.to"
                        v-on="on"
                        style="color:#d2d2d2!important;"
                        background-color="#191919"
                        outlined
                        color="#d2d2d2"
                        class="title"
                        dark
                      ></v-text-field>
                    </template>
                    <v-date-picker type="month" v-model="project.to"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="3" sm="1">
                  <v-checkbox
                    style="color:#d2d2d2!important;"
                    background-color="#191919"
                    dark
                    class="float-right"
                    v-model="project.to"
                    value="Present"
                    :label="`Present:`"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-textarea
                label="Description"
                placeholder="Describe Your Project"
                name="description"
                type="text"
                id="description"
                v-model="project.description"
                style="color:#d2d2d2!important;"
                background-color="#191919"
                outlined
                color="#d2d2d2"
                class="title"
                dark
              />

              <v-text-field
                label="github link"
                placeholder="Github link if you have"
                name="gitlink"
                type="text"
                id="gitlink"
                v-model="project.gitlink"
                style="color:#d2d2d2!important;"
                background-color="#191919"
                outlined
                color="#d2d2d2"
                class="title"
                dark
              />

              <v-text-field
                label="Website"
                placeholder="Website link if you have"
                name="weblink"
                type="text"
                id="weblink"
                v-model="project.weblink"
                style="color:#d2d2d2!important;"
                background-color="#191919"
                outlined
                color="#d2d2d2"
                class="title"
                dark
              />
            </v-col>
            <br />

            <div class="display-1 font-weight-medium" style="color:#d2d2d2!important;">
              3. Add Your Work Experience
              <v-btn
                @click="addNewwork"
                style="cursor:pointer; color:#191919"
                class="subtitle-2 ml-auto"
              >Add Work</v-btn>
            </div>
            <br />
            <v-divider class="mx-4" dark></v-divider>

            <v-col v-for="(work,i) in userdetails.works" :key="i">
              <br />
              <v-row>
                <v-col lg="6" md="6" sm="6">
                  <div
                    class="headline font-weight-medium"
                    style="color:#d2d2d2!important;"
                  >{{i+1}}. Work Experience</div>
                </v-col>

                <v-col lg="6" md="6">
                  <v-btn
                    @click="deleteWork(i)"
                    style="cursor:pointer; color:#191919"
                    class="subtitle-2 float-right"
                  >Cancel</v-btn>
                </v-col>
              </v-row>
              <br />

              <v-text-field
                label="Company Name"
                placeholder="Company Name"
                name="company"
                type="text"
                id="company"
                v-model="work.company"
                style="color:#d2d2d2!important;"
                background-color="#191919"
                outlined
                color="#d2d2d2"
                class="title"
                dark
              />

              <v-text-field
                label="Role"
                placeholder="Your Role"
                name="role"
                type="text"
                id="role"
                v-model="work.role"
                style="color:#d2d2d2!important;"
                background-color="#191919"
                outlined
                color="#d2d2d2"
                class="title"
                dark
              />

              <v-row>
                <v-col cols="10" sm="5">
                  <v-menu>
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="work.from"
                        label="Start Month"
                        prepend-icon="event"
                        :value="work.from"
                        v-on="on"
                        style="color:#d2d2d2!important;"
                        background-color="#191919"
                        outlined
                        color="#d2d2d2"
                        class="title"
                        dark
                      ></v-text-field>
                    </template>

                    <v-date-picker type="month" v-model="work.from"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="10" sm="5">
                  <v-menu>
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="work.to"
                        label="End Month"
                        prepend-icon="event"
                        :value="work.to"
                        v-on="on"
                        style="color:#d2d2d2!important;"
                        background-color="#191919"
                        outlined
                        color="#d2d2d2"
                        class="title"
                        dark
                      ></v-text-field>
                    </template>

                    <v-date-picker type="month" v-model="work.to"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="3" sm="1">
                  <v-checkbox
                    style="color:#d2d2d2!important;"
                    background-color="#191919"
                    dark
                    class="float-right"
                    v-model="work.to"
                    value="Present"
                    :label="`Present:`"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-textarea
                label="Description"
                placeholder="Describe Your Work"
                name="describework"
                type="text"
                id="describework"
                v-model="work.details"
                style="color:#d2d2d2!important;"
                background-color="#191919"
                outlined
                color="#d2d2d2"
                class="title"
                dark
              />
            </v-col>

            <br />
            <div
              class="display-1 font-weight-medium"
              style="color:#d2d2d2!important;"
            >4. Add Your Education</div>
            <v-divider class="mx-4" dark></v-divider>
            <br />

            <v-text-field
              label="University Name"
              placeholder="University Name"
              name="college"
              type="text"
              id="college"
              v-model="userdetails.education.college"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-text-field
              label="Degree"
              placeholder="Your Degree"
              name="degree"
              type="text"
              id="degree"
              v-model="userdetails.education.degree"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <v-row>
              <v-col cols="11" sm="5">
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="userdetails.education.from"
                      label="Join Month"
                      prepend-icon="event"
                      :value="userdetails.education.from"
                      v-on="on"
                      style="color:#d2d2d2!important;"
                      background-color="#191919"
                      outlined
                      color="#d2d2d2"
                      class="title"
                      dark
                    ></v-text-field>
                  </template>

                  <v-date-picker type="month" v-model="userdetails.education.from"></v-date-picker>
                </v-menu>
              </v-col>

              <v-spacer></v-spacer>

              <v-col cols="11" sm="5">
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="userdetails.education.to"
                      label="End Month"
                      prepend-icon="event"
                      :value="userdetails.education.to"
                      v-on="on"
                      style="color:#d2d2d2!important;"
                      background-color="#191919"
                      outlined
                      color="#d2d2d2"
                      class="title"
                      dark
                    ></v-text-field>
                  </template>

                  <v-date-picker type="month" v-model="userdetails.education.to"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-textarea
              label="About Your University"
              placeholder="About Your University"
              name="aboutuniversity"
              type="text"
              id="aboutuniversity"
              v-model="userdetails.education.about"
              style="color:#d2d2d2!important;"
              background-color="#191919"
              outlined
              color="#d2d2d2"
              class="title"
              dark
            />

            <br />
            <div class="display-1 font-weight-medium" style="color:#d2d2d2!important;">
              5. Add Your Skills
              <v-btn
                @click="addNewskill"
                style="cursor:pointer; color:#191919"
                class="subtitle-2 ml-auto"
              >Add More</v-btn>
            </div>
            <br />
            <v-divider class="mx-4" dark></v-divider>

            <v-col v-for="(skill,i) in userdetails.skills" :key="i">
              <v-row>
                <v-col lg="6" md="6" sm="6">
                  <div
                    class="headline font-weight-medium"
                    style="color:#d2d2d2!important;"
                  >{{i+1}}. Skill</div>
                </v-col>

                <v-col lg="6" md="6">
                  <v-btn
                    @click="deleteSkill(i)"
                    style="cursor:pointer; color:#191919"
                    class="subtitle-2 float-right"
                  >Cancel</v-btn>
                </v-col>
              </v-row>
              <br />

              <v-text-field
                label="Skill"
                placeholder="Skill"
                name="skill"
                type="text"
                id="skill"
                v-model="skill.skill"
                style="color:#d2d2d2!important;"
                background-color="#191919"
                outlined
                color="#d2d2d2"
                class="title"
                dark
              />
            </v-col>
            <div class="display-1 font-weight-medium" style="color:#d2d2d2!important;">
              6. Add Your Achievements
              <v-btn
                @click="addNewachievements"
                style="cursor:pointer; color:#191919"
                class="subtitle-2 ml-auto"
              >Add More</v-btn>
              <br />
              <br />
              <v-divider class="mx-4" dark></v-divider>
            </div>
            <v-divider class="mx-4" dark></v-divider>

            <v-col v-for="(achievement,i) in userdetails.achievements" :key="i">
              <v-row>
                <v-col lg="6" md="6" sm="6">
                  <div
                    class="headline font-weight-medium"
                    style="color:#d2d2d2!important;"
                  >{{i+1}}. Achievement</div>
                </v-col>

                <v-col lg="6" md="6">
                  <v-btn
                    @click="deleteAchievement(i)"
                    style="cursor:pointer; color:#191919"
                    class="subtitle-2 float-right"
                  >Cancel</v-btn>
                </v-col>
              </v-row>
              <br />

              <v-text-field
                label="achievement"
                placeholder="Achievements"
                name="achievement"
                type="text"
                id="achievement"
                v-model="achievement.achievement"
                style="color:#d2d2d2!important;"
                background-color="#191919"
                outlined
                color="#d2d2d2"
                class="title"
                dark
              />
            </v-col>

            <v-btn
              color="#d2d2d2"
              v-show="userdetails.username ? true : false "
              class="subtitle-1"
              id="submit"
              name="submit"
              v-on:click="submitDetails"
              type="submit"
              large
            >Submit</v-btn>
            <!-- v-if="userdetails.username ==''? disabled=true :disabled:false" -->

            <v-spacer />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <core-footer />
  </v-app>
</template>

<script>
import url from "../url";
import axios from "axios";

export default {
  mounted() {
    axios
      .get(url.url + "/api/existsUser/" + this.$route.params.id) //To get User Existing data if any
      .then(userdetails => {
        // console.log("create existe"+ JSON.stringify(userdetails.data.userdetails));
        this.userdetails = userdetails.data.userdetails;
      })

      .catch(err => {
        console.log(err);
      });
  },

  components: {
    CoreHeader: () => import("@/components/layout/header"),
    CoreFooter: () => import("@/components/layout/footer")
  },

  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,

      responseMessage: "",

      userdetails: {
        fullname: null,
        profilepic:
          "https://storage.needpix.com/rsynced_images/people-2388584_1280.png",
        email: "",
        title: "",
        username: "",
        about: "",
        github: "",
        linkdin: "",
        facebook: "",
        instagram: "",
        other: "",
        blog: "",
        twitter: "",
        works: [
          {
            company: "",
            role: "",
            from: "",
            to: "",
            details: ""
          }
        ],
        projects: [
          {
            project: "",
            description: "",
            from: "",
            to: "",
            gitlink: "",
            weblink: ""
          }
        ],
        education: {
          college: "",
          degree: "",
          from: "",
          to: "",
          about: ""
        },
        skills: [
          {
            skill: ""
          }
        ],
        achievements: [
          {
            achievement: ""
          }
        ]
      }
    };
  },

  methods: {
    postprofile: function() {
      let formData = new FormData();
      formData.append("file", this.userdetails.profilepic);

      axios
        .post(url.url + "/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          // console.log("Profile pic on frontend"+ res.data);
          this.userdetails.profilepic = res.data;
          // console.log("after response profile"+ this.userdetails.profilepic);
        })
        .catch(err => console.log(err));
    },

    submitDetails: function() {
      var userdetails = {
        fullname: this.userdetails.fullname,
        title: this.userdetails.title,
        profilepic: this.userdetails.profilepic,
        email: this.userdetails.email,
        about: this.userdetails.about,
        github: this.userdetails.github,
        linkdin: this.userdetails.linkdin,
        facebook: this.userdetails.facebook,
        instagram: this.userdetails.instagram,
        other: this.userdetails.other,
        blog: this.userdetails.blog,
        twitter: this.userdetails.twitter,
        works: this.userdetails.works,
        projects: this.userdetails.projects,
        education: this.userdetails.education,
        skills: this.userdetails.skills,
        achievements: this.userdetails.achievements,
        username: this.userdetails.username
      };

      const id = this.$route.params.id; //here is user google id
      const t_id = this.$route.params.template; //here it is template id
      const username = this.userdetails.username; //here it is for template view

      axios
        .post(url.url + "/api/create", { userdetails: userdetails, id: id })
        .then(response => {
          console.log(response.data.length);

          this.$router.push({ path: `/${t_id}/${username}` });
        })
        .catch(err => console.log(err));
    },

    addNewProject() {
      this.userdetails.projects.push({
        project: "",
        description: "",
        from: "",
        to: "",
        details: "",
        gitlink: "",
        weblink: ""
      });
    },
    addNewskill() {
      this.userdetails.skills.push({
        skill: ""
      });
    },

    addNewachievements() {
      this.userdetails.achievements.push({
        achievement: ""
      });
    },

    deleteAchievement(i) {
      this.userdetails.achievements.splice(i, 1);
    },

    deleteSkill(i) {
      this.userdetails.skills.splice(i, 1);
    },
    deleteWork(i) {
      this.userdetails.works.splice(i, 1);
    },

    deleteProject(i) {
      this.userdetails.projects.splice(i, 1);
    },

    addNewwork() {
      this.userdetails.works.push({
        company: "",
        role: "",
        from: "",
        to: "",
        details: ""
      });
    },

    checkUsername: function() {
      var username = this.userdetails.username.trim();
      var submitval = document.getElementById("submit");

      if (username != "") {
        axios
          .get(url.url + "/api/check/" + username + "/" + this.$route.params.id) //username check AJAX request

          .then(res => {
            //  console.log(res.data);

            if (res.data != 0) {
              //1 vada alrady exists
              submitval.disabled = true;
              this.responseMessage = "Username is Not Available.";
            } else {
              submitval.disabled = false;
              this.responseMessage = "Username is  Available.";
            }
          })

          .catch(error => {
            console.log(error);
          });
      } else {
        submitval.disabled = true;
        this.responseMessage = "Please Enter Username";
      }
    }
  }
};
</script>

