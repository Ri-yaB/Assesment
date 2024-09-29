import axios from 'axios';

const API_URL = 'https://dummyjson.com/';

export const fetchCategories = () => {
  return axios.get(`${API_URL}products/categories`);
};

export const fetchProductsByCategory = (category, limit = 10, skip = 0) => {
  const categoryPart = category ? `/category/${category}` : '';
  return axios.get(`${API_URL}products${categoryPart}?limit=${limit}&skip=${skip}`);
};

export const searchProducts = (query) => {
  return axios.get(`${API_URL}products/search?q=${query}`);
};
