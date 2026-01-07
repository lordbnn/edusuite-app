import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from './context/AppContext';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Attendance from './pages/Attendance';

// Students
import StudentsList from './pages/students/StudentsList';
import StudentDetail from './pages/students/StudentDetail';

// Staff
import StaffList from './pages/staff/StaffList';

// Academics
import ClassesList from './pages/academics/ClassesList';

// Finance
import FeesList from './pages/finance/FeesList';
import PaymentsList from './pages/finance/PaymentsList';

// Placeholder component for pages not yet built
const PlaceholderPage = ({ title }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center animate-fadeIn">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl">🚧</span>
    </div>
    <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-500">This module is under development.</p>
  </div>
);

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { onboardingComplete } = useApp();
  
  if (!onboardingComplete) {
    return <Navigate to="/onboarding" replace />;
  }
  
  return children;
};

function App() {
  const { onboardingComplete } = useApp();

  return (
    <Routes>
      {/* Onboarding Route */}
      <Route 
        path="/onboarding" 
        element={onboardingComplete ? <Navigate to="/" replace /> : <Onboarding />} 
      />

      {/* Dashboard Routes */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Main Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Students Routes */}
        <Route path="students">
          <Route index element={<StudentsList />} />
          <Route path=":id" element={<StudentDetail />} />
          <Route path=":id/edit" element={<PlaceholderPage title="Edit Student" />} />
          <Route path="admissions" element={<PlaceholderPage title="Admissions" />} />
          <Route path="promotion" element={<PlaceholderPage title="Student Promotion" />} />
          <Route path="guardians" element={<PlaceholderPage title="Parents/Guardians" />} />
        </Route>

        {/* Staff Routes */}
        <Route path="staff">
          <Route index element={<StaffList />} />
          <Route path=":id" element={<PlaceholderPage title="Staff Detail" />} />
          <Route path="departments" element={<PlaceholderPage title="Departments" />} />
        </Route>

        {/* Academics Routes */}
        <Route path="academics">
          <Route index element={<Navigate to="classes" replace />} />
          <Route path="classes" element={<ClassesList />} />
          <Route path="classes/:id" element={<PlaceholderPage title="Class Detail" />} />
          <Route path="subjects" element={<PlaceholderPage title="Subjects" />} />
          <Route path="timetable" element={<PlaceholderPage title="Time Table" />} />
          <Route path="lesson-plans" element={<PlaceholderPage title="Lesson Plans" />} />
          <Route path="assignments" element={<PlaceholderPage title="Assignments" />} />
        </Route>

        {/* Examination Routes */}
        <Route path="examination">
          <Route index element={<Navigate to="results" replace />} />
          <Route path="results" element={<PlaceholderPage title="Results Management" />} />
          <Route path="cbt" element={<PlaceholderPage title="Computer-Based Testing" />} />
          <Route path="report-cards" element={<PlaceholderPage title="Report Cards" />} />
          <Route path="transcripts" element={<PlaceholderPage title="Transcripts" />} />
        </Route>

        {/* Finance Routes */}
        <Route path="finance">
          <Route index element={<Navigate to="fees" replace />} />
          <Route path="fees" element={<FeesList />} />
          <Route path="payments" element={<PaymentsList />} />
          <Route path="expenses" element={<PlaceholderPage title="Expenses" />} />
          <Route path="payroll" element={<PlaceholderPage title="Payroll" />} />
          <Route path="reports" element={<PlaceholderPage title="Financial Reports" />} />
        </Route>

        {/* Attendance */}
        <Route path="attendance" element={<Attendance />} />

        {/* Communication Routes */}
        <Route path="communication">
          <Route index element={<Navigate to="sms" replace />} />
          <Route path="sms" element={<PlaceholderPage title="Bulk SMS" />} />
          <Route path="announcements" element={<PlaceholderPage title="Announcements" />} />
          <Route path="messages" element={<PlaceholderPage title="Messages" />} />
        </Route>

        {/* Settings */}
        <Route path="settings" element={<Settings />} />
        
        {/* Help */}
        <Route path="help" element={<Settings />} />
      </Route>

      {/* Catch all - redirect to dashboard */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
