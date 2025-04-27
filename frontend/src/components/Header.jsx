import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">CoachBuddy</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/interview" className="text-gray-700 hover:text-blue-600">Interview</Link>
          <Link to="/report" className="text-gray-700 hover:text-blue-600">Report</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
