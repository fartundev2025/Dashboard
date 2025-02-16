import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

export const Slidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="block p-2 rounded-md hover:bg-gray-600 transition duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/form" className="block p-2 rounded-md hover:bg-gray-600 transition duration-200">
            Form
          </Link>
        </li>
        <li>
          <Link to="/attendance" className="block p-2 rounded-md hover:bg-gray-600 transition duration-200">
            Attendance
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block p-2 rounded-md hover:bg-gray-600 transition duration-200">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;