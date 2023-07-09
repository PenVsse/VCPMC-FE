import { Radio, Row, Switch, Table, Typography } from "antd";
import MyBreadcrumb, { textFont } from "../../../components/MyBreadcrumb";
import { useAppSelector } from "../../../store/hook";
import { useEffect, useState } from "react";
import { IRole, IUser } from "../../../types/auth";
import { authApi } from "../../../api/auth";
import InputField from "../../../components/InputField";
import { BiSearch } from "react-icons/bi";
import { ColumnsType } from "antd/es/table";
import { Link, useNavigate } from "react-router-dom";
import { IconMenu } from "../../Home";
import { AiOutlineUserAdd } from "react-icons/ai";

const PhanQuyen = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [data, setData] = useState<IUser[]>([]);
  const [dataRole, setDataRole] = useState<IRole[]>([]);
  const [type, setType] = useState<number>(0);

  useEffect(() => {
    authApi
      .getAll()
      .then((res) => res.data)
      .then((data) => {
        setData(data.data);
      });
    authApi
      .getAllRole()
      .then((res) => res.data)
      .then((data) => {
        setDataRole(data.data);
      });
  }, []);

  const columns: ColumnsType<IUser> = [
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
      render: (_, record) => `${record.lastName} ${record.firstName}`,
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "role",
      dataIndex: "roleId",
      key: "roleId",
      render: (_, r) => (r.roleId === 1 ? "Admin" : "User"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: () => (
        <>
          <Switch checked style={{ marginRight: ".5rem" }} disabled />
          Đang kích hoạt
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value) => value.slice(0, 10).replaceAll("-", "/"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, r) => (
        <Link
          to={`update/${JSON.stringify(r)}`}
          style={{ color: "orange", textDecoration: "underline" }}
        >
          Chỉnh sửa
        </Link>
      ),
    },
  ];

  const columnsRole: ColumnsType<IRole> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên nhóm người dùng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số lượng người dùng",
      dataIndex: "sl",
      key: "sl",
      render: () => Math.floor(Math.random() * 50),
    },
    {
      title: "Vai trò",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, r) => (
        <Link
          to={`update-role/${JSON.stringify(r)}`}
          style={{ color: "orange", textDecoration: "underline" }}
        >
          Cập nhật
        </Link>
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
            title: "Cài đặt",
          },
          {
            title: "Phân quyền người dùng",
          },
        ]}
        separator=">"
      />
      <Row
        style={{
          padding: "0 7rem 0 2rem",
          width: "100%",
        }}
      >
        <Typography.Title
          style={{
            ...textFont("2rem"),
            fontWeight: 700,
            color: "#fff",
            margin: 0,
          }}
        >
          {type === 0
            ? "Danh sách người dùng"
            : "Vai trò người dùng trên hệ thống"}
        </Typography.Title>
        <Row
          style={{
            margin: "1rem 0",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Radio.Group>
            <Radio.Button
              style={{
                background: "transparent",
                color: "#fff",
                opacity: type === 0 ? 0.8 : 1,
                backgroundColor: type === 0 ? "orange" : "unset",
              }}
              onClick={() => setType(0)}
            >
              Danh sách người dùng
            </Radio.Button>
            <Radio.Button
              style={{
                background: "transparent",
                color: "#fff",
                opacity: type === 1 ? 0.8 : 1,
                backgroundColor: type === 1 ? "orange" : "unset",
              }}
              onClick={() => setType(1)}
            >
              Vai trò người dùng
            </Radio.Button>
          </Radio.Group>
          <InputField
            style={{
              width: 400,
              backgroundColor: "#2B2B3F",
            }}
            placeholder="Nhập tên người dùng"
            suffix={<BiSearch style={{ width: 24, height: 24 }} />}
          />
        </Row>
        <Row style={{ width: "100%" }}>
          {type === 0 ? (
            <Table
              style={{ width: "100%" }}
              columns={columns}
              dataSource={data}
            />
          ) : (
            <Table
              style={{ width: "100%" }}
              columns={columnsRole}
              dataSource={dataRole}
            />
          )}
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
            <AiOutlineUserAdd
              className="root_color"
              style={{ width: 20, height: 20 }}
            />
          }
          label={type === 0 ? "Thêm người dùng" : "Thêm vai trò"}
          onClick={() =>
            type === 0 ? navigate("create") : navigate("create-role")
          }
        />
      </Row>
    </div>
  );
};

export default PhanQuyen;
