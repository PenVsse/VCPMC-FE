import axios from "axios";

export const partnerApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/partner`)
}