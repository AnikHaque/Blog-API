import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const PostDetails = () => import('../views/PostDetails.vue')
const ContactView = () => import('../views/ContactView.vue')
const PostList = () => import('../views/PostList.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostList
    },
    {
      path: '/post-details',
      name: 'post-details',
      component: PostDetails
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
