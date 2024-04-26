<template>

  <!-- component -->
<body class="antialiased bg-gradient-to-br from-green-100 to-white">
    <div class="container px-6 mx-auto mx-auto">
      <div
        class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
        <div class="flex flex-col w-full">
          <div>
            <img src="../assets/login1.png" class="w-100 h-100 mx-auto md:float-left" alt="Icon">
          </div>
        </div>
        <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
          <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
            <h2 class="text-2xl font-bold text-gray-800 text-left mb-5">
              Masuk
            </h2>
            <form id="" class="mb-4" @submit.prevent="performLogin">
              <div class="flex flex-col w-full my-5" >
                <label for="email" class="text-gray-500 mb-2">Email</label>
                <input
                  type="text"
                  class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  id="email"
                  v-model="email"
                  placeholder="Masukkan email anda"
                  required/>
                 </div>

               <div class="flex flex-col w-full my-5">
                <label for="password" class="text-gray-500 mb-2">Kata Sandi</label>
                <input
                 type="password"
                 class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  id="password"
                  v-model="password"
                  placeholder="Masukkan kata sandi anda"
                  required/>
              </div>

              <div class="flex flex-col w-full my-5">
                <button
                  type="button"
                  @click="performLogin"
                  class="w-full py-4 bg-green-600 rounded-lg text-green-100">
                  <div class="flex flex-row items-center justify-center">
                    <div class="mr-2">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div class="font-bold">Masuk</div>
                  </div>
                </button>
                <div class="flex justify-evenly mt-5">
                  <a
                    href="/register"
                    class="w-full text-center font-medium text-gray-500"
                    >Belum punya akun? Ayo Daftar!</a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
 

</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
async performLogin() {
  // Periksa apakah email atau password kosong
  if (!this.email.trim() || !this.password.trim()) {
    alert('Please enter both email and password.');
    return;
  }

  const credentials = {
    email: this.email,
    password: this.password,
  };

  try {
    const result = await this.login(credentials);
    if (result == true) {
      alert('Login Success');
      this.$router.push("/aktivitas");
    } else {
      alert('Invalid email or password. Please try again.');
    }

  } catch (error) {
    console.error('Error during login:', error);
    if (error.response && error.response.status === 401) {
      // Unauthorized (invalid credentials)
      alert('Invalid email or password. Please try again.');
    } else {
      alert('Login Failed');
    }
  }
}

  }
}
</script>

