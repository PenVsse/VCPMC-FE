import { ReactNode } from "react";

export interface DeviceTable {
    key: string;
    id: string;
    name: string;
    ip: string;
    statusActive: number;
    statusConnect: number;
    service: string[];
}

export interface IDevice {
    id: string;
    name: string;
    ip: string;
    statusActive: number;
    statusConnect: number;
    service: string[];
    type: number;
    username: string;
    password: string;
}

export interface IDeviceTableProps {
    data: DeviceTable[];
    loading?: boolean;
}

export interface IInfoProps {
    label?: string;
    value?: string | ReactNode;
    span?: number;
}