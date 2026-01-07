import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit, Trash2, Briefcase, BookOpen, Users, Wallet } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DataTable, PageHeader, Button, StatusBadge, Avatar, StatCard, Modal, Input, Select } from '../../components/ui';

const StaffList = () => {
  const navigate = useNavigate();
  const { staff, deleteStaff, addStaff } = useApp();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(null);

  const columns = [
    { 
      header: 'Employee ID', 
      render: (row) => <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{row.employeeId}</span> 
    },
    { 
      header: 'Name', 
      render: (row) => (
        <div className="flex items-center gap-3">
          <Avatar name={`${row.firstName} ${row.lastName}`} size="sm" />
          <div>
            <span className="font-medium text-gray-800">{row.firstName} {row.lastName}</span>
            <p className="text-xs text-gray-400">{row.email}</p>
          </div>
        </div>
      )
    },
    { header: 'Role', accessor: 'role' },
    { header: 'Department', accessor: 'department' },
    { header: 'Subject', accessor: 'subject' },
    { header: 'Phone', accessor: 'phone' },
    { 
      header: 'Salary', 
      render: (row) => <span className="font-medium">₦{row.salary?.toLocaleString()}</span> 
    },
    { header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
  ];

  const teachers = staff.filter(s => s.role === 'Teacher');
  const adminStaff = staff.filter(s => s.role !== 'Teacher');
  const totalPayroll = staff.reduce((a, b) => a + (b.salary || 0), 0);

  return (
    <div className="space-y-6 animate-fadeIn">
      <PageHeader 
        title="Staff Management" 
        subtitle="Manage teachers and administrative staff"
        action={
          <Button icon={Plus} onClick={() => setShowAddModal(true)}>Add Staff</Button>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={Briefcase} label="Total Staff" value={staff.length} color="blue" />
        <StatCard icon={BookOpen} label="Teachers" value={teachers.length} color="green" />
        <StatCard icon={Users} label="Admin Staff" value={adminStaff.length} color="purple" />
        <StatCard icon={Wallet} label="Monthly Payroll" value={`₦${(totalPayroll/1000).toFixed(0)}K`} color="amber" />
      </div>

      {/* Table */}
      <DataTable 
        columns={columns} 
        data={staff}
        onRowClick={(row) => navigate(`/staff/${row.id}`)}
        actions={[
          { icon: Eye, label: 'View', onClick: (row) => navigate(`/staff/${row.id}`) },
          { icon: Edit, label: 'Edit', onClick: (row) => {} },
          { icon: Trash2, label: 'Delete', onClick: (row) => setShowDeleteModal(row), className: 'text-red-500' },
        ]}
      />

      {/* Add Staff Modal */}
      {showAddModal && <AddStaffModal onClose={() => setShowAddModal(false)} />}

      {/* Delete Modal */}
      {showDeleteModal && (
        <Modal title="Delete Staff" onClose={() => setShowDeleteModal(null)} size="sm">
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>{showDeleteModal.firstName} {showDeleteModal.lastName}</strong>?
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="secondary" onClick={() => setShowDeleteModal(null)}>Cancel</Button>
              <Button variant="danger" onClick={() => { deleteStaff(showDeleteModal.id); setShowDeleteModal(null); }}>
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

const AddStaffModal = ({ onClose }) => {
  const { addStaff } = useApp();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', role: '', 
    department: '', subject: '', qualification: '', salary: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStaff({ ...formData, salary: parseInt(formData.salary) || 0 });
    onClose();
  };

  return (
    <Modal title="Add New Staff" onClose={onClose} size="lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <Input label="First Name" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
          <Input label="Last Name" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
          <Input label="Email" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <Input label="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          <Select label="Role" required options={['Teacher', 'Admin', 'Bursar', 'Librarian', 'Security']} value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} />
          <Select label="Department" options={['Science', 'Arts', 'Commercial', 'Administration', 'Finance']} value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} />
          <Input label="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
          <Input label="Salary" type="number" value={formData.salary} onChange={(e) => setFormData({...formData, salary: e.target.value})} />
          <Input label="Qualification" className="col-span-2" value={formData.qualification} onChange={(e) => setFormData({...formData, qualification: e.target.value})} />
        </div>
        <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
          <Button variant="secondary" type="button" onClick={onClose}>Cancel</Button>
          <Button type="submit">Add Staff</Button>
        </div>
      </form>
    </Modal>
  );
};

export default StaffList;
