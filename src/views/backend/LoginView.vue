<template >
    <div class="login-container">
        <div class="panel-head uk-text-large"> Đăng nhập</div>
        <div class="panel-body mt-2">
            <div class="form-row mb-2">
                <div class="label text-lg"> Tên đăng nhập </div>
                <input type="text" name="email" value='' class="input-text" autocomplete="off"/>
            </div>
            <div class="form-row mb-2">
                <div class="label">
                    <div class="uk-flex-between">
                        <span> Password</span>
                        <a href="" title="" style="display: iline-block;" class="text-xs"> Forgot password ?</a>
                    </div>
                </div>
                <input type="text" name="password" value='' class="input-text" autocomplete="off"/>
            </div>
            <div class="form-row mt-2">
                <div class="uk-flex uk-flex-middle">
                    <input type="checkbox" name="remember" class="input-checkbox" id="forgot-password">
                    <label for="forgot-password"> Remember</label>
                </div>
            </div>
            <div class="form-row">
                <button class="uk-button btn-login"> Login</button>
            </div>       
        </div>
        <div class="panel-footer">
            copyright Huysanti © 2024 
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
    body {
        font-family: 'Open Sans', sans-serif;
        height: 100vh;
        background-color: #989090;
    }
    .login-container{
        background-color: #90aa98;
        max-width: 500px;
        margin: 100px auto;
        padding: 20px;
        border-radius: 10px;
    }

    .panel-body{
        padding: 10px;
        display: grid;
        place-items: center;
    }
</style>