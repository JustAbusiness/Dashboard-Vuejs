import './assets/main.css'

import { createApp } from 'vue'
import {store} from '@/store'
import App from './App.vue'
import router from './router'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'boxicons/css/boxicons.min.css'
import './index.css'
import Toast from 'vue3-toastify'

UIkit.use(Icons)

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Toast, {
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true
})
app.mount('#app')
