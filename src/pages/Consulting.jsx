import { useState } from "react";
import TestimonialSection from "../components/common/TestimonialSection";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaCalendarCheck,
  FaTimes,
} from "react-icons/fa";

const BOT_TOKEN = "YOUR_BOT_TOKEN"; // Replace with your Telegram bot token
const CHAT_ID = 6431471143; // Replace with your Telegram chat ID

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

  const sendToTelegram = async () => {
    const message = `🚀 New Consultation Request 🚀\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n💬 Message: ${formData.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      alert("Your free consultation request has been submitted!");
      setIsOpen(false);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      alert("Failed to send request. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToTelegram();
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

      <TestimonialSection />
    </div>
  );
};

export default ConsultingPage;
