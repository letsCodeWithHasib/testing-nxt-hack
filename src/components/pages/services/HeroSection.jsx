const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-700 to-blue-800 text-white py-16 px-10 text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-blue-800 to-blue-600 opacity-50"></div>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600 animate-text-slide-up">
        Elevating Your Business with Professional IT Training
      </h1>
      <p className="mt-4 text-lg text-gray-200">
        Discover our range of services designed to enhance your workforce’s
        technical skills and empower your organization’s growth.
      </p>
      <a
        href="#contact"
        className="mt-8 inline-block bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-teal-700"
      >
        Get in Touch
      </a>
    </div>
  );
};

export default HeroSection;
