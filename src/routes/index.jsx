import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layout/main";
import ErrorPage from "~/pages/errorpage";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Notifications from "~/pages/notifications";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routes;
