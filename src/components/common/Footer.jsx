import { useState } from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

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
                href="#"
                className="text-gray-400 hover:text-gray-200 transition"
                aria-label="Visit our Facebook"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/riya-soni-3b41232ba/"
                target="_blank"
                className="text-gray-400 hover:text-gray-200 transition"
                aria-label="Visit our LinkedIn"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition"
                aria-label="Visit our Twitter"
              >
                <FaTwitter className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/nxthackit?igsh=MWpkNGhwdmxvcTA1bg=="
                target="_blank"
                className="text-gray-400 hover:text-gray-200 transition"
                aria-label="Visit our Instagram"
              >
                <FaInstagram className="text-3xl" />
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
              <li>
                <a href="#cloud" className="hover:text-white transition">
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="#data-science" className="hover:text-white transition">
                  Data Science with Python
                </a>
              </li>
              <li>
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
            <p className="mt-4">
              Address: D-2, G/F, Kh No 265, Plot No 180-F, New Ashok Nagar,East
              Delhi, East Delhi-110096, Delhi, India
              <br />
              Phone: +91 98765 43210
              <br />
              Email: info@nxthackitsolutions.com
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Get in Touch
            </a>
          </div>

          {/* contact form */}
          {/* <div>
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <form
              onSubmit={handleSubmit}
              className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <input
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="Email"
                  placeholder="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Type your message here"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
              >
                Submit
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Nxthack IT Solutions LLP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
