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
import { IoIosArrowForward } from "react-icons/io";

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
    <div className="max-w-5xl mx-auto py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">How We Work</h2>
      <div className="flex items-center justify-center flex-wrap relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-32 m-4"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full text-white font-bold text-xl shadow-lg ${
                index % 2 === 0 ? "bg-yellow-500" : "bg-blue-500"
              }`}
            >
              {index + 1}
            </div>
            <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <IoIosArrowForward className="text-gray-500 text-2xl mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
