export interface ITableAllocateNumber {
    id: string;
    customerName: string;
    serviceId: number;
    date: string;
    expiry: string;
    status: number;
    originId: number;
    phone: string;
    email: string;
}

export interface ITableAllocateNumberProps {
    data: ITableAllocateNumber[],
    loading?: boolean;
}