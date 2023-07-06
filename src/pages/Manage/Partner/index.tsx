import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hook";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import {
  Row,
  Typography,
  Col,
  Space,
  Button,
  Select,
  Switch,
  Table,
} from "antd";
import { MyInput } from "../HopDong/Detail";
import { MyInput as MyInput2 } from "../HopDong/DetailUpdate";
import { IconMenu } from "../../Home";
import { BsPencilSquare } from "react-icons/bs";
import { partnerApi } from "../../../api/partnerApi";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

interface IPartner {
  id: number;
  name: string;
  username: string;
  email: string;
  hsd: string;
  phone: string;
  status: number;
}

const Partner: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<IPartner[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    partnerApi
      .getAll()
      .then((res) => res.data)
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  const columns: ColumnsType<IPartner> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "hsd",
      key: "hsd",
      render: (value) => `${value.slice(0, 10).replaceAll("-", "/")}`,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value) => (
        <>
          <Switch checked={value} style={{ marginRight: ".5rem" }} />
          {value === 0 ? "Ngừng kích hoạt" : "Đang kích hoạt"}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Link
            style={{ color: "orange", textDecoration: "underline" }}
            to={`update`}
          >
            Cập nhật
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        maxHeight: "100vh",
        minHeight: "100vh",
        overflowY: "scroll",
      }}
    >
      <MyBreadcrumb
        user={user}
        items={[
          {
            title: "Quản lý",
          },
          {
            title: "Đối tác ủy quyền",
          },
        ]}
        separator=">"
      />
      <Row style={{ padding: "0 7rem 0 2rem", width: "100%" }}>
        <Typography.Title
          style={{
            ...textFont("2rem"),
            fontWeight: 700,
            color: "#fff",
            margin: 0,
          }}
        >
          Danh sách đối tác ủy quyền
        </Typography.Title>
        <Row style={{ width: "100%", marginTop: "1.5rem" }}>
          <Table
            style={{ width: "100%" }}
            dataSource={data}
            loading={loading}
            columns={columns}
          />
        </Row>
      </Row>
    </div>
  );
};

export default Partner;
