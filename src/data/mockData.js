// Mock Students Data
export const mockStudents = [
  { id: 1, admissionNo: 'STU001', firstName: 'Adaeze', lastName: 'Okonkwo', otherNames: 'Chidinma', class: 'SSS 3A', gender: 'Female', status: 'Active', guardian: 'Mr. Chukwudi Okonkwo', guardianPhone: '08012345678', guardianEmail: 'okonkwo@gmail.com', address: '15 Adeola Street, Lagos', dob: '2008-03-15', balance: 45000, dateAdmitted: '2020-09-01' },
  { id: 2, admissionNo: 'STU002', firstName: 'Chukwuemeka', lastName: 'Eze', otherNames: '', class: 'SSS 3A', gender: 'Male', status: 'Active', guardian: 'Mrs. Ngozi Eze', guardianPhone: '08023456789', guardianEmail: 'eze.ngozi@yahoo.com', address: '23 Broad Street, Lagos', dob: '2008-07-22', balance: 0, dateAdmitted: '2020-09-01' },
  { id: 3, admissionNo: 'STU003', firstName: 'Fatima', lastName: 'Abdullahi', otherNames: 'Aisha', class: 'SSS 2B', gender: 'Female', status: 'Active', guardian: 'Alhaji Musa Abdullahi', guardianPhone: '08034567890', guardianEmail: 'abdullahi.m@gmail.com', address: '45 Kano Road, Abuja', dob: '2009-01-10', balance: 25000, dateAdmitted: '2021-09-01' },
  { id: 4, admissionNo: 'STU004', firstName: 'David', lastName: 'Ogundimu', otherNames: 'Oluwaseun', class: 'JSS 1A', gender: 'Male', status: 'Active', guardian: 'Chief Adebayo Ogundimu', guardianPhone: '08045678901', guardianEmail: 'chief.ogundimu@outlook.com', address: '78 Victoria Island, Lagos', dob: '2013-05-28', balance: 0, dateAdmitted: '2025-09-01' },
  { id: 5, admissionNo: 'STU005', firstName: 'Grace', lastName: 'Nnamdi', otherNames: 'Chioma', class: 'Primary 5', gender: 'Female', status: 'Inactive', guardian: 'Dr. Emeka Nnamdi', guardianPhone: '08056789012', guardianEmail: 'dr.nnamdi@hospital.com', address: '12 GRA, Port Harcourt', dob: '2015-11-03', balance: 75000, dateAdmitted: '2022-09-01' },
  { id: 6, admissionNo: 'STU006', firstName: 'Ibrahim', lastName: 'Musa', otherNames: 'Yusuf', class: 'SSS 1A', gender: 'Male', status: 'Active', guardian: 'Mallam Suleiman Musa', guardianPhone: '08067890123', guardianEmail: 'musa.s@gmail.com', address: '34 Kaduna Street, Kano', dob: '2010-08-17', balance: 15000, dateAdmitted: '2023-09-01' },
  { id: 7, admissionNo: 'STU007', firstName: 'Jennifer', lastName: 'Okoro', otherNames: 'Nneka', class: 'JSS 3B', gender: 'Female', status: 'Active', guardian: 'Mrs. Patricia Okoro', guardianPhone: '08078901234', guardianEmail: 'p.okoro@yahoo.com', address: '56 Enugu Road, Onitsha', dob: '2011-12-25', balance: 0, dateAdmitted: '2022-09-01' },
  { id: 8, admissionNo: 'STU008', firstName: 'Kingsley', lastName: 'Adekunle', otherNames: 'Olumide', class: 'SSS 2A', gender: 'Male', status: 'Active', guardian: 'Pastor Samuel Adekunle', guardianPhone: '08089012345', guardianEmail: 'pastor.adekunle@church.org', address: '89 Ibadan Way, Oyo', dob: '2009-04-08', balance: 35000, dateAdmitted: '2021-09-01' },
  { id: 9, admissionNo: 'STU009', firstName: 'Blessing', lastName: 'Okwu', otherNames: '', class: 'JSS 2A', gender: 'Female', status: 'Active', guardian: 'Mr. Peter Okwu', guardianPhone: '08090123456', guardianEmail: 'peter.okwu@mail.com', address: '101 Delta Road, Warri', dob: '2012-06-14', balance: 0, dateAdmitted: '2023-09-01' },
  { id: 10, admissionNo: 'STU010', firstName: 'Ahmed', lastName: 'Bello', otherNames: 'Usman', class: 'SSS 3B', gender: 'Male', status: 'Active', guardian: 'Alhaji Bello Ahmed', guardianPhone: '08001234567', guardianEmail: 'bello.ahmed@business.com', address: '22 Sokoto Street, Sokoto', dob: '2008-09-30', balance: 10000, dateAdmitted: '2020-09-01' },
];

// Mock Staff Data
export const mockStaff = [
  { id: 1, employeeId: 'EMP001', firstName: 'Oluwaseun', lastName: 'Adeyemi', role: 'Teacher', department: 'Science', subject: 'Mathematics', qualification: 'B.Sc Mathematics, PGDE', phone: '08012345678', email: 'oadeyemi@school.com', status: 'Active', salary: 150000, dateJoined: '2018-09-01', address: '45 Teacher Quarters, Lagos' },
  { id: 2, employeeId: 'EMP002', firstName: 'Ngozi', lastName: 'Ibe', role: 'Teacher', department: 'Arts', subject: 'English Language', qualification: 'B.A English, M.Ed', phone: '08023456789', email: 'nibe@school.com', status: 'Active', salary: 145000, dateJoined: '2019-01-15', address: '12 Staff Lane, Lagos' },
  { id: 3, employeeId: 'EMP003', firstName: 'Yusuf', lastName: 'Bello', role: 'Teacher', department: 'Science', subject: 'Physics', qualification: 'B.Sc Physics, M.Sc', phone: '08034567890', email: 'ybello@school.com', status: 'Active', salary: 140000, dateJoined: '2020-09-01', address: '78 Faculty Road, Lagos' },
  { id: 4, employeeId: 'EMP004', firstName: 'Chioma', lastName: 'Okafor', role: 'Admin', department: 'Administration', subject: '-', qualification: 'B.Sc Business Admin', phone: '08045678901', email: 'cokafor@school.com', status: 'Active', salary: 120000, dateJoined: '2017-03-10', address: '34 Admin Close, Lagos' },
  { id: 5, employeeId: 'EMP005', firstName: 'Ahmed', lastName: 'Suleiman', role: 'Bursar', department: 'Finance', subject: '-', qualification: 'B.Sc Accounting, ACA', phone: '08056789012', email: 'asuleiman@school.com', status: 'Active', salary: 180000, dateJoined: '2016-08-20', address: '56 Accountant Villa, Lagos' },
  { id: 6, employeeId: 'EMP006', firstName: 'Funke', lastName: 'Adebayo', role: 'Teacher', department: 'Science', subject: 'Chemistry', qualification: 'B.Sc Chemistry', phone: '08067890123', email: 'fadebayo@school.com', status: 'Active', salary: 135000, dateJoined: '2021-09-01', address: '23 Science Park, Lagos' },
  { id: 7, employeeId: 'EMP007', firstName: 'Emmanuel', lastName: 'Obi', role: 'Teacher', department: 'Science', subject: 'Biology', qualification: 'B.Sc Biology, PGDE', phone: '08078901234', email: 'eobi@school.com', status: 'Active', salary: 138000, dateJoined: '2019-09-01', address: '67 Green Avenue, Lagos' },
  { id: 8, employeeId: 'EMP008', firstName: 'Amina', lastName: 'Mohammed', role: 'Librarian', department: 'Library', subject: '-', qualification: 'B.Sc Library Science', phone: '08089012345', email: 'amohammed@school.com', status: 'Active', salary: 95000, dateJoined: '2020-01-15', address: '89 Book Street, Lagos' },
];

// Mock Classes Data
export const mockClasses = [
  { id: 1, name: 'Nursery 1', arm: 'A', level: 'Nursery', students: 25, teacher: 'Mrs. Adeyemi', teacherId: 1 },
  { id: 2, name: 'Nursery 2', arm: 'A', level: 'Nursery', students: 28, teacher: 'Mrs. Bello', teacherId: 2 },
  { id: 3, name: 'Primary 1', arm: 'A', level: 'Primary', students: 32, teacher: 'Mr. Okonkwo', teacherId: 3 },
  { id: 4, name: 'Primary 2', arm: 'A', level: 'Primary', students: 30, teacher: 'Mrs. Eze', teacherId: 4 },
  { id: 5, name: 'Primary 3', arm: 'A', level: 'Primary', students: 28, teacher: 'Mr. Nnamdi', teacherId: 5 },
  { id: 6, name: 'Primary 4', arm: 'A', level: 'Primary', students: 31, teacher: 'Mrs. Okafor', teacherId: 6 },
  { id: 7, name: 'Primary 5', arm: 'A', level: 'Primary', students: 35, teacher: 'Mr. Suleiman', teacherId: 7 },
  { id: 8, name: 'Primary 6', arm: 'A', level: 'Primary', students: 33, teacher: 'Mrs. Adebayo', teacherId: 8 },
  { id: 9, name: 'JSS 1', arm: 'A', level: 'Junior Secondary', students: 40, teacher: 'Mr. Obi', teacherId: 1 },
  { id: 10, name: 'JSS 1', arm: 'B', level: 'Junior Secondary', students: 38, teacher: 'Mrs. Mohammed', teacherId: 2 },
  { id: 11, name: 'JSS 2', arm: 'A', level: 'Junior Secondary', students: 42, teacher: 'Mr. Adeyemi', teacherId: 1 },
  { id: 12, name: 'JSS 3', arm: 'A', level: 'Junior Secondary', students: 39, teacher: 'Mrs. Ibe', teacherId: 2 },
  { id: 13, name: 'JSS 3', arm: 'B', level: 'Junior Secondary', students: 38, teacher: 'Mr. Bello', teacherId: 3 },
  { id: 14, name: 'SSS 1', arm: 'A', level: 'Senior Secondary', students: 42, teacher: 'Mrs. Okafor', teacherId: 4 },
  { id: 15, name: 'SSS 2', arm: 'A', level: 'Senior Secondary', students: 40, teacher: 'Mr. Suleiman', teacherId: 5 },
  { id: 16, name: 'SSS 2', arm: 'B', level: 'Senior Secondary', students: 38, teacher: 'Mrs. Adebayo', teacherId: 6 },
  { id: 17, name: 'SSS 3', arm: 'A', level: 'Senior Secondary', students: 45, teacher: 'Mr. Obi', teacherId: 7 },
  { id: 18, name: 'SSS 3', arm: 'B', level: 'Senior Secondary', students: 43, teacher: 'Dr. Adeyemi', teacherId: 1 },
];

// Mock Subjects Data
export const mockSubjects = [
  { id: 1, name: 'Mathematics', code: 'MTH', classes: ['JSS 1', 'JSS 2', 'JSS 3', 'SSS 1', 'SSS 2', 'SSS 3'], teacher: 'Mr. Adeyemi', teacherId: 1 },
  { id: 2, name: 'English Language', code: 'ENG', classes: ['All Classes'], teacher: 'Mrs. Ibe', teacherId: 2 },
  { id: 3, name: 'Physics', code: 'PHY', classes: ['SSS 1', 'SSS 2', 'SSS 3'], teacher: 'Mr. Bello', teacherId: 3 },
  { id: 4, name: 'Chemistry', code: 'CHM', classes: ['SSS 1', 'SSS 2', 'SSS 3'], teacher: 'Mrs. Adebayo', teacherId: 6 },
  { id: 5, name: 'Biology', code: 'BIO', classes: ['SSS 1', 'SSS 2', 'SSS 3'], teacher: 'Mr. Obi', teacherId: 7 },
  { id: 6, name: 'Economics', code: 'ECO', classes: ['SSS 1', 'SSS 2', 'SSS 3'], teacher: 'Mr. Suleiman', teacherId: 5 },
  { id: 7, name: 'Government', code: 'GOV', classes: ['SSS 1', 'SSS 2', 'SSS 3'], teacher: 'Mrs. Okafor', teacherId: 4 },
  { id: 8, name: 'Literature', code: 'LIT', classes: ['SSS 1', 'SSS 2', 'SSS 3'], teacher: 'Mrs. Ibe', teacherId: 2 },
  { id: 9, name: 'Basic Science', code: 'BSC', classes: ['JSS 1', 'JSS 2', 'JSS 3'], teacher: 'Mr. Bello', teacherId: 3 },
  { id: 10, name: 'Basic Technology', code: 'BTC', classes: ['JSS 1', 'JSS 2', 'JSS 3'], teacher: 'Mr. Adeyemi', teacherId: 1 },
];

// Mock Fees Data
export const mockFees = [
  { id: 1, name: 'Tuition Fee', amount: 75000, class: 'SSS', term: 'Second Term', mandatory: true, description: 'Main school tuition fee' },
  { id: 2, name: 'Tuition Fee', amount: 65000, class: 'JSS', term: 'Second Term', mandatory: true, description: 'Main school tuition fee' },
  { id: 3, name: 'Tuition Fee', amount: 55000, class: 'Primary', term: 'Second Term', mandatory: true, description: 'Main school tuition fee' },
  { id: 4, name: 'Tuition Fee', amount: 45000, class: 'Nursery', term: 'Second Term', mandatory: true, description: 'Main school tuition fee' },
  { id: 5, name: 'Development Levy', amount: 15000, class: 'All Classes', term: 'Second Term', mandatory: true, description: 'School development and maintenance' },
  { id: 6, name: 'ICT Fee', amount: 10000, class: 'JSS & SSS', term: 'Second Term', mandatory: true, description: 'Computer and ICT facilities' },
  { id: 7, name: 'Laboratory Fee', amount: 8000, class: 'SSS', term: 'Second Term', mandatory: true, description: 'Science laboratory materials' },
  { id: 8, name: 'Sports Fee', amount: 5000, class: 'All Classes', term: 'Second Term', mandatory: false, description: 'Sports and games activities' },
  { id: 9, name: 'Exam Fee', amount: 3000, class: 'All Classes', term: 'Second Term', mandatory: true, description: 'Examination materials' },
  { id: 10, name: 'PTA Levy', amount: 2000, class: 'All Classes', term: 'Second Term', mandatory: false, description: 'Parent Teacher Association' },
];

// Mock Payments Data
export const mockPayments = [
  { id: 1, studentId: 1, student: 'Adaeze Okonkwo', class: 'SSS 3A', amount: 75000, method: 'Bank Transfer', date: '2026-01-05', status: 'Confirmed', reference: 'PAY001', fee: 'Tuition Fee' },
  { id: 2, studentId: 2, student: 'Chukwuemeka Eze', class: 'SSS 3A', amount: 108000, method: 'Paystack', date: '2026-01-04', status: 'Confirmed', reference: 'PAY002', fee: 'Full Payment' },
  { id: 3, studentId: 3, student: 'Fatima Abdullahi', class: 'SSS 2B', amount: 50000, method: 'Cash', date: '2026-01-03', status: 'Confirmed', reference: 'PAY003', fee: 'Tuition Fee (Part)' },
  { id: 4, studentId: 4, student: 'David Ogundimu', class: 'JSS 1A', amount: 65000, method: 'POS', date: '2026-01-02', status: 'Pending', reference: 'PAY004', fee: 'Tuition Fee' },
  { id: 5, studentId: 6, student: 'Ibrahim Musa', class: 'SSS 1A', amount: 60000, method: 'Bank Transfer', date: '2026-01-02', status: 'Confirmed', reference: 'PAY005', fee: 'Tuition Fee' },
  { id: 6, studentId: 7, student: 'Jennifer Okoro', class: 'JSS 3B', amount: 80000, method: 'Paystack', date: '2026-01-01', status: 'Confirmed', reference: 'PAY006', fee: 'Full Payment' },
  { id: 7, studentId: 8, student: 'Kingsley Adekunle', class: 'SSS 2A', amount: 40000, method: 'Cash', date: '2025-12-28', status: 'Confirmed', reference: 'PAY007', fee: 'Tuition Fee (Part)' },
  { id: 8, studentId: 9, student: 'Blessing Okwu', class: 'JSS 2A', amount: 70000, method: 'Bank Transfer', date: '2025-12-27', status: 'Confirmed', reference: 'PAY008', fee: 'Full Payment' },
];

// Mock Results Data
export const mockResults = [
  { id: 1, studentId: 1, student: 'Adaeze Okonkwo', class: 'SSS 3A', subject: 'Mathematics', subjectId: 1, ca1: 15, ca2: 18, exam: 55, total: 88, grade: 'A', position: 2, remark: 'Excellent' },
  { id: 2, studentId: 1, student: 'Adaeze Okonkwo', class: 'SSS 3A', subject: 'English Language', subjectId: 2, ca1: 14, ca2: 16, exam: 52, total: 82, grade: 'A', position: 3, remark: 'Very Good' },
  { id: 3, studentId: 1, student: 'Adaeze Okonkwo', class: 'SSS 3A', subject: 'Physics', subjectId: 3, ca1: 12, ca2: 15, exam: 48, total: 75, grade: 'B', position: 5, remark: 'Good' },
  { id: 4, studentId: 1, student: 'Adaeze Okonkwo', class: 'SSS 3A', subject: 'Chemistry', subjectId: 4, ca1: 16, ca2: 17, exam: 50, total: 83, grade: 'A', position: 2, remark: 'Very Good' },
  { id: 5, studentId: 2, student: 'Chukwuemeka Eze', class: 'SSS 3A', subject: 'Mathematics', subjectId: 1, ca1: 18, ca2: 19, exam: 58, total: 95, grade: 'A', position: 1, remark: 'Excellent' },
  { id: 6, studentId: 2, student: 'Chukwuemeka Eze', class: 'SSS 3A', subject: 'English Language', subjectId: 2, ca1: 13, ca2: 14, exam: 45, total: 72, grade: 'B', position: 8, remark: 'Good' },
  { id: 7, studentId: 2, student: 'Chukwuemeka Eze', class: 'SSS 3A', subject: 'Physics', subjectId: 3, ca1: 17, ca2: 18, exam: 55, total: 90, grade: 'A', position: 1, remark: 'Excellent' },
  { id: 8, studentId: 3, student: 'Fatima Abdullahi', class: 'SSS 2B', subject: 'Mathematics', subjectId: 1, ca1: 14, ca2: 15, exam: 48, total: 77, grade: 'B', position: 4, remark: 'Good' },
  { id: 9, studentId: 3, student: 'Fatima Abdullahi', class: 'SSS 2B', subject: 'English Language', subjectId: 2, ca1: 17, ca2: 18, exam: 54, total: 89, grade: 'A', position: 1, remark: 'Excellent' },
];

// Mock Attendance Data
export const mockAttendance = [
  { id: 1, date: '2026-01-06', class: 'SSS 3A', classId: 17, present: 42, absent: 3, late: 2, total: 47 },
  { id: 2, date: '2026-01-06', class: 'SSS 3B', classId: 18, present: 40, absent: 2, late: 1, total: 43 },
  { id: 3, date: '2026-01-06', class: 'JSS 1A', classId: 9, present: 38, absent: 2, late: 0, total: 40 },
  { id: 4, date: '2026-01-05', class: 'SSS 3A', classId: 17, present: 44, absent: 2, late: 1, total: 47 },
  { id: 5, date: '2026-01-05', class: 'SSS 3B', classId: 18, present: 41, absent: 1, late: 1, total: 43 },
  { id: 6, date: '2026-01-05', class: 'JSS 1A', classId: 9, present: 39, absent: 1, late: 0, total: 40 },
  { id: 7, date: '2026-01-04', class: 'SSS 3A', classId: 17, present: 45, absent: 1, late: 1, total: 47 },
  { id: 8, date: '2026-01-04', class: 'SSS 2A', classId: 15, present: 38, absent: 2, late: 0, total: 40 },
];

// Mock CBT Questions Data
export const mockCBTQuestions = [
  { id: 1, subject: 'Mathematics', subjectId: 1, question: 'What is the value of x if 2x + 5 = 15?', options: ['5', '10', '7', '3'], answer: 0, difficulty: 'Easy', points: 2 },
  { id: 2, subject: 'Mathematics', subjectId: 1, question: 'Calculate the area of a circle with radius 7cm (π = 22/7)', options: ['154 cm²', '44 cm²', '22 cm²', '308 cm²'], answer: 0, difficulty: 'Medium', points: 3 },
  { id: 3, subject: 'Mathematics', subjectId: 1, question: 'Solve for y: 3y - 7 = 2y + 5', options: ['12', '2', '-12', '5'], answer: 0, difficulty: 'Easy', points: 2 },
  { id: 4, subject: 'English Language', subjectId: 2, question: 'Choose the correct spelling:', options: ['Accomodation', 'Accommodation', 'Acomodation', 'Acommodation'], answer: 1, difficulty: 'Easy', points: 2 },
  { id: 5, subject: 'English Language', subjectId: 2, question: 'Which word is a synonym of "ubiquitous"?', options: ['Rare', 'Omnipresent', 'Unique', 'Absent'], answer: 1, difficulty: 'Medium', points: 3 },
  { id: 6, subject: 'Physics', subjectId: 3, question: 'What is the SI unit of force?', options: ['Joule', 'Watt', 'Newton', 'Pascal'], answer: 2, difficulty: 'Easy', points: 2 },
  { id: 7, subject: 'Physics', subjectId: 3, question: 'Calculate the velocity of an object that travels 100m in 5 seconds', options: ['500 m/s', '20 m/s', '95 m/s', '105 m/s'], answer: 1, difficulty: 'Easy', points: 2 },
  { id: 8, subject: 'Chemistry', subjectId: 4, question: 'What is the chemical symbol for Gold?', options: ['Go', 'Gd', 'Au', 'Ag'], answer: 2, difficulty: 'Easy', points: 2 },
  { id: 9, subject: 'Chemistry', subjectId: 4, question: 'How many electrons does a neutral Carbon atom have?', options: ['4', '6', '12', '8'], answer: 1, difficulty: 'Medium', points: 3 },
  { id: 10, subject: 'Biology', subjectId: 5, question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Body'], answer: 2, difficulty: 'Easy', points: 2 },
];

// Nigerian States
export const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
  'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
  'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba',
  'Yobe', 'Zamfara'
];

// Academic Sessions
export const academicSessions = [
  '2028/2029', '2027/2028', '2026/2027', '2025/2026', '2024/2025', '2023/2024'
];

// Terms
export const terms = ['First Term', 'Second Term', 'Third Term'];

// Theme Colors
export const themeColors = [
  '#EF4444', '#F97316', '#F59E0B', '#22C55E', '#14B8A6', '#06B6D4', '#3B82F6', '#6366F1',
  '#8B5CF6', '#A855F7', '#EC4899', '#F43F5E', '#78716C', '#71717A', '#0EA5E9', '#1D4ED8'
];

// Arm Types for Onboarding
export const armTypes = {
  alphabets: { name: 'Alphabets', options: ['A', 'B', 'C', 'D', 'E', 'F'] },
  gems: { name: 'Gems', options: ['Silver', 'Gold', 'Diamond', 'Ruby', 'Pearl'] },
  colors: { name: 'Colors', options: ['Blue', 'Orange', 'Red', 'Purple', 'Indigo', 'Yellow', 'Green'] }
};

// Payment Methods
export const paymentMethods = ['Cash', 'Bank Transfer', 'POS', 'Paystack', 'Flutterwave', 'USSD'];

// Grade Scale
export const gradeScale = [
  { min: 70, max: 100, grade: 'A', remark: 'Excellent' },
  { min: 60, max: 69, grade: 'B', remark: 'Very Good' },
  { min: 50, max: 59, grade: 'C', remark: 'Good' },
  { min: 45, max: 49, grade: 'D', remark: 'Pass' },
  { min: 40, max: 44, grade: 'E', remark: 'Poor' },
  { min: 0, max: 39, grade: 'F', remark: 'Fail' },
];
