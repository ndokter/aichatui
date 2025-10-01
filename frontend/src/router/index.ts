import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chat/:id',
      name: 'chat',
      component: () => import('@/views/ChatView.vue')
    }
  ],
})

export default router
