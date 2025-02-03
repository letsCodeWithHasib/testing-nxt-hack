import HeroSection from "../components/pages/home/HeroSection";
import ServiceSection from "../components/common/ServiceSection";
import TestimonialSection from "../components/common/TestimonialSection";
import PreviousWork from "../components/common/PreviousWork";
import Courses from "../components/pages/home/Courses";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <PreviousWork />
      <TestimonialSection />
      <Courses />
    </div>
  );
};

export default Home;
