import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import jsonData from '@/assets/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:slug',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Nabilah Argyanti's Portfolio"
  next()
})

jsonData.projects.forEach((project) => {
  routes.push({
    path: `/project/${project.slug}`, // Dynamic route based on project slug
    name: `Project - ${project.title}`, // Unique name for each project detail route
    component: ProjectDetail,
    props: { projectData: project } // Pass project data as props to the component
  })
})

export default router
