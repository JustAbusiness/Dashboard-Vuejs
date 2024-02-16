<template>
  <div id="wrapper" class="h-[100vh]">
    <SideBar/>
    <div class="page-wrapper">
      <nav class="navbar">
        <div class="uk-flex uk-flex-between uk-flex-middle">
          <button class="collapse-menu">
            <i class="bx bx-menu-alt-left text-2xl"></i>
          </button>
          <div class="navbar-top-link">
            <div class="uk-flex uk-flex-middle gap-3">
              <div class="notice">
                <span
                  class="header-link dropdown-toggle uk-flex uk-flex-middle"
                >
                  <i class="bx bx-bell header-link-icon text-2xl"></i>
                  <span class="badge bg-secondary">2</span>
                </span>
              </div>
              <i class="bx bx-exit text-xl text-black"></i>
              <router-link to="/login"> Đăng xuất</router-link>
            </div>
          </div>
        </div>
      </nav>
      <slot name="template"></slot>
    </div>
  </div>
</template>

<script setup>
import SideBar from "./SideBar.vue";
// import { store } from "@/store";
// import csrf from "@/config/csrf";
// import axios from "@/config/axios";

// export default {
//   data() {
//     return {
//       token: null,
//       user: null
//     };
//   },
//   mounted() {
//     // this.setToken();
//   },
//   methods: {
//     // async setToken() {
//     //   const token = store.state.token;                      // STATE TOKEN FROM VUEX STORE
//     //   if (!token) {
//     //     try {
//     //       await csrf.getCookie();
//     //       const response = await axios.get("auth/getAuthCookie");

//     //       this.token = response.data;
//     //     } catch (error) {
//     //       console.log(error);
//     //     }
//     //   }
//     // },
//     toggleSubModule(item) {
//       item.showSubModule = !item.showSubModule;
//     },
//   },
// };
</script>

<style scoped>
.page-wrapper {
  margin-left: 240px;
}
.navbar {
  padding: 20px 10px;
  background: #fff;
}

.header-link {
  padding: 10px;
  display: block;
  position: relative;
}

.header-link .badge {
  position: absolute;
  padding: 0px 4px;
  background: var(--secondary-color);
  color: #fff;
  width: 16px;
  height: 21px;
  border-radius: 50%;
  top: 3px;
  right: 2px;
}
</style>
