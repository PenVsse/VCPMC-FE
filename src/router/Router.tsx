import { useRoutes, Navigate, Outlet } from "react-router-dom";

import Login from "../pages/Login";
import { useAppSelector } from "../store/hook";
import Layout from "../layout/Layout";

import Home from "../pages/Home";

import Store from "../pages/Store";
import StoreUpdate from "../pages/Store/Update";
import StoreApprove from "../pages/Store/Approve";

const Router = () => {
  const auth = useAppSelector((state) => state.auth);

  const getPageWithUser = (page: React.ReactNode, navigateTo: string) => {
    if (auth.user) {
      return <Navigate to={navigateTo} />;
    } else return page;
  };

  const getPageWithoutUser = (page: React.ReactNode, navigateTo: string) => {
    if (!auth.user) {
      return <Navigate to={navigateTo} />;
    } else return page;
  };

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Layout>{getPageWithoutUser(<Home />, "/login")}</Layout>,
    },
    {
      path: "/login",
      element: getPageWithUser(<Login />, "/"),
    },
    {
      path: "/store",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: getPageWithoutUser(<Store />, "/login"),
        },
        {
          path: "update/:id",
          element: getPageWithoutUser(<StoreUpdate />, "/login"),
        },
        {
          path: "approve",
          element: getPageWithoutUser(<StoreApprove />, "/login"),
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
