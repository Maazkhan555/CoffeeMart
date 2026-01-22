import axios from "axios";

const BaseUrl = axios.create({
  baseURL: "http://localhost:7000",
});

// ✅ AUTO ATTACH TOKEN
BaseUrl.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default BaseUrl;
