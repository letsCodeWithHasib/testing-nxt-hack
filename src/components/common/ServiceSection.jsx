import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon from react-icons
import { Link } from "react-router-dom";
import Tooltip from "./Tooltip"; // Assuming Tooltip is a separate component
import { services } from "../../assets/data";

const ServicesOverview = () => {
  const serviceRefs = useRef([]);
  const [hoveredService, setHoveredService] = useState(null); // State to track hovered service

  // This function will trigger animations when elements are in view
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    serviceRefs.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, []);

  return (
    <section
      className="py-10 bg-gray-100 px-5 md:px-10 lg:px-[100]"
      id="services"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-semibold mb-10 font-outfit text-purple-700">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Link to={`/services/${service.link}`} key={index}>
              <div
                ref={(el) => (serviceRefs.current[index] = el)}
                className="service-card bg-white p-6 rounded-lg shadow-lg transition-all transform relative group"
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Icon */}
                <div className="text-4xl text-purple-700 mb-4">
                  <i className={`${service.icon} text-purple-700`}></i>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold mb-4 font-outfit text-purple-800">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-700 font-poppins mb-4">
                  {service.description}
                </p>

                {/* Tooltip Message on Hover */}
                {hoveredService === service.title && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg opacity-90">
                    Click to explore our {service.title}
                  </div>
                )}

                {/* Arrow Icon */}
                <div className="absolute opacity-0 group-hover:opacity-100 -rotate-90 p-2 border-purple-700 border rounded-full top-4 right-4 group-hover:rotate-0 transition-transform duration-500">
                  <FaArrowRight className="text-purple-700 text-2xl" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
