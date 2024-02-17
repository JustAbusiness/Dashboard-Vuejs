import csrf from "@/config/csrf.js";
import axios from "@/config/axios.js";


const state = {
  authCheck: false,
  user: null,
  token: null,
};

const mutations = {
  loginSuccess(state, { authCheck, token, user }) {
    state.authCheck = true;
    state.token = token;
    state.user = user;
  },
  setToken(state, token) {
      state.token = token;
  }
};

const getters = {
  getToken: (state) => state.token,
};

const actions = {
  async login({ commit }, { email, password }) {
    await csrf.getCookie();
    const response = await axios.post("/auth/login", {
      email: email,
      password: password,
    });

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("token", response.token);
    localStorage.setItem("token_expires", response.token_exprires_at);

    commit("loginSuccess", {
      authCheck: true,
      token: response.token,
      user: response.user,
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
