import { apiClient } from "./axios";

export const postMessage = (message: string) =>
  apiClient.post("/message", { message });
