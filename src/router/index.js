import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProjectDetailView from "@/views/ProjectDetailView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/project/:slug",
        name: "project_detail",
        component: ProjectDetailView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 18,
                behavior: "smooth",
            };
        }

        return { top: 0, behavior: "smooth" };
    },
});

export default router;
