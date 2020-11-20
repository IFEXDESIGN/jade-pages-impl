import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: "/dashboard",
      component: () => import('../layout/MainLayout.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../pages/PageProducts/PageProducts.vue'),
        },
        {
          component: () => import("../pages/PageHome/PageHome.vue"),
          alias: 'dashboard',
          path: ''
        }
      ]
    },
    {
      path: '/auth',
      component: () => import('../layout/AuthLayout.vue'),
      children: [
        {
          path: 'sign-up',
          component: () => import('../pages/Auth/SignUp/SignUp.vue'),
        }
      ]
    },
    {
      path: '*',
      component: () => import('../pages/PageNotFound/PageNotFound')
    }
  ],
  mode: "history"
})
