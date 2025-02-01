// Testimonials.js
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "The React course helped me land my first full-stack developer job!",
      image: "/john.jpg",
    },
    {
      name: "Jane Smith",
      feedback:
        "I now feel confident using AWS in my projects after completing the AWS course.",
      image: "/jane.jpg",
    },
    // Add more testimonials...
  ];

  return (
    <section className="testimonials bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <p className="mt-4 text-lg text-gray-700">
                {testimonial.feedback}
              </p>
              <h3 className="mt-6 text-xl font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
