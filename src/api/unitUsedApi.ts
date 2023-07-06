import axios from "axios";

export const unitUsedApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/unit-used`),
    getDetail: () => axios.get(`${import.meta.env.VITE_API_URL}/unit-used-detail`),
}