import { createRouter, createWebHashHistory } from "vue-router";
// import HomeViewTest from "../views/HomeViewTest.vue";
const routes = [
  // {
  //   path: "/a",
  //   component: HomeViewTest,
  //   children:[
  //     {
  //       path:'/profile',component:AboutView
  //     }
  //   ]
  // },
  // {
  //   path: "/home",
  //   name: "HomeViewTest",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "HomeViewTest" */ "../views/HomeViewTest.vue"
  //     ),
  //   children: [
  //     {
  //       path: "/profile",
  //       name: "AboutView",
  //       component: () =>
  //         import(/* webpackChunkName: "A" */ "../views/AboutView.vue"),
  //     },
  //   ],
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
