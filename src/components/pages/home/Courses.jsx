const PopularCourses = () => {
  const courses = [
    {
      title: "Full Stack Web Development (MERN Stack)",
      description:
        "Learn to build powerful and scalable web applications using MongoDB, Express.js, React, and Node.js.",
      image: "/mern-course.jpg", // Replace with actual course image
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Master AI and ML concepts, from algorithms to real-world applications like image recognition and natural language processing.",
      image: "/ai-course.jpg", // Replace with actual course image
    },
    {
      title: "Cloud Computing with AWS & Azure",
      description:
        "Learn to build, deploy, and manage applications in the cloud using Amazon Web Services and Microsoft Azure.",
      image: "/cloud-course.jpg", // Replace with actual course image
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Get hands-on experience in securing networks, systems, and applications from emerging cybersecurity threats.",
      image: "/security-course.jpg", // Replace with actual course image
    },
    {
      title: "Blockchain Development",
      description:
        "Understand blockchain technology and learn to develop decentralized applications (dApps) using smart contracts.",
      image: "/blockchain-course.jpg", // Replace with actual course image
    },
    {
      title: "DevOps with Docker & Kubernetes",
      description:
        "Learn DevOps principles and practices and work with tools like Docker and Kubernetes to automate deployments.",
      image: "/devops-course.jpg", // Replace with actual course image
    },
    {
      title: "React.js & Redux for Modern Web Development",
      description:
        "Master the React framework and Redux for building interactive UIs and managing application state effectively.",
      image: "/react-course.jpg", // Replace with actual course image
    },
    {
      title: "Data Science with Python",
      description:
        "Learn data analysis, visualization, and machine learning using Python, with libraries like Pandas, NumPy, and Matplotlib.",
      image: "/data-science-course.jpg", // Replace with actual course image
    },
  ];

  return (
    <section className="px-[100px] p-6 bg-gray-100">
      <h2 className="text-5xl text-center font-semibold mb-10 font-outfit text-purple-700">
        Popular Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="bg-blue-500 font-[Roboto] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-5 text-xl font-poppins">
        <div className="flex items-center gap-5">
          <p className="font-semibold underline">Want a customized course ? </p>
          <button className="bg-blue-500 text-white font-[Roboto] px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Get Customization
          </button>
        </div>
        <div className="flex items-center gap-5 mt-5 sm:mt-0">
          <p className="font-semibold underline">
            Want to explore more courses ?{" "}
          </p>
          <button className="bg-blue-500 text-white font-[Roboto] px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Click to know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
