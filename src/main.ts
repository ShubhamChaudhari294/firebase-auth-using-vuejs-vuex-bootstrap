import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import firebase from 'firebase'
import '@/firebase'

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    if (to.meta.authRequired && !currentUser) {
        next({ name: 'Login' })
    } else {
        next()
    }
})

firebase.auth().onAuthStateChanged(user => {
    createApp(App)
        .use(store)
        .use(router)
        .mount("#app");
})