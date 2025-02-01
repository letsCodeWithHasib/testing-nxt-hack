import HeroSection from "../components/pages/services/HeroSection";
import ServiceDetailsSection from "../components/pages/services/ServiceDetailSection";
import TestiMonialsSections from "../components/pages/services/TestiMonialsSections";
import CertificationsSection from "../components/pages/services/Certification";
import ContactCTASection from "../components/pages/services/ContactCTASection";

const ServicesPage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceDetailsSection />
      <TestiMonialsSections />
      <CertificationsSection />
      <ContactCTASection />
    </div>
  );
};

export default ServicesPage;
