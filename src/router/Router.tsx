import { useRoutes, Navigate, Outlet } from "react-router-dom";

import Login from "../pages/Login";
import { useAppSelector } from "../store/hook";
import Layout from "../layout/Layout";

import Home from "../pages/Home";

import Store from "../pages/Store";
import StoreUpdate from "../pages/Store/Update";
import StoreApprove from "../pages/Store/Approve";

import PlayList from "../pages/PlayList";
import PlayListDetail from "../pages/PlayList/Detail";
import PlayListDetailUpdate from "../pages/PlayList/DetailUpdate";
import PlayListAdd from "../pages/PlayList/AddPlaylist";
import PlayListAddVideo from "../pages/PlayList/AddPlaylistVideo";

import Schedule from "../pages/Schedule";
import ScheduleDetaile from "../pages/Schedule/Detail";
import ScheduleCreate from "../pages/Schedule/Create";
import ScheduleDevice from "../pages/Schedule/Create/ScheduleDevice";
import ScheduleUpdate from "../pages/Schedule/Update";
import ScheduleUpdateCreate from "../pages/Schedule/Update/ScheduleDevice";

import ManageContract from "../pages/Manage/HopDong";
import ManageContractDetail from "../pages/Manage/HopDong/Detail";

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
    {
      path: "/playlist",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: getPageWithoutUser(<PlayList />, "/login"),
        },
        {
          path: "detail",
          element: <Outlet />,
          children: [
            {
              path: ":id",
              element: <Outlet />,
              children: [
                {
                  path: "",
                  element: getPageWithoutUser(<PlayListDetail />, "/login"),
                },
                {
                  path: "update",
                  element: getPageWithoutUser(
                    <PlayListDetailUpdate />,
                    "/login"
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "create",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: getPageWithoutUser(<PlayListAdd />, "/login"),
            },
            {
              path: "video",
              element: getPageWithoutUser(<PlayListAddVideo />, "/login"),
            },
          ],
        },
      ],
    },
    {
      path: "schedule",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: getPageWithoutUser(<Schedule />, "/login"),
        },
        {
          path: "detail/:id",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: getPageWithoutUser(<ScheduleDetaile />, "/login"),
            },
            {
              path: "update",
              element: <Outlet />,
              children: [
                {
                  path: "",
                  element: getPageWithoutUser(<ScheduleUpdate />, "/login"),
                },
                {
                  path: "add",
                  element: getPageWithoutUser(
                    <ScheduleUpdateCreate />,
                    "/login"
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "create",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: getPageWithoutUser(<ScheduleCreate />, "/login"),
            },
            {
              path: "add",
              element: getPageWithoutUser(<ScheduleDevice />, "/login"),
            },
          ],
        },
      ],
    },
    {
      path: "",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "management-contract",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: getPageWithoutUser(<ManageContract />, "/login")
            },
            {
              path: "detail/:id",
              element: getPageWithoutUser(<ManageContractDetail />, "/login")
            }
          ]
        }
      ]
    },
  ]);

  return routes;
};

export default Router;