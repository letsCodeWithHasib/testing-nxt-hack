import { FaChalkboardTeacher, FaLaptopCode, FaTools } from "react-icons/fa";

const OfferingsSection = () => {
  return (
    <div className="px-10 py-16 bg-gradient-to-r from-indigo-100 via-blue-100 to-blue-200 text-center">
      <h3 className="text-2xl font-semibold text-gray-800">Our Offerings</h3>
      <div className="mt-8 flex justify-center gap-16">
        <div className="flex flex-col items-center">
          <FaChalkboardTeacher className="text-5xl text-blue-600" />
          <span className="mt-2 text-lg font-medium text-gray-800">
            Instructor-Led Training
          </span>
        </div>
        <div className="flex flex-col items-center">
          <FaLaptopCode className="text-5xl text-teal-600" />
          <span className="mt-2 text-lg font-medium text-gray-800">
            Full-Stack Web Development
          </span>
        </div>
        <div className="flex flex-col items-center">
          <FaTools className="text-5xl text-indigo-600" />
          <span className="mt-2 text-lg font-medium text-gray-800">
            Cutting-Edge Tools & Resources
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
