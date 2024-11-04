import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Allow-Control-Allow-Origin': '*',
  },
});

export const createRecommendation = async (recommendationData: { user_id: string; preferences: string[] }) => {
  try {
    const response = await apiClient.post('/recommendations', recommendationData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserRecommendations = async (userId: string) => {
  try {
    const response = await apiClient.get(`/users/${userId}/recommendations`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
