import { Link } from "react-router-dom";
import BookDemo from "../../common/BookDemo";
import { useState } from "react";

const HeroSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center pt-20 px-6 md:px-12 lg:px-[100px] flex flex-col justify-center"
      style={{ backgroundImage: "url('/bg-section.jpg')" }}
    >
      <BookDemo
        isFormVisible={isFormVisible}
        setIsFormVisible={setIsFormVisible}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Hero Content */}
      <div className="relative z-10 gap-6 container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-5xl font-outfit font-bold leading-snug">
          Empowering Corporate and Colleges <br />
          <span className="text-pink-400">IT Trainings</span> with Cutting-Edge
          Solutions
        </h1>

        <p className="text-lg md:text-2xl max-w-4xl font-outfit">
          At Nxthack IT Solutions, we provide customized training solutions
          tailored to the unique needs of your organization. Whether you're
          looking to upskill your team on the latest web technologies or
          streamline your development processes, our expert trainers are here to
          help.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <button
            onClick={() => setIsFormVisible(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition duration-300"
          >
            Book a Free Demo
          </button>

          <p className="text-sm mt-4">
            <Link
              to="/courses"
              className="text-white text-md font-semibold uppercase font-open hover:text-blue-400"
            >
              Learn More About Our Training Programs
            </Link>
          </p>
        </div>
      </div>

      {/* Background Gradients for Aesthetic Effect */}
      <div className="absolute w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-12 md:-top-24 -right-6 md:-right-10"></div>
      <div className="absolute w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-12 md:-top-24 -left-6 md:-left-10"></div>
      <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-6 md:-bottom-10 -left-8 md:-left-16"></div>
      <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-6 md:-bottom-10 -right-8 md:-right-16"></div>
    </section>
  );
};

export default HeroSection;
