import React from "react";
import { Table, Row, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

export interface ISchedule {
    id: number;
    name: string;
    from: string;
    to: string;
}

export interface ITableDataProps {
    data?: ISchedule[],
    loading?: boolean;
}

const TableData: React.FC<ITableDataProps> = ({ data, loading }) => {
    const columns: ColumnsType<ISchedule> = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "stt",
            render: (_, __, index) => index + 1,
        },
        {
            title: "Tên lịch",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Thời gian phát",
            dataIndex: "time",
            key: "time",
            render: (_, record) => {

                return `${record.from.slice(0, 10).replaceAll('-', '/')} - ${record.to.slice(0, 10).replaceAll('-', '/')}`
            }
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_, record) => {
                return (
                    <Row>
                        <Space size={32}>
                            <Link
                                className="root_color"
                                style={{ textDecoration: "underline" }}
                                to={`detail/${record.id}`}
                            >
                                Xem chi tiết
                            </Link>
                            <Link
                                className="root_color"
                                style={{ textDecoration: "underline" }}
                                to={"#"}
                            >
                                {"Xóa"}
                            </Link>
                        </Space>
                    </Row>
                );
            },
        },
    ];

    return <Table loading={loading} columns={columns} dataSource={data} style={{ width: '100%' }} />;
};

export default TableData;