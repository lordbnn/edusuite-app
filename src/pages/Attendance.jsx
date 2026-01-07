import React, { useState } from 'react';
import { Plus, UserCheck, UserX, Clock, TrendingUp, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DataTable, PageHeader, Button, StatCard, Select } from '../components/ui';

const Attendance = () => {
  const { attendance, classes } = useApp();
  const [filterClass, setFilterClass] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const filteredAttendance = attendance.filter(a => {
    const matchesClass = !filterClass || a.class.includes(filterClass);
    const matchesDate = !filterDate || a.date === filterDate;
    return matchesClass && matchesDate;
  });

  // Today's stats
  const todayRecords = attendance.filter(a => a.date === '2026-01-06');
  const totalPresent = todayRecords.reduce((a, b) => a + b.present, 0);
  const totalAbsent = todayRecords.reduce((a, b) => a + b.absent, 0);
  const totalLate = todayRecords.reduce((a, b) => a + b.late, 0);
  const totalStudents = todayRecords.reduce((a, b) => a + b.total, 0);
  const attendanceRate = totalStudents > 0 ? ((totalPresent / totalStudents) * 100).toFixed(0) : 0;

  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Class', accessor: 'class' },
    { header: 'Present', render: (row) => <span className="font-medium text-green-600">{row.present}</span> },
    { header: 'Absent', render: (row) => <span className="font-medium text-red-600">{row.absent}</span> },
    { header: 'Late', render: (row) => <span className="font-medium text-yellow-600">{row.late}</span> },
    { header: 'Total', render: (row) => <span className="font-bold">{row.total}</span> },
    { 
      header: 'Rate', 
      render: (row) => {
        const rate = ((row.present / row.total) * 100).toFixed(0);
        return (
          <div className="flex items-center gap-2">
            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${rate >= 90 ? 'bg-green-500' : rate >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                style={{ width: `${rate}%` }}
              />
            </div>
            <span className="text-sm font-medium">{rate}%</span>
          </div>
        );
      }
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <PageHeader 
        title="Attendance" 
        subtitle="Track daily student attendance"
        action={<Button icon={Plus}>Mark Attendance</Button>}
      />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={UserCheck} label="Present Today" value={totalPresent} color="green" />
        <StatCard icon={UserX} label="Absent Today" value={totalAbsent} color="red" />
        <StatCard icon={Clock} label="Late Today" value={totalLate} color="amber" />
        <StatCard icon={TrendingUp} label="Attendance Rate" value={`${attendanceRate}%`} color="blue" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 bg-white rounded-xl p-4 border border-gray-100">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-gray-400" />
          <input 
            type="date" 
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
          />
        </div>
        <Select
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
          options={[...new Set(classes.map(c => c.name))]}
          placeholder="All Classes"
          className="w-40"
        />
      </div>

      {/* Table */}
      <DataTable columns={columns} data={filteredAttendance} />

      {/* Quick Mark Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-bold text-gray-800 mb-4">Quick Attendance - Today</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.slice(0, 6).map(cls => {
            const record = todayRecords.find(a => a.class === `${cls.name} ${cls.arm}`);
            return (
              <div key={cls.id} className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{cls.name} {cls.arm}</p>
                  <p className="text-sm text-gray-500">{cls.students} students</p>
                </div>
                {record ? (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Marked
                  </span>
                ) : (
                  <Button size="sm">Mark</Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
