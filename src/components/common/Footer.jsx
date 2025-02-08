import { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-[rgb(80,32,79)] text-gray-300 py-10 px-5 md:px-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Nxthack IT Solutions
            </h2>
            <p className="mt-4">
              Empowering businesses and professionals with cutting-edge IT
              training and services. Your journey to tech excellence starts
              here.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com/nxthackit"
                className="text-gray-400 hover:text-gray-200 transition p-3 border border-white rounded-full"
                aria-label="Visit our Facebook"
              >
                <FaFacebook className="text-xl" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/riya-soni-3b41232ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition border border-white p-3 rounded-full"
                aria-label="Visit our LinkedIn"
              >
                <FaLinkedin className="text-xl" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/nxthackit"
                className="text-gray-400 hover:text-gray-200 transition border border-white p-3 rounded-full"
                aria-label="Visit our Twitter"
              >
                <FaTwitter className="text-xl" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/nxthackit?igsh=MWpkNGhwdmxvcTA1bg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition border border-white p-3 rounded-full"
                aria-label="Visit our Instagram"
              >
                <FaInstagram className="text-xl" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Popular Courses
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#mern" className="hover:text-white transition">
                  MERN Stack Development
                </a>
              </li>
              <li>
                <a href="#ai-ml" className="hover:text-white transition">
                  AI & Machine Learning
                </a>
              </li>
              <li className="">
                <a href="#cloud" className="hover:text-white transition">
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="#data-science" className="hover:text-white transition">
                  Data Science with Python
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <p className="mt-4 flex gap-3 items-start">
              <FaMapMarkerAlt className="text-2xl" />
              D-2, G/F, Kh No 265, Plot No 180-F, New Ashok Nagar, East Delhi,
              East Delhi-110096, Delhi, India
            </p>
            <p className="mt-2 flex items-center gap-2">
              <FaPhone className="rotate-90" />
              <a
                href="tel:+919205110948"
                className="text-blue-100 hover:underline"
              >
                +91 9205110948
              </a>
              ,
              <a
                href="tel:+919205894280"
                className="text-blue-100 hover:underline"
              >
                +91 9205894280
              </a>
            </p>
            <p className="mt-2 flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:info@nxthackitsolutions.com"
                className="text-blue-100 hover:underline"
              >
                info@nxthackitsolutions.com
              </a>
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-4">
          <div className="container mx-auto text-center">
            <p>&copy;2023 Nxthack IT Solutions LLP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
