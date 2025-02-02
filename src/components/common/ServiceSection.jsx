import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon from react-icons
import { Link } from "react-router-dom";

const services = [
  {
    title: "Corporate Training",
    description:
      "Custom training solutions for businesses to upskill teams with the latest technologies like Angular, Django, and ASP.NET Core.",
    icon: "fas fa-briefcase", // Font Awesome icon
    link: "/corporate-trainings",
  },
  {
    title: "Live online/offline classes",
    description:
      "NxtHack provides online live interactive sessions to help individuals gain expertise in various technologies and development practices.",
    icon: "fas fa-laptop-code", // Font Awesome icon
    link: "/courses",
  },
  {
    title: "Consulting",
    description:
      "Expert consulting services to help organizations improve their development processes and optimize workflows.",
    icon: "fas fa-chalkboard-teacher", // Font Awesome icon
    link: "/",
  },
  {
    title: "Work Support on Requirement",
    description:
      "Tailored work support services based on your specific project needs. We provide flexible and scalable solutions, from code reviews to full team assistance.",
    icon: "fas fa-headset", // Font Awesome icon
    link: "/",
  },
  {
    title: "College Training",
    description:
      "Training programs designed for colleges to help students gain real-world skills in web development, data science, and more.",
    icon: "fas fa-university", // Font Awesome icon
    link: "/",
  },
  {
    title: "Project Development Assistance",
    description:
      "We assist you in developing your projects from start to finish, including planning, implementation, and support for web, mobile, and software projects.",
    icon: "fas fa-cogs", // Font Awesome icon
    link: "/",
  },
];

const ServicesOverview = () => {
  const serviceRefs = useRef([]); // To keep track of service card elements

  // This function will trigger animations when elements are in view
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in"); // Add the class to trigger animation
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Observe each service card
    serviceRefs.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, []);

  return (
    <section className="py-10 bg-gray-100" id="services">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-semibold mb-10 font-outfit text-purple-700">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <div
                ref={(el) => (serviceRefs.current[index] = el)} // Attach refs to cards
                className="service-card bg-white p-6 rounded-lg shadow-lg transition-all transform relative group"
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

                {/* Arrow Icon */}
                <div className="absolute  opacity-0 group-hover:opacity-100 -rotate-90 p-2 border-purple-700 border rounded-full top-4 right-4 group-hover:rotate-0 transition-transform duration-500">
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
