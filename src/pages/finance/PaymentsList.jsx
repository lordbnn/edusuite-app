import React, { useState, useMemo } from 'react';
import { Plus, Download, Eye, Printer, Filter } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DataTable, PageHeader, Button, StatusBadge, Modal, Input, Select } from '../../components/ui';
import { paymentMethods } from '../../data/mockData';

const PaymentsList = () => {
  const { payments, students, fees, addPayment, searchQuery } = useApp();
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterMethod, setFilterMethod] = useState('');

  const filteredPayments = useMemo(() => {
    return payments.filter(p => {
      const matchesSearch = !searchQuery || p.student.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = !filterStatus || p.status === filterStatus;
      const matchesMethod = !filterMethod || p.method === filterMethod;
      return matchesSearch && matchesStatus && matchesMethod;
    });
  }, [payments, searchQuery, filterStatus, filterMethod]);

  const columns = [
    { header: 'Reference', render: (row) => <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{row.reference}</span> },
    { header: 'Student', render: (row) => <span className="font-medium">{row.student}</span> },
    { header: 'Class', accessor: 'class' },
    { header: 'Fee Type', accessor: 'fee' },
    { header: 'Amount', render: (row) => <span className="font-bold text-green-600">₦{row.amount.toLocaleString()}</span> },
    { header: 'Method', accessor: 'method' },
    { header: 'Date', accessor: 'date' },
    { header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <PageHeader 
        title="Payments" 
        subtitle={`${payments.length} payment records`}
        action={
          <div className="flex gap-3">
            <Button variant="secondary" icon={Download}>Export</Button>
            <Button icon={Plus} onClick={() => setShowAddModal(true)}>Record Payment</Button>
          </div>
        }
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 bg-white rounded-xl p-4 border border-gray-100">
        <Select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          options={['Confirmed', 'Pending', 'Failed']}
          placeholder="All Status"
          className="w-40"
        />
        <Select
          value={filterMethod}
          onChange={(e) => setFilterMethod(e.target.value)}
          options={paymentMethods}
          placeholder="All Methods"
          className="w-40"
        />
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50">
          <Filter size={16} /> More Filters
        </button>
        <span className="ml-auto text-sm text-gray-500 self-center">
          {filteredPayments.length} records
        </span>
      </div>

      {/* Table */}
      <DataTable 
        columns={columns} 
        data={filteredPayments}
        actions={[
          { icon: Eye, label: 'View', onClick: () => {} },
          { icon: Printer, label: 'Print Receipt', onClick: () => {} },
        ]}
      />

      {/* Add Payment Modal */}
      {showAddModal && (
        <Modal title="Record Payment" onClose={() => setShowAddModal(false)}>
          <AddPaymentForm onClose={() => setShowAddModal(false)} students={students} fees={fees} addPayment={addPayment} />
        </Modal>
      )}
    </div>
  );
};

const AddPaymentForm = ({ onClose, students, fees, addPayment }) => {
  const [formData, setFormData] = useState({
    studentId: '', feeId: '', amount: '', method: 'Cash', reference: ''
  });

  const selectedStudent = students.find(s => s.id === parseInt(formData.studentId));

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = students.find(s => s.id === parseInt(formData.studentId));
    addPayment({
      studentId: parseInt(formData.studentId),
      student: student ? `${student.firstName} ${student.lastName}` : '',
      class: student?.class || '',
      amount: parseInt(formData.amount),
      method: formData.method,
      fee: fees.find(f => f.id === parseInt(formData.feeId))?.name || 'Payment',
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Select 
          label="Student" 
          required 
          options={students.map(s => ({ value: s.id, label: `${s.firstName} ${s.lastName} (${s.class})` }))}
          value={formData.studentId}
          onChange={(e) => setFormData({...formData, studentId: e.target.value})}
        />
        {selectedStudent && selectedStudent.balance > 0 && (
          <div className="p-3 bg-red-50 rounded-lg text-sm">
            <span className="text-red-600 font-medium">Outstanding Balance: ₦{selectedStudent.balance.toLocaleString()}</span>
          </div>
        )}
        <Select 
          label="Fee Type" 
          required 
          options={fees.map(f => ({ value: f.id, label: `${f.name} - ₦${f.amount.toLocaleString()}` }))}
          value={formData.feeId}
          onChange={(e) => {
            const fee = fees.find(f => f.id === parseInt(e.target.value));
            setFormData({...formData, feeId: e.target.value, amount: fee?.amount || ''});
          }}
        />
        <Input 
          label="Amount (₦)" 
          type="number" 
          required 
          value={formData.amount}
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
        />
        <Select 
          label="Payment Method" 
          required 
          options={paymentMethods}
          value={formData.method}
          onChange={(e) => setFormData({...formData, method: e.target.value})}
        />
        <Input 
          label="Reference Number" 
          placeholder="Optional"
          value={formData.reference}
          onChange={(e) => setFormData({...formData, reference: e.target.value})}
        />
      </div>
      <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
        <Button variant="secondary" type="button" onClick={onClose}>Cancel</Button>
        <Button variant="success" type="submit">Record Payment</Button>
      </div>
    </form>
  );
};

export default PaymentsList;
