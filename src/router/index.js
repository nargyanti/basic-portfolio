import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ProjectDetail from "@/views/ProjectDetail.vue";
import jsonData from "@/assets/data.json";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/project/:slug",
        name: "ProjectDetail",
        component: ProjectDetail,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "Nabilah Argyanti's Portfolio";
    next();
});

jsonData.projects.forEach((project) => {
    routes.push({
        path: `/projects/${project.slug}`,
        name: `Project - ${project.title}`,
        component: ProjectDetail,
        props: { projectData: project },
    });
});

export default router;
