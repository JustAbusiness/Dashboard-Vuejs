<template>
  <nav class="navbar">
    <div class="uk-flex uk-flex-between uk-flex-middle">
      <button class="collapse-menu">
        <i class="bx bx-menu-alt-left text-2xl"></i>
      </button>
      <div class="navbar-top-link">
        <div class="uk-flex uk-flex-middle gap-4">
          <div class="uk-inline">
            <button class="uk-button items-center flex uk-button-small language-active rounded-md p-0" type="button">
                <img width="40" height="40" class="rounded-md" src="https://plus.unsplash.com/premium_photo-1675865396004-c7b86406affe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlldG5hbSUyMGZsYWd8ZW58MHx8MHx8fDA%3D" alt="vn">
            </button>
            <div uk-dropdown="mode:click" class="language-dropdown">
                <div class="language-item">
                    <div class="uk-flex uk-flex-middle justify-evenly cursor-pointer hover:bg-slate-300 p-2 rounded-md">
                        <span class="language"><img width="40" height="40" class="rounded-full" src="https://images.unsplash.com/photo-1494419470281-65c2b001a42b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjBmbGFnfGVufDB8fDB8fHww" alt="uk"></span>
                        <span class="language-text">English</span>
                    </div>
                </div>
            </div>
          </div>
          <div class="notice">
            <span class="header-link dropdown-toggle uk-flex uk-flex-middle">
              <i class="bx bx-bell header-link-icon text-2xl"></i>
              <span class="badge bg-primary">2</span>
            </span>
          </div>
          <div class="notice">
            <span class="header-link dropdown-toggle uk-flex uk-flex-middle">
              <i class="bx bx-cart header-link-icon text-2xl"></i>
              <span class="badge bg-secondary">2</span>
            </span>
            <div uk-dropdown="mode:click, pos: top-right" class="bell-dropdown">
                <div class="panel-head">
                    <div class="uk-flex uk-flex-middle justify-evenly cursor-pointer hover:bg-slate-300 p-2 rounded-md">
                       <div class="bell-heading">Notification</div>
                       <div class="bell-unread text-red-400 bg-red-200 rounded-md p-1"> <b>10</b> unread</div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="bell-item flex items-center justify-evenly">
                        <div class="uk-flex uk-flex-middle gap-5">
                            <span class="icon"><i class='bx bxs-calendar-exclamation text-xl'></i></span>
                            <div class="bell-message">
                                <div class="title"> Your order is placed</div>
                                <div class="description">
                                    <p> Order number: 123456</p>
                                    <p> Address: 12x Main Street</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
          </div>
          <div class="nav-profile cursor-pointer ml-3">
            <div class="uk-flex uk-flex-middle">
                <span class="profile-image mr-1"><img src="@/assets/me.jpg" width="40" height="40" class="rounded-xl"  alt="profile"></span>
                <div class="profile-description">
                    <div class="profile-name font-medium italic"> Pham Ngoc Huy</div>
                    <div class="profile-role font-semibold">Super Admin</div>
                </div>
            </div>
            <div uk-dropdown="mode:click" class="profile-dropdown">
                <div class="profile-item">
                    <div class="uk-flex uk-flex-middle justify-evenly cursor-pointer hover:bg-slate-300 p-2 rounded-md">
                        <span class="profile"><i class="bx bx-user"></i></span>
                        <span class="profile-text">Profile</span>
                    </div>
                </div>
                <div class="profile-item">
                    <div class="uk-flex uk-flex-middle justify-evenly cursor-pointer hover:bg-slate-300 p-2 rounded-md">
                        <span class="profile"><i class="bx bx-envelope"></i></span>
                        <span class="profile-text">Inbox</span>
                    </div>
                </div>
                <div class="profile-item">
                    <div class="uk-flex uk-flex-middle justify-evenly cursor-pointer hover:bg-slate-300 p-2 rounded-md">
                        <span class="profile"><i class="bx bx-cog"></i></span>
                        <span class="profile-text">Setting</span>
                    </div>
                </div>
                <div class="profile-item">
                    <div class="uk-flex uk-flex-middle justify-evenly cursor-pointer hover:bg-slate-300 p-2 rounded-md">
                        <span class="profile"><i class="bx bx-exit"></i></span>
                        <router-link to="/login"> Đăng xuất</router-link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
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
.notice {
    line-height: 1.5;
}
.language-dropdown {
    padding: 10px;
    border-radius: 5px;
}
.profile-dropdown {
    font-size: 15px;
}
.bell-dropdown {
    border-radius: 10px;
    left:1000px !important;
    width: 300px;
}
</style>
