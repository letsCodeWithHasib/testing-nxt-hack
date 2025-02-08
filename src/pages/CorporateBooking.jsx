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
    console.log(formData);
    alert("Your booking request has been submitted!");
  };

  return (
    <div className="bg-black mt-[60px] font-outfit px-8 md:px-24 lg:px-[100px]">
      {/* Header */}
      <div className="py-12 mt-10">
        <div className="container text-center text-white">
          <h1 className="text-3xl md:text-5xl font-outfit font-bold leading-snug">
            Corporate Trainings
          </h1>
          <p className="mt-3 text-base md:text-lg font-poppins">
            At NxtHack It Solutions, we specialize in delivering high-impact
            corporate training solutions designed to bridge skill gaps and boost
            workforce productivity. Our expert trainers bring years of industry
            experience, ensuring that your teams receive practical, real-world
            knowledge.
          </p>
          <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-24 -right-10 hidden md:block"></div>
          <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-24 -left-10 hidden md:block"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-10 -left-16 hidden lg:block"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-10 -right-16 hidden lg:block"></div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-12 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why Choose NxtHack It Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Industry Experts</h3>
              <p>
                Our trainers are seasoned professionals with years of hands-on
                experience in their respective fields. They bring real-world
                insights to the training sessions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Customized Programs
              </h3>
              <p>
                We tailor our training programs to meet the specific needs of
                your organization, ensuring maximum relevance and impact.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Hands-On Learning</h3>
              <p>
                Our training sessions are highly interactive, with a focus on
                practical, hands-on learning to ensure immediate applicability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">1. Consultation</h3>
              <p>
                We start with a detailed consultation to understand your
                organization's needs and goals.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">2. Customization</h3>
              <p>
                Based on the consultation, we design a customized training
                program tailored to your requirements.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">3. Delivery</h3>
              <p>
                Our expert trainers deliver the training sessions, focusing on
                practical, real-world applications.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">4. Evaluation</h3>
              <p>
                We evaluate the effectiveness of the training and provide
                post-training support to ensure continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-10">
        <div className="container mx-auto text-center">
          <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="mb-10 font-bold text-4xl md:text-6xl tracking-wide">
              <span>ENQUIRE </span> NOW
            </h2>
            <form onSubmit={handleSubmit} className="">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between gap-5">
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
                <div className="flex flex-col md:flex-row justify-between gap-5">
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
