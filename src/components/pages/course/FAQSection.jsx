// FAQ.js
import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the duration of the courses?",
      answer:
        "Our courses range from a few days to a few weeks, depending on the course level.",
    },
    {
      question: "Do I get a certificate after completion?",
      answer:
        "Yes, we offer certificates upon successful completion of all courses.",
    },
    {
      question: "Are the courses suitable for beginners?",
      answer:
        "Yes, most of our courses start with the fundamentals and advance to complex topics.",
    },
  ];

  return (
    <section className="faq bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-2 text-lg text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
