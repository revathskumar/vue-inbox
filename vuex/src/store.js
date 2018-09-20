import Vue from "vue";
import Vuex from "vuex";

import { inbox } from "./modules/inbox";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    inbox,
  }
});
