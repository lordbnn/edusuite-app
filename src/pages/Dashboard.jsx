import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Briefcase, GraduationCap, Wallet, DollarSign, AlertCircle,
  UserPlus, Receipt, ClipboardList, Send, Download, TrendingUp
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StatCard, StatusBadge, Button } from '../components/ui';

const Dashboard = () => {
  const navigate = useNavigate();
  const { students, staff, classes, payments, schoolInfo, openModal, getStats } = useApp();
  const stats = getStats();

  const recentPayments = payments.slice(0, 5);

  const quickActions = [
    { icon: UserPlus, label: 'Add Student', color: 'blue', action: () => openModal('add-student') },
    { icon: Receipt, label: 'Record Payment', color: 'green', action: () => openModal('add-payment') },
    { icon: ClipboardList, label: 'Enter Results', color: 'purple', action: () => navigate('/examination/results') },
    { icon: Send, label: 'Send SMS', color: 'orange', action: () => navigate('/communication/sms') },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back, {schoolInfo.owner?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-500 mt-1">
            Here's what's happening at {schoolInfo.name} today.
          </p>
        </div>
        <Button icon={Download}>
          Export Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Users} 
          label="Total Students" 
          value={stats.totalStudents} 
          change={5} 
          color="blue" 
          onClick={() => navigate('/students')} 
        />
        <StatCard 
          icon={Briefcase} 
          label="Total Staff" 
          value={stats.totalStaff} 
          change={2} 
          color="purple" 
          onClick={() => navigate('/staff')} 
        />
        <StatCard 
          icon={GraduationCap} 
          label="Classes" 
          value={stats.totalClasses} 
          color="green" 
          onClick={() => navigate('/academics/classes')} 
        />
        <StatCard 
          icon={Wallet} 
          label="Revenue (This Term)" 
          value={`₦${(stats.totalRevenue/1000).toFixed(0)}K`} 
          change={12} 
          color="amber" 
          onClick={() => navigate('/finance/payments')} 
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Payments */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Recent Payments</h2>
            <button 
              onClick={() => navigate('/finance/payments')} 
              className="text-sm text-blue-500 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentPayments.map(payment => (
              <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{payment.student}</p>
                    <p className="text-sm text-gray-500">{payment.class} • {payment.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">₦{payment.amount.toLocaleString()}</p>
                  <StatusBadge status={payment.status} />
                </div>
              </div>
            ))}
            {recentPayments.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No recent payments
              </div>
            )}
          </div>
        </div>

        {/* Side Stats */}
        <div className="space-y-6">
          {/* Pending Fees Alert */}
          <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle size={24} />
              <h3 className="font-bold">Pending Fees</h3>
            </div>
            <p className="text-3xl font-bold">₦{(stats.pendingFees/1000).toFixed(0)}K</p>
            <p className="text-white/80 text-sm mt-1">
              {stats.studentsWithDebt} students with outstanding balance
            </p>
            <button 
              onClick={() => navigate('/finance/payments')}
              className="mt-4 w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors"
            >
              View Debtors
            </button>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">Quick Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Active Students</span>
                <span className="font-semibold text-green-600">{stats.activeStudents}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Teachers</span>
                <span className="font-semibold">{staff.filter(s => s.role === 'Teacher').length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Classes Today</span>
                <span className="font-semibold">{classes.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Attendance Rate</span>
                <span className="font-semibold text-blue-600 flex items-center gap-1">
                  <TrendingUp size={16} /> 95%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.action}
            className={`flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all group`}
          >
            <div className={`w-10 h-10 bg-${action.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <action.icon size={20} className={`text-${action.color}-600`} />
            </div>
            <span className={`font-medium text-gray-700`}>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
