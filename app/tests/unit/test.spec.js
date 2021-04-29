import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex'
import Start from '@/views/Start.vue';
import UserPreview from '@/components/UserPreview.vue';
import getters from './getters-mock';

const localVue = createLocalVue();
localVue.use(Vuex);


describe('Start Component', () => {

    test('has start text', () => {
        const wrapper = shallowMount(Start);
        const text = wrapper.find('p');
        expect(text.text()).toBe('START')
    });

    test('clicking on START fires findUsers method', () => {
        const wrapper = shallowMount(Start);
        const findUsers = jest.fn();
        wrapper.setMethods({
            findUsers: findUsers
        });
        wrapper.find('.circle-layer-1').trigger('click');
        expect(findUsers).toHaveBeenCalled();
    });

});

describe('UserPreview Component', () => {
    test('checks if props gets user object', () => {
        const wrapper = shallowMount(UserPreview, {
            propsData: {
                user: {}
            }
        });
        expect(wrapper.exists()).toBe(true);
    });
});


describe('VUEX STORE GETTERS', () => {
    test('state.users', () => {
        const state = {
            users: ['user1', 'user2', 'user3'],
            isLoading: true
        }
        expect(getters.getNumOfUsers(state)).toBe(3);
        // expect(getters.getIsLoading(state)).toBe(true);
    });
});




// describe('VUEX GETTERS', () => {
//     let getters;
//     let store;

//     beforeEach(() => {
//         getters = {
//             isLoading: () => false
//         }
//         store = new Vuex.Store({
//             getters
//         });
//     });

//     test('renders store.getters.isLoading ReturnArrow', () => {
//         const wrapper = mount(ReturnArrow, { store, localVue });
//         const p = wrapper.find('p');
//         expect(p.text()).toBe(getters.isLoading);
//     })
// })















