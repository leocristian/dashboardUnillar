import { createRouter, createWebHashHistory} from 'vue-router';

import HomePage from '../pages/landing/HomePage.vue'
import SigninPage from '../pages/signin/SigninPage.vue'
// import DemoBoard from '../pages/landing/DemoBoard.vue'
import DashboardCore from '../pages/landing/DashboardCore.vue'
const routes = [
    { path: '/', component: HomePage },
    { path: '/signin', component: SigninPage },
    { path: '/demo', component: DashboardCore.vue}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router