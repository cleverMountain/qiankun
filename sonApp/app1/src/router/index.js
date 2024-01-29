


const routes = [

  {
    path: "/",
    name: "home",
    component: () =>  import("../pages/Home/index.vue")
  },
  {
    path: "/list",
    name: "List",
    component: () =>  import("../pages/List/index.vue")
  }
];


export default routes;
