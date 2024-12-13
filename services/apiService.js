import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiService = {
  async get(url, params = {}) {
    const response = await apiClient.get(url, { params });
    return response.data;
  },
  async post(url, data = {}) {
    const response = await apiClient.post(url, data);
    return response.data;
  },
  async put(url, data = {}) {
    const response = await apiClient.put(url, data);
    return response.data;
  },
  async delete(url) {
    const response = await apiClient.delete(url);
    return response.data;
  },
};

export default apiService;
