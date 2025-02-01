import HeroSection from "../components/pages/home/HeroSection";
import ServiceSection from "../components/pages/home/ServiceSection";
import TestimonialSection from "../components/pages/home/TestimonialSection";
import Courses from "../components/pages/home/Courses";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <TestimonialSection />
      <Courses />
    </div>
  );
};

export default Home;
