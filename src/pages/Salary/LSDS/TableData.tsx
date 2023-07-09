import { Table } from "antd";
import React from "react";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

export interface ILsdp {
  id: string;
  name: string;
  from: string;
  to: string;
  typeHD: number;
  tongLuotPhat: number;
  tongDoanhThu: string;
  dtChuaPhanPhoi: string | null;
  day: string;
}

interface Iprops {
  data: ILsdp[];
  loading?: boolean;
}

const TableData: React.FC<Iprops> = ({ data, loading }) => {
  const columns: ColumnsType<ILsdp> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Số hợp đồng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Đơn vị khai thác",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Thời hạn hợp đồng",
      dataIndex: "thoiHan",
      key: "thoiHan",
      render: (_, record) =>
        `${record.from.slice(0, 10).replaceAll("-", "/")}-${record.to
          .slice(0, 10)
          .replaceAll("-", "/")}`,
    },
    {
      title: "Loại hợp đồng",
      dataIndex: "typeHD",
      key: "typeHD",
      render: (value) => (value === "1" ? "Trọn gói" : "Theo lượt phát"),
    },
    {
      title: "Tổng lượt phát",
      dataIndex: "tongLuotPhat",
      key: "tongLuotPhat",
    },
    {
      title: "Tổng doanh thu",
      dataIndex: "tongDoanhThu",
      key: "tongDoanhThu",
    },
    {
      title: "Doanh thu chưa phân phối",
      dataIndex: "dtChuaPhanPhoi",
      key: "dtChuaPhanPhoi",
    },
    {
      title: "Ngày chốt đổi soát",
      dataIndex: "day",
      key: "day",
      render: (value) => value.slice(0, 10).replaceAll("-", "/"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Link
          to={`detail/${record.id}`}
          style={{ color: "orange", textDecoration: "underline" }}
        >
          Xem chi tiết
        </Link>
      ),
    },
  ];

  return (
    <Table
      style={{ width: "100%" }}
      columns={columns}
      dataSource={data}
      loading={loading}
    />
  );
};

export default TableData;
