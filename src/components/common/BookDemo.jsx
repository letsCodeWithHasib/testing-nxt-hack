import React, { useState } from "react";

const BookDemoForm = ({ setIsFormVisible, isFormVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    course: "", // New field for course
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, like sending data to a server
    console.log(formData);
    // Hide the form after submission
    setIsFormVisible(false);
  };

  const handleClose = () => {
    setIsFormVisible(false); // Close the form when clicking the close button
  };

  return (
    <div className="font-outfit">
      {/* Form Modal */}
      {isFormVisible && (
        <div className="fixed z-50 inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-3xl uppercase font-bold mb-4 text-center">
              Book a Free Demo
            </h2>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="preferredDate"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  id="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="course"
                >
                  Course Interested In
                </label>
                <input
                  type="text"
                  name="course"
                  id="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="mr-4 text-gray-500"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDemoForm;
