import React, { useState } from 'react';
import { Plus, Edit, Trash2, Wallet, CheckCircle, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DataTable, PageHeader, Button, StatCard, Modal, Input, Select, Checkbox } from '../../components/ui';

const FeesList = () => {
  const { fees, students, payments, addFee } = useApp();
  const [showAddModal, setShowAddModal] = useState(false);

  const totalExpected = fees.reduce((a, b) => a + b.amount, 0) * students.length;
  const totalCollected = payments.filter(p => p.status === 'Confirmed').reduce((a, b) => a + b.amount, 0);
  const outstanding = students.reduce((a, b) => a + b.balance, 0);

  const columns = [
    { header: 'Fee Name', render: (row) => <span className="font-medium text-gray-800">{row.name}</span> },
    { header: 'Amount', render: (row) => <span className="font-bold text-gray-800">₦{row.amount.toLocaleString()}</span> },
    { header: 'Class', accessor: 'class' },
    { header: 'Term', accessor: 'term' },
    { 
      header: 'Type', 
      render: (row) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.mandatory ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
          {row.mandatory ? 'Mandatory' : 'Optional'}
        </span>
      )
    },
    { header: 'Description', accessor: 'description', render: (row) => <span className="text-sm text-gray-500">{row.description}</span> },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <PageHeader 
        title="Fee Structure" 
        subtitle="Manage school fees and charges"
        action={<Button icon={Plus} onClick={() => setShowAddModal(true)}>Add Fee</Button>}
      />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={Wallet} label="Expected Revenue" value={`₦${(totalExpected/1000000).toFixed(1)}M`} color="blue" />
        <StatCard icon={CheckCircle} label="Collected" value={`₦${(totalCollected/1000).toFixed(0)}K`} color="green" />
        <StatCard icon={AlertCircle} label="Outstanding" value={`₦${(outstanding/1000).toFixed(0)}K`} color="red" />
      </div>

      {/* Fees Table */}
      <DataTable 
        columns={columns} 
        data={fees}
        actions={[
          { icon: Edit, label: 'Edit', onClick: () => {} },
          { icon: Trash2, label: 'Delete', onClick: () => {}, className: 'text-red-500' },
        ]}
      />

      {/* Add Fee Modal */}
      {showAddModal && (
        <Modal title="Add New Fee" onClose={() => setShowAddModal(false)}>
          <AddFeeForm onClose={() => setShowAddModal(false)} addFee={addFee} />
        </Modal>
      )}
    </div>
  );
};

const AddFeeForm = ({ onClose, addFee }) => {
  const [formData, setFormData] = useState({
    name: '', amount: '', class: '', term: 'Second Term', mandatory: true, description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addFee({ ...formData, amount: parseInt(formData.amount) });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input label="Fee Name" required placeholder="e.g. Tuition Fee" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <Input label="Amount (₦)" type="number" required value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
        <Select label="Applicable Class" required options={['All Classes', 'Nursery', 'Primary', 'JSS', 'SSS', 'JSS & SSS']} value={formData.class} onChange={(e) => setFormData({...formData, class: e.target.value})} />
        <Select label="Term" options={['First Term', 'Second Term', 'Third Term']} value={formData.term} onChange={(e) => setFormData({...formData, term: e.target.value})} />
        <Input label="Description" placeholder="Brief description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
        <Checkbox label="Mandatory Fee" checked={formData.mandatory} onChange={(e) => setFormData({...formData, mandatory: e.target.checked})} />
      </div>
      <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
        <Button variant="secondary" type="button" onClick={onClose}>Cancel</Button>
        <Button type="submit">Add Fee</Button>
      </div>
    </form>
  );
};

export default FeesList;
