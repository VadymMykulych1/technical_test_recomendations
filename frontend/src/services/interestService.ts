import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'ngrok-skip-browser-warning': 'true',
  },
});

export const createRecommendation = async (recommendationData: { userId: string; interests: string[] }) => {
  try {
    const response = await apiClient.post('/recommendations', recommendationData);
    return response.data;
  } catch (error) {
    console.error('Error creating recommendation:', error);
    throw error;
  }
};

export const getUserRecommendations = async (userId: string) => {
  try {
    const response = await apiClient.get(`/users/${userId}/recommendations`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recommendations for user ${userId}:`, error);
    throw error;
  }
};
