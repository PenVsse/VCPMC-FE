import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

export interface IPPDT {
  id: string;
  user: string;
  songs: number;
  doanhThu: string;
  phi: string;
  nhuanBut: string;
  createdAt: string;
}

interface TableProps {
  data: IPPDT[];
  loading?: boolean;
}

const TableData: React.FC<TableProps> = ({ data, loading }) => {
  const columns: ColumnsType<IPPDT> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Hợp đồng ủy quyền",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Người ủy quyền",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Số bài hát ủy quyền",
      dataIndex: "songs",
      key: "songs",
    },
    {
      title: "Doanh thu (VNĐ)",
      dataIndex: "doanhThu",
      key: "doanhThu",
    },
    {
      title: "Hành chính phí (VNĐ)",
      dataIndex: "phi",
      key: "phi",
    },
    {
      title: "Mức nhuận bút (VNĐ)",
      dataIndex: "nhuanBut",
      key: "nhuanBut",
    },
    {
      title: "Ngày chốt đối soát",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value) => value.slice(0, 10).replaceAll("-", "/"),
    },
    {
      title: "Chi tiết doanh thu",
      dataIndex: "detail",
      key: "detail",
      render: (value) => (
        <Link to={"detail"} style={{ color: "orange", textDecoration: "underline" }}>
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
