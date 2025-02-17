import React, { useState } from 'react';

export const Attendance = () => {
  const [attendance, setAttendance] = useState({
    'Fartun Ali Abdullahi': false,
    'Asma Abdirisakh': false,
    'Amina Omar Yusuf': false,
    'Hassan Ahmed Noor': false,
    'Hamda Ali Abdullah': false,
    'Abdirahman Abdullahi Hassan': false,
    'Faduma Mohamed Osman': false,
    'Ali Mohamed Ali': false,
    'Sahra Ibrahim Abdi': false,
    'Khalid Ahmed Mohamed': false,
  });

  const handleCheckboxChange = (name) => {
    setAttendance({
      ...attendance,
      [name]: !attendance[name],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of attendance data
    console.log('Attendance data:', attendance);
  };

  return (
    <div className="ml-24 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Attendance</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        {Object.keys(attendance).map((name) => (
          <div key={name} className="flex items-center justify-between space-x-4">
            <label htmlFor={name} className="text-lg font-semibold w-1/2">
              {name}
            </label>
            <input
              type="checkbox"
              id={name}
              checked={attendance[name]}
              onChange={() => handleCheckboxChange(name)}
              className="h-5 w-5"
            />
          </div>
        ))}

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Attendance
          </button>
        </div>
      </form>
    </div>
  );
};

export default Attendance;
