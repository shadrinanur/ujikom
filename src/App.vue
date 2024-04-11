<template>
  <div>
    <SidebarAdmin v-if="showSidebarAdmin"></SidebarAdmin>
    <main>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </main>
</div>
</template>

<script>
import SidebarAdmin from './components/SidebarAdmin.vue';
// import Footer from './components/Footer.vue';

export default {
  components: {
    SidebarAdmin,
    // Footer,
  },
  data() {
    return {
      showSidebarAdmin: true,  
    };
  },
  watch: {
    // Menanggapi perubahan rute
    $route(to) {
      // Mengubah showSidebar berdasarkan halaman tertentu
      this.showSidebarAdmin= !["Beranda", "Login", "Register"].includes(to.name);
    },
},
}
</script>