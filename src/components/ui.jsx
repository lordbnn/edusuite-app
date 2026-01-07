import React from 'react';
import { Check, X, ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Stat Card Component
export const StatCard = ({ icon: Icon, label, value, change, color = 'blue', onClick }) => {
  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', icon: 'text-blue-500' },
    green: { bg: 'bg-green-100', text: 'text-green-600', icon: 'text-green-500' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', icon: 'text-purple-500' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', icon: 'text-amber-500' },
    red: { bg: 'bg-red-100', text: 'text-red-600', icon: 'text-red-500' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', icon: 'text-orange-500' },
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} group`}
    >
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className={colors.icon} size={24} />
        </div>
        {change !== undefined && (
          <span className={`text-sm font-medium flex items-center gap-1 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            {Math.abs(change)}%
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
      </div>
    </div>
  );
};

// Status Badge Component
export const StatusBadge = ({ status }) => {
  const styles = {
    Active: 'bg-green-100 text-green-700',
    Inactive: 'bg-gray-100 text-gray-600',
    Pending: 'bg-yellow-100 text-yellow-700',
    Confirmed: 'bg-green-100 text-green-700',
    Failed: 'bg-red-100 text-red-700',
    Completed: 'bg-blue-100 text-blue-700',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
};

// Data Table Component
export const DataTable = ({ columns, data, onRowClick, actions, emptyMessage = 'No data available' }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {col.header}
                </th>
              ))}
              {actions && <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, rowIdx) => (
              <tr 
                key={row.id || rowIdx} 
                onClick={() => onRowClick && onRowClick(row)}
                className={`hover:bg-gray-50 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
              >
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      {actions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); action.onClick(row); }}
                          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${action.className || 'text-gray-500'}`}
                          title={action.label}
                        >
                          <action.icon size={16} />
                        </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Modal Component
export const Modal = ({ title, children, onClose, size = 'md', footer }) => {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className={`bg-white rounded-2xl shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden flex flex-col animate-scaleIn`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-1">
          {children}
        </div>
        {footer && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// Input Component
export const Input = ({ label, required, error, className = '', ...props }) => (
  <div className={className}>
    {label && (
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input
      className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all ${error ? 'border-red-500' : 'border-gray-200'}`}
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Select Component
export const Select = ({ label, required, error, options = [], className = '', placeholder = 'Select...', ...props }) => (
  <div className={className}>
    {label && (
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <select
      className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all ${error ? 'border-red-500' : 'border-gray-200'}`}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={typeof opt === 'object' ? opt.value : opt}>
          {typeof opt === 'object' ? opt.label : opt}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Textarea Component
export const Textarea = ({ label, required, error, className = '', ...props }) => (
  <div className={className}>
    {label && (
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <textarea
      className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none ${error ? 'border-red-500' : 'border-gray-200'}`}
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Button Component
export const Button = ({ children, variant = 'primary', size = 'md', icon: Icon, loading, className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-600 hover:to-blue-700',
    secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700',
    success: 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25 hover:from-green-600 hover:to-green-700',
    ghost: 'text-gray-600 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3',
    lg: 'px-6 py-4 text-lg',
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : Icon ? (
        <Icon size={size === 'sm' ? 16 : 18} />
      ) : null}
      {children}
    </button>
  );
};

// Page Header Component
export const PageHeader = ({ title, subtitle, action }) => (
  <div className="flex items-center justify-between mb-6">
    <div>
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
    </div>
    {action}
  </div>
);

// Empty State Component
export const EmptyState = ({ icon: Icon, title, description, action }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
    {Icon && (
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon size={32} className="text-gray-400" />
      </div>
    )}
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    {description && <p className="text-gray-500 mb-4">{description}</p>}
    {action}
  </div>
);

// Pagination Component
export const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex items-center justify-between text-sm text-gray-500">
    <span>Page {currentPage} of {totalPages}</span>
    <div className="flex items-center gap-2">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={16} />
      </button>
      {[...Array(Math.min(5, totalPages))].map((_, idx) => {
        const page = idx + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-lg ${currentPage === page ? 'bg-blue-500 text-white' : 'border border-gray-200 hover:bg-gray-50'}`}
          >
            {page}
          </button>
        );
      })}
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
);

// Avatar Component
export const Avatar = ({ name, size = 'md', className = '' }) => {
  const initials = name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || '?';
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  return (
    <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-medium ${className}`}>
      {initials}
    </div>
  );
};

// Loading Spinner
export const Spinner = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`${sizes[size]} border-2 border-blue-500 border-t-transparent rounded-full animate-spin`} />
  );
};

// Loading Page
export const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <Spinner size="lg" />
      <p className="mt-4 text-gray-500">Loading...</p>
    </div>
  </div>
);

// Checkbox Component
export const Checkbox = ({ label, checked, onChange, className = '' }) => (
  <label className={`flex items-center gap-3 cursor-pointer ${className}`}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
    />
    {label && <span className="text-gray-700">{label}</span>}
  </label>
);

// Alert Component
export const Alert = ({ type = 'info', title, children, onClose }) => {
  const types = {
    info: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-500', title: 'text-blue-800' },
    success: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-500', title: 'text-green-800' },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', icon: 'text-yellow-500', title: 'text-yellow-800' },
    error: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-500', title: 'text-red-800' },
  };

  const colors = types[type];

  return (
    <div className={`${colors.bg} ${colors.border} border rounded-xl p-4 flex items-start gap-3`}>
      <div className="flex-1">
        {title && <p className={`font-semibold ${colors.title}`}>{title}</p>}
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default {
  StatCard,
  StatusBadge,
  DataTable,
  Modal,
  Input,
  Select,
  Textarea,
  Button,
  PageHeader,
  EmptyState,
  Pagination,
  Avatar,
  Spinner,
  LoadingPage,
  Checkbox,
  Alert,
};
