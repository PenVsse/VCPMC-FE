import axios from "axios";

export const hopdongApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/hopdong`),
    getById: (id: string | number) =>
        axios.get(`${import.meta.env.VITE_API_URL}/hopdong/id/${id}`),
};