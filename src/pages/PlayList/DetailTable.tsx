import React from "react";
import { Table, Row, Space, Badge } from "antd";
import { IVideoDataType } from "../Store/RowDisplay";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { OPTION_VIDEO_FORMAT, OPTION_VIDEO_TYPE } from "../../constants/option";

export interface IDetailTable {
    data: IVideoDataType[];
}

const DetailTable: React.FC<IDetailTable> = ({ data }) => {
    console.log(data);

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
            render: (value, record) => {

                return (
                    <div>
                        <div>{value}</div>
                        <div>
                            <span style={{ fontSize: '.75rem', opacity: .5 }}>{OPTION_VIDEO_TYPE.find(type => type.value === record.type)?.label}</span>
                            <span style={{ fontSize: '.75rem', opacity: .5 }}><Badge status="processing" color="#347AFF" style={{ marginLeft: '.5rem', marginRight: '.25rem' }} />{OPTION_VIDEO_FORMAT.find(format => format.value === record.format)?.label}</span>
                            <span style={{ fontSize: '.75rem', opacity: .5 }}><Badge status="processing" color="#347AFF" style={{ marginLeft: '.5rem', marginRight: '.25rem' }} />{record.time}</span>
                        </div>
                    </div>
                )
            }
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
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_, record) => {
                return (
                    <Row>
                        <Space size={32}>
                            <Link className="root_color" style={{ textDecoration: 'underline' }} to={"#"}>Nghe</Link>
                            <Link className="root_color" style={{ textDecoration: 'underline' }} to={"#"}>Gỡ</Link>
                        </Space>
                    </Row>
                );
            },
        },
    ];

    return <Table dataSource={data} columns={columns} />;
};

export default DetailTable;