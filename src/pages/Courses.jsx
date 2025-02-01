import HeroSection from "../components/pages/course/HeroSection";
// import FeaturedCourses from "./FeaturedCourses";
// import CourseList from "./CourseList";
import Testimonials from "../components/pages/course/Testimonials";
import FAQ from "../components/pages/course/FAQSection";

const CoursePage = () => {
  return (
    <div>
      <HeroSection />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default CoursePage;
