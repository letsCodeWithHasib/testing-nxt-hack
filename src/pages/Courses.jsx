import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { courses } from "../assets/data";
import bgVideo from "../assets/first-course-hero-bg.mp4";
import { Link } from "react-router-dom";

const CoursePage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleBookDemo = (course) => {
    setSelectedCourse(course);
    setIsFormVisible(true);
  };

  const handleShowMore = () => {
    setShowAllCourses(true);
  };

  return (
    <section className="w-full">
      <div className="relative w-full min-h-screen mt-[65px]">
        {/* Video */}
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={bgVideo}
        ></video>

        {/* Gradient Overlay on Video */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-800 opacity-90"></div>

        {/* Header */}
        <div className="py-20 relative p76t X982Y3QF x-5 md:px-[100px]">
          <div className="container mx-auto w-full text-center text-white mt-10">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Unlock Your Potential with Our Expert-Led Courses
            </h1>
            <p className="mt-2 text-lg sm:text-2xl font-poppins text-white">
              Enhance Your Skills with Our Specialized Programs for Students,
              Professionals, and Lifelong Learners
            </p>
            <p className="mt-5 text-base sm:text-xl font-poppins text-white">
              At NxtHack IT Solutions, we understand that learning needs differ
              from person to person. Whether you’re a college student looking to
              gain industry-relevant skills, a corporate professional seeking to
              upskill, or an individual passionate about continuous learning,
              our diverse range of courses has something for everyone.
            </p>

            <div className="mt-10">
              <button className="bg-white text-black uppercase text-xl sm:text-3xl font-outfit font-bold py-5 px-10 mt-10 rounded">
                Get a Call
              </button>
            </div>
            <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-24 -right-10"></div>
            <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-700 via-pink-500 to-pink-300 rounded-full blur-3xl opacity-50 -top-24 -left-10"></div>
            <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-10 -left-16"></div>
            <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 -bottom-10 -right-16"></div>
          </div>
        </div>
      </div>

      <section className="py-10 bg-gray-100 px-4 md:px-[100px]" id="courses">
        <div className="container mx-auto text-center w-full">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-10 font-outfit text-purple-700">
            Our Courses
          </h2>
          <p className="mb-10 text-lg sm:text-xl text-gray-600">
            Choose from a variety of courses designed to help you excel in the
            world of technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
            {courses
              .slice(0, showAllCourses ? courses.length : 6)
              .map((course, index) => (
                <div
                  key={index}
                  className="course-card bg-white p-6 rounded-lg shadow-lg relative group w-full"
                >
                  <div className="text-3xl sm:text-4xl text-purple-700 mb-4">
                    <i className={`${course.icon} text-purple-700`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl  font-bold mb-4 font-outfit text-purple-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 mx-5 text-[15px] font-poppins mb-4">
                    {course.description}
                  </p>

                  {/* Book Demo Button */}
                  <div className="flex gap-5 justify-center">
                    <button
                      onClick={() => handleBookDemo(course.title)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
                    >
                      Book a Demo
                    </button>

                    <Link
                      to={`/courses/course-details/${index}`}
                      onClick={() => handleBookDemo(course.title)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
                    >
                      Learn More
                    </Link>
                  </div>

                  <div className="absolute opacity-0 group-hover:opacity-100 -rotate-90 p-2 border-purple-700 border rounded-full top-4 right-4 group-hover:rotate-0 transition-transform duration-500">
                    <FaArrowRight className="text-purple-700 text-2xl" />
                  </div>
                </div>
              ))}
          </div>

          {/* Show More Button */}
          {!showAllCourses && (
            <div className="mt-6 text-right">
              <button
                onClick={handleShowMore}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all"
              >
                Show More Courses
              </button>
            </div>
          )}
        </div>

        {/* Form Modal for Booking Demo */}
        {isFormVisible && (
          <div className="fixed z-50 inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-xl mb-4">Book a Demo for {selectedCourse}</h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsFormVisible(false)}
                    className="mr-4 text-gray-500"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* <Sr /> */}
    </section>
  );
};

export default CoursePage;
