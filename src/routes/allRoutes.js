// import ForgetPwd from 'pages/Authentication/ForgetPassword';
// Authentication related pages
// import Login from 'pages/Authentication/Login';
// import Logout from 'pages/Authentication/Logout';
// Dashboard
import { Dashboard } from "../pages";
import { ProductList } from "../pages/ProductManagement/ProductList";
 
const oysRoutes = [
  { path: "/", component: Dashboard, title: "Ana Sayfa" },
  {
    path: "/uyelik-yonetimi",
    title: "Üyelik Yönetimi",
  },
  {
    path: "/urun-yonetimi/urun-listesi",
    title: "Ürün Yönetimi",
    component: ProductList,
  }
];

const authRoutes = [
  // { path: '/giris', component: Login },
  // { path: '/sifremi-unuttum', component: ForgetPwd },
  // { path: '/cikis-yap', component: Logout },
];

export { oysRoutes, authRoutes };
