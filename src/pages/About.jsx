import Hero from "../components/pages/about/Hero";
import CompanyInfoSection from "../components/pages/about/CompanyInfoSection";
import VisionSection from "../components/pages/about/VisionSection";
import ContactSections from "../components/pages/about/ContactSections";
import JourneySection from "../components/pages/about/JourneySection";
import AchiementSection from "../components/pages/about/AchiementSection";
import ApproachSection from "../components/pages/about/ApproachSection";
import OfferingsSection from "../components/pages/about/OfferingsSection";

const About = () => {
  return (
    <div>
      <Hero />
      <CompanyInfoSection />
      <JourneySection />
      <AchiementSection />
      <ApproachSection />
      <OfferingsSection />
      <VisionSection />
      <ContactSections />
    </div>
  );
};

export default About;
