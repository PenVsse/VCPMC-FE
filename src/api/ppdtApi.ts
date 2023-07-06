import axios from "axios";

export const ppdtApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/ppdt`)
}