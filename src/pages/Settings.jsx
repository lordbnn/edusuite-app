import React, { useState } from 'react';
import { Upload, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PageHeader, Button, Input, Select } from '../components/ui';
import { nigerianStates, themeColors } from '../data/mockData';

const Settings = () => {
  const { schoolInfo, setSchoolInfo } = useApp();
  const [activeTab, setActiveTab] = useState('info');
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1000);
  };

  const tabs = [
    { id: 'info', label: 'School Information' },
    { id: 'preferences', label: 'System Preferences' },
    { id: 'subscription', label: 'Subscription' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <PageHeader title="Settings" subtitle="Manage your school configuration" />

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 px-1 font-medium transition-colors ${
              activeTab === tab.id ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* School Information Tab */}
      {activeTab === 'info' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Logo Upload */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">School Logo</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center hover:border-blue-300 transition-colors cursor-pointer">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Upload size={32} className="text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 2MB</p>
            </div>
          </div>

          {/* Theme Color */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">Theme Color</h3>
            <p className="text-sm text-gray-500 mb-4">Select your school's brand color</p>
            <div className="grid grid-cols-8 gap-2">
              {themeColors.map(color => (
                <button
                  key={color}
                  onClick={() => setSchoolInfo({...schoolInfo, themeColor: color})}
                  className={`w-8 h-8 rounded-lg transition-transform hover:scale-110 ${
                    schoolInfo.themeColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* School Info Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-6">School Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="School Name" 
                required
                value={schoolInfo.name}
                onChange={(e) => setSchoolInfo({...schoolInfo, name: e.target.value})}
              />
              <Input 
                label="Short Name" 
                required
                value={schoolInfo.shortName}
                onChange={(e) => setSchoolInfo({...schoolInfo, shortName: e.target.value})}
              />
              <Input 
                label="School Owner" 
                required
                value={schoolInfo.owner}
                onChange={(e) => setSchoolInfo({...schoolInfo, owner: e.target.value})}
              />
              <Input 
                label="School Motto"
                value={schoolInfo.motto}
                onChange={(e) => setSchoolInfo({...schoolInfo, motto: e.target.value})}
              />
              <Input 
                label="Phone Number" 
                required
                value={schoolInfo.phone}
                onChange={(e) => setSchoolInfo({...schoolInfo, phone: e.target.value})}
              />
              <Input 
                label="Email Address" 
                type="email"
                required
                value={schoolInfo.email}
                onChange={(e) => setSchoolInfo({...schoolInfo, email: e.target.value})}
              />
              <Select 
                label="Country"
                value={schoolInfo.country}
                onChange={(e) => setSchoolInfo({...schoolInfo, country: e.target.value})}
                options={['Nigeria', 'Ghana', 'Kenya', 'South Africa']}
              />
              <Select 
                label="State"
                value={schoolInfo.state}
                onChange={(e) => setSchoolInfo({...schoolInfo, state: e.target.value})}
                options={nigerianStates}
              />
              <Input 
                label="Address"
                className="md:col-span-2"
                value={schoolInfo.address}
                onChange={(e) => setSchoolInfo({...schoolInfo, address: e.target.value})}
              />
            </div>
            <Button className="mt-6" onClick={handleSave} loading={saving} icon={Check}>
              Save Changes
            </Button>
          </div>
        </div>
      )}

      {/* Subscription Tab */}
      {activeTab === 'subscription' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: '1,000', features: ['Parent Management', 'Student Management', 'Staff Management', 'Fees Management', 'Result Management'] },
            { name: 'Standard', price: '1,800', popular: true, features: ['Everything in Starter', 'Lesson Plan', 'CBT', 'Attendance', 'Messaging'] },
            { name: 'Premium', price: '2,800', features: ['Everything in Standard', 'Payroll', 'Inventory Management', 'Expenses', 'Priority Support'] },
          ].map(plan => (
            <div key={plan.name} className={`bg-white rounded-2xl border-2 p-6 ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                {plan.popular && <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">Current</span>}
              </div>
              <p className="text-3xl font-bold">₦{plan.price}<span className="text-sm text-gray-500 font-normal">/student</span></p>
              <ul className="mt-6 space-y-3">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-green-500" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? 'secondary' : 'primary'} className="w-full mt-6">
                {plan.popular ? 'Current Plan' : 'Upgrade'}
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Preferences Tab */}
      {activeTab === 'preferences' && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Name Display Order</h3>
            <p className="text-sm text-gray-500 mb-4">Re-arrange how names appear in the system</p>
            <div className="flex gap-3">
              {['First Name', 'Other Names', 'Last Name'].map(label => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg cursor-move">
                  <span className="text-gray-400">⋮⋮</span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Term Score Weights</h3>
            <p className="text-sm text-gray-500 mb-4">Set the percentage weight for each term</p>
            <div className="flex gap-4">
              {[{ label: 'First Term', value: 30 }, { label: 'Second Term', value: 30 }, { label: 'Third Term', value: 40 }].map(term => (
                <div key={term.label} className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{term.label}</span>
                  <input type="number" defaultValue={term.value} className="w-16 px-3 py-2 border border-gray-200 rounded-lg text-center" />
                  <span className="text-gray-500">%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
