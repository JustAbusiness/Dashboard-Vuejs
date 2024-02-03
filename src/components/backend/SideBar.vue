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
      <ul class="uk-list uk-clearfix task-list">
        <li class="task-item">
          <span class="task-name">Main</span>
        </li>
        <li>
          <a href="" class="active">
            <div class="uk-flex uk-flex-middle">
              <span class="task-icon">
                <i class="bx bx-home"></i>
              </span>
              <span class="nav-label">Dashboard</span>
              <span class="task-icon arrow">
                <i class="bx bx-chevron-right"></i>
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="uk-flex uk-flex-middle">
              <span class="task-icon">
                <i class="bx bx-cart"></i>
              </span>
              <span class="nav-label">Ql Sản Phẩm</span>
              <span class="task-icon arrow">
                <i class="bx bx-chevron-right"></i>
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="uk-flex uk-flex-middle">
              <span class="task-icon">
                <i class="bx bx-file"></i>
              </span>
              <span class="nav-label">QL Bài Viết</span>
              <span class="task-icon arrow">
                <i class="bx bx-chevron-right"></i>
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="uk-flex uk-flex-middle">
              <span class="task-icon">
                <i class="bx bx-shopping-bag"></i>
              </span>
              <span class="nav-label">QL Đơn hàng</span>
              <span class="task-icon arrow">
                <i class="bx bx-chevron-right"></i>
              </span>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="uk-flex uk-flex-middle">
              <span class="task-icon">
                <i class="bx bx-cog"></i>
              </span>
              <span class="nav-label">Cấu hình hệ thống</span>
              <span class="task-icon arrow">
                <i class="bx bx-chevron-right"></i>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup></script>

<style scoped>
.app-sidebar {
  height: 100%;
  width: 240px;
  background: #111c43;
  color: #a3aed1;
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

.app-sidebar .task-list li > * {
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

.app-sidebar .task-list li:hover a,
.app-sidebar .task-list li .active {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border-radius: 8px;
}
.app-sidebar .task-list li:hover a,
.app-sidebar .task-list li .active a {
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
</style>
