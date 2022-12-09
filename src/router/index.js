import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hakkimda',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/blog')
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import(/* webpackChunkName: "blog-post" */ '../views/blog/post.vue')
  },
  {
    path: '/hizmetler/:slug',
    name: 'ServicePost',
    component: () => import(/* webpackChunkName: "service-post" */ '../views/services/service.vue')
  },
  {
    path: '/portfolyo',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio')
  },
  {
    path: '/portfolyo/:slug',
    name: 'PortfolioDetail',
    component: () => import(/* webpackChunkName: "portfolio-detail" */ '../views/portfolio/detail.vue')
  },
  {
    path: '/lab',
    name: 'Lab',
    component: () => import(/* webpackChunkName: "lab" */ '../views/lab')
  },
  {
    path: '/iletisim',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
