import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const formattedError = error.response?.data || {
      status: 'error',
      error_code: 'NETWORK_ERROR',
      message: 'Tidak dapat terhubung ke server backend.',
      fallback_action: null,
    };
    return Promise.reject(formattedError);
  }
);

export default api;