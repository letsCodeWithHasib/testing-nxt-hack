import React from "react";

const itCourses = [
  {
    course: "AWS, Azure, and Docker",
    topics: [
      "AWS fundamentals (EC2, S3, Lambda, etc.)",
      "Azure services (Virtual Machines, Azure Functions, etc.)",
      "Docker containerization basics",
      "Cloud computing architecture and management",
      "Deploying applications on AWS and Azure",
    ],
  },
  {
    course: "Data Science and Machine Learning",
    topics: [
      "Python programming for data science",
      "Data cleaning and preprocessing (Pandas, NumPy)",
      "Data visualization (Matplotlib, Seaborn)",
      "Supervised and unsupervised learning algorithms",
      "Model evaluation and performance metrics (Scikit-learn)",
      "Deep learning using TensorFlow and PyTorch",
      "Machine learning model deployment",
    ],
  },
  {
    course: "Cryptocurrency & Data Science",
    topics: [
      "Blockchain technology basics",
      "Cryptocurrencies and their market analysis",
      "Collecting and processing blockchain data",
      "Predictive modeling for cryptocurrency trends",
      "Using machine learning techniques for crypto analysis",
    ],
  },
  {
    course: "Power BI & Tableau",
    topics: [
      "Data visualization using Power BI and Tableau",
      "Data import and transformation",
      "Creating interactive dashboards and reports",
      "Data-driven decision making with visual analytics",
    ],
  },
  {
    course: "Web Development (Frontend)",
    topics: [
      "HTML5, CSS3, and JavaScript fundamentals",
      "Responsive web design with CSS Grid and Flexbox",
      "Client-side frameworks (React, Angular, Vue.js)",
      "JavaScript ES6+ features",
      "Front-end build tools (Webpack, Babel)",
      "API integration and asynchronous JavaScript (AJAX, Fetch)",
      "State management with Redux",
    ],
  },
  {
    course: "Web Development (Backend)",
    topics: [
      "Node.js and Express.js basics",
      "RESTful API design and development",
      "Database integration (MongoDB, PostgreSQL)",
      "Authentication and authorization (JWT, OAuth)",
      "Server-side frameworks and tools",
      "WebSockets and real-time communication",
    ],
  },
  {
    course: "Full Stack Development",
    topics: [
      "MERN Stack (MongoDB, Express.js, React, Node.js)",
      "SQL and NoSQL databases",
      "User authentication and session management",
      "Deployment (Heroku, AWS, DigitalOcean)",
      "Version control with Git and GitHub",
    ],
  },
  {
    course: "DevOps and CI/CD",
    topics: [
      "Introduction to DevOps culture and practices",
      "Version control with Git and GitHub",
      "CI/CD pipelines (Jenkins, GitLab CI, CircleCI)",
      "Docker and container orchestration (Kubernetes)",
      "Infrastructure as Code (Terraform, Ansible)",
      "Automated testing and monitoring",
    ],
  },
  {
    course: "Cybersecurity",
    topics: [
      "Introduction to cybersecurity",
      "Network security fundamentals",
      "Encryption and hashing algorithms",
      "Vulnerability assessment and penetration testing",
      "Security best practices for web development",
      "Cloud security (AWS, Azure)",
      "Incident response and disaster recovery",
    ],
  },
  {
    course: "Mobile App Development",
    topics: [
      "Native mobile app development (Android, iOS)",
      "Cross-platform mobile development (React Native, Flutter)",
      "UI/UX design for mobile apps",
      "API integration with mobile apps",
      "Mobile app testing and debugging",
      "App deployment to Google Play and App Store",
    ],
  },
  {
    course: "Artificial Intelligence",
    topics: [
      "AI concepts and algorithms",
      "Natural language processing (NLP)",
      "Computer vision techniques",
      "Reinforcement learning",
      "AI in robotics",
      "Building AI models using TensorFlow and PyTorch",
    ],
  },
  {
    course: "Database Management",
    topics: [
      "Relational databases (MySQL, PostgreSQL)",
      "NoSQL databases (MongoDB, Cassandra)",
      "Database design and normalization",
      "SQL query writing and optimization",
      "Indexing, transactions, and ACID properties",
      "Database backup and recovery",
    ],
  },
  {
    course: "Networking",
    topics: [
      "Networking fundamentals (OSI model, TCP/IP)",
      "IP addressing and subnetting",
      "Routing and switching",
      "Network protocols (HTTP, FTP, DNS, DHCP)",
      "Network security concepts",
      "Wi-Fi, VPNs, and firewalls",
    ],
  },
  {
    course: "Software Testing and QA",
    topics: [
      "Manual testing basics",
      "Automated testing tools (Selenium, JUnit, TestNG)",
      "Test-driven development (TDD)",
      "Continuous integration and testing",
      "Performance testing and load testing",
      "Bug tracking and reporting",
    ],
  },
];

const ITCoursesComponent = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-semibold text-center mb-8">IT Courses</h1>
      {itCourses.map((course, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold">{course.course}</h2>
          <ul className="list-disc pl-6 mt-4">
            {course.topics.map((topic, idx) => (
              <li key={idx} className="text-lg text-gray-700">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ITCoursesComponent;
