export const UserModule = {
    namepsaced: true,
    state: {
        user: null,
      },
    
    //function that effect the STATE
    mutations: {
    SET_USER(state, user){
        state.user = user;
    }
    },

    //function that you call throughout your application that call mutations
    actions: {
    setUser({commit}, user){
        commit('SET_USER', user);
    }
    },
}