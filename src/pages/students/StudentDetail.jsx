import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, Edit, Trash2, Mail, Phone, MapPin, Calendar, 
  User, CreditCard, Award, Clock, FileText, Printer
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Button, StatusBadge, Avatar, StatCard } from '../../components/ui';

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, results, payments, attendance } = useApp();
  
  const student = students.find(s => s.id === parseInt(id));
  
  if (!student) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-800">Student not found</h2>
        <Button variant="secondary" onClick={() => navigate('/students')} className="mt-4">
          Back to Students
        </Button>
      </div>
    );
  }

  const studentResults = results.filter(r => r.studentId === student.id);
  const studentPayments = payments.filter(p => p.studentId === student.id);
  
  const averageScore = studentResults.length > 0 
    ? Math.round(studentResults.reduce((a, b) => a + b.total, 0) / studentResults.length)
    : 0;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Link to="/students" className="text-blue-500 hover:underline flex items-center gap-1">
          <ArrowLeft size={16} /> Students
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">{student.firstName} {student.lastName}</span>
      </div>

      {/* Header Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex items-start gap-6">
            <Avatar name={`${student.firstName} ${student.lastName}`} size="lg" className="w-20 h-20 text-2xl" />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-800">
                  {student.firstName} {student.otherNames} {student.lastName}
                </h1>
                <StatusBadge status={student.status} />
              </div>
              <p className="text-gray-500">{student.admissionNo} • {student.class}</p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <User size={16} className="text-gray-400" /> {student.gender}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} className="text-gray-400" /> {student.dob}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} className="text-gray-400" /> Admitted: {student.dateAdmitted}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" icon={Printer}>Print Profile</Button>
            <Button variant="secondary" icon={Edit} onClick={() => navigate(`/students/${id}/edit`)}>Edit</Button>
            <Button variant="danger" icon={Trash2}>Delete</Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard 
          icon={CreditCard} 
          label="Fee Balance" 
          value={`₦${student.balance.toLocaleString()}`}
          color={student.balance > 0 ? 'red' : 'green'}
        />
        <StatCard icon={Award} label="Avg. Score" value={`${averageScore}%`} color="blue" />
        <StatCard icon={FileText} label="Subjects" value={studentResults.length} color="purple" />
        <StatCard icon={Clock} label="Attendance" value="95%" color="green" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Guardian Info */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 mb-4">Guardian Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium text-gray-800">{student.guardian}</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-400" />
              <a href={`tel:${student.guardianPhone}`} className="text-blue-500 hover:underline">
                {student.guardianPhone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-400" />
              <a href={`mailto:${student.guardianEmail}`} className="text-blue-500 hover:underline">
                {student.guardianEmail}
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-gray-400 mt-1" />
              <p className="text-gray-600">{student.address}</p>
            </div>
          </div>
        </div>

        {/* Recent Results */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Recent Results</h3>
            <Link to={`/examination/results?student=${id}`} className="text-sm text-blue-500 hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {studentResults.slice(0, 5).map(result => (
              <div key={result.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{result.subject}</p>
                  <p className="text-xs text-gray-500">CA: {result.ca1 + result.ca2} | Exam: {result.exam}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{result.total}%</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    result.grade === 'A' ? 'bg-green-100 text-green-700' :
                    result.grade === 'B' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    Grade {result.grade}
                  </span>
                </div>
              </div>
            ))}
            {studentResults.length === 0 && (
              <p className="text-center text-gray-500 py-4">No results yet</p>
            )}
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Payment History</h3>
            <Link to={`/finance/payments?student=${id}`} className="text-sm text-blue-500 hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {studentPayments.slice(0, 5).map(payment => (
              <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{payment.fee}</p>
                  <p className="text-xs text-gray-500">{payment.date} • {payment.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">₦{payment.amount.toLocaleString()}</p>
                  <StatusBadge status={payment.status} />
                </div>
              </div>
            ))}
            {studentPayments.length === 0 && (
              <p className="text-center text-gray-500 py-4">No payments yet</p>
            )}
          </div>
          {student.balance > 0 && (
            <Button className="w-full mt-4" onClick={() => navigate('/finance/payments')}>
              Record Payment
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
