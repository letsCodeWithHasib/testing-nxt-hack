import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronRight, FiChevronDown } from "react-icons/fi";
import Contact from "./Contact";
import { services } from "../../assets/data";
import ServiceList from "./ServiceList";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);

  const servicesMenuRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 50 && window.scrollY > lastScrollY) {
      setIsScrolled(true);
    } else if (window.scrollY < lastScrollY) {
      setIsScrolled(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [lastScrollY]);

  const handleOutsideClick = (event) => {
    if (
      servicesMenuRef.current &&
      !servicesMenuRef.current.contains(event.target)
    ) {
      setIsServicesMenuOpen(false);
      setActiveServiceIndex(null);
    }
  };

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };

  const toggleCategory = (index) => {
    setActiveServiceIndex(activeServiceIndex === index ? null : index);
  };

  return (
    <header
      className={`${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      } transition-all duration-300 fixed top-0 left-0 w-full z-50 bg-[rgb(80,32,79)] py-4 shadow-lg`}
    >
      <Contact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="px-6 md:px-[100px] mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-ubuntu font-semibold tracking-wide">
          NxtHack
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center lg:flex space-x-6 text-lg text-white">
          <Link to="/home" className="hover:text-gray-300 transition">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesMenuRef}>
            <button
              className="flex items-center space-x-2 hover:text-gray-300 transition"
              onClick={toggleServicesMenu}
            >
              <span>Services</span>
              <FiChevronDown
                className={`transform transition-transform ${
                  isServicesMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isServicesMenuOpen && (
              <ServiceList
                activeServiceIndex={activeServiceIndex}
                services={services}
                toggleCategory={toggleCategory}
              />
            )}
          </div>

          <Link to="/courses" className="hover:text-gray-300 transition">
            Courses
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 lg:hidden bg-[rgb(80,32,79)]`}
      >
        <nav className="flex flex-col text-center py-4 space-y-4 text-white">
          <Link
            to="/home"
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/courses"
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </Link>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMenuOpen(false);
            }}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
