import axios from 'axios';

const baseURL = 'http://localhost:8080'; // Base URL for your API

// Function to handle GET requests
export const httpGet = async (url, params = {}) => {
  try {
    const response = await axios.get(`${baseURL}${url}`, { params });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Function to handle POST requests
export const httpPost = async (url, data = {}) => {
  try {
    const response = await axios.post(`${baseURL}${url}`, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Function to handle DELETE requests
export const httpDelete = async (url) => {
  try {
    const response = await axios.delete(`${baseURL}${url}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
