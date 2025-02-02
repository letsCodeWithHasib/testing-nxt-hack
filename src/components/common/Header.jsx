import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to detect scroll direction
  const handleScroll = () => {
    if (window.scrollY > 50 && window.scrollY > lastScrollY) {
      // Scrolling down, hide the header
      setIsScrolled(true);
    } else if (window.scrollY < lastScrollY) {
      // Scrolling up, show the header
      setIsScrolled(false);
    }
    // Update last scroll position
    setLastScrollY(window.scrollY);
  };

  // Add event listener on mount, remove on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      } transition-all duration-300 fixed top-0 left-0 w-full z-50 bg-[rgb(80,32,79)] py-4`}
    >
      <Contact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="px-[100px] mx-auto flex justify-between items-center">
        <div
          className={`text-white text-3xl font-ubuntu font-semibold tracking-wide animate__animated ${
            isScrolled ? "animate__fadeOut" : "animate__fadeIn"
          }`}
        >
          NxtHack
        </div>
        <nav className="space-x-8 text-lg text-white">
          <Link
            to="/home"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110 animate__animated animate__fadeIn animate__delay-1s"
          >
            Home
          </Link>
          <Link
            to="/corporate-trainings"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110 animate__animated animate__fadeIn animate__delay-1.2s"
          >
            Corporate Tranings
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110 animate__animated animate__fadeIn animate__delay-1.4s"
          >
            Services
          </Link>
          <Link
            to="/courses"
            className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110 animate__animated animate__fadeIn animate__delay-1.6s"
          >
            Courses
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition duration-300"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
