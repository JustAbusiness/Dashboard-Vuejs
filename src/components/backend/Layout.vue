<template>
  <div id="wrapper" class="h-[100vh]">
    <SideBar />
    <div class="page-wrapper">
        <Navbar />
      <!-- <nav class="navbar">
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
      </nav> -->
      <slot name="template"></slot>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import SideBar from "./SideBar.vue";
import { store } from "@/store";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Navbar from "./Navbar.vue";



const setLanguage = () => {
  store.commit("auth/setLanguage", "vn");
};
const setToken = () => {
  const token = localStorage.getItem("token");
  store.commit("auth/setToken", token);
};

const showNotification = () => {
  const message = store.getters["message/getMessage"];
  const type = store.getters["message/getType"];
  if (message !== null) {
    if (type === "error") {
      toast.error(message.message);
    }
    toast.success(message);
    store.dispatch("message/clearMessage");
  }
};

onBeforeMount(() => {
  setToken();
  setLanguage();
  showNotification();
});
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
