import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import start from '../components/Start.vue';
import usersList from '../components/UsersList.vue';

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
        component: start
    },
    {
        path: '/users',
        name: 'users',
        component: usersList
    }
]

const router = new VueRouter({
    routes
});



export default router;
