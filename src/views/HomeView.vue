<template>
  <Navbar />
  <!--Video-Home-Page-->
  <div class="video d-flex justify-content align-center">
    <div class="section-bg">
      <v-row class="align-center">
        <v-col cols="12">
          <div class="video-container">
            <video
              autoplay
              muted
              loop
              playsinline
              class="video-background img-fluid"
            >
              <source src="../assets/video/homepagevido.mp4" type="video/mp4" />
            </video>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
  <!--Video-Home-Page-->
  <!--grid-four-img-->
  <div class="grid-four-img mt-5">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <div class="title-four-img-grid">
            <h2 class="text-capitalize larg-text orange-color">
              Everything we do, we do it in <br />
              double.
            </h2>
          </div>
          <div class="content-grid-four-img position-relative mt-4">
            <h2
              class="mt-3 mb-2 text-capitalize position-relative text-center orange-color"
            >
              who are we
            </h2>
            <p class="text-capitalize mt-2 mb-0">
              Byond was founded by a team of entrepreneurs with a unique
              <br />
              video storytelling perspective and an unmatched commitment to
              <br />
              client satisfaction. Because our goal is to forge partnerships,
              not <br />
              one-time assignments. Thus becoming the benchmark for <br />
              creative media creation and business storytelling in the Middle
              <br />
              East by 2026
            </p>
          </div>
          <div class="content-grid-four-img position-relative">
            <h2
              class="mt-3 mb-2 text-capitalize position-relative text-center orange-color"
            >
              How We Work
            </h2>
            <p class="text-capitalize mt-2 mb-0">
              Byond was founded by a team of entrepreneurs with a unique
              <br />
              video storytelling perspective and an unmatched commitment to
              <br />
              client satisfaction. Because our goal is to forge partnerships,
              not <br />
              one-time assignments. Thus becoming the benchmark for <br />
              creative media creation and business storytelling in the Middle
              <br />
              East by 2026
            </p>
            <p class="text-capitalize mt-5 mb-0 text-black-50">
              In a nutshell, we double our partners’ typical media production
              experience. We build them a strategy, a story, and original
              captivative content “beyond their expectations”
            </p>
          </div>
          <div class="btn mx-auto text-center mt-5">
            <v-btn
              color="red"
              class="text-capitalize"
              prepend-icon="mdi-instagram"
              variant="outlined"
              >instagram</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="6">
              <div class="img-four-grid">
                <v-img
                  lazy="loading"
                  :src="require('@/assets/gridfourimg/g-1.jpeg')"
                ></v-img>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="img-four-grid">
                <v-img
                  lazy="loading"
                  :src="require('@/assets/gridfourimg/g-2.jpeg')"
                ></v-img>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="img-four-grid">
                <v-img
                  lazy="loading"
                  :src="require('@/assets/gridfourimg/g-3.jpeg')"
                ></v-img>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="img-four-grid">
                <v-img
                  lazy="loading"
                  :src="require('@/assets/gridfourimg/g-4.jpeg')"
                ></v-img>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!--grid-four-img-->
  <!--counter-functions-->
  <div class="counter-function mt-5 mb-5 text-capitalize">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="clients text-center mt-3 mb-2">
            <h2 class="mt-3 mb-2 orange-color">Clients</h2>
            <p class="mt-3 mb-2">+{{ numberClients }}</p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="clients text-center mt-3 mb-2">
            <h2 class="mt-3 mb-2 orange-color">Projects Completed</h2>
            <p class="mt-3 mb-2">+{{ projectComp }}</p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="clients text-center mt-3 mb-2">
            <h2 class="mt-3 mb-2 orange-color">Working Hours</h2>
            <p class="mt-3 mb-2">+{{ workHour }}</p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="clients text-center mt-3 mb-2">
            <h2 class="mt-3 mb-2 orange-color">Countries</h2>
            <p class="mt-3 mb-2">+{{ counters }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!--counter-functions-->
  <!--section-three-grid-->
  <div class="we-help-section">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" lg="7">
          <div class="imgs-grid">
            <div class="grid grid-1">
              <img lazy="loading" src="@/assets/gridfourimg/g-1.jpeg" alt="" />
            </div>
            <div class="grid grid-2">
              <img lazy="loading" src="@/assets/gridfourimg/g-1.jpeg" alt="" />
            </div>
            <div class="grid grid-3">
              <img lazy="loading" src="@/assets/gridfourimg/g-1.jpeg" alt="" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="5">
          <div class="title-grid-three-img">
            <h2
              class="text-capitalize section-title mb-4 orange-color text-center"
            >
              software
            </h2>
          </div>
          <div class="content-grid-three-img">
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate
            </p>

            <ul class="list-unstyled custom-list my-4 text-center">
              <li>WebDevelopment</li>
              <li>Mopile Applications</li>
            </ul>
          </div>
          <div class="title-grid-three-img">
            <h2
              class="text-capitalize section-title mb-4 orange-color text-center"
            >
              graphicDesigner
            </h2>
          </div>
          <div class="content-grid-three-img">
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate
            </p>

            <ul class="list-unstyled custom-list my-4 text-center">
              <li>WebDevelopment</li>
              <li>Mopile Applications</li>
            </ul>
          </div>
          <div class="title-grid-three-img">
            <h2
              class="text-capitalize section-title mb-4 orange-color text-center"
            >
              montage
            </h2>
          </div>
          <div class="content-grid-three-img">
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate
            </p>

            <ul class="list-unstyled custom-list my-4 text-center">
              <li>WebDevelopment</li>
              <li>Mopile Applications</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!--section-three-grid-->
  <v-container>
    <hr />
  </v-container>
  <!--why-choese-->
  <div class="over-lay-img mt-5">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <div class="content-right-img">
            <h2 class="mt-3 mb-2 text-capitalize orange-color">
              why should <br />
              you choose aliens
            </h2>
            <p class="text-capitalize fw-bold">
              We are here to support you and provide the best solutions to
              achieve your goals. Don’t to stand by your side every step of the
              way.
            </p>
            <p class="fw-bold">
              hesitate to reach out for a free consultation or to answer any
              inquiries. Whether you’re looking to grow your business or enhance
              your digital presence, our team of experts is ready
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="img-right-content">
            <v-img
              lazy="loading"
              :src="require('@/assets/img-layout/whychoese.jpg')"
            >
            </v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!--why-choese-->
  <!--footer-->
  <Footer />
  <!--footer-->
</template>

<script>
import "@/css/style.css";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      numberClients: 0,
      projectComp: 0,
      workHour: 2440.0,
      counters: 0,
      clientGoal: 100,
      projectGoal: 50,
      workHourGoal: 2500.0,
      countriesGoal: 10,
      intervalId: null,
    };
  },
  mounted() {
    this.startCounter();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCounter() {
      this.incrementClients();
      this.incrementProjects();
      this.incrementWorkingHours();
      this.incrementCountries();
    },
    incrementClients() {
      const clientInterval = setInterval(() => {
        if (this.numberClients < this.clientGoal) {
          this.numberClients++;
        } else {
          clearInterval(clientInterval);
        }
      }, 50);
    },
    incrementProjects() {
      const projectInterval = setInterval(() => {
        if (this.projectComp < this.projectGoal) {
          this.projectComp++;
        } else {
          clearInterval(projectInterval);
        }
      }, 50);
    },
    incrementWorkingHours() {
      const workHourInterval = setInterval(() => {
        if (this.workHour < this.workHourGoal) {
          this.workHour++;
        } else {
          clearInterval(workHourInterval);
        }
      }, 50);
    },
    incrementCountries() {
      const countriesInterval = setInterval(() => {
        if (this.counters < this.countriesGoal) {
          this.counters++;
        } else {
          clearInterval(countriesInterval);
        }
      }, 50);
    },
  },
};
</script>
