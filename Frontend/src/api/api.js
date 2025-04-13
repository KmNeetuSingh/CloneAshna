import axios from "axios";

// ✅ Base URL from .env
const API = import.meta.env.VITE_API_BASE_URL;

// ✅ Get token from local storage
const getToken = () => localStorage.getItem("token");

// ✅ Auth headers
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

//
// 🔹 TASK APIs
//
export const getTasks = (filters = {}) =>
  axios.get(`${API}/tasks`, {
    ...authHeader(),
    params: filters,
  });

export const createTask = (task) =>
  axios.post(`${API}/tasks/create`, task, authHeader());

export const updateTask = (id, data) =>
  axios.put(`${API}/tasks/${id}`, data, authHeader());

export const deleteTask = (id) =>
  axios.delete(`${API}/tasks/${id}`, authHeader());

//
// 🔹 AUTH APIs
//
export const loginUser = (credentials) =>
  axios.post(`${API}/auth/login`, credentials);

export const registerUser = (userData) =>
  axios.post(`${API}/auth/register`, userData);

export const getProfile = () =>
  axios.get(`${API}/auth/profile`, authHeader());
