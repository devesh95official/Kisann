import React from 'react';
import { LineChart as LineChartIcon, BarChart, PieChart, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const AnalyticsPage = () => {
  const stats = [
    {
      title: 'Total Yield',
      value: '2,847',
      unit: 'tons',
      change: '+12.5%',
      trend: 'up',
    },
    {
      title: 'Resource Usage',
      value: '4,320',
      unit: 'liters',
      change: '-8.1%',
      trend: 'down',
    },
    {
      title: 'Revenue',
      value: '$12,847',
      unit: 'USD',
      change: '+23.4%',
      trend: 'up',
    },
    {
      title: 'Efficiency',
      value: '94.2',
      unit: '%',
      change: '+5.2%',
      trend: 'up',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Farm Analytics</h1>
        <p className="text-lg text-gray-600">Track and analyze your farm's performance metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-500">{stat.title}</h3>
              {stat.trend === 'up' ? (
                <ArrowUpRight className="h-5 w-5 text-green-500" />
              ) : (
                <ArrowDownRight className="h-5 w-5 text-red-500" />
              )}
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className="ml-2 text-sm text-gray-500">{stat.unit}</p>
            </div>
            <div className={`mt-2 text-sm ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Yield Trends</h3>
            <LineChartIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Resource Distribution</h3>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <Calendar className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Irrigation System Update</p>
                <p className="text-sm text-gray-500">Water usage reduced by 15%</p>
              </div>
              <div className="ml-auto text-sm text-gray-500">2h ago</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;