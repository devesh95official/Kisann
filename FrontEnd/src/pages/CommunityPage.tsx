import React from 'react';
import { Users, MessageSquare, Heart, Share2 } from 'lucide-react';

const CommunityPage = () => {
  const posts = [
    {
      id: 1,
      author: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      content: 'Just implemented a new drip irrigation system that s reduced my water usage by 30%! Happy to share my experience with anyone interested.',
      image: 'https://images.unsplash.com/photo-1463123081488-789f998ac9c4?auto=format&fit=crop&q=80&w=800',
      likes: 24,
      comments: 8,
      time: '2 hours ago',
    },
    {
      id: 2,
      author: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      content: 'Looking for advice on organic pest control methods for tomato plants. Any suggestions from experienced farmers?',
      likes: 15,
      comments: 12,
      time: '4 hours ago',
    },
    {
      id: 3,
      author: 'Mike Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      content: 'Excited to share that our farm just got certified organic! Here are some tips for those considering the transition.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
      likes: 42,
      comments: 16,
      time: '6 hours ago',
    },
  ];

  const topics = [
    { name: 'Organic Farming', posts: 156 },
    { name: 'Pest Control', posts: 89 },
    { name: 'Irrigation', posts: 124 },
    { name: 'Soil Health', posts: 98 },
    { name: 'Market Prices', posts: 67 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Farmer Community</h1>
        <p className="text-lg text-gray-600">Connect, share, and learn from fellow farmers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                alt="Your avatar"
                className="h-10 w-10 rounded-full"
              />
              <button className="flex-grow bg-gray-50 rounded-full px-4 py-2 text-left text-gray-500 hover:bg-gray-100">
                Share your farming experience...
              </button>
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t">
              <button className="flex items-center text-gray-600 hover:text-emerald-600">
                <MessageSquare className="h-5 w-5 mr-2" />
                Post
              </button>
              <button className="flex items-center text-gray-600 hover:text-emerald-600">
                <Share2 className="h-5 w-5 mr-2" />
                Share Photo
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-500">{post.time}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post content"
                    className="mt-4 rounded-lg w-full object-cover h-64"
                  />
                )}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-emerald-600">
                      <Heart className="h-5 w-5 mr-1" />
                      {post.likes}
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-emerald-600">
                      <MessageSquare className="h-5 w-5 mr-1" />
                      {post.comments}
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-emerald-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Stats */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-gray-600">Members</span>
                </div>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-gray-600">Posts</span>
                </div>
                <span className="font-medium">4,567</span>
              </div>
            </div>
          </div>

          {/* Popular Topics */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Topics</h2>
            <div className="space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic.name}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                >
                  <span className="text-gray-700">{topic.name}</span>
                  <span className="text-sm text-gray-500">{topic.posts} posts</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;