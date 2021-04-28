import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/style.less'
import './assets/style/style-new.less'
import './assets/style/bootstrap-grid.min.less'
import './assets/style/keyframes.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app')
