export interface IReport {
    id: string;
    serviceId: number;
    date: string;
    statusId: number;
    originId: number;
}

export interface IReportTable {
    data: IReport[],
    loading?: boolean;
}