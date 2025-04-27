import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Coach Buddy</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Your AI-powered interview simulator. Practice answering behavioral questions, get feedback in real-time, and improve your confidence!
      </p>
      <Link to="/select-role">
        <button className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
          Start Interview
        </button>
      </Link>
    </div>
  );
};

export default Home;
