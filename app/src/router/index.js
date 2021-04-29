import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Start from '../views/Start.vue';
import UsersList from '../views/UsersList.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/start',
        name: 'start',
        component: Start
    },
    {
        path: '/users',
        name: 'users',
        component: UsersList
    }
]

const router = new VueRouter({
    routes
});



export default router;
