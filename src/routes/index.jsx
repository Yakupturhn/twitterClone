import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: "anasayfa componenti",
  },
  {
    path: "/explore",
    element: "explore componenti",
  },
  {
    path: "/notifications",
    element: "notifications componenti",
  },
]);

// defauult olarak export ettiysem import ederken istedigim isimle alabiliyorum
export default routes;
