import { Badge, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { OPTION_QSH, OPTION_VIDEO_UQ_STATUS } from "../../../constants/option";
import { Link } from "react-router-dom";

export interface IHopDongKT {
  id: string;
  customer: string;
  user: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}

interface ITableDataProps {
  data: IHopDongKT[];
  loading?: boolean;
}

const TableDataHDKT: React.FC<ITableDataProps> = ({ data, loading }) => {
  const columns: ColumnsType<IHopDongKT> = [
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
      title: "Khác hàng",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value) => value.slice(0, 10).replaceAll("-", "/"),
    },
    {
      title: "Ngày hiệu lực",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value) => value.slice(0, 10).replaceAll("-", "/"),
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (value) => value.slice(0, 10).replaceAll("-", "/"),
    },
    {
      title: "Hiệu lực hợp đồng",
      dataIndex: "status",
      key: "status",
      render: (value) => {
        const opt = OPTION_VIDEO_UQ_STATUS.find((o) => o.value === value);
        return (
          <div>
            <Badge status="processing" color={opt?.color} />
            <span style={{ marginLeft: ".25rem" }}>{opt?.label}</span>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size={32}>
          <Link
            to={`detail-kt`}
            style={{ textDecoration: "underline", color: "orange" }}
          >
            Xem chi tiết
          </Link>
          <Link
            to={"copy"}
            style={{ textDecoration: "underline", color: "orange" }}
          >
            Sao chép hợp đồng
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Table style={{ width: "100%" }} columns={columns} dataSource={data} />
  );
};

export default TableDataHDKT;
