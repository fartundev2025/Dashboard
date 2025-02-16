import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    // Handle form submission (e.g., send email, log data, etc.)
    console.log('Form Submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="ml-24 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
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

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block text-lg font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
