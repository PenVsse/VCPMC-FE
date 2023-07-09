import axios from "axios";

export const ppdtApi = {
  getAll: () => axios.get(`${import.meta.env.VITE_API_URL}/ppdt`),
  getAllLeft: () =>
    axios.get(`${import.meta.env.VITE_API_URL}/ppdt/detail-left`),
  getAllRight: () =>
    axios.get(`${import.meta.env.VITE_API_URL}/ppdt/detail-right`),
};