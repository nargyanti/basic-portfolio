import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ProjectDetail from "@/views/ProjectDetail.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/project/:slug",
        name: "ProjectDetail",
        component: ProjectDetail,
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
