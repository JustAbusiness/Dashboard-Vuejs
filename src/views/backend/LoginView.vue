<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <div class="login-wrapper">
        <div class="panel-head">
          <h2 class="heading-1 mb10">Đăng nhập</h2>
          <div class="description">
            Chào mừng bạn đến với hệ thống <br />
            <span>VUE SYSTEM</span>
          </div>
        </div>
        <div class="panel-body">
          <div class="form-row mb-5">
            <div class="label">Tên đăng nhập</div>
            <input
              type="text"
              v-model="email"
              class="input-text"
              autocomplete="off"
            />
            <div v-if="emailErrorMessage" class="uk-text-danger">
              {{ "*" + emailErrorMessage }}
            </div>
          </div>
          <div class="form-row mb-10">
            <div class="label">
              <div class="uk-flex uk-flex-between">
                <span>Mật khẩu</span>
                <router-link to="/dashboard" class="forgot"
                  >Quên mật khẩu?</router-link
                >
              </div>
            </div>
            <input
              type="password"
              v-model="password"
              value=""
              class="input-text"
              autocomplete="off"
            />
            <div v-if="passwordErrorMessage" class="uk-text-danger">
              {{ "*" + passwordErrorMessage }}
            </div>
          </div>
          <div class="form-row mb-20">
            <button class="uk-button btn-login">Đăng nhập</button>
          </div>
        </div>
        <div class="panel-foot">copyright chandanv1010@gmail.com</div>
      </div>
    </form>
  </div>
</template>

<script>
    import { BACKEND_API } from '@/config/constant.js'
    import axios from 'axios';
    export default {
        data() {
            return {
                email: '',
                password: '',
                emailErrorMessage: '',
                passwordErrorMessage: ''
            }
        },
        methods: {
            async handleLogin() {
                try {
                    let object = {
                        email: this.email,
                        password: this.password
                    };

                    const response =  await axios.post(BACKEND_API + 'auth/login', object);
                    
                    if (response.data.status == 401) {
                        this.emailErrorMessage = response.data.data.email;
                        this.passwordErrorMessage = response.data.data.password;
                    } else {
                        console.log(response)
                    }


                } catch (error) {
                    console.log(error)
                }
            },
        }
    }

</script>

<style scoped>
.login-container {
  padding-top: 20px;
}
.login-wrapper {
  width: 410px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0.125rem 0 rgba(10, 10, 10, 0.04);
  padding: 48px;
  background: #65f3ad;
}
.login-container .panel-head {
  text-align: center;
  margin-bottom: 30px;
}
.login-wrapper .heading-1 {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 24px;
}
.login-container .description {
  font-size: 15px;
  color: #000;
}
.login-container .description span {
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  color: rgb(132, 90, 223);
}
.btn-login {
  background: rgb(132, 90, 223);
  width: 100%;
  border-radius: 5px;
  height: 40px;
  color: #fff;
}
.login-wrapper .panel-foot {
  text-align: center;
}
.login-wrapper .label {
  font-weight: 600;
  margin-bottom: 5px;
  color: #000;
}

.form-row .forgot {
  color: rgb(230, 83, 60);
  font-size: 13px;
}
</style>
