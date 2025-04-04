import React, { useState } from 'react';
import { Sprout, Menu, X, Home, BookOpen, LineChart, Users } from 'lucide-react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import AnalyticsPage from './pages/AnalyticsPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'learn', name: 'Learn', icon: BookOpen },
    { id: 'analytics', name: 'Analytics', icon: LineChart },
    { id: 'community', name: 'Community', icon: Users },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'learn':
        return <LearnPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'community':
        return <CommunityPage />;
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
                <Sprout className="h-8 w-8 text-emerald-600" />
                <span className="ml-2 text-2xl font-semibold text-emerald-800">Kisann</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id)}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        currentPage === item.id
                          ? 'text-emerald-600 border-b-2 border-emerald-500'
                          : 'text-gray-500 hover:text-emerald-500 hover:border-emerald-300 border-b-2 border-transparent'
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <button
                onClick={() => setCurrentPage('login')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'login'
                    ? 'bg-emerald-600 text-white'
                    : 'text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                Sign in
              </button>
              <button
                onClick={() => setCurrentPage('signup')}
                className="px-4 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Sign up
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block pl-3 pr-4 py-2 text-base font-medium w-full text-left ${
                    currentPage === item.id
                      ? 'text-emerald-600 bg-emerald-50 border-l-4 border-emerald-500'
                      : 'text-gray-500 hover:text-emerald-500 hover:bg-emerald-50 hover:border-emerald-300 border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center">
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </div>
                </button>
              );
            })}
            <button
              onClick={() => {
                setCurrentPage('login');
                setIsMobileMenuOpen(false);
              }}
              className="block pl-3 pr-4 py-2 text-base font-medium w-full text-left text-emerald-600"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setCurrentPage('signup');
                setIsMobileMenuOpen(false);
              }}
              className="block pl-3 pr-4 py-2 text-base font-medium w-full text-left bg-emerald-600 text-white"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>

      <main className="pb-8">{renderPage()}</main>
    </div>
  );
}

export default App;