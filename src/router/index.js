import { createWebHistory, createRouter } from "vue-router";
import Beranda from "../views/Beranda.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import Pendaftaran from "@/views/Pendaftaran.vue";
import Event from "@/views/Event.vue";
import Laporan from "@/views/Laporan.vue";
import Panduan from "@/views/Panduan.vue";
import Aktivitas from "@/views/Aktivitas.vue";

import Tentang from "@/views/Tentang.vue";

const routes = [ 
    {
        path: "/",
        name: "Beranda",
        component: Beranda,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/pendaftaran",
        name: "Pendaftaran",
        component: Pendaftaran, 
    },
    {
        path: "/event",
        name: "Event",
        component: Event, 
    },
    {
        path: "/laporan",
        name: "Laporan",
        component: Laporan, 
    },
    {
        path: "/panduan",
        name: "Panduan",
        component: Panduan, 
    },
    {
        path: "/tentang",
        name: "Tentang",
        component: Tentang, 
    },
    {
        path: "/aktivitas",
        name: "Aktivitas",
        component: Aktivitas, 
    },

    
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;