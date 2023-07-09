import React from "react";
import { Table } from "antd";
import { ISchedule } from "./TableData";
import { ColumnsType } from "antd/es/table";

export interface ITableDataDetailProps {
  data: ISchedule[];
  loading?: boolean;
}

export function generateRandomNumber(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

const TableDataDetail: React.FC<ITableDataDetailProps> = ({
  data,
  loading,
}) => {
  const columns: ColumnsType<any> = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên Playlist",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày phát Playlist",
      dataIndex: "date",
      key: "date",
      render: (_, record: any) =>
        `${record.createdAt
          ?.slice(0, 10)
          .replaceAll("-", "/")}- ${record.updatedAt
          ?.slice(0, 10)
          .replaceAll("-", "/")}`,
    },
    {
      title: "Bắt đầu - Kết thúc",
      dataIndex: "time",
      key: "time",
      render: () =>
        `0${generateRandomNumber(0, 9)}:00:00 - ${generateRandomNumber(
          13,
          24
        )}:00:00`,
    },
    {
      title: "Chu kỳ phát",
      dataIndex: "loop",
      key: "loop",
      render: (_, __, index) =>
        index === 0 ? `Thứ ${index + 5}` : `Thứ ${index + 1}| Thứ ${index + 3}`,
    },
    {
      title: "Thiết bị",
      dataIndex: "device",
      key: "device",
      render: () =>
        `Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5`,
    },
  ];

  return (
    <Table
      dataSource={data}
      loading={loading}
      columns={columns}
      style={{ width: "100%" }}
    />
  );
};

export default TableDataDetail;
