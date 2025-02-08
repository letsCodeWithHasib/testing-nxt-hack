import React from "react";

const WorkSupport = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-12 lg:px-24 mt-[70px]">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Work Support Services
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get expert assistance and hands-on support to enhance your work
          efficiency and productivity.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Technical Assistance
          </h2>
          <p className="text-gray-600 text-center">
            Receive professional guidance for troubleshooting, setup, and
            optimization of your projects.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Project Collaboration
          </h2>
          <p className="text-gray-600 text-center">
            Work alongside our experts to streamline processes and achieve
            project success.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
          Get Support
        </button>
      </div>
    </div>
  );
};

export default WorkSupport;
