import { CSSProperties, ReactNode } from "react";

export interface IAllocateNumberProps {
    icon?: React.ReactNode;
    label_1: string | ReactNode;
    label_2?: string | ReactNode;
    from?: number;
    to?: number;
    styleLabel?: CSSProperties;
}

export interface ServiceTable {
    key?: string;
    id: string;
    name: string;
    description: string;
    status: number;
    list: ServiceDetail[]
}

export interface ServiceDetail {
    id: string;
    status: number;
}

export interface IServiceDetailTableProps {
    data: ServiceDetail[]
}

export interface IServiceTableProps {
    data: ServiceTable[],
    loading?: boolean;
}