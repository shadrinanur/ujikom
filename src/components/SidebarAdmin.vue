<template>
  <!-- component -->
<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
<div class="min-h-screen flex flex-row bg-gray-100">

<div class="flex flex-col w-56 bg-white overflow-hidden">
    <div class="flex items-center h-16 bg-blue-100"> <!-- Tambah wrapper dan class -->
    <div>
      <img src="../assets/logo2.png" class="h-16" alt="Logo">
    </div>
    <p class="text-lg font-medium text-gray-900 dark:text-black"><span class="italic">Volunifyy</span></p>
    </div>
    
    <div class="overflow-y-auto overflow-x-hidden flex-grow">
      <ul class="flex flex-col py-4 space-y-1 justify-start">
        <li class="px-5">
          <div class="flex flex-row items-center h-8">
            <div class="text-sm font-light tracking-wide text-gray-500">Menu</div>
          </div>
        </li>
        <li>
          <a href="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Beranda</span>
          </a>
        </li>
      <li>
        <a href="/pendaftaran" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex justify-center items-center ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
<path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Daftar</span>
        </a>
      </li>
      <li>
        <a href="/event" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex justify-center items-center ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3-event" viewBox="0 0 16 16">
<path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
<path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Event</span>
        </a>
      </li>
      <li>
        <a href="/laporan" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex justify-center items-center ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
<path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
<path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
</svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Laporan</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex justify-center items-center ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
<path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z"/>
</svg>
          </span>
          <span class="ml-2 text-sm tracking-wide truncate">Statistik</span>
        </a>
      </li>
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
      <ul class="flex flex-col py-4 space-y-1">
        <li class="px-5">
          <div class="flex flex-row items-center h-8">
            <div class="text-sm font-light tracking-wide text-gray-500">Settings</div>
          </div>
        </li>
        </ul>
        </div>
      <!-- <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
          <span class="text-sm font-medium">Profile</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
          <span class="text-sm font-medium">Notifications</span>
          <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500"></span>
        </a>
      </li> -->

      <div v-if="isAuthenticated" class="flex md:order-2">
      <li>
        <button @click="logout" type="button" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
          <span class="text-sm font-medium">Logout</span>
        </button>
      </li>
      </div>
    </ul>
    </div>
  </div>
  <nav class="bg-blue-100 w-full flex justify-between items-center mx-auto px-8 h-16">
    <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
      <div class="inline-block">
        
        <div class="text-lg font-medium centered-text">
          <h1>
            <b><i>Selamat Datang! Setiap Langkah Kecil Berarti Banyak</i></b>
          </h1>
        </div>
      </div>
  </div>
  <!-- end search bar -->

  <!-- login -->
  <div class="flex-initial">
    <div class="flex justify-end items-center relative">
     
      <div class="flex mr-4 items-center">
        <a class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
          <div class="flex items-center relative cursor-pointer whitespace-nowrap"></div>
        </a>
        <div class="block relative">
          <button type="button" class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
            <div class="flex items-center h-5">
            </div>
          </button>
        </div>
      </div>

      <div class="block">
          <div class="inline relative">
              <button type="button" class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                  <div class="pl-1">
                      
                          <g fill="none" fill-rule="nonzero">
                              <path d="m2 16h28"></path>
                              <path d="m2 24h28"></path>
                              <path d="m2 8h28"></path>
                          </g>
                  </div>

                  <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                      <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style="display: block; height: 100%; width: 100%; fill: currentcolor;"
                      >
                          <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                      </svg>
                  </div>
              </button>
          </div>
      </div>
    </div>
  </div>
  
  <!-- end login -->
  </nav>
</div>
 </template>

<style>
.centered-text {
text-align: center;
}
/* Gaya untuk container utama */
.flex {
display: flex;
}

/* Gaya untuk sidebar */
.sidebar {
flex: 0 0 25%; /* Atur lebar sidebar sesuai kebutuhan */
/* Gaya lain untuk sidebar */
}
</style>

 <script>
import { mapActions, mapGetters } from 'vuex';
import Beranda from '@/views/Beranda.vue';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
  components: {Beranda}
};
</script>
 