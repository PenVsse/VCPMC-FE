import axios from "axios";

export const playlistApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/playlist`),
    getById: (id: number | string) => axios.get(`${import.meta.env.VITE_API_URL}/playlist/id/${id}`)
}