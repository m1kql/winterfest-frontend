import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((route) => route.meta.authRequired)) {
    const currentUser = await getCurrentUser();
    if (currentUser) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});



export default router;