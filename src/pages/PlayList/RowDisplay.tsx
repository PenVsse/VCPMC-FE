import React, { CSSProperties } from "react";
import { Badge, Row, Space, Table, Typography } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { Link } from "react-router-dom";

export interface IPlaylistDataType {
    id: number;
    key: number;
    title: string;
    numberPlaylist: number;
    time: string;
    topics: string;
    createdAt: string;
    creater: string;
    picture?: string;
}

interface IRowDisplayProps {
    data: IPlaylistDataType[];
    loading?: boolean;
}

export const TopicComponent = ({ label, style }: { label: string, style?: CSSProperties }) => (
    <div
        style={{
            padding: ".15rem .5rem",
            border: "1px solid #ccc",
            borderRadius: 4,
            width: "fit-content",
            opacity: 0.8,
            color: '#fff',
            ...style
        }}
    >
        {label}
    </div>
);

const RowDisplay: React.FC<IRowDisplayProps> = ({ data, loading }) => {
    const columns: ColumnsType<IPlaylistDataType> = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "stt",
            render: (_, __, index) => index + 1,
        },
        {
            title: "Tiêu đề",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Số bản ghi",
            dataIndex: "numberPlaylist",
            key: "numberPlaylist",
        },
        {
            title: "Thời lượng",
            dataIndex: "time",
            key: "time",
            render: (value) => value || "00:00",
        },
        {
            title: "Chủ đề",
            dataIndex: "topics",
            key: "topics",
            render: (value) => {
                const topics = value.split(",").map((value: string) => value.trim());

                return (
                    <Row>
                        <Space size={4}>
                            {topics.length > 4 ? (
                                <>
                                    {topics.slice(0, 4).map((topic: string, index: number) => (
                                        <TopicComponent label={topic} key={index} />
                                    ))}
                                    <TopicComponent label="..." />
                                </>
                            ) : (
                                topics.map((topic: string, index: number) => (
                                    <TopicComponent label={topic} key={index} />
                                ))
                            )}
                        </Space>
                    </Row>
                );
            },
        },
        {
            title: "Ngày tạo",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (value) => value.slice(0, 10),
        },
        {
            title: "Người tạo",
            dataIndex: "creater",
            key: "creater",
        },
        {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            render: (_, record) => {
                return (
                    <Link
                        className="root_color"
                        to={`detail/${record.id}`}
                        style={{ textDecoration: "underline" }}
                    >
                        Chi tiết
                    </Link>
                );
            },
        },
    ];

    const pag: TablePaginationConfig = {
        pageSize: 5,
    };

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={pag}
            loading={loading}
        />
    );
};

export default RowDisplay;