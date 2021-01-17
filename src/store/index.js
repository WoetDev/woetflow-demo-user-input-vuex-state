import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    values: {
      example: "Change my value to see the state update!"
    }
  },
  getters: {},
  mutations: {
    setValues(state, values) {
      state.values = Object.assign({}, state.values, values);
    }
  },
  actions: {},
  modules: {}
});
