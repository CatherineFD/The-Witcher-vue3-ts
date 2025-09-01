import { createRouter, createWebHistory } from 'vue-router';
import PageMain from "@/pages/PageMain.vue";
import PageRegistration from "../pages/PageRegistration.vue";
import PageAnswers from "@/pages/PageAnswers.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'BasePageMain',
            component: PageMain,
        },
        {
          path: '/registration',
          name: 'PageRegistration',
          component: PageRegistration,
        },
        {
            path: '/answers',
            name: 'PageAnswers',
            component: PageAnswers,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'BasePageMain',
            component: PageMain,
        }
    ]
});

export default router;