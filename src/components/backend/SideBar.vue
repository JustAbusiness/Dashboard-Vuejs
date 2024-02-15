<template>
  <aside id="sidebar" class="app-sidebar">
    <div class="aside-head">
      <span class="image img-cover profile-image"
        ><img src="@/assets/me.jpg" alt=""
      /></span>
      <div class="name">Pham Ngoc Huy</div>
      <div class="role">Quản trị viên</div>
    </div>
    <div class="aside-body">
      <ul uk-accordion class="task-list uk-list uk-clearfix">
        <li v-for="item in sidebarData" :key="item.name">
          <a href="" class="uk-accordion-title">
            <div class="uk-flex uk-flex-middle">
              <span class="task-icon">
                <i :class="item.icon"></i>
              </span>
              <span class="nav-label">{{ item.name }}</span>
            </div>
          </a>
          <div class="uk-accordion-content">
            <ul class="sub-module uk-list uk-clear-fix">
              <li v-for="sub in item.subModule" :key="sub.name">
                <router-link :to="sub.route">{{ sub.name }}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import axios from "@/config/axios.js";
import csrf from "@/config/csrf";

export default {
  data() {
    return {
      sidebarData: null,
      showSubModule: false,
    };
  },
  mounted() {
    this.getSidebarData();
  },
  methods: {
    async getSidebarData() {
      try {
        await csrf.getCookie();
        const token = localStorage.getItem("token");
        const response = await axios.get("dashboard/getModule", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        this.sidebarData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    toggleSubModule(item) {
      item.showSubModule = !item.showSubModule;
    },
  },
};
</script>

<style scoped>
.app-sidebar {
  height: 100%;
  width: 240px;
  background: #111c43;
  color: #a3aed1;
  position: absolute;
}
.app-sidebar .aside-head {
  padding: 20px;
}
.profile-image {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 5px;
}
.profile-image img {
  border-radius: 50%;
}
.aside-head .name {
  font-weight: 500;
  color: #fff;
  margin-bottom: 7px;
}
.aside-head .role {
  font-size: 13px;
}

.app-sidebar .aside-body {
  padding: 0 10px;
}

.app-sidebar .task-list > li > a {
  padding: 13px 12px;
  position: relative;
  text-decoration: none;
  font-size: 14px;
  border-radius: 8px;
  display: block;
  color: #a3aed1;
  position: relative;
  padding-left: 40px;
  font-weight: 500;
}

.app-sidebar .task-list > li:hover > a,
.app-sidebar .task-list > li > .active {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border-radius: 8px;
}
.app-sidebar .task-list li:hover > a,
.app-sidebar .task-list li .active > a {
  color: #fff;
}
.app-sidebar .task-list li > a .task-icon {
  font-size: 18px;
  position: absolute;
  top: 13px;
  left: 10px;
}

.app-sidebar .task-list li > a .task-icon:before {
  content: "";
}
.app-sidebar .task-list li > a .arrow {
  right: 10px;
  left: initial;
}
.task-name {
  text-transform: uppercase;
  color: #57638b !important;
  font-weight: 700 !important;
  font-size: 11px !important;
  padding-left: 10px !important;
}
.sub-module {
  padding-left: 20px;
  transition: max-height 0.5s ease;
  margin: 0;
}
.sub-module > li > a {
  font-size: 13px;
  color: #a3aed1;
}
.sub-module li {
  position: relative;
  padding-left: 10px;
}

.uk-accordion-title::before {
  width: 10px;
  height: 9px;
  filter: brightness(0) invert(1);
  position: absolute;
  top:18px;
  right:10px;
}
</style>
