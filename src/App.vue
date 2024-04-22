<template>
  <div>
    <Sidebar v-if="showSidebar"></Sidebar>
    <!-- <SidebarAdmin v-if="showSidebarAdmin"></SidebarAdmin> -->
    <main>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </main>
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
// import SidebarAdmin from './components/SidebarAdmin.vue';
// import Footer from './components/Footer.vue';

export default {
  components: {
    Sidebar,
    // SidebarAdmin,
    // Footer,
  },
  data() {
    return {
      showSidebar: true,
      // showSidebarAdmin: true,  
    };
  },
  watch: {
    // Menanggapi perubahan rute
    $route(to) {
      // Mengubah showSidebar berdasarkan halaman tertentu
      this.showSidebar= !["Beranda", "Login", "Register", "Panduan",  "Syarat","Tentang"].includes(to.name);
    },
},
}
</script>