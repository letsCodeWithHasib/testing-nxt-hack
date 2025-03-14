import { useState } from "react";
import TestimonialSection from "../components/common/TestimonialSection";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaCalendarCheck,
  FaTimes,
} from "react-icons/fa";

const ConsultingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your free consultation request has been submitted!");
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 mt-[85px]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 flex justify-center items-center gap-2">
          <FaCalendarCheck /> Free Career Consultation
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          Get personalized career guidance from our experts to shape your
          future.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 px-5 md:px-[100px]">
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
            <FaUser /> Personalized Guidance
          </h3>
          <p className="text-gray-600 mt-2">
            Tailored advice based on your skills and interests.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
            <FaRegCommentDots /> Industry Insights
          </h3>
          <p className="text-gray-600 mt-2">
            Stay updated with the latest industry trends and career paths.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center px-5 md:px-[100px]">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg flex justify-center items-center gap-2 mx-auto"
        >
          <FaCalendarCheck /> Book a Free Consultation
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold text-center text-blue-600">
              Book Your Slot
            </h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="flex items-center border rounded-lg p-2">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border-none outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg p-2">
                <FaEnvelope className="text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border-none outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg p-2">
                <FaRegCommentDots className="text-gray-500" />
                <textarea
                  name="message"
                  placeholder="Briefly describe your career concerns"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border-none outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 font-semibold rounded-lg"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      <section
        className="py-10 bg-white mx-[100px] px-[100px] mt-10"
        id="course-outcomes"
      >
        <h2 className="text-5xl font-semibold mb-10 font-outfit text-purple-700">
          Course Outcomes
        </h2>
        <ul className="list-disc pl-8 text-xl text-gray-600">
          <li>Master key programming concepts and languages</li>
          <li>Develop real-world applications</li>
          <li>Gain industry-recognized certification</li>
        </ul>
      </section>

      <div className="mt-16 max-w-3xl mx-auto mb-10">
        <h3 className="text-2xl font-bold text-center">
          Frequently Asked Questions
        </h3>
        <div className="mt-6 space-y-4">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h4 className="text-lg font-semibold">
              Who can book a free consultation?
            </h4>
            <p className="text-gray-600">
              Anyone struggling to select his domain and looking for career
              guidance in the IT industry.
            </p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h4 className="text-lg font-semibold">
              How long does the session last?
            </h4>
            <p className="text-gray-600">
              Each session lasts for about 30-45 minutes. Sometimes, It can go
              beyond this too.
            </p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h4 className="text-lg font-semibold">
              What cost I need to pay for this session ?
            </h4>
            <p className="text-gray-600">
              This session is completely free for you.
            </p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h4 className="text-lg font-semibold">
              Why to choose Nxthack IT solutions?
            </h4>
            <ol>
              <li>
                <strong>1. Industry Experts</strong> : Our trainers are seasoned
                professionals with years of hands-on experience in their
                respective fields. They bring real-world insights to the
                training sessions.
              </li>
              <li>
                <strong>2. Customized Programs</strong> : Our trainers are We
                tailor our training programs to meet the specific needs of your
                organization, ensuring maximum relevance and impact.
              </li>
              <li>
                <strong>3. Hands-On Learning</strong> : Our trainers are Our
                training sessions are highly interactive, with a focus on
                practical, hands-on learning to ensure immediate applicability.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <TestimonialSection />

      <section className="py-10 bg-gray-100 px-[100px] mx-[100px]" id="contact">
        <h2 className="text-5xl font-semibold mb-10 font-outfit text-purple-700">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Feel free to reach out to us if you have any questions or need further
          information.
        </p>
        <div className="flex space-x-6">
          <div className="text-lg text-gray-700">
            <strong>Email:</strong> info@nxthackitsolutions.com
          </div>
          <div className="text-lg text-gray-700">
            <strong>Phone:</strong> +91 9205110948
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingPage;
