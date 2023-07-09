import axios from "axios";

type loginParams = {
    username: string;
    password: string;
}

export const authApi = {
    login: (param: loginParams) => {
        return axios.post(`${import.meta.env.VITE_API_URL}/user/login`, param);
    },
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/user`),
    getAllRole: () => axios.get(`${import.meta.env.VITE_API_URL}/role`),
}