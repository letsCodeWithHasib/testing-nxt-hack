import { Link } from "react-router-dom";
import BookDemo from "../../common/BookDemo";
import { useState } from "react";

const HeroSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('/bg-section.jpg')" }}
    >
      <BookDemo
        isFormVisible={isFormVisible}
        setIsFormVisible={setIsFormVisible}
      />
      <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
      {/* Overlay for readability */}
      <div className="relative z-10 gap-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl mb-4 font-outfit">
          Empowering Corporate and Colleges <span>It Trainings</span> with
          Cutting-Edge Solutions
        </h1>
        <p className="text-3xl mb-4 font-outfit">
          At Nxthack IT Solutions, we provide customized training solutions
          tailored to the unique needs of your organization. Whether you're
          looking to upskill your team on the latest web technologies or
          streamline your development processes, our expert trainers are here to
          help. Join our growing community of professionals and take your skills
          to the next level with hands-on, interactive learning experiences.
        </p>
        <div>
          <button
            onClick={() => setIsFormVisible(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Book a Free Demo
          </button>
          <p className="text-sm mt-5">
            <Link
              to="/courses"
              className="text-white text-md font-semibold uppercase font-open hover:text-blue-500"
            >
              Learn More About Our Training Programs
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-24 -right-10"></div>
      <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-24 -left-10"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-10 -left-16"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-10 -right-16"></div>
    </section>
  );
};

export default HeroSection;
