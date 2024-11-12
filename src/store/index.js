import { createStore } from "vuex";
import router from "@/router";
const state = {};
const getters = {};
const mutations = {
  redTo(state, payload) {
    router.push({ name: payload });
  },
};
const actions = {
  redTo({ commit }, payload) {
    commit("redTo", payload.toPage);
  },
};
export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
