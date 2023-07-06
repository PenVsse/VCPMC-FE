import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hook";
import { Row, Typography, Table, Space, Badge } from "antd";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import InputField from "../../../components/InputField";
import { BiPlus, BiSearch } from "react-icons/bi";
import { unitUsedApi } from "../../../api/unitUsedApi";
import { ColumnsType } from "antd/es/table";
import { Link, useNavigate } from "react-router-dom";
import { IconMenu } from "../../Home";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

export const OPTION_UNIT_STATUS = [
  {
    value: 1,
    label: "Ngưng hoạt động",
    color: "#FF4747",
  },
  {
    value: 2,
    label: "Đang hoạt động",
    color: "#18E306",
  },
];

export const OPTION_UNIT_ROLE = [
  {
    value: 0,
    label: "Super Admin",
  },
  {
    value: 1,
    label: "Group Admin",
  },
  {
    value: 2,
    label: "Sub - user",
  },
  {
    value: 3,
    label: "Content manager",
  },
];

export interface IDetail {
  id: number;
  name: string;
  role: number;
  email: string;
  username: string;
  status: number;
  updatedAt: string;
}

const Detail: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [data, setData] = useState<IDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    unitUsedApi
      .getDetail()
      .then((res) => res.data)
      .then((data) => setData(data.data));
    setLoading(false);
  }, []);

  const columns: ColumnsType<IDetail> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên người dùng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (value) => {
        const opt = OPTION_UNIT_ROLE.find((o) => o.value === value);
        return opt?.label;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Cập nhật lần cuối",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (value) => `${value.slice(0, 10).replaceAll("-", "/")}`,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value) => (
        <>
          <Badge
            status="processing"
            color={OPTION_UNIT_STATUS.find((opt) => opt.value === value)?.color}
            style={{ marginRight: ".5rem" }}
          />
          {OPTION_UNIT_STATUS.find((opt) => opt.value === value)?.label}
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
            to={`user`}
          >
            Xem chi tiết
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
            title: "Quản lý hợp đồng",
          },
          {
            title: "Chi tiết",
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
          Đơn vị sử dụng - ABCD
        </Typography.Title>
        <Row style={{ width: "100%" }}>
          <InputField
            style={{
              padding: ".5rem 1.5rem",
              width: 400,
              backgroundColor: "#2B2B3F",
            }}
            placeholder="Tên khoản bản ghi, ca sĩ, tác giả,..."
            suffix={<BiSearch style={{ width: 24, height: 24 }} />}
          />
        </Row>
        <Row style={{ width: "100%" }}>
          <Table
            rowSelection={{
              type: "checkbox",
            }}
            style={{ width: "100%" }}
            columns={columns}
            dataSource={data.map((d) => ({ ...d, key: d.id }))}
            loading={loading}
          />
        </Row>
      </Row>
      <Row
        style={{
          position: "absolute",
          right: 0,
          top: "16%",
          backgroundColor: "#2F2F41",
          padding: "1rem .5rem",
          borderRadius: "16px 0px 0px 16px",
          flexDirection: "column",
        }}
      >
        <IconMenu
          icon={
            <BiPlus className="root_color" style={{ width: 20, height: 20 }} />
          }
          label="Thêm người dùng"
          onClick={() => navigate("create")}
        />
        <IconMenu
          icon={
            <BsFillTrash3Fill
              className="root_color"
              style={{ width: 20, height: 20 }}
            />
          }
          label="Xóa"
        />
        <IconMenu
          icon={
            <FiUsers className="root_color" style={{ width: 20, height: 20 }} />
          }
          label="Vai trò"
        />
      </Row>
    </div>
  );
};

export default Detail;
