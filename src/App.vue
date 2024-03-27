<template>
  <div>
    <Dashboard v-if="showDashboard"></Dashboard>
    <main>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </main>
</div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
// import Footer from './components/Footer.vue';

export default {
  components: {
    Dashboard,
    // Footer,
  },
  data() {
    return {
      showDashboard: true,  
    };
  },
  watch: {
    // Menanggapi perubahan rute
    $route(to) {
      // Mengubah showSidebar berdasarkan halaman tertentu
      this.showDashboard= !["Beranda", "Login"].includes(to.name);
    },
},
}
</script>