// Role
export interface IRole {
    id: string;
    name: string;
    members: number;
    description: string;
}

export interface IRoleTable {
    data: IRole[],
    loading?: boolean;
}

export interface ILog {
    username: string;
    ip: string;
    date: string;
    description: string;
}

export interface ILogTable {
    data: ILog[];
    loading?: boolean;
}