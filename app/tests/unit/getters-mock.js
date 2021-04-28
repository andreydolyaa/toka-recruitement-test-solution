
export default {
    getNumOfUsers(state){
        return state.users.length;
    },
    getIsLoading(state){
        return state.isLoading;
    }
}