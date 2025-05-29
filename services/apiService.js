import axios from 'axios';

import { useLoading } from '@/composables/useLoading'

const { start, done } = useLoading()

const apiClient = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'http://165.22.55.16:8080/',
  withCredentials: true,    
  headers: {
    'Content-Type': 'application/json',
    // 'x-access-key': 'X-ACCESS-KEY-VALUE-TEST',
    'x-access-key': 'FKqDHmj767ywY9mUhTqeDjdFC',
    
  },
});

// ถ้ารูปเก็บบนโดเมนอื่น กำหนดแยก
const IMAGE_BASE_URL = 'https://azsunriseresort.com/images';

// interceptor รันก่อน request
apiClient.interceptors.request.use(config => {
  start()
  return config
})

// interceptor รันหลังได้ response หรือ error
apiClient.interceptors.response.use(
  res => { done(); return res },
  err => { done(); return Promise.reject(err) }
)


const apiService = {
  async get(url, params = {}) {
    const response = await apiClient.get(url, { params });
    return response.data;
  },
  async post(url, data = {}, config = {}) {
    const response = await apiClient.post(url, data, config);
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

  getImageUrl(bannerPath, bannerName) {
    return `${IMAGE_BASE_URL}/${bannerPath}/${bannerName}`;
  },

  async callServiceInfo() {
      if (process.client) {
        const cached = sessionStorage.getItem("pageInfo");
        if (cached) {
          return JSON.parse(cached);
        }
      }
      // ถ้ายังไม่มีใน sessionStorage → ดึงจาก API
      const data = await this.get("/api/page-info/search");

      // 3) เก็บลง sessionStorage (stringify จะได้เป็น JSON text)
      if (process.client) {
        if (data) {
            sessionStorage.setItem("pageInfo", JSON.stringify(data));
        }
      
      }
      
      return data;
    }
};

export default apiService;
