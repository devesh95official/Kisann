import React from 'react';
import { Plane as Plant, Cloud, Droplet, Sun, Wind, LineChart } from 'lucide-react';

const HomePage = () => {
  const weatherData = {
    temperature: '28°C',
    humidity: '65%',
    windSpeed: '12 km/h',
    rainfall: '0mm',
  };

  const cropStats = [
    { name: 'Wheat', status: 'Growing', progress: 65 },
    { name: 'Rice', status: 'Harvesting Soon', progress: 85 },
    { name: 'Corn', status: 'Just Planted', progress: 15 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Welcome to Kisann</h1>
        <p className="text-lg text-gray-600">Your smart farming companion for better agricultural management</p>
      </div>

      {/* Weather Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
          <Cloud className="h-6 w-6 mr-2" />
          Today's Weather
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center p-4 bg-emerald-50 rounded-lg">
            <Sun className="h-8 w-8 text-emerald-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Temperature</p>
              <p className="text-lg font-semibold">{weatherData.temperature}</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-emerald-50 rounded-lg">
            <Droplet className="h-8 w-8 text-emerald-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="text-lg font-semibold">{weatherData.humidity}</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-emerald-50 rounded-lg">
            <Wind className="h-8 w-8 text-emerald-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Wind Speed</p>
              <p className="text-lg font-semibold">{weatherData.windSpeed}</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-emerald-50 rounded-lg">
            <Cloud className="h-8 w-8 text-emerald-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Rainfall</p>
              <p className="text-lg font-semibold">{weatherData.rainfall}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Crop Status */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
          <Plant className="h-6 w-6 mr-2" />
          Crop Status
        </h2>
        <div className="space-y-4">
          {cropStats.map((crop) => (
            <div key={crop.name} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800">{crop.name}</h3>
                <span className="text-sm text-gray-500">{crop.status}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-emerald-600 h-2.5 rounded-full"
                  style={{ width: `${crop.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">Add New Crop</h3>
          <p className="text-gray-600">Start tracking a new crop in your farm</p>
        </button>
        <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">Schedule Irrigation</h3>
          <p className="text-gray-600">Plan your irrigation schedule</p>
        </button>
        <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">View Reports</h3>
          <p className="text-gray-600">Access detailed farming analytics</p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;