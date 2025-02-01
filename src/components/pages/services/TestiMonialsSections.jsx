const TestimonialsSection = () => {
  return (
    <div className="px-10 py-16 bg-gradient-to-r from-teal-100 to-teal-200 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">
        What Our Clients Say
      </h2>
      <div className="mt-8 flex justify-center gap-16">
        <div className="w-full sm:w-1/3 px-6 py-8 bg-white shadow-lg rounded-lg">
          <p className="text-gray-600">
            "Nxthack IT Solutions helped us train our team in full-stack
            development, significantly boosting our productivity and technical
            capabilities. Highly recommended!"
          </p>
          <span className="block mt-4 font-medium text-gray-800">
            John Doe, CTO at TechCorp
          </span>
        </div>
        <div className="w-full sm:w-1/3 px-6 py-8 bg-white shadow-lg rounded-lg">
          <p className="text-gray-600">
            "The cloud computing training from Nxthack gave us the skills needed
            to migrate to the cloud smoothly and securely. Their hands-on
            approach was fantastic!"
          </p>
          <span className="block mt-4 font-medium text-gray-800">
            Jane Smith, Director of IT at CloudTech
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
