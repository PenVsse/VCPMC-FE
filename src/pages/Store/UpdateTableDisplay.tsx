import React from "react";
import { Badge, Space, Table, Typography } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import {
  OPTION_VIDEO_FORMAT,
  OPTION_VIDEO_HSD,
  OPTION_VIDEO_TYPE,
} from "../../constants/option";
import { textFont } from "../../components/MyBreadcrumb";
import { Link } from "react-router-dom";

export interface IVideoDataType {
  key: string;
  id: string;
  name: string;
  time: string;
  singer: string;
  author: string;
  type: number;
  format: number;
  hsd: number;
  picture: string;
}

interface IUpdateTableDisplayProps {
  data: IVideoDataType[];
  loading?: boolean;
}

const UpdateTableDisplay: React.FC<IUpdateTableDisplayProps> = ({
  data,
  loading,
}) => {
  const columns: ColumnsType<IVideoDataType> = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên bản ghi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ca sĩ",
      dataIndex: "singer",
      key: "singer",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Mã ISRC",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Số hợp đồng",
      dataIndex: 'shd',
      key: 'shd',
      render: () => 'HD20210524302'
    },
    {
      title: 'Ngày tải',
      dataIndex: 'day',
      key: 'day',
      render: () => '12/05/2021  16:46:12'
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => {
        return (
          <Space size={24}>
            <Link
              className="root_color"
              to={"#"}
              style={{ textDecoration: "underline" }}
            >
              Nghe
            </Link>
          </Space>
        );
      },
    },
  ];

  const pag: TablePaginationConfig = {
    pageSize: 4,
  };

  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: IVideoDataType[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: IVideoDataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Table
      columns={columns}
      dataSource={data.map(video => ({ ...video, key: video.id }))}
      pagination={pag}
      loading={loading}
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
    />
  );
};

export default UpdateTableDisplay;