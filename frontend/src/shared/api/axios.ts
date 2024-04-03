import axios from "axios";

export const apiClient = axios.create({
  // baseURL: !import.meta.env.DEV ? import.meta.env.VITE_API_BASE_URL : undefined,
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});
