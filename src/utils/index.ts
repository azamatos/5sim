import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${import.meta.env.VITE_BASE_URL}/${
    import.meta.env.VITE_API_VERSION
  }/${import.meta.env.VITE_API_USER_TYPE}`,
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { instance as axios };
