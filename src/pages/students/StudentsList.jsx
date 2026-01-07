import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit, Trash2, Filter, Download, Upload, Grid, List } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DataTable, PageHeader, Button, StatusBadge, Avatar, Input, Select, Modal } from '../../components/ui';

const StudentsList = () => {
  const navigate = useNavigate();
  const { students, classes, deleteStudent, searchQuery } = useApp();
  const [viewMode, setViewMode] = useState('table');
  const [filterClass, setFilterClass] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Filter students
  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = !searchQuery || 
        student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.admissionNo.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesClass = !filterClass || student.class.includes(filterClass);
      const matchesStatus = !filterStatus || student.status === filterStatus;
      
      return matchesSearch && matchesClass && matchesStatus;
    });
  }, [students, searchQuery, filterClass, filterStatus]);

  const columns = [
    { 
      header: 'Admission No', 
      accessor: 'admissionNo', 
      render: (row) => <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{row.admissionNo}</span> 
    },
    { 
      header: 'Name', 
      render: (row) => (
        <div className="flex items-center gap-3">
          <Avatar name={`${row.firstName} ${row.lastName}`} size="sm" />
          <div>
            <span className="font-medium text-gray-800">{row.firstName} {row.lastName}</span>
            <p className="text-xs text-gray-400">{row.gender}</p>
          </div>
        </div>
      )
    },
    { header: 'Class', accessor: 'class' },
    { header: 'Guardian', accessor: 'guardian' },
    { header: 'Phone', accessor: 'guardianPhone' },
    { 
      header: 'Balance', 
      render: (row) => (
        <span className={`font-medium ${row.balance > 0 ? 'text-red-600' : 'text-green-600'}`}>
          ₦{row.balance.toLocaleString()}
        </span>
      )
    },
    { 
      header: 'Status', 
      render: (row) => <StatusBadge status={row.status} /> 
    },
  ];

  const handleDelete = (student) => {
    deleteStudent(student.id);
    setShowDeleteModal(null);
  };

  const uniqueClassLevels = [...new Set(classes.map(c => c.level))];

  return (
    <div className="space-y-6 animate-fadeIn">
      <PageHeader 
        title="Students" 
        subtitle={`Manage all ${students.length} student records`}
        action={
          <div className="flex gap-3">
            <Button variant="secondary" icon={Upload}>Import</Button>
            <Button variant="secondary" icon={Download}>Export</Button>
            <Button icon={Plus} onClick={() => setShowAddModal(true)}>Add Student</Button>
          </div>
        }
      />

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-xl p-4 border border-gray-100">
        <div className="flex flex-wrap items-center gap-4">
          <Select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            options={uniqueClassLevels}
            placeholder="All Classes"
            className="w-40"
          />
          <Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            options={['Active', 'Inactive']}
            placeholder="All Status"
            className="w-40"
          />
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50">
            <Filter size={16} /> More Filters
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{filteredStudents.length} students</span>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button 
              onClick={() => setViewMode('table')} 
              className={`p-2 ${viewMode === 'table' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <List size={18} />
            </button>
            <button 
              onClick={() => setViewMode('grid')} 
              className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <Grid size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Data Display */}
      {viewMode === 'table' ? (
        <DataTable 
          columns={columns} 
          data={filteredStudents}
          onRowClick={(row) => navigate(`/students/${row.id}`)}
          actions={[
            { icon: Eye, label: 'View', onClick: (row) => navigate(`/students/${row.id}`) },
            { icon: Edit, label: 'Edit', onClick: (row) => navigate(`/students/${row.id}/edit`) },
            { icon: Trash2, label: 'Delete', onClick: (row) => setShowDeleteModal(row), className: 'text-red-500 hover:bg-red-50' },
          ]}
          emptyMessage="No students found matching your criteria"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStudents.map(student => (
            <div 
              key={student.id}
              onClick={() => navigate(`/students/${student.id}`)}
              className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <Avatar name={`${student.firstName} ${student.lastName}`} size="lg" />
                <StatusBadge status={student.status} />
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {student.firstName} {student.lastName}
              </h3>
              <p className="text-sm text-gray-500">{student.admissionNo}</p>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm text-gray-500">{student.class}</span>
                <span className={`text-sm font-medium ${student.balance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                  ₦{student.balance.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Modal title="Delete Student" onClose={() => setShowDeleteModal(null)} size="sm">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={32} className="text-red-500" />
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>{showDeleteModal.firstName} {showDeleteModal.lastName}</strong>? 
              This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="secondary" onClick={() => setShowDeleteModal(null)}>Cancel</Button>
              <Button variant="danger" onClick={() => handleDelete(showDeleteModal)}>Delete Student</Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Add Student Modal */}
      {showAddModal && (
        <AddStudentModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
};

// Add Student Modal Component
const AddStudentModal = ({ onClose }) => {
  const { classes, addStudent } = useApp();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherNames: '',
    gender: '',
    class: '',
    dob: '',
    guardian: '',
    guardianPhone: '',
    guardianEmail: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      addStudent(formData);
      setLoading(false);
      onClose();
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal title="Add New Student" onClose={onClose} size="lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="First Name" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required 
            placeholder="Enter first name" 
          />
          <Input 
            label="Last Name" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required 
            placeholder="Enter last name" 
          />
          <Input 
            label="Other Names" 
            name="otherNames"
            value={formData.otherNames}
            onChange={handleChange}
            placeholder="Enter other names" 
          />
          <Select 
            label="Gender" 
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required 
            options={['Male', 'Female']} 
          />
          <Select 
            label="Class" 
            name="class"
            value={formData.class}
            onChange={handleChange}
            required 
            options={classes.map(c => ({ value: `${c.name} ${c.arm}`, label: `${c.name} ${c.arm}` }))} 
          />
          <Input 
            label="Date of Birth" 
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
          <Input 
            label="Guardian Name" 
            name="guardian"
            value={formData.guardian}
            onChange={handleChange}
            required 
            placeholder="Enter guardian name" 
          />
          <Input 
            label="Guardian Phone" 
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleChange}
            required 
            placeholder="+234" 
          />
          <Input 
            label="Guardian Email" 
            name="guardianEmail"
            type="email"
            value={formData.guardianEmail}
            onChange={handleChange}
            placeholder="email@example.com" 
          />
          <Input 
            label="Address" 
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter home address"
            className="md:col-span-2" 
          />
        </div>
        
        <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-100">
          <Button variant="secondary" type="button" onClick={onClose}>Cancel</Button>
          <Button type="submit" loading={loading}>Add Student</Button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentsList;
