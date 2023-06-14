import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Col } from "antd";
import type { MenuProps } from "antd";
import styled from "styled-components";

import { TbReportMoney } from "react-icons/tb";
import { IoMdAppstore } from "react-icons/io";
import { MdPlaylistPlay } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io/index";
import { FaFileContract } from "react-icons/fa";
import { BiHelpCircle } from 'react-icons/bi';

const MyMenu = styled(Menu)`
  &&& {
    .ant-menu-item-selected {
      background-color: #ff9138;
      color: #ffffff;
    }
  }
`;

import logo from "../../public/images/logo_1.png";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";

interface LayoutProps {
  children: React.ReactNode;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Kho bản ghi",
    "/store",
    <IoMdAppstore style={{ width: 24, height: 24 }} />
  ),
  getItem(
    "Playlist",
    "/playlist",
    <MdPlaylistPlay style={{ width: 24, height: 24 }} />
  ),
  getItem(
    "Lập lịch phát",
    "/schedule",
    <IoMdCalendar style={{ width: 24, height: 24 }} />
  ),
  getItem(
    "Quản lý",
    "/management",
    <div>
      <FaFileContract style={{ width: 24, height: 24 }} />{" "}
      <FiMoreVertical style={{ width: 20, height: 20 }} />
    </div>,
    [
      getItem("Quản lý hợp đồng", "/management-contract"),
      getItem("Quản lý thiết bị", "/management-device"),
      getItem("Đơn vị ủy quyền", "/management-authorization"),
      getItem("Đơn vị sử dụng", "/management-used"),
    ]
  ),
  getItem(
    "Doanh thu",
    "/revenue",
    <div>
      <TbReportMoney style={{ width: 24, height: 24 }} />{" "}
      <FiMoreVertical style={{ width: 20, height: 20 }} />
    </div>,
    [
      getItem("Báo cáo doanh thu", "/revenue-report"),
      getItem("Lịch sử đổi phát", "/revenue-history"),
      getItem("Phân phối doanh thu", "/revenue-distribution"),
    ]
  ),
  getItem(
    "Cài đặt",
    "/setting",
    <div>
      <AiOutlineSetting style={{ width: 24, height: 24 }} />{" "}
      <FiMoreVertical style={{ width: 20, height: 20 }} />
    </div>,
    [
      getItem("Phân quyền người dùng", "/managment-permissions"),
      getItem("Cấu hình", "/managment-configuration"),
      getItem("Thông tin tác phẩm", "/managment-work-info"),
      getItem("Chu kỳ đổi soát", "/managment-control-circle"),
    ]
  ),
  getItem(
    "Hỗ trợ",
    "/help",
    <div>
      <BiHelpCircle style={{ width: 24, height: 24 }} />{" "}
      <FiMoreVertical style={{ width: 20, height: 20 }} />
    </div>,
    [
      getItem("Hướng dẫn sử dụng", "/help-hdsd"),
      getItem("Tải app", "/help-download"),
      getItem("Feedback", "/help-feedback")
    ]
  ),
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <Col span={2} style={{ height: "100%" }}>
        <div
          style={{
            backgroundColor: "rgb(2, 2, 32)",
            display: "flex",
            justifyContent: "center",
            padding: "2rem 0",
            height: "20%",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: 60, height: 60, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>
        <MyMenu
          mode="vertical"
          style={{
            height: "80%",
            width: "100%",
            border: 0,
            backgroundColor: "#020220",
          }}
          items={items}
          selectedKeys={pathname === "/" ? [] : [`/${pathname.split("/")[1]}`]}
          onSelect={(e) => navigate(e.key)}
          inlineCollapsed={true}
          theme={"dark"}
        />
      </Col>
      <Col span={22} style={{ maxHeight: "100vh", position: "relative" }}>
        {children}
      </Col>
    </div>
  );
};

export default Layout;
