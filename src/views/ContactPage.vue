<template>
  <Navbar />
  <div class="contact-title mt-15">
    <h1 class="text-center mt-10 orange-color text-capitalize">contact us</h1>
  </div>
  <div class="contactus">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <v-sheet>
            <v-form @submit.prevent>
              <h2 class="text-capitalize mt-5 mb-2 orange-color text-center">
                send message
              </h2>
              <v-text-field
                type="text"
                label="Name"
                variant="outlined"
                v-model="name"
                color="orange"
              ></v-text-field>
              <span
                class="error-feedback text-center mx-auto"
                v-if="v$.name.$error"
                >{{ v$.name.$errors[0].$message }}</span
              >
              <v-text-field
                type="text"
                label="Email"
                variant="outlined"
                v-model="email"
                color="orange"
              ></v-text-field>
              <span
                class="error-feedback text-center mx-auto"
                v-if="v$.email.$error"
                >{{ v$.email.$errors[0].$message }}</span
              >
              <v-text-field
                type="number"
                label="PhoneNumber"
                variant="outlined"
                v-model="phone"
                color="orange"
              ></v-text-field>
              <span
                class="error-feedback text-center mx-auto"
                v-if="v$.phone.$error"
                >{{ v$.phone.$errors[0].$message }}</span
              >
              <v-textarea
                label="Your Message"
                type="text"
                variant="outlined"
                v-model="yourMessage"
                color="orange"
              ></v-textarea>
              <span
                class="error-feedback text-center mx-auto"
                v-if="v$.yourMessage.$error"
                >{{ v$.yourMessage.$errors[0].$message }}</span
              >
              <div class="text-center">
                <v-btn
                  @click="sendMessage()"
                  class="text-capitalize"
                  variant="outlined"
                  >send message</v-btn
                >
              </div>
              <div class="error-message text-center mt-3">
                <h2 class="not-found-error">
                  {{ errorMessage }}
                </h2>
              </div>
              <div class="success-message text-center mt-3">
                <h2>{{ successMessage }}</h2>
              </div>
            </v-form>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="6">
          <div class="content-left-form">
            <div class="title-left-form">
              <div class="">
                <h2 class="mt-3 mb-2 text-capitalize orange-color">
                  Contact Us to get started
                </h2>
                <p class="mt-5 mb-2 text-capitalize text-black-50">
                  we are here for you
                </p>
              </div>
              <div class="btn-whats-app mt-5 mb-2">
                <v-btn
                  rounded="xl"
                  size="large"
                  color="black"
                  class="text-capitalize"
                  variant="outlined"
                  ><v-icon color="green" class="mx-1">mdi-whatsapp</v-icon>
                  message us whatsApp</v-btn
                >
              </div>
              <div class="content-bottom-left-form mt-3 mb-2">
                <h2 class="text-capitalize mt-3 mb-2">
                  Idea Network - EGYPT - UAE - KSA
                </h2>
                <h4 class="text-capitalize mt-3 mb-2">
                  Emaar Mivida, Business Park - 5th settlement, Egypt
                </h4>
                <h4 class="text-capitalize mt-3 mb-0">contact us</h4>
                <div class="call-btn mt-3">
                  <v-btn class="orange-color" variant="0">+201273530123</v-btn>
                </div>
                <div class="mail mt-3 mb-2">
                  <v-btn class="orange-color text-capitalize" variant="0"
                    >aliens@gmail.com</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import "@/css/style.css";
import Navbar from "@/components/Navbar.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { mapActions } from "vuex";
export default {
  name: "contactUsPage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      v$: useVuelidate(),
      successMessage: "",
      errorMessage: "",
      name: "",
      email: "",
      phone: "",
      yourMessage: "",
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: { required, maxLength: maxLength(11) },
      yourMessage: { required },
    };
  },
  methods: {
    ...mapActions(["redTo"]),
    sendMessage() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.successMessage = "Your Feedback Sent";
        this.errorMessage = "";
        this.name = "";
        this.email = "";
        this.phone = "";
        this.yourMessage = "";
        setTimeout(() => {
          this.redTo({ toPage: "home" });
        }, 1000);
      } else {
        this.successMessage = "";
        this.errorMessage = "Please Required All Fields!";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
