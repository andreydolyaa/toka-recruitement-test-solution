import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: null,
        isLoading: false,
        searchKeyword: '',
        criteria: []
    },
    getters: {
        getUsers(state) {
            const { searchKeyword, criteria } = state;
            if (searchKeyword) {
                return state.users.filter(user => {
                    return user.name.toLowerCase().includes(searchKeyword.toLowerCase())
                        || user.city.toLowerCase().includes(searchKeyword.toLowerCase())
                });
            }
            else if (criteria.length) {
                return state.users.filter(user => {
                    return criteria.includes(user.criteria) || criteria.includes(user.city);
                });
            }
            else return state.users;

        },
        getIsLoading(state) {
            return state.isLoading;
        },
        getNumOfUsers(state) {
            return state.users.length;
        },
    },
    mutations: {
        setDataModel(state, { data }) {
            state.users = data;
        },
        setIsLoading(state, { condition }) {
            state.isLoading = condition;
        },
        setFilterByText(state, { data }) {
            state.searchKeyword = data;
        },
        setFilterByCriteria(state, { item }) {
            if (state.criteria.includes(item)) {
                const idx = state.criteria.findIndex(currItem => currItem === item);
                state.criteria.splice(idx, 1);
            } else {
                state.criteria.push(item);
            }
        },
        clearSearchAndCriteria(state){
            state.searchKeyword = '',
            state.criteria = [];
        }
    },
    actions: {
        startUsersSearch(context) {
            const websocket = new WebSocket('ws://localhost:3000');
            context.commit({ type: 'setIsLoading', condition: true });
            websocket.onopen = () => {
                websocket.send('start')
                websocket.onmessage = (event) => {
                    let interval = setInterval(() => {
                        context.commit({ type: 'setDataModel', data: JSON.parse(event.data) });
                        context.commit({ type: 'setIsLoading', condition: false });
                        clearInterval(interval);
                    }, 3000)
                }
            }
        },
    },
    modules: {

    }
})
