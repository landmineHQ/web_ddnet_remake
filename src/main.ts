import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { autoUpdatePinia, pinia } from './stores'

import UserIndexedDB from './stores/UserIndexedDB'
import useUserInfoStore from './stores/user'

const app = createApp(App)
app.use(pinia)
UserIndexedDB.getUser().then(res => {
    autoUpdatePinia()
    if (res === false) console.log("read failed")
    if (!useUserInfoStore().isFirstComeIn) router.push({ name: "profile" })
})
app.use(router)
app.use(i18n)

app.mount('#ddnet-app')

// @ts-ignore
hideLoaderMask()
