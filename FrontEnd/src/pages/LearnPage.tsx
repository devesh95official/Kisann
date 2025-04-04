import React from 'react';
import { BookOpen, Video, FileText, Users } from 'lucide-react';

const LearnPage = () => {
  const articles = [
    {
      title: 'Sustainable Farming Practices',
      description: 'Learn about eco-friendly farming methods that help preserve our environment.',
      category: 'Sustainability',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Modern Irrigation Techniques',
      description: 'Discover the latest irrigation technologies for efficient water usage.',
      category: 'Technology',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Pest Management Guide',
      description: 'Comprehensive guide on managing pests while maintaining crop health.',
      category: 'Crop Care',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c8efc?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const categories = [
    { name: 'All Articles', icon: FileText, count: 45 },
    { name: 'Video Tutorials', icon: Video, count: 23 },
    { name: 'Expert Insights', icon: Users, count: 12 },
    { name: 'Guides', icon: BookOpen, count: 18 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Agricultural Knowledge Hub</h1>
        <p className="text-lg text-gray-600">Expand your farming knowledge with our curated resources</p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Icon className="h-6 w-6 text-emerald-600 mr-3" />
              <div className="text-left">
                <p className="font-medium text-gray-800">{category.name}</p>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Featured Article */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400"
              alt="Featured article"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-emerald-600 font-semibold">Featured</div>
            <h2 className="mt-2 text-xl font-semibold text-gray-900">The Future of Smart Farming</h2>
            <p className="mt-3 text-gray-500">
              Explore how IoT, AI, and automation are revolutionizing modern agriculture and helping farmers make data-driven decisions.
            </p>
            <button className="mt-4 text-emerald-600 hover:text-emerald-500 font-medium">Read More →</button>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.title} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src={article.image}
              alt={article.title}
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs">
                  {article.category}
                </span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-500 mb-4">{article.description}</p>
              <button className="text-emerald-600 hover:text-emerald-500 font-medium">
                Read Article →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;