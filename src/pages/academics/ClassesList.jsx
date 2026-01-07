import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, GraduationCap, Users, Edit, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PageHeader, Button, Modal, Input, Select } from '../../components/ui';

const ClassesList = () => {
  const navigate = useNavigate();
  const { classes, staff, addClass } = useApp();
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterLevel, setFilterLevel] = useState('');

  const levels = ['Nursery', 'Primary', 'Junior Secondary', 'Senior Secondary'];
  const filteredClasses = filterLevel ? classes.filter(c => c.level === filterLevel) : classes;

  // Group classes by level
  const groupedClasses = levels.reduce((acc, level) => {
    acc[level] = filteredClasses.filter(c => c.level === level);
    return acc;
  }, {});

  return (
    <div className="space-y-6 animate-fadeIn">
      <PageHeader 
        title="Classes" 
        subtitle={`Manage ${classes.length} classes across all levels`}
        action={
          <Button icon={Plus} onClick={() => setShowAddModal(true)}>Add Class</Button>
        }
      />

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button 
          onClick={() => setFilterLevel('')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${!filterLevel ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
        >
          All Classes ({classes.length})
        </button>
        {levels.map(level => {
          const count = classes.filter(c => c.level === level).length;
          return (
            <button 
              key={level}
              onClick={() => setFilterLevel(level)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${filterLevel === level ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
            >
              {level} ({count})
            </button>
          );
        })}
      </div>

      {/* Classes Grid */}
      {levels.map(level => {
        const levelClasses = groupedClasses[level];
        if (levelClasses.length === 0 && filterLevel) return null;
        if (levelClasses.length === 0) return null;
        
        return (
          <div key={level} className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800">{level}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {levelClasses.map(cls => (
                <div 
                  key={cls.id}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => navigate(`/academics/classes/${cls.id}`)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GraduationCap size={24} className="text-blue-600" />
                    </div>
                    <div className="flex gap-1">
                      <button 
                        onClick={(e) => { e.stopPropagation(); }}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <Edit size={16} className="text-gray-400" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); }}
                        className="p-2 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 size={16} className="text-red-400" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {cls.name} {cls.arm}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{cls.teacher || 'No teacher assigned'}</p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                    <Users size={16} className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">{cls.students} Students</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Add Class Modal */}
      {showAddModal && (
        <Modal title="Add New Class" onClose={() => setShowAddModal(false)}>
          <AddClassForm onClose={() => setShowAddModal(false)} staff={staff} addClass={addClass} />
        </Modal>
      )}
    </div>
  );
};

const AddClassForm = ({ onClose, staff, addClass }) => {
  const [formData, setFormData] = useState({
    name: '', arm: '', level: '', teacherId: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const teacher = staff.find(s => s.id === parseInt(formData.teacherId));
    addClass({
      ...formData,
      teacher: teacher ? `${teacher.firstName} ${teacher.lastName}` : '',
      students: 0
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input 
          label="Class Name" 
          required 
          placeholder="e.g. JSS 1, SSS 2"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <Select 
          label="Arm" 
          required 
          options={['A', 'B', 'C', 'D', 'E', 'F']}
          value={formData.arm}
          onChange={(e) => setFormData({...formData, arm: e.target.value})}
        />
        <Select 
          label="Level" 
          required 
          options={['Nursery', 'Primary', 'Junior Secondary', 'Senior Secondary']}
          value={formData.level}
          onChange={(e) => setFormData({...formData, level: e.target.value})}
        />
        <Select 
          label="Class Teacher" 
          options={staff.filter(s => s.role === 'Teacher').map(s => ({ value: s.id, label: `${s.firstName} ${s.lastName}` }))}
          value={formData.teacherId}
          onChange={(e) => setFormData({...formData, teacherId: e.target.value})}
        />
      </div>
      <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
        <Button variant="secondary" type="button" onClick={onClose}>Cancel</Button>
        <Button type="submit">Add Class</Button>
      </div>
    </form>
  );
};

export default ClassesList;
