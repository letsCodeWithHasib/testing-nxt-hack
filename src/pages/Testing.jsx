import React from "react";
import {
  FaPhone,
  FaUserTie,
  FaChalkboardTeacher,
  FaComment,
  FaFileInvoice,
  FaUserCheck,
  FaCertificate,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaPhone />,
    title: "Consultation Call",
    description: "Initial discussion with a consultant.",
  },
  {
    icon: <FaUserTie />,
    title: "Technical Assessment",
    description: "Expert call based on prior knowledge.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Free Demo Booking",
    description: "Scheduling a demo session.",
  },
  {
    icon: <FaComment />,
    title: "Feedback Collection",
    description: "Gathering feedback.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Fee Quotation",
    description: "Providing course pricing details.",
  },
  {
    icon: <FaUserCheck />,
    title: "Enrollment",
    description: "Completing the registration process.",
  },
  {
    icon: <FaCertificate />,
    title: "Certification",
    description: "Awarding certificates upon completion.",
  },
  {
    icon: <FaUsers />,
    title: "Job Grooming Sessions",
    description: "Preparing for the job market.",
  },
  {
    icon: <FaBriefcase />,
    title: "Interview Scheduling",
    description: "Helping with job placements.",
  },
];

const HowWeWork = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">How We Work</h2>
      <div className="relative w-full flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 to-blue-500 h-full"></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center w-full max-w-2xl mb-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {index % 2 === 0 && (
              <div className="flex items-center space-x-4">
                <div className="text-4xl text-yellow-500">{step.icon}</div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-80 text-left">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            )}
            {index % 2 !== 0 && (
              <div className="flex items-center space-x-4">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-80 text-left">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                <div className="text-4xl text-blue-500">{step.icon}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
