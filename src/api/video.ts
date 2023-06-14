import axios from "axios";


export const videoApi = {
    getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/video`),
    getById: (id: string | number) => axios.get(`${import.meta.env.VITE_API_URL}/video/id/${id}`)
}
