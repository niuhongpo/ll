import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    redirect: "/login",
    path: "/"
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/login"),
  },
  {
    name: "index",
    path: "/index",
    component: () => import("@/views/home/Index"),
    // redirect: "default",
    children: [
      {
        name: "default",
        path: "/default",
        component: () => import("@/views/default/default")
      },
      {
        path: "/examined",
        component: () => import("@/views/examined/Examined")
      },
      {
        path: "/history",
        component: () => import("@/views/examined/History")
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
