import csrf from "@/config/csrf.js";
import axios from "@/config/axios.js";
import sidebarVn from "@/lang/vn/sidebar.js";
import sidebarEn from "@/lang/en/sidebar.js";

const state = {
  language: 'vn',
  sidebar: {
    vn: sidebarVn,
    en: sidebarEn
  }
};

const mutations = {
  setLanguage(state, { language }) {
    state.language = language;
  },
};

const getters = {
  getSidebar: (state) => state.sidebar[state.language], 
  getCurrentLanguage: (state) => state.language 
};

const actions = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
