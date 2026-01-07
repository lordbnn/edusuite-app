import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockStudents, mockStaff, mockClasses, mockSubjects, mockFees, mockPayments, mockResults, mockAttendance, mockCBTQuestions } from '../data/mockData';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // UI State
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notifications, setNotifications] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(null);
  const [modalData, setModalData] = useState(null);
  
  // Data State
  const [students, setStudents] = useState(mockStudents);
  const [staff, setStaff] = useState(mockStaff);
  const [classes, setClasses] = useState(mockClasses);
  const [subjects, setSubjects] = useState(mockSubjects);
  const [fees, setFees] = useState(mockFees);
  const [payments, setPayments] = useState(mockPayments);
  const [results, setResults] = useState(mockResults);
  const [attendance, setAttendance] = useState(mockAttendance);
  const [cbtQuestions, setCbtQuestions] = useState(mockCBTQuestions);
  
  // School Info
  const [schoolInfo, setSchoolInfo] = useState({
    name: 'Edmotion Academy',
    shortName: 'EDM',
    owner: 'Byron Neji',
    type: 'PRIVATE',
    motto: 'Excellence in Education',
    address: '123 Education Lane, Lagos',
    country: 'Nigeria',
    state: 'Lagos',
    phone: '+234 803 050 5798',
    email: 'info@edmotion.edu.ng',
    themeColor: '#3B82F6',
    logo: null
  });

  // Academic Session
  const [currentSession, setCurrentSession] = useState('2026/2027');
  const [currentTerm, setCurrentTerm] = useState('Second Term');

  // Onboarding State
  const [onboardingComplete, setOnboardingComplete] = useState(() => {
    return localStorage.getItem('onboardingComplete') === 'true';
  });

  // Persist onboarding state
  useEffect(() => {
    localStorage.setItem('onboardingComplete', onboardingComplete);
  }, [onboardingComplete]);

  // CRUD Operations
  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: students.length + 1,
      admissionNo: `STU${String(students.length + 1).padStart(3, '0')}`,
      status: 'Active',
      balance: 0
    };
    setStudents([...students, newStudent]);
    return newStudent;
  };

  const updateStudent = (id, updates) => {
    setStudents(students.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const addStaff = (staffMember) => {
    const newStaff = {
      ...staffMember,
      id: staff.length + 1,
      employeeId: `EMP${String(staff.length + 1).padStart(3, '0')}`,
      status: 'Active'
    };
    setStaff([...staff, newStaff]);
    return newStaff;
  };

  const updateStaff = (id, updates) => {
    setStaff(staff.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteStaff = (id) => {
    setStaff(staff.filter(s => s.id !== id));
  };

  const addPayment = (payment) => {
    const newPayment = {
      ...payment,
      id: payments.length + 1,
      reference: `PAY${String(payments.length + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Confirmed'
    };
    setPayments([...payments, newPayment]);
    
    // Update student balance
    const student = students.find(s => s.id === payment.studentId);
    if (student) {
      updateStudent(student.id, { balance: Math.max(0, student.balance - payment.amount) });
    }
    
    return newPayment;
  };

  const addClass = (classData) => {
    const newClass = {
      ...classData,
      id: classes.length + 1,
      students: 0
    };
    setClasses([...classes, newClass]);
    return newClass;
  };

  const addSubject = (subject) => {
    const newSubject = {
      ...subject,
      id: subjects.length + 1
    };
    setSubjects([...subjects, newSubject]);
    return newSubject;
  };

  const addFee = (fee) => {
    const newFee = {
      ...fee,
      id: fees.length + 1
    };
    setFees([...fees, newFee]);
    return newFee;
  };

  // Stats Calculations
  const getStats = () => {
    const totalStudents = students.length;
    const activeStudents = students.filter(s => s.status === 'Active').length;
    const totalStaff = staff.length;
    const totalClasses = classes.length;
    const totalRevenue = payments.filter(p => p.status === 'Confirmed').reduce((a, b) => a + b.amount, 0);
    const pendingFees = students.reduce((a, b) => a + b.balance, 0);
    const studentsWithDebt = students.filter(s => s.balance > 0).length;

    return {
      totalStudents,
      activeStudents,
      totalStaff,
      totalClasses,
      totalRevenue,
      pendingFees,
      studentsWithDebt
    };
  };

  // Open Modal Helper
  const openModal = (modalType, data = null) => {
    setShowModal(modalType);
    setModalData(data);
  };

  const closeModal = () => {
    setShowModal(null);
    setModalData(null);
  };

  const value = {
    // UI State
    sidebarCollapsed,
    setSidebarCollapsed,
    notifications,
    setNotifications,
    searchQuery,
    setSearchQuery,
    showModal,
    modalData,
    openModal,
    closeModal,
    
    // Data
    students,
    staff,
    classes,
    subjects,
    fees,
    payments,
    results,
    attendance,
    cbtQuestions,
    
    // School Info
    schoolInfo,
    setSchoolInfo,
    currentSession,
    setCurrentSession,
    currentTerm,
    setCurrentTerm,
    
    // Onboarding
    onboardingComplete,
    setOnboardingComplete,
    
    // CRUD
    addStudent,
    updateStudent,
    deleteStudent,
    addStaff,
    updateStaff,
    deleteStaff,
    addPayment,
    addClass,
    addSubject,
    addFee,
    
    // Helpers
    getStats
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
