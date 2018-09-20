import Vue from "vue";
import Vuex from "vuex";

import { inbox } from "./modules/inbox";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    inbox,
  },
  mutations,
  actions,
});
