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
import ManageContractDetailUpdate from "../pages/Manage/HopDong/DetailUpdate";
import ManageContractCreate from "../pages/Manage/HopDong/Create";
import ManageContractCopy from "../pages/Manage/HopDong/HDCopy";
import ManageContractDetailKT from "../pages/Manage/HopDong/DetailHDKT";

import ManageUnit from "../pages/Manage/DonViSuDung";
import ManageUnitDetail from "../pages/Manage/DonViSuDung/Detail";
import ManageUnitDetailUserInfo from "../pages/Manage/DonViSuDung/UserInfo";
import ManageUnitDetailCreate from "../pages/Manage/DonViSuDung/Create";

import ManagePartner from "../pages/Manage/Partner";
import ManagePartnerUpdate from "../pages/Manage/Partner/Update";

import ManageDevice from "../pages/Manage/Device";
import ManageDeviceCreate from "../pages/Manage/Device/Create";

import SalaryPPDT from "../pages/Salary/PPDoanhThu";

import ResetPass from "../pages/Login/ForgotPass";

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
      path: "/reset-password",
      element: getPageWithUser(<ResetPass />, "/")
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
              element: getPageWithoutUser(<ManageContract />, "/login"),
            },
            {
              path: "detail/:id",
              element: <Outlet />,
              children: [
                {
                  path: "",
                  element: getPageWithoutUser(
                    <ManageContractDetail />,
                    "/login"
                  ),
                },
                {
                  path: "update",
                  element: getPageWithoutUser(
                    <ManageContractDetailUpdate />,
                    "/login"
                  ),
                },
              ],
            },
            {
              path: "create",
              element: getPageWithoutUser(<ManageContractCreate />, "/login"),
            },
            {
              path: "copy",
              element: getPageWithoutUser(<ManageContractCopy />, "/login"),
            },
            {
              path: "detail-kt",
              element: getPageWithoutUser(<ManageContractDetailKT />, "/login"),
            },
          ],
        },
      ],
    },
    {
      path: "management-used",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: getPageWithoutUser(<ManageUnit />, "/login"),
        },
        {
          path: "detail",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: getPageWithoutUser(<ManageUnitDetail />, "/login"),
            },
            {
              path: "user",
              element: getPageWithoutUser(
                <ManageUnitDetailUserInfo />,
                "/login"
              ),
            },
            {
              path: "create",
              element: getPageWithoutUser(<ManageUnitDetailCreate />, "/login"),
            },
          ],
        },
      ],
    },
    {
      path: "management-authorization",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: getPageWithoutUser(<ManagePartner />, "/login")
        },
        {
          path: "update",
          element: getPageWithoutUser(<ManagePartnerUpdate />, "/login")
        }
      ]
    },
    {
      path: "management-device",
      element:(
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: getPageWithoutUser(<ManageDevice />, "/login")
        },
        {
          path: "create",
          element: getPageWithoutUser(<ManageDeviceCreate />, "/login")
        }
      ]
    },
    {
      path: "revenue-distribution",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "",
          element: getPageWithoutUser(<SalaryPPDT />, "/login")
        }
      ]
    }
  ]);

  return routes;
};

export default Router;
