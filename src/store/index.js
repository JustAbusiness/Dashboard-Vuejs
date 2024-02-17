import { createStore } from "vuex";
import authStore from '@/store/auth/auth.js'
import languageStore from '@/store/language'

// Create a new store instance.
export const store = createStore({
  modules: {
    auth: authStore,
    language: languageStore
  }
});
