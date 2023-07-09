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

const myMenu = [
  {
    key: 1,
    text: "Kho bản ghi"
  },
  {
    key: 2,
    text: "Playlist"
  },
  {
    key: 3,
    text: "Lập lịch phát"
  },
  {
    key: 4,
    text: "Quản lý"
  },
  {
    key: 5,
    text: "Quản lý hợp đồng"
  },
  {
    key: 6,
    text: "Quản lý thiết bị"
  },
  {
    key: 7,
    text: "Đơn vị ủy quyền"
  },
  {
    key: 8,
    text: "Đơn vị sử dụng"
  },
  {
    key: 9,
    text: "Doanh thu"
  },
  {
    key: 10,
    text: "Báo cáo doanh thu"
  },
  {
    key: 11,
    text: "Lịch sử đổi phát"
  },
  {
    key: 12,
    text: "Phân phối doanh thu"
  },
  {
    key: 13,
    text: "Cài đặt"
  },
  {
    key: 14,
    text: "Phân quyền người dùng"
  },
  {
    key: 15,
    text: "Cài đặt hệ thống"
  },
  {
    key: 16,
    text: "Thông tin tác phẩm"
  },
  {
    key: 17,
    text: "Chu kỳ đổi soát"
  },
  {
    key: 18,
    text: "Hỗ trợ"
  },
  {
    key: 19,
    text: "Hướng dẫn sử dụng"
  },
  {
    key: 20,
    text: "Tải app"
  },
  {
    key: 21,
    text: "Feedback"
  }
]

const items: MenuItem[] = [
  getItem(
    myMenu[0].text,
    "/store",
    <IoMdAppstore style={{ width: 24, height: 24 }} />
  ),
  getItem(
    myMenu[1].text,
    "/playlist",
    <MdPlaylistPlay style={{ width: 24, height: 24 }} />
  ),
  getItem(
    myMenu[2].text,
    "/schedule",
    <IoMdCalendar style={{ width: 24, height: 24 }} />
  ),
  getItem(
    myMenu[3].text,
    "/management",
    <div>
      <FaFileContract style={{ width: 24, height: 24 }} />{" "}
      <FiMoreVertical style={{ width: 20, height: 20 }} />
    </div>,
    [
      getItem(myMenu[4].text, "/management-contract"),
      getItem(myMenu[5].text, "/management-device"),
      getItem(myMenu[6].text, "/management-authorization"),
      getItem(myMenu[7].text, "/management-used"),
    ]
  ),
  getItem(
    myMenu[8].text,
    "/revenue",
    <div>
      <TbReportMoney style={{ width: 24, height: 24 }} />{" "}
      <FiMoreVertical style={{ width: 20, height: 20 }} />
    </div>,
    [
      getItem(myMenu[9].text, "/revenue-report"),
      getItem(myMenu[10].text, "/revenue-history"),
      getItem(myMenu[11].text, "/revenue-distribution"),
    ]
  ),
  getItem(
    myMenu[12].text,
    "/setting",
    <div>
      <AiOutlineSetting style={{ width: 24, height: 24 }} />{" "}
      <FiMoreVertical style={{ width: 20, height: 20 }} />
    </div>,
    [
      getItem(myMenu[13].text, "/managment-permissions"),
      getItem(myMenu[14].text, "/managment-configuration"),
    ]
  ),
  getItem(
    myMenu[17].text,
    "/help",
    <div>
      <BiHelpCircle style={{ width: 24, height: 24 }} />{" "}
      <FiMoreVertical style={{ width: 20, height: 20 }} />
    </div>,
    [
      getItem(myMenu[18].text, "/help-hdsd"),
      getItem(myMenu[19].text, "/help-download"),
      getItem(myMenu[20].text, "/help-feedback")
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