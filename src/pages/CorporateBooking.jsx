import React, { useState } from "react";

const CorporateBooking = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    trainingType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call, email service)
    console.log(formData);
    alert("Your booking request has been submitted!");
  };

  return (
    <div className="bg-black mt-[75px] font-outfit px-[100px]">
      {/* Header */}
      <div className="py-12">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold">Corporate Trainings</h1>
          <p className="mt-3 text-lg font-poppins">
            At NxtHack It Solutions, we specialize in delivering high-impact
            corporate training solutions designed to bridge skill gaps and boost
            workforce productivity. Our expert trainers bring years of industry
            experience, ensuring that your teams receive practical, real-world
            knowledge.
          </p>
          <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-24 -right-10"></div>
          <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-24 -left-10"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-10 -left-16"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-10 -right-16"></div>
        </div>
      </div>

      {/* Booking Form Section */}

      <section className="py-12 ">
        <div className="container mx-auto text-center">
          <div className="max-w-lg mx-auto mt-8  bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="mb-10 font-bold text-6xl tracking-wide">
              <span>ENQUIRE </span> NOW
            </h2>
            <form onSubmit={handleSubmit} className="">
              <div className="space-y-4">
                <div className="flex justify-between gap-5">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-left font-semibold"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactPerson"
                      className="block text-left font-semibold"
                    >
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      placeholder="Contact Person Name"
                      onChange={handleChange}
                      className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-left font-semibold"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-left font-semibold"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="trainingType"
                    className="block text-left font-semibold"
                  >
                    Course
                  </label>
                  <select
                    id="trainingType"
                    name="trainingType"
                    value={formData.trainingType}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a Training Program</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Automation Testing">
                      Automation Testing
                    </option>
                    <option value="Cloud Computing">Cloud Computing</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-left font-semibold"
                  >
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your query..."
                    rows="4"
                    className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 mt-4 uppercase font-semibold bg-violet-950 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateBooking;
