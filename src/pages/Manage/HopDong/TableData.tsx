import React from "react";
import { Table, Badge, Typography, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { OPTION_MANAGMENT_HSD, OPTION_QSH } from "../../../constants/option";
import { textFont } from "../../../components/MyBreadcrumb";
import { Link } from "react-router-dom";

export interface IHopDongUQ {
    id: string;
    name: string;
    user: string;
    ownership: number;
    effect: number;
    createdAt: string;
}

interface TableDataProps {
    data: IHopDongUQ[];
    loading?: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableData: React.FC<TableDataProps> = ({ data, loading, setOpen }) => {
    const columns: ColumnsType<IHopDongUQ> = [
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
            title: "Tên hợp đồng",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Người ủy quyền",
            dataIndex: "user",
            key: "user",
        },
        {
            title: "Quyền sở hữu",
            dataIndex: "ownership",
            key: "ownership",
            render: (value) => OPTION_QSH.find((opt) => opt.value === value)?.label,
        },
        {
            title: "Hiệu lực hợp đồng",
            dataIndex: "effect",
            key: "effect",
            render: (value) => {
                const hsd = OPTION_MANAGMENT_HSD.find((opt) => opt.value === value);

                return (
                    <div>
                        <Badge status="processing" color={hsd?.color} />
                        <Typography.Text
                            style={{ ...textFont(".9rem"), marginLeft: ".25rem" }}
                        >
                            {hsd?.label}
                        </Typography.Text>
                    </div>
                );
            },
        },
        {
            title: "Ngày tạo",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (value) =>
                `${value.slice(0, 10).replaceAll("-", "/")} ${`15:53:13`}`,
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Link
                        style={{ color: "orange", textDecoration: "underline" }}
                        to={`detail/${record.id}`}
                    >
                        Xem chi tiết
                    </Link>
                    {record.effect === 4 && (
                        <Link
                            onClick={() => setOpen(true)}
                            style={{ color: "orange", textDecoration: "underline" }}
                            to={"#"}
                        >
                            Lý do hủy
                        </Link>
                    )}
                </Space>
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