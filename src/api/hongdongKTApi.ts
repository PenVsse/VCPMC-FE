import axios from "axios";

export const hopDongKTApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/hdkt`)
}