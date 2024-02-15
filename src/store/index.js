import { createStore } from "vuex";
import csrf from "@/config/csrf.js";
import axios from "@/config/axios.js";

// Create a new store instance.
export const store = createStore({
  state: {
    authCheck: false,
    user: null,
    token: null,
  },
  mutations: {
    login(state, { authCheck, token, user }) {
      state.authCheck = true;
      state.token = token;
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      await csrf.getCookie();
      const response = await axios.post("auth/login", {
        email: email,
        password: password,
      });
   
      commit("login", {
        authCheck: true,
        token: response.token,
        user: response.user,
      });
    },
  },
});
