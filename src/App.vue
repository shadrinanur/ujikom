<template>
  <div>
    <Sidebar v-if="showSidebar"></Sidebar>
    <router-view></router-view>
    <Footer v-if="showFooter"></Footer>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Sidebar,
    // SidebarAdmin,
    Footer,
  },
  data() {
    return {
      showSidebar: true,
      showFooter: true
      // showSidebarAdmin: true,  
    };
  },
  watch: {
    // Menanggapi perubahan rute
    $route(to) {
      // Mengubah showSidebar berdasarkan halaman tertentu
      this.showSidebar = !["Beranda", "Login", "Register", "Panduan", "Syarat", "Tentang", "ProfileUser", ""].includes(to.name);
      this.showFooter = !["Login", "Register"].includes(to.name);
    },
  },
}
</script>