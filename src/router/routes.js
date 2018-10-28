export default [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/nfc",
    name: "nfc",
    component: () => import("../views/Nfc.vue")
  },
  {
    path: "/qrcode",
    name: "qrcode",
    component: () => import("../views/Qrcode.vue")
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/History.vue")
  }
];
