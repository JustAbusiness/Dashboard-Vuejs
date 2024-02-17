import { createStore } from "vuex";
import authStore from '@/store/auth/auth.js'
import languageStore from '@/store/language'
import messageStore from '@/store/toast'

// Create a new store instance.
export const store = createStore({
  modules: {
    auth: authStore,
    language: languageStore,
    message:  messageStore
  }
});
