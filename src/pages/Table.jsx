import React, { useState } from 'react';

export const Table = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as adding a new row to a table
    console.log('Form data submitted:', formData);
    // Reset form data
    setFormData({
      name: '',
      age: '',
      country: '',
    });
  };

  return (
    <div className="ml-24 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">About you </h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Age Input */}
        <div>
          <label htmlFor="age" className="block text-lg font-semibold">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Country Input */}
        <div>
          <label htmlFor="country" className="block text-lg font-semibold">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
         Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Table;
