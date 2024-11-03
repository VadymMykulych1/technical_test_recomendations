'use client';

import { useState } from 'react';
import { getUserRecommendations } from '@/services/interestService';

const GetInterestsPage = () => {
  const [userId, setUserId] = useState<string>('');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleFetchRecommendations = async () => {
    if (!userId) {
      setError('User ID is required to fetch recommendations.');
      return;
    }

    try {
      const data = await getUserRecommendations(userId);
      setRecommendations(data);
      setError(null);
    } catch (error) {
      console.error('Failed to fetch recommendations:', error);
      setError('Failed to fetch recommendations. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Get User-Specific Recommendations</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={handleUserIdChange}
            className="w-full p-2 border rounded"
            placeholder="Enter User ID"
          />
        </div>
        <button
          onClick={handleFetchRecommendations}
          className="w-full bg-blue-500 text-white py-2 rounded mt-4"
        >
          Get Recommendations
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {recommendations.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Recommendations:</h2>
            <ul className="space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index} className="p-2 border rounded">
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInterestsPage;
