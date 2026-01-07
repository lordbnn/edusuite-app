import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Calendar, ChevronDown, LogOut, User, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header = () => {
  const { 
    searchQuery, 
    setSearchQuery, 
    notifications, 
    schoolInfo, 
    currentSession, 
    currentTerm 
  } = useApp();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const mockNotifications = [
    { id: 1, title: 'New Payment Received', message: 'Adaeze Okonkwo paid ₦75,000', time: '5 mins ago', read: false },
    { id: 2, title: 'Attendance Alert', message: 'SSS 3A attendance below 80%', time: '1 hour ago', read: false },
    { id: 3, title: 'Result Uploaded', message: 'Mathematics results for SSS 2 uploaded', time: '2 hours ago', read: true },
    { id: 4, title: 'Fee Reminder Sent', message: 'Bulk reminder sent to 45 parents', time: '3 hours ago', read: true },
  ];

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search students, staff, classes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Current Term Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg text-sm text-blue-600">
          <Calendar size={16} />
          <span className="font-medium">{currentTerm} / {currentSession}</span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell size={20} className="text-gray-600" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <>
              <div className="fixed inset-0" onClick={() => setShowNotifications(false)} />
              <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                  <button className="text-sm text-blue-500 hover:underline">Mark all read</button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {mockNotifications.map(notif => (
                    <div 
                      key={notif.id}
                      className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${!notif.read ? 'bg-blue-50/50' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${!notif.read ? 'bg-blue-500' : 'bg-gray-300'}`} />
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 text-sm">{notif.title}</p>
                          <p className="text-gray-500 text-sm">{notif.message}</p>
                          <p className="text-gray-400 text-xs mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-100">
                  <button className="w-full text-center text-sm text-blue-500 hover:underline">
                    View all notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button 
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-xl px-3 py-2 transition-colors"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {schoolInfo.owner?.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{schoolInfo.owner}</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </button>

          {/* User Dropdown */}
          {showUserMenu && (
            <>
              <div className="fixed inset-0" onClick={() => setShowUserMenu(false)} />
              <div className="absolute right-0 top-14 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                <div className="p-4 border-b border-gray-100">
                  <p className="font-semibold text-gray-800">{schoolInfo.owner}</p>
                  <p className="text-sm text-gray-500">{schoolInfo.email}</p>
                </div>
                <div className="p-2">
                  <button 
                    onClick={() => { navigate('/settings'); setShowUserMenu(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <User size={18} />
                    <span>My Profile</span>
                  </button>
                  <button 
                    onClick={() => { navigate('/settings'); setShowUserMenu(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                  </button>
                </div>
                <div className="p-2 border-t border-gray-100">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
