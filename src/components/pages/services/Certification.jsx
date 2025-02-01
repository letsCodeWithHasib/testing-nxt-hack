const CertificationsSection = () => {
  return (
    <div className="px-10 py-16 text-center bg-white">
      <h2 className="text-3xl font-semibold text-gray-800">
        Our Certifications & Partnerships
      </h2>
      <div className="mt-8 flex justify-center gap-16">
        {/* Add certification logos or images */}
        <img
          src="/images/aws-logo.png"
          alt="AWS Certified"
          className="w-32 h-32 object-contain"
        />
        <img
          src="/images/google-cloud-logo.png"
          alt="Google Cloud Certified"
          className="w-32 h-32 object-contain"
        />
        <img
          src="/images/azure-logo.png"
          alt="Microsoft Azure Certified"
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default CertificationsSection;
