import React from 'react';

export const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Dashboard Home</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-blue-500 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
            <span className="text-4xl">📊</span>
            <div>
              <h2 className="text-xl font-semibold">Analytics</h2>
              <p className="text-sm">View detailed analytics data</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-green-500 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
            <span className="text-4xl">💼</span>
            <div>
              <h2 className="text-xl font-semibold">Projects</h2>
              <p className="text-sm">Manage your ongoing projects</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-yellow-500 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
            <span className="text-4xl">📅</span>
            <div>
              <h2 className="text-xl font-semibold">Calendar</h2>
              <p className="text-sm">Keep track of your schedule</p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-red-500 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
            <span className="text-4xl">📈</span>
            <div>
              <h2 className="text-xl font-semibold">Reports</h2>
              <p className="text-sm">Generate reports for your business</p>
            </div>
          </div>

          {/* Box 5 */}
          <div className="bg-purple-500 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
            <span className="text-4xl">📞</span>
            <div>
              <h2 className="text-xl font-semibold">Support</h2>
              <p className="text-sm">Get assistance from the support team</p>
            </div>
          </div>

          {/* Box 6 */}
          <div className="bg-orange-500 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
            <span className="text-4xl">🔔</span>
            <div>
              <h2 className="text-xl font-semibold">Notifications</h2>
              <p className="text-sm">Stay updated with recent alerts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
