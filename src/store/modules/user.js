import axios from "axios";

const user = {
    namespaced: true,
    state: {
        userData: [],
    },
    getters: {
        getUser: (state) => state.userData,
    },
    actions: {
        async fetchUser ({ commit }) {
            try {
                const token = localStorage.getItem('token')
                const data = await axios.get(
                    "http://192.168.43.230:3000/api/v1/auth/login"
                );
                commit("SET_USER", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PROFILE(state, user) {
            state.userData = user;
        },
    },
};

export default user;