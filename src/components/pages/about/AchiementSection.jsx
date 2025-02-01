import { FaUsers, FaTrophy, FaRegLightbulb } from "react-icons/fa";

const AchievementsSection = () => {
  return (
    <div className="px-10 py-16 text-center bg-white">
      <h3 className="text-2xl font-semibold text-gray-800">Our Achievements</h3>
      <div className="mt-8 flex justify-center gap-16">
        <div className="flex flex-col items-center">
          <FaUsers className="text-5xl text-blue-600" />
          <span className="mt-2 text-lg font-medium text-gray-800">
            5,000+ Trained Professionals
          </span>
        </div>
        <div className="flex flex-col items-center">
          <FaTrophy className="text-5xl text-indigo-600" />
          <span className="mt-2 text-lg font-medium text-gray-800">
            20+ Industry Partnerships
          </span>
        </div>
        <div className="flex flex-col items-center">
          <FaRegLightbulb className="text-5xl text-teal-600" />
          <span className="mt-2 text-lg font-medium text-gray-800">
            Innovative Training Methods
          </span>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
