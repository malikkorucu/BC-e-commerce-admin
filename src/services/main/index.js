import axios from "axios";

// Config
const config = {
  baseURL: "http://localhost:4500/api/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
};

// Instance
const axiosInstance = axios.create(config);

//  Interceptor Request
axiosInstance.interceptors.request.use(async (requestConfig) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWZhNzkyZWNkZDllMGRlNDg0ZmFhZCIsIm5hbWUiOiJtYWxpayBrb3J1Y3UiLCJlbWFpbCI6Im1hbGlra29ydWN1QGdtYWlsLmNvbSIsImlhdCI6MTY0MDEwODk1NywiZXhwIjoxNjQwMTk1MzU3fQ.1lB7dz7HP4fA-egiZcXqYPAqI-N9LmdhZTGSOFctJ2s";
  const useRequestConfig = { ...requestConfig };
  console.log("CONFIG", requestConfig);
  if (token) {
    useRequestConfig.headers.Authorization = `Bearer ${token}`;
  }
  return useRequestConfig;
});

export default axiosInstance;
