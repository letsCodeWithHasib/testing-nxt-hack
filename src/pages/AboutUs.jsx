import { employees } from "../assets/data";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const AboutUs = () => {
  // Sample employee data

  return (
    <div className="bg-gray-100 min-h-screen mt-[75px] font-outfit">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-800 py-20 text-white text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          At NxtHack IT Solutions, we are committed to empowering individuals
          and organizations with cutting-edge technology education and
          solutions.
        </p>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8 text-center">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
          Our mission is to bridge the gap between education and industry by
          providing high-quality, hands-on training in the latest technologies.
          We aim to create a community of lifelong learners who are equipped to
          thrive in the digital age.
        </p>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Excellence
              </h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, from course
                content to student support.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Innovation
              </h3>
              <p className="text-gray-700">
                We embrace innovation and continuously update our curriculum to
                reflect industry trends.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                Community
              </h3>
              <p className="text-gray-700">
                We believe in the power of community and collaboration to drive
                success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-800 py-16 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Whether you're a student, professional, or lifelong learner, we have
          something for you.
        </p>
        <button className="bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
