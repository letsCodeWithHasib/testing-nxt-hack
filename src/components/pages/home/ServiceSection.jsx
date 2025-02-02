<section
  className="py-10 bg-gray-100 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
  id="services"
>
  <div className="container mx-auto text-center">
    <h2 className="text-5xl font-semibold mb-10 font-outfit text-purple-700">
      Our Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {services.map((service, index) => (
        <div
          key={index}
          ref={(el) => (serviceRefs.current[index] = el)}
          className="service-card bg-white p-6 rounded-lg shadow-lg transition-all transform relative group"
        >
          {/* Service content */}
        </div>
      ))}
    </div>
  </div>
</section>;
