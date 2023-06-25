import axios from "axios";

export const scheduleApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/schedule`),
    getById: (id: number | string) =>
        axios.get(`${import.meta.env.VITE_API_URL}/schedule/id/${id}`),
};