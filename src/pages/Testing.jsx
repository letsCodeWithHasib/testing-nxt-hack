import React, { useState } from "react";

const CorporateTraining = () => {
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
    <div className="bg-gray-100 mt-[60px] font-outfit px-8 md:px-24 lg:px-[100px]">
      {/* Hero Section */}
      <div className="py-12 mt-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Corporate Trainings
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Empower your workforce with expert-led corporate training programs.
          Our industry professionals bring real-world experience to help your
          teams stay ahead in technology and business trends.
        </p>
      </div>

      {/* Process Section */}
      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-blue-600">
            Consultation & Assessment
          </h3>
          <p className="mt-2 text-gray-600">
            We analyze your training needs and create a customized plan for your
            organization.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-green-600">
            Expert Training Delivery
          </h3>
          <p className="mt-2 text-gray-600">
            Our experienced trainers conduct interactive sessions with
            real-world case studies, hands-on exercises, and live Q&A sessions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-purple-600">
            Post-Training Evaluation
          </h3>
          <p className="mt-2 text-gray-600">
            We assess knowledge retention and provide feedback for continuous
            learning. Participants receive certificates and access to additional
            learning materials.
          </p>
        </div>
      </div>

      {/* Delivery Methods */}
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Training Delivery Methods
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>
            <strong>Onsite Training:</strong> Our trainers visit your office to
            conduct in-person sessions tailored to your team’s needs.
          </li>
          <li>
            <strong>Virtual Training:</strong> Live online training sessions
            with interactive discussions, screen-sharing, and hands-on
            exercises.
          </li>
          <li>
            <strong>Hybrid Model:</strong> A combination of onsite and virtual
            sessions for a flexible learning experience.
          </li>
          <li>
            <strong>Self-Paced Learning:</strong> Access to recorded sessions
            and resources for learning at your own pace.
          </li>
        </ul>
      </div>

      {/* Google Reviews Embed */}
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <iframe
          className="w-full h-96 mt-4 border rounded-lg"
          src="https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID"
          allowFullScreen
          title="Google Reviews"
        ></iframe>
      </div>

      {/* Booking Form Section */}
      <section className="pb-10 mt-12">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Enquire Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="contactPerson"
              placeholder="Contact Person"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              name="trainingType"
              value={formData.trainingType}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a Training Program</option>
              <option value="Web Development">Web Development</option>
              <option value="Automation Testing">Automation Testing</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>
            <textarea
              name="message"
              placeholder="Additional Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CorporateTraining;
