import React from 'react';
import { useNavigate } from 'react-router-dom';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Data Scientist',
  'Product Manager'
];

const SelectRole = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate('/interview', { state: { role } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Choose a Role</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <div
            key={role}
            className="p-6 border rounded-lg shadow hover:shadow-lg cursor-pointer transition bg-white"
            onClick={() => handleRoleSelect(role)}
          >
            <h2 className="text-xl font-semibold text-blue-600">{role}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRole;
