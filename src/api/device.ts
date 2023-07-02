import axios from "axios";

export const deviceApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/device`)
}