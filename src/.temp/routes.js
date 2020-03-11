export default [
  {
    path: "/tag/:id/",
    component: () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\GitRepo\\PersonalRepo\\man-powered-tools\\src\\templates\\Tag.vue")
  },
  {
    path: "/blog/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\GitRepo\\PersonalRepo\\man-powered-tools\\src\\templates\\Post.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\GitRepo\\PersonalRepo\\man-powered-tools\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\GitRepo\\PersonalRepo\\man-powered-tools\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\GitRepo\\PersonalRepo\\man-powered-tools\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

