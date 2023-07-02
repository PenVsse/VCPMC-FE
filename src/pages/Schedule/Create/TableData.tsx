import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

export interface Device {
    id: number;
    name: string;
    mac: string;
    sku: string;
    used: string;
    address: string;
    username: string;
}

type TableDataProps = {
    data: Device[];
    loading?: boolean;
};

const TableData: React.FC<TableDataProps> = ({ data, loading }) => {
    const columns: ColumnsType<Device> = [
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
            title: "MAC Address",
            dataIndex: "mac",
            key: "mac",
        },
        {
            title: "SKU/ID",
            dataIndex: "sku",
            key: "sku",
        },
        {
            title: "Đơn vị sử dụng",
            dataIndex: "used",
            key: "used",
            render: (_, __, index) => `Cửa hàng ${index + 1}`,
        },
        {
            title: "Tên đăng nhập",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Địa điểm hoạt động",
            dataIndex: "address",
            key: "address",
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: Device[]) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
            );
        },
        getCheckboxProps: (record: Device) => ({
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name,
        }),
    };

    return (
        <Table
            rowSelection={{
                type: "checkbox",
                ...rowSelection,
            }}
            style={{ width: "100%" }}
            columns={columns}
            dataSource={data.map(device => ({ ...device, key: device.id }))}
            loading={loading}
        />
    );
};

export default TableData;