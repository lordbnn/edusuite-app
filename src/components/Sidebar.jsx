import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, Users, Briefcase, BookOpen, ClipboardList, Wallet, UserCheck,
  MessageSquare, Settings, HelpCircle, ChevronDown, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const menuItems = [
  { id: 'dashboard', path: '/', icon: Home, label: 'Dashboard' },
  { 
    id: 'students', 
    path: '/students',
    icon: Users, 
    label: 'Students',
    subItems: [
      { path: '/students', label: 'All Students' },
      { path: '/students/admissions', label: 'Admissions' },
      { path: '/students/promotion', label: 'Promotion' },
      { path: '/students/guardians', label: 'Parents/Guardians' },
    ]
  },
  { 
    id: 'staff', 
    path: '/staff',
    icon: Briefcase, 
    label: 'Staff',
    subItems: [
      { path: '/staff', label: 'All Staff' },
      { path: '/staff/departments', label: 'Departments' },
    ]
  },
  { 
    id: 'academics', 
    path: '/academics',
    icon: BookOpen, 
    label: 'Academics',
    subItems: [
      { path: '/academics/classes', label: 'Classes' },
      { path: '/academics/subjects', label: 'Subjects' },
      { path: '/academics/timetable', label: 'Time Table' },
      { path: '/academics/lesson-plans', label: 'Lesson Plans' },
      { path: '/academics/assignments', label: 'Assignments' },
    ]
  },
  { 
    id: 'examination', 
    path: '/examination',
    icon: ClipboardList, 
    label: 'Examination',
    subItems: [
      { path: '/examination/results', label: 'Results' },
      { path: '/examination/cbt', label: 'CBT' },
      { path: '/examination/report-cards', label: 'Report Cards' },
      { path: '/examination/transcripts', label: 'Transcripts' },
    ]
  },
  { 
    id: 'finance', 
    path: '/finance',
    icon: Wallet, 
    label: 'Finance',
    subItems: [
      { path: '/finance/fees', label: 'Fee Structure' },
      { path: '/finance/payments', label: 'Payments' },
      { path: '/finance/expenses', label: 'Expenses' },
      { path: '/finance/payroll', label: 'Payroll' },
      { path: '/finance/reports', label: 'Financial Reports' },
    ]
  },
  { id: 'attendance', path: '/attendance', icon: UserCheck, label: 'Attendance' },
  { 
    id: 'communication', 
    path: '/communication',
    icon: MessageSquare, 
    label: 'Communication',
    subItems: [
      { path: '/communication/sms', label: 'Bulk SMS' },
      { path: '/communication/announcements', label: 'Announcements' },
      { path: '/communication/messages', label: 'Messages' },
    ]
  },
  { id: 'settings', path: '/settings', icon: Settings, label: 'Settings' },
  { id: 'help', path: '/help', icon: HelpCircle, label: 'Help', highlight: true },
];

const Sidebar = () => {
  const { sidebarCollapsed, setSidebarCollapsed } = useApp();
  const [expandedItems, setExpandedItems] = useState(['students', 'academics', 'finance']);
  const location = useLocation();

  const toggleExpand = (id) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <aside className={`fixed left-0 top-0 h-full bg-white border-r border-gray-100 transition-all duration-300 z-40 flex flex-col ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo */}
      <div className="h-16 flex items-center gap-3 px-4 border-b border-gray-100">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
          <span className="text-white text-xl">☺</span>
        </div>
        {!sidebarCollapsed && (
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            EDUSUITE
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {menuItems.map(item => (
          <div key={item.id}>
            {item.subItems ? (
              // Menu with submenu
              <>
                <button
                  onClick={() => toggleExpand(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20' 
                      : isActive(item.path)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={20} />
                  {!sidebarCollapsed && (
                    <>
                      <span className="font-medium flex-1 text-left">{item.label}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${expandedItems.includes(item.id) ? 'rotate-180' : ''}`} 
                      />
                    </>
                  )}
                </button>
                
                {/* Submenu */}
                {!sidebarCollapsed && expandedItems.includes(item.id) && (
                  <div className="ml-6 mt-1 space-y-1 animate-fadeIn">
                    {item.subItems.map(sub => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        end={sub.path === item.path}
                        className={({ isActive }) => `
                          block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                          ${isActive 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                          }
                        `}
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Simple menu item
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
                  ${item.highlight 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <item.icon size={20} />
                {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Collapse Button */}
      <div className="p-3 border-t border-gray-100">
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors"
        >
          {sidebarCollapsed ? <ChevronRight size={20} /> : <><ChevronLeft size={20} /> <span className="text-sm">Collapse</span></>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
