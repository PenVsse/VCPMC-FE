import React from "react";
import { Table, Space, Switch } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

export interface IDonViSuDung {
  id: string;
  name: string;
  admin: string;
  user: number;
  device: number;
  updatedAt: string;
  status: number;
}

interface IDataTableProps {
  data: IDonViSuDung[];
  loading?: boolean;
}

const TableData: React.FC<IDataTableProps> = ({ data, loading }) => {
  const columns: ColumnsType<IDonViSuDung> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên tài khoản quản trị",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số hợp đồng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Admin",
      dataIndex: "admin",
      key: "admin",
    },
    {
      title: "Người dùng",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Thiết bị được chỉ định",
      dataIndex: "device",
      key: "device",
    },
    {
      title: "Ngày hết hạn",
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
            to={`detail`}
          >
            Xem chi tiết
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Table
      rowSelection={{
        type: "checkbox",
      }}
      columns={columns}
      style={{ width: "100%" }}
      dataSource={data.map((d) => ({ ...d, key: d.id }))}
      loading={loading}
    />
  );
};

export default TableData;
