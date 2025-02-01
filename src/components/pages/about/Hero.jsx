const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 px-10 text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-indigo-800 to-indigo-700 opacity-40 blur-3xl -z-10"></div>
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-text-slide-up">
        Empowering the Future of Tech
      </h1>
      <p className="mt-4 text-lg text-gray-200">
        Transforming individuals and organizations through cutting-edge
        technology training
      </p>
    </div>
  );
};

export default HeroSection;
