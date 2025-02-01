const ServiceDetailsSection = () => {
  return (
    <div className="px-10 py-16 text-center bg-white">
      <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-16">
        {/* Full-Stack Development */}
        <div className="w-full sm:w-1/3 px-6 py-8 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
            Full-Stack Development Training
          </h3>
          <p className="mt-4 text-gray-600">
            Learn the full stack of modern web development, from front-end
            frameworks like Angular and React to back-end technologies like
            Node.js and database management with MongoDB or SQL.
          </p>
        </div>
        {/* Cloud Computing */}
        <div className="w-full sm:w-1/3 px-6 py-8 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
            Cloud Computing Training
          </h3>
          <p className="mt-4 text-gray-600">
            Master cloud technologies and platforms like AWS, Azure, and Google
            Cloud. Gain the skills to manage cloud infrastructure and services
            in a scalable and secure manner.
          </p>
        </div>
        {/* AI & Machine Learning */}
        <div className="w-full sm:w-1/3 px-6 py-8 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
            AI & Machine Learning Training
          </h3>
          <p className="mt-4 text-gray-600">
            Dive into the world of AI and machine learning with hands-on
            projects, learning to build algorithms, models, and AI-driven
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSection;
