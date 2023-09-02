// api.js
import axios from 'axios';

const API_URL = "http://localhost:8080/QrList/restaurant/";

export function fetchCategoriesByRestaurant(restaurantId) {
  return axios.get(`${API_URL}getRestaurant/${restaurantId}`);
}

export function fetchSubCategoriesByCategory(categoryId) {
  return axios.get(`${API_URL}getCategory/${categoryId}`);
}