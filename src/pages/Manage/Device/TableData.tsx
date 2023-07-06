import React from "react";
import { Table, Badge } from "antd";
import { ColumnsType } from "antd/es/table";

export interface IDevice {
  id: number;
  name: string;
  status: number;
  address: string;
  hsd: string;
  mac: string;
  username: string;
  memory: number;
}

interface TableDataProps {
  data: IDevice[];
  loading?: boolean;
  setDisable?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OPTION_DEVICE_STATUS = [
  {
    value: 1,
    label: "Đang kích hoạt | Đang hoạt động ",
    color: "#18E306",
  },
  {
    value: 0,
    label: "Ngừng kích hoạt",
    color: "#FF4747",
  },
  {
    value: 2,
    label: "Đang bị khoá",
    color: "#FF4747",
  },
];

const TableData: React.FC<TableDataProps> = ({ data, loading, setDisable }) => {
  const columns: ColumnsType<IDevice> = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên thiết bị",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value) => {
        const status = OPTION_DEVICE_STATUS.find((o) => o.value === value);
        return (
          <>
            <Badge
              status="processing"
              color={status?.color}
              style={{ marginRight: ".25rem" }}
            />
            {status?.label}
          </>
        );
      },
    },
    {
      title: "Địa điểm",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Hạn hợp đồng",
      dataIndex: "hsd",
      key: "hsd",
      render: (value) => value.slice(0, 10).replaceAll("-", "/"),
    },
    {
      title: "MAC Address",
      dataIndex: "mac",
      key: "mac",
    },
    {
      title: "Memory",
      dataIndex: "memory",
      key: "memory",
      render: (value) => `${value}GB`,
    },
  ];

  return (
    <Table
      rowSelection={{
        type: "checkbox",
        onSelect: (e) => {
          setDisable && setDisable((prev) => !prev && e.status !== 1);
        },
      }}
      style={{ width: "100%" }}
      dataSource={data.map((d) => ({ ...d, key: d.id }))}
      loading={loading}
      columns={columns}
    />
  );
};

export default TableData;
