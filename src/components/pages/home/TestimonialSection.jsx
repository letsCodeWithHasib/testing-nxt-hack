import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

const TestimonialsCarousel = () => {
  const swiperRef = useRef(null); // Reference to control swiper

  const testimonials = [
    {
      name: "John Doe",
      position: "CEO of Company X",
      testimonial:
        "Nxthack IT Solutions provided excellent training and support. Highly recommended!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Smith",
      position: "Project Manager at Company Y",
      testimonial:
        "The team at Nxthack is highly skilled and delivered on time. We saw great results.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Mark Wilson",
      position: "CTO of Company Z",
      testimonial:
        "An outstanding experience with Nxthack. Their training and services are top-notch.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "John Doe",
      position: "CEO of Company X",
      testimonial:
        "Nxthack IT Solutions provided excellent training and support. Highly recommended!",
      image: "https://via.placeholder.com/1040",
    },
    {
      name: "Jane Smith",
      position: "Project Manager at Company Y",
      testimonial:
        "The team at Nxthack is highly skilled and delivered on time. We saw great results.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Mark Wilson",
      position: "CTO of Company Z",
      testimonial:
        "An outstanding experience with Nxthack. Their training and services are top-notch.",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section className="p-5 bg-black px-2 lg:px-[100px]">
      <h2 className="text-3xl md:text-5xl text-center font-semibold mb-8 font-outfit text-white">
        Testimonials
      </h2>
      <div className="relative p-5 flex gap-2 md:gap-5 items-center justify-center">
        {/* Custom left arrow */}
        <button
          className="md:text-2xl text-xl  text-white p-2 md:p-3 rounded-full bg-gradient-to-tr from-indigo-600 to-pink-600"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <MdArrowBack />
        </button>

        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1} // Default for mobile
          loop={true}
          autoplay={{
            delay: 2500, // Slide will move after 2.5 seconds
            disableOnInteraction: false, // Keep autoplay running after interaction
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on smaller screens (tablets)
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger screens (desktops)
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="bg-purple-300 p-4 md:p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-lg md:text-xl">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-center text-sm md:text-base italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom right arrow */}
        <button
          className="md:text-2xl text-xl  text-white p-2 md:p-3 rounded-full bg-gradient-to-tr to-indigo-600 from-pink-600"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <MdArrowForward />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
