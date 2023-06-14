export interface IAuth {
    user: IUser | null;
}

export interface IRole {
    id: number;
    name: string;
}

export interface IUser {
    id: number | null;
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    phone: string | null;
    password: string | null;
    email: string | null;
    Role: IRole;
    roleId: number | null;
    dob: string | null;
}

export interface ILogin {
    username: string;
    password: string;
}

export interface IUserTable {
    data: IUser[],
    loading?: boolean;
}