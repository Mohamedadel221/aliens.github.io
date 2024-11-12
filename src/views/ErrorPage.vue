<template>
  <div class="error-page">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12">
          <div class="backtohomepage mb-3">
            <v-btn
              @click="this.redTo({ toPage: 'home' })"
              prepend-icon="mdi-home"
              class="text-capitalize"
              color="green"
              >back to home page</v-btn
            >
          </div>
          <div class="img-error">
            <v-img
              :src="require('@/assets/errorpage/errorpage.png')"
              max-width="400"
            ></v-img>
          </div>
          <div class="text-errors text-center mt-2">
            <h1 class="text-capitalize">the page not found</h1>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "errorPage",
  methods: {
    ...mapActions(["redTo"]),
  },
};
</script>

<style lang="scss" scoped>
.text-errors h1 {
  color: #fff;
}
.error-page {
  background-color: #993a33;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.error-page .v-img,
.error-page .v-btn {
  display: flex;
  margin: auto;
}
</style>
