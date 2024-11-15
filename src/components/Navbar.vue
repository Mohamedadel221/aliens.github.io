<template>
  <v-layout>
    <div class="navbar-dektop">
      <v-app-bar app color="black" dark>
        <v-toolbar-title class="mr-4">
          <v-img :src="require('@/assets/logo/alineslogo.jpeg')"> </v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-lg-flex">
          <v-btn
            @click="this.redTo({ toPage: 'home' })"
            text
            class="d-none d-lg-flex text-capitalize"
            elevation="0"
            >Home</v-btn
          >
          <v-btn text class="d-none d-md-flex text-capitalize" elevation="0"
            >Services</v-btn
          >
          <v-btn
            @click="this.redTo({ toPage: 'contactUs' })"
            text
            class="d-none d-md-flex text-capitalize"
            elevation="0"
            >Contact</v-btn
          >
        </v-toolbar-items>
        <v-btn icon class="d-lg-none" @click="drawer = !drawer">
          <v-icon v-if="!drawer">mdi-menu</v-icon>
          <v-icon v-else>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        class="text-center"
        color="black"
        v-model="drawer"
        app
        location="right"
      >
        <div class="btns-mopile mb-2 mt-5">
          <v-btn
            @click="this.redTo({ toPage: 'home' })"
            text
            class="text-capitalize"
            elevation="0"
            style="background: none; color: #fff"
            >Home</v-btn
          >
        </div>
        <div class="btns-mopile mb-2 mt-5">
          <v-btn
            text
            style="background: none; color: #fff"
            class="text-capitalize"
            elevation="0"
            >Services</v-btn
          >
        </div>
        <div class="btns-mopile mb-2 mt-5">
          <v-btn
            @click="this.redTo({ toPage: 'contactUs' })"
            text
            style="background: none; color: #fff"
            class="text-capitalize"
            elevation="0"
            >Contact</v-btn
          >
        </div>
      </v-navigation-drawer>
    </div>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
import "@/css/style.css";
export default {
  name: "navbrCompo",
  data() {
    return {
      drawer: false,
      items: [],
    };
  },
  methods: {
    ...mapActions(["redTo"]),
  },
};
</script>

<style scoped></style>
