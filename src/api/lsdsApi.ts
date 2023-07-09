import axios from "axios";

export const lsdsApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/lsds`),
    getAllDetail: () => axios.get(`${import.meta.env.VITE_API_URL}/lsds/detail`),
}