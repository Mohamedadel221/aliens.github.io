<template>
  <div class="footer">
    <v-layout>
      <v-footer color="black">
        <v-container>
          <v-row class="align-center">
            <v-col cols="12">
              <div class="parent-footer-content">
                <div class="footer-page mt-3 mb-2 text-center">
                  <v-btn
                    class="text-capitalize orange-color"
                    variant="0"
                    elevation="0"
                    @click="this.redTo({ toPage: 'home' })"
                    >home</v-btn
                  >
                  <v-btn
                    class="text-capitalize orange-color"
                    variant="0"
                    elevation="0"
                    >services</v-btn
                  >
                  <v-btn
                    class="text-capitalize orange-color"
                    variant="0"
                    elevation="0"
                    @click="this.redTo({ toPage: 'contactUs' })"
                    >contact</v-btn
                  >
                </div>
                <div class="footer-icon mt-3 mb-2 text-center">
                  <v-btn color="white" elevation="0" variant="0"
                    ><v-icon>mdi-facebook</v-icon></v-btn
                  >
                  <v-btn color="white" elevation="0" variant="0"
                    ><v-icon>mdi-instagram</v-icon></v-btn
                  >
                  <v-btn color="white" elevation="0" variant="0"
                    ><v-icon>mdi-whatsapp</v-icon></v-btn
                  >
                  <v-btn
                    href="mailto:aliens@gmail.com"
                    color="white"
                    elevation="0"
                    variant="0"
                    ><v-icon>mdi-email</v-icon></v-btn
                  >
                </div>
                <div class="footer-content text-center mt-3 mb-2">
                  <h4 class="text-capitalize mt-5 mb-2">egypt - cairo</h4>
                  <p class="text-capitalize mt-3 mb-0 text-white-50">
                    Business park (Mivida) - 5th settlement, Newcairo
                  </p>
                  <v-btn
                    href="tel:+201273530123"
                    class="mt-3 mb-2"
                    variant="0"
                    elevation="0"
                    >01273530123</v-btn
                  >
                </div>
                <hr />
                <div
                  class="copy-right mt-3 text-capitalize d-flex align-center"
                >
                  <p class="mt-3 mb-0 text-white-50">
                    &copy; 2024 aliens. All rights reserved.
                  </p>
                  <v-spacer></v-spacer>
                  <p class="mt-3 mb-0 text-white-50">
                    Powered by dev mohamed-adel
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-layout>
  </div>
</template>

<script>
import "@/css/style.css";
import { mapActions } from "vuex";
export default {
  name: "footerCompo",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["redTo"]),
  },
};
</script>

<style lang="scss" scoped></style>
