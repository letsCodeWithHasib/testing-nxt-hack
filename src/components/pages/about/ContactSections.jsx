// ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <div className="px-10 py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
      <p className="mt-4 text-lg text-gray-600">
        Ready to take the next step? We’d love to hear from you! Get in touch
        with us for any inquiries or training opportunities.
      </p>
      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg shadow-lg">
        Contact Us
      </button>
    </div>
  );
};

export default ContactSection;
