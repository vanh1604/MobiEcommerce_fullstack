import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Order from "../pages/Order/Order";
import Products from "../pages/Products/Products";

export const routes = [
  {
    path: "/",
    Page: Home,
    isShowHeader:true
  },
  {
    path: "/products",
    Page: Products,
    isShowHeader:true
  },
  {
    path: "/order",
    Page: Order,
    isShowHeader:true
  },
  {
    path: "*",
    Page: NotFound,
  },
];
