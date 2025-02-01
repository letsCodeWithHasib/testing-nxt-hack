// HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="hero bg-cover bg-center text-white p-16"
      style={{ backgroundImage: "url(/path-to-hero-image.jpg)" }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold leading-tight">
          Advance Your Career with Our IT Training Courses
        </h1>
        <p className="mt-4 text-xl">
          Join thousands of professionals who have upgraded their skills through
          our online courses.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
          Browse Courses
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
