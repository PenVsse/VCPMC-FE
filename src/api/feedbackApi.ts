import axios from "axios";

export const feedbackApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/feedback`)
}