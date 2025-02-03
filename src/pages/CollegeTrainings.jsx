import PreviousWork from "../components/common/PreviousWork";

const previousTrainings = [
  {
    college: "XYZ University",
    year: "2023",
    courses: ["React.js", "Node.js", "MongoDB"],
  },
  {
    college: "ABC Institute",
    year: "2022",
    courses: ["Python", "Machine Learning", "Django"],
  },
  {
    college: "DEF Engineering College",
    year: "2021",
    courses: ["Java", "Spring Boot", "Microservices"],
  },
];

const upcomingTrainings = [
  {
    category: "Web Development",
    courses: ["HTML, CSS, JavaScript", "React.js", "Angular", "Node.js"],
  },
  {
    category: "Programming Languages",
    courses: ["Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    category: "Cloud Computing",
    courses: ["AWS", "Azure", "Google Cloud", "Docker & Kubernetes"],
  },
];

const CollegeTrainings = () => {
  return (
    <div className="py-10 px-4 mt-[70px]">
      {/* Header Section */}
      <div className="px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Industrial Training for Colleges
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          We provide hands-on industrial training for students. Explore our
          previous work and contact us for collaboration.
        </p>
      </div>

      <PreviousWork />

      {/* Contact Section */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Interested in Training for Your College?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Contact us to provide industrial training for your students and help
          them gain industry-ready skills.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CollegeTrainings;
