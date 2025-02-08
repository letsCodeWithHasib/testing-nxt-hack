import React from "react";

const ProjectDevelopmentAssistance = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-12 lg:px-24 mt-[75px]">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Project Development Assistance
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get expert guidance and technical support to bring your project ideas
          to life efficiently.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Planning & Strategy
          </h2>
          <p className="text-gray-600 text-center">
            We help define project scope, set milestones, and create a roadmap
            for success.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Technical Implementation
          </h2>
          <p className="text-gray-600 text-center">
            Get hands-on assistance with coding, debugging, and deploying your
            applications.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
          Get Assistance
        </button>
      </div>
    </div>
  );
};

export default ProjectDevelopmentAssistance;
