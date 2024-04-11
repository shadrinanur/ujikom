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
    async performLogin({ commit }, credentials) {
      try {
        const response = await axios.post(
          "http://192.168.100.37:3000/api/v1/auth/login",
          credentials
        );
        const token = response.data.access_token;
        // const user = response.data.user;
        // Save token to localStorage
        localStorage.setItem("token", token);
        commit("SET_TOKEN", token);
        commit("SET_LOGIN_ERROR", null);
        // localStorage.setItem("user", JSON.stringify(user));
        console.log("Token saved:", token);
        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || "Login failed";
        commit("SET_LOGIN_ERROR", errorMessage);
        console.error(error);
        return false;
      }
    },  
    
     async register({ commit }, credentials) {
      try {
          const response = await axios.post(
              "http://192.168.100.37:3000/api/v1/auth/register",
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
      window.location.href = "/login";
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