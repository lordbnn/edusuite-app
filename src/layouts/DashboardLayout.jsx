import React from 'react';
import { Outlet } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';

const DashboardLayout = () => {
  const { sidebarCollapsed } = useApp();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Floating Chat Widget */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all z-50 group">
        <MessageSquare className="text-white group-hover:scale-110 transition-transform" size={24} />
      </button>
    </div>
  );
};

export default DashboardLayout;
