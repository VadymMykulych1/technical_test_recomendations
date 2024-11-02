'use client';

import { useState } from 'react';

export default function Home () {
  const [userId, setUserId] = useState<string>('');
  const [interests, setInterests] = useState<string[]>([]);

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleFetchInterests = () => {
    // Fetch interests based on userId
    // Mock data for now; replace with an actual API call
    setInterests(['interest 1', 'interest 2', 'interest 3']);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Get Interests</h1>
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
          onClick={handleFetchInterests}
          className="w-full bg-blue-500 text-white py-2 rounded mt-4"
        >
          Get Interests
        </button>
        {interests.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Interests:</h2>
            <ul className="space-y-2">
              {interests.map((interest, index) => (
                <li key={index} className="p-2 border rounded">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
