import Home from '@/views/Home.vue';
import Dashboard from '@/views/Dashboard.vue';
import NotFound from '@/views/NotFound.vue';
import SubmissionPage from '@/views/Submission.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: Dashboard,
  //   meta: {
  //     authRequired: true,
  //   }
  // },
  // {
  //   path: '/submit',
  //   name: 'Submit',
  //   component: SubmissionPage,
  //   meta: {
  //     authRequired: true,
  //   }
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('@/views/Login.vue'),
  // },
  // {
  //   path: '/faq',
  //   name: 'FAQ',
  //   component: () => import('@/views/Faq.vue'),
  // },
  {
    path: '/',
    name: 'ContestOver',
    component: () => import('@/views/ContestOver.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  }
]

export default routes;