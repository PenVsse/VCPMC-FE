import axios from "axios";

export const videoUQ = {
    getAll:() => axios.get(`${import.meta.env.VITE_API_URL}/video-uq`)
}