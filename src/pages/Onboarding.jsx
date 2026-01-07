import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronRight, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button, Checkbox } from '../components/ui';
import { armTypes, academicSessions, terms } from '../data/mockData';

const Onboarding = () => {
  const navigate = useNavigate();
  const { setOnboardingComplete, setCurrentSession, setCurrentTerm } = useApp();
  const [step, setStep] = useState(1);
  
  // Step 1: Class Levels
  const [classLevels, setClassLevels] = useState({
    nursery: { selected: true, children: { 'Nursery 1': true, 'Nursery 2': true } },
    primary: { selected: true, children: { 'Primary 1': true, 'Primary 2': true, 'Primary 3': true, 'Primary 4': true, 'Primary 5': true, 'Primary 6': true } },
    juniorSecondary: { selected: true, children: { 'JSS 1': true, 'JSS 2': true, 'JSS 3': true } },
    seniorSecondary: { selected: true, children: { 'SSS 1': true, 'SSS 2': true, 'SSS 3': true } },
  });

  // Step 2: Class Arms
  const [hasArms, setHasArms] = useState(true);
  const [selectedArmType, setSelectedArmType] = useState('alphabets');

  // Step 3: Session & Term
  const [session, setSession] = useState('2026/2027');
  const [term, setTerm] = useState('Second Term');
  const [startDate, setStartDate] = useState('2026-01-06');
  const [endDate, setEndDate] = useState('2026-04-15');

  const toggleClassLevel = (level) => {
    setClassLevels(prev => ({
      ...prev,
      [level]: {
        ...prev[level],
        selected: !prev[level].selected,
        children: Object.fromEntries(
          Object.keys(prev[level].children).map(k => [k, !prev[level].selected])
        )
      }
    }));
  };

  const toggleClass = (level, className) => {
    setClassLevels(prev => {
      const newChildren = { ...prev[level].children, [className]: !prev[level].children[className] };
      return {
        ...prev,
        [level]: { selected: Object.values(newChildren).some(v => v), children: newChildren }
      };
    });
  };

  const handleFinish = () => {
    setCurrentSession(session);
    setCurrentTerm(term);
    setOnboardingComplete(true);
    navigate('/');
  };

  // Stepper
  const Stepper = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[
        { num: 1, label: 'Set Class Level' },
        { num: 2, label: 'Set Class Arms' },
        { num: 3, label: 'Configure Session & Term' }
      ].map((s, idx) => (
        <React.Fragment key={s.num}>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
              step >= s.num ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400 border border-gray-200'
            }`}>
              {step > s.num ? <Check size={16} /> : s.num}
            </div>
            <span className={`text-sm font-medium transition-colors hidden sm:block ${step === s.num ? 'text-blue-500' : 'text-gray-400'}`}>
              {s.label}
            </span>
          </div>
          {idx < 2 && <ChevronRight size={20} className="text-gray-300 mx-2" />}
        </React.Fragment>
      ))}
    </div>
  );

  // Class Level Card
  const ClassLevelCard = ({ level, label }) => (
    <div className={`border-2 rounded-xl p-4 transition-all ${classLevels[level].selected ? 'border-blue-500 bg-blue-50/30' : 'border-gray-200'}`}>
      <label className="flex items-center gap-3 cursor-pointer mb-3">
        <input
          type="checkbox"
          checked={classLevels[level].selected}
          onChange={() => toggleClassLevel(level)}
          className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <span className="font-medium text-gray-800">{label}</span>
      </label>
      <div className="flex flex-wrap gap-3 ml-8">
        {Object.entries(classLevels[level].children).map(([name, checked]) => (
          <label key={name} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggleClass(level, name)}
              className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">{name}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center py-8 px-4">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
          <span className="text-white text-2xl">☺</span>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">EDUSUITE</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Onboarding</h1>
      <p className="text-gray-500 mb-8">Help you setup what you need to get started in 3 simple steps.</p>

      <Stepper />

      {/* Content Card */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
        {/* Step 1: Class Levels */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-semibold text-gray-800">What is Class Level?</h3>
                <p className="text-sm text-gray-600">This refers to the academic year or different grade levels your students can be in. E.g. Grade 5, Year 7.</p>
              </div>
            </div>
            <ClassLevelCard level="nursery" label="Nursery" />
            <ClassLevelCard level="primary" label="Primary" />
            <ClassLevelCard level="juniorSecondary" label="Junior Secondary" />
            <ClassLevelCard level="seniorSecondary" label="Senior Secondary" />
          </div>
        )}

        {/* Step 2: Class Arms */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-semibold text-gray-800">What is Class Arm?</h3>
                <p className="text-sm text-gray-600">Within a class level, schools often divide students into smaller groups called "arms". For example, Class 5A, Class 5B, etc.</p>
              </div>
            </div>

            <div>
              <p className="text-gray-700 mb-4">Do you have class arms in your school?</p>
              <div className="flex gap-4">
                <Checkbox label="YES" checked={hasArms === true} onChange={() => setHasArms(true)} />
                <Checkbox label="NO" checked={hasArms === false} onChange={() => { setHasArms(false); setSelectedArmType(null); }} />
              </div>
            </div>

            {hasArms && (
              <div className="space-y-4">
                <p className="text-gray-700">Select arm setup that is applicable to your school.</p>
                {Object.entries(armTypes).map(([key, { name, options }]) => (
                  <div 
                    key={key}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${selectedArmType === key ? 'border-blue-500 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'}`}
                    onClick={() => setSelectedArmType(key)}
                  >
                    <Checkbox label={name} checked={selectedArmType === key} onChange={() => setSelectedArmType(key)} />
                    <div className="flex flex-wrap gap-4 ml-8 mt-2">
                      {options.map(opt => <span key={opt} className="text-sm text-gray-500">{opt}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Step 3: Session & Term */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <p className="text-gray-700 mb-2">Select current academic session to setup.</p>
              <label className="block text-sm font-medium text-gray-600 mb-2">Select Session</label>
              <select 
                value={session} 
                onChange={(e) => setSession(e.target.value)}
                className="w-full max-w-xs px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {academicSessions.map(s => <option key={s} value={s}>{s} Session</option>)}
              </select>
            </div>

            <div>
              <p className="text-gray-700 mb-2">Select current term to setup.</p>
              <label className="block text-sm font-medium text-gray-600 mb-2">Select Term</label>
              <select 
                value={term} 
                onChange={(e) => setTerm(e.target.value)}
                className="w-full max-w-xs px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {terms.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="flex flex-wrap gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">TERM START DATE</label>
                <input 
                  type="date" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">TERM END DATE</label>
                <input 
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="w-full max-w-3xl flex justify-between mt-6">
        {step > 1 ? (
          <Button variant="secondary" onClick={() => setStep(s => s - 1)}>Previous</Button>
        ) : <div />}
        <Button onClick={() => step < 3 ? setStep(s => s + 1) : handleFinish()}>
          {step === 3 ? 'Finish' : 'Next'}
        </Button>
      </div>

      {/* Chat Widget */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center hover:bg-blue-600 transition-colors">
        <MessageSquare className="text-white" size={24} />
      </button>
    </div>
  );
};

export default Onboarding;
