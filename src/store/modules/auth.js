import axios from "axios";

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
    loginError: null,
    user: JSON.stringify(localStorage.getItem("user") || null),
    userAddress: [],
    user: [],
  },
  getters: {
    isAuthenticated: (state) => !!state.token, 
    getUser: (state) => state.user,
    gettersUserAddress: (state) => state.userAddress,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/v1/auth/login',
          credentials
        );
    
        // Tangani respons dari server
        // console.log('Server Response:', response);
        const token = response.data.token; // Ambil token dari respons
        const role = response.data.role; // Ambil peran pengguna dari respons
    
        // Simpan token dan peran pengguna
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
    
        // console.log('Token:', token); // Cek token yang disimpan
        // console.log('Role:', role); // Cek peran pengguna
    
        commit('SET_TOKEN', token);
        commit('SET_ROLE', role); // Simpan peran ke state Vuex
    
        return true;
      } catch (error) {
        console.log(error);
        return false;

      }
    },  
    
     async register({ commit }, credentials) {
      try {
          const response = await axios.post(
              "http://192.168.43.230:3000/api/v1/auth/register",
              credentials
          );
          const token = response.data.access_token;
          const user = response.data.user;

          //save token
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          commit("SET_TOKEN", token);
          console.log("Token saved:", token);

          // Implement pasreToken function
          commit("SET_USER", user);
          console.log(user);

          return true;
      } catch (error) {
          console.error(error);
          return false;
      }
    },
  

    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem("token");
      localStorage.removeItem("token");
      commit("SET_TOKEN", "");
      // Log token removed
      console.log("Token removed:", token);
      window.location.href = "/";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error;
    },
    SET_REGISTER_ERROR(state, error) {
      state.registerError = error;
    },
    SET_USER(state, user) {
      state.user = user;
  },
  SET_ADDRESS(state, address) {
    state.userAddress = address;
  }
  },
};

export default auth;