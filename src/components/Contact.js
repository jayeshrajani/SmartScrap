import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call logic here for form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false); 
    }, 2000); // Reset after 2 seconds
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-8 bg-gradient-to-r from-teal-100 to-blue-100 min-h-screen"
    >
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-8 text-center">
        Contact Us
      </h2>
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="max-w-lg mx-auto bg-white shadow-2xl rounded-lg p-6 border-t-4 border-teal-500"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="4"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "#0056b3" }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-medium rounded-md shadow-md transition-all duration-300"
          >
            {isSubmitted ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                🚀 Sent!
              </motion.span>
            ) : (
              "Submit"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;