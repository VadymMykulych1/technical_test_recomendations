'use client';

import { useState } from 'react';
import { getUserRecommendations } from '@/services/interestService';
import { toast } from 'react-toastify';

interface Promotion {
  _id: string;
  user_id: string;
  recommendations: string[];
  preferences: string[];
}

const GetInterestsPage = () => {
  const [userId, setUserId] = useState<string>('');
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleFetchRecommendations = async () => {
    if (!userId) {
      toast.error('User ID is required to fetch recommendations.');
      return;
    }

    try {
      const data = await getUserRecommendations(userId);
      setPromotions(data.promotion);
    } catch (error) {
      toast.error('Failed to fetch recommendations. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Get User-Specific Recommendations</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={handleUserIdChange}
            className="w-full p-2 border rounded text-gray-900"
            placeholder="Enter User ID"
          />
        </div>
        <button
          onClick={handleFetchRecommendations}
          className="w-full bg-blue-600 text-white py-2 rounded mt-4"
        >
          Get Recommendations
        </button>
        {promotions.length > 0 && (
          <div className="mt-4 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Recommendations:</h2>
            {promotions.map((promotion) => (
              <div key={promotion._id} className="p-4 border rounded bg-white shadow-sm">
                <h3 className="text-md font-semibold text-gray-800">Promotion ID: {promotion._id}</h3>
                <p className="text-gray-700">User ID: {promotion.user_id}</p>
                <div className="mt-2">
                  <h4 className="font-semibold text-gray-800">Recommendations:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700">
                    {promotion.recommendations.map((recommendation, index) => (
                      <li key={index}>{recommendation}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <h4 className="font-semibold text-gray-800">Preferences:</h4>
                  <ul className="list-disc list-inside ml-4 text-gray-700">
                    {promotion.preferences.map((preference, index) => (
                      <li key={index}>{preference}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInterestsPage;
