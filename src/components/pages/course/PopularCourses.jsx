import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { popularCourses } from "../../../assets/data";

const PopularCourses = () => {
  return (
    <section className="py-10 bg-gray-100 mt-[75px]" id="popular-courses">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-semibold mb-10 font-outfit text-purple-700">
          Popular Courses
        </h2>
        <p className="mb-10 text-lg text-gray-600">
          Explore our most popular courses that are helping students excel in
          their careers.
        </p>

        {/* Popular Course Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {popularCourses.map((course, index) => (
            <div
              key={index}
              className="course-card bg-white p-6 rounded-lg shadow-lg relative group"
            >
              <div className="text-4xl text-purple-700 mb-4">
                <i className={`${course.icon} text-purple-700`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 font-outfit text-purple-800">
                {course.title}
              </h3>
              <p className="text-gray-700 font-poppins mb-4">
                {course.description}
              </p>

              {/* Arrow Icon on hover */}
              <div className="absolute opacity-0 group-hover:opacity-100 -rotate-90 p-2 border-purple-700 border rounded-full top-4 right-4 group-hover:rotate-0 transition-transform duration-500">
                <FaArrowRight className="text-purple-700 text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
