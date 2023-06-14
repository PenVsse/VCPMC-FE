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

interface IRowDisplayProps {
  data: IVideoDataType[];
  loading?: boolean;
}

const RowDisplay: React.FC<IRowDisplayProps> = ({ data, loading }) => {
  const columns: ColumnsType<IVideoDataType> = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (_, __, index) => index+1,
    },
    {
      title: "Tên bản ghi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã ISRC",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Thời lượng",
      dataIndex: "time",
      key: "time",
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
      title: "Thể loại",
      dataIndex: "type",
      key: "type",
      render: (value) =>
        OPTION_VIDEO_TYPE.find((opt) => opt.value === value)?.label,
    },
    {
      title: "Định dạng",
      dataIndex: "format",
      key: "format",
      render: (value) =>
        OPTION_VIDEO_FORMAT.find((opt) => opt.value === value)?.label,
    },
    {
      title: "Thời hạn sử dụng",
      dataIndex: "hsd",
      key: "hsd",
      render: (value) => {
        const hsd = OPTION_VIDEO_HSD.find((opt) => opt.value === value);
        return (
          <div>
            <div>
              <Badge status="processing" color={hsd?.color} />
              <Typography.Text style={{ ...textFont('.9rem'), marginLeft: '.25rem' }}>{hsd?.label}</Typography.Text>
            </div>
          </div>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_,record) => {
        return(
            <Space size={24}>
                <Link className="root_color" to={`update/${record.id}`} style={{ textDecoration: 'underline' }}>Cập nhật</Link>
                <Link className="root_color" to={'#'} style={{ textDecoration: 'underline' }}>Nghe</Link>
            </Space>
        )
      }
    },
  ];

  const pag: TablePaginationConfig = {
    pageSize: 4,
  }

  return <Table columns={columns} dataSource={data} pagination={pag} loading={loading} />;
};

export default RowDisplay;
