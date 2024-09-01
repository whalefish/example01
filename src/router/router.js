import { createRouter, createWebHistory } from 'vue-router';
import url from './url';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/layout/layout.vue'),
            children: [
                {
                    ...url.home,
                    component: () => import('@/views/home/home.vue')
                }
            ]
        },
        {
            ...url.demo,
            component: () => import('@/views/demo/demo.vue')
        }
    ]
});

export default router;
