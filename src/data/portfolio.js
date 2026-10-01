// Centralized Portfolio Data Configuration

export const PERSONAL_INFO = {
  name: "VIDHUN KRISHNA S",
  logoText: "VK",
  title: "Full-Stack Developer | C++ Programmer | React | Spring Boot | Express",
  headline: "BUILDING FULL-STACK SYSTEMS THAT SOLVE REAL PROBLEMS.",
  subtitle: "Strong C++ programmer focused on problem solving and DSA, with hands-on experience building modern web applications using React, Spring Boot and Express.",
  email: "vidhunkrishna903@gmail.com",
  location: "Coimbatore, Tamil Nadu, India",
  college: "Sri Krishna College of Technology",
  degree: "Bachelor of Engineering — Computer Science & Engineering",
  cgpa: "8.3 / 10",
  resumeUrl: "#resume", // Clicking triggers resume download/modal
  socials: {
    github: "https://github.com/vidhunkrishna",
    linkedin: "https://www.linkedin.com/in/vidhun-krishna-b20a48325/",
    leetcode: "https://leetcode.com/u/jdHyOpae0h/",
    email: "mailto:vidhunkrishna903@gmail.com"
  }
};

export const QUICK_STATS = [
  { value: "C++", label: "Problem Solving & DSA" },
  { value: "FULL-STACK", label: "Development & Systems" },
  { value: "8.3 / 10", label: "CGPA Academic Record" },
  { value: "3", label: "Developer Internships" }
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a Computer Science Engineering student and developer focused on problem solving, Data Structures & Algorithms, and full-stack software development.",
    "My strongest programming language is C++, while I also have practical experience with Java, JavaScript, React, Spring Boot, Express, and modern database systems.",
    "I enjoy building complete applications from architectural design and backend APIs down to sleek, interactive frontend interfaces rather than working on isolated components alone."
  ],
  keyStrengths: [
    "Algorithmic Problem Solving (C++)",
    "Full-Stack Web Development",
    "RESTful API Design & Integration",
    "Relational & NoSQL Databases",
    "Authentication & Security (JWT, OAuth)",
    "Clean Code & System Design Principles"
  ]
};

export const SERVICES = [
  {
    id: "01",
    title: "PROBLEM SOLVING",
    description: "DSA, algorithms, and competitive-style problem solving with C++ focusing on efficiency and optimal data structures."
  },
  {
    id: "02",
    title: "FRONTEND DEVELOPMENT",
    description: "Responsive React interfaces with modern UI design, smooth micro-animations, and clean component architectures."
  },
  {
    id: "03",
    title: "BACKEND DEVELOPMENT",
    description: "Robust REST APIs and backend micro-services using Spring Boot (Java) and Express (Node.js)."
  },
  {
    id: "04",
    title: "FULL-STACK APPLICATIONS",
    description: "End-to-end applications connecting responsive frontends, backend business logic, authentication, and database layers."
  },
  {
    id: "05",
    title: "DATABASE SYSTEMS",
    description: "Designing, querying, and managing relational databases like PostgreSQL and MySQL alongside NoSQL MongoDB."
  },
  {
    id: "06",
    title: "AUTHENTICATION & SECURITY",
    description: "Secure user authentication flows using JWT, Firebase Authentication, and Google OAuth integrations."
  }
];

export const SKILLS_DATA = {
  programming: [
    { name: "C++", level: "Primary", featured: true },
    { name: "Java", level: "Proficient", featured: false },
    { name: "Python", level: "Intermediate", featured: false },
    { name: "JavaScript", level: "Proficient", featured: false }
  ],
  frontend: [
    { name: "React" },
    { name: "React Router" },
    { name: "Tailwind CSS" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "HTML5 Canvas" },
    { name: "Framer Motion" }
  ],
  backend: [
    { name: "Spring Boot" },
    { name: "REST APIs" },
    { name: "Node.js" },
    { name: "Express" }
  ],
  databases: [
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" }
  ],
  authentication: [
    { name: "JWT" },
    { name: "Firebase Authentication" },
    { name: "Google OAuth" }
  ],
  tools: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Axios" },
    { name: "JPA / Hibernate" }
  ],
  coreCs: [
    { name: "Data Structures & Algorithms" },
    { name: "Object-Oriented Programming" },
    { name: "Operating Systems" },
    { name: "Computer Networks" }
  ]
};

// Repository URLs (editable constants as specified)
export const DODGE_GAME_GITHUB = "https://github.com/vidhunkrishna";
export const TUTOR_APPLICATION_GITHUB = "https://github.com/vidhunkrishna";
export const CAR_VIEWER_GITHUB = "https://github.com/vidhunkrishna";

export const PROJECTS = [
  {
    id: "dodge-game",
    title: "Dodge Game",
    category: "Full-Stack 2D Game",
    description: "A full-stack 2D survival game built with React, HTML5 Canvas, Spring Boot and PostgreSQL. It includes multiple difficulty levels, dynamic difficulty progression, power-ups, obstacles, authentication, player statistics and an online leaderboard.",
    tags: ["React", "HTML5 Canvas", "Spring Boot", "PostgreSQL"],
    liveUrl: "https://dodge-game-fullstack.vercel.app/",
    githubUrl: DODGE_GAME_GITHUB,
    featured: true
  },
  {
    id: "tutor-application",
    title: "Tutor Application System",
    category: "Full-Stack Platform",
    description: "A full-stack tutor application platform for managing tutor profiles, applications and related information.",
    tags: ["React", "Spring Boot", "REST API", "Database"],
    liveUrl: null, // NOT deployed yet
    githubUrl: TUTOR_APPLICATION_GITHUB,
    featured: true
  },
  {
    id: "car-viewer",
    title: "Car Viewer Web Application",
    category: "Frontend Web Application",
    description: "A responsive React application for browsing cars using reusable components and responsive layouts.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://carfandom.vercel.app/",
    githubUrl: CAR_VIEWER_GITHUB,
    featured: true
  }
];

export const EXPERIENCES = [
  {
    id: "knite-infotech",
    company: "KNITE INFOTECH",
    role: "Project Intern Trainee — Full Stack Development",
    period: "June – July 2026",
    location: "On-site / Trainee Program",
    description: "Worked on full-stack web application development, including frontend/backend work, REST APIs, database integration, Git/version control and collaborative development."
  },
  {
    id: "cube-n-solutions",
    company: "CubeNSolutions",
    role: "Frontend Development Intern",
    period: "May – June 2026",
    location: "Internship",
    description: "Worked on responsive frontend interfaces using HTML, CSS and JavaScript, focusing on reusable UI development, semantic markup, consistent styling and responsive layouts."
  },
  {
    id: "xyzon-innovations",
    company: "Xyzon Innovations Pvt Ltd",
    role: "React Frontend Intern",
    period: "May 28, 2026 – August 28, 2026",
    location: "Virtual | Grade A Certificate",
    description: "React frontend internship focused on building frontend interfaces and working with React-based development."
  }
];

export const EDUCATION = {
  degree: "Bachelor of Engineering",
  field: "Computer Science and Engineering",
  institution: "Sri Krishna College of Technology",
  location: "Coimbatore, Tamil Nadu",
  cgpa: "8.3 / 10",
  badge: "High Academic Standing"
};

export const CERTIFICATIONS = [
  {
    title: "Multi-Paradigm Programming with Modern C++",
    issuer: "Infosys Springboard",
    date: "Nov 24, 2024",
    category: "PROGRAMMING",
    featured: true
  },
  {
    title: "The Modern C++ Challenger",
    issuer: "Infosys Springboard",
    date: "Nov 24, 2024",
    category: "PROGRAMMING",
    featured: true
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Infosys Springboard",
    date: "Feb 18, 2025",
    category: "PROBLEM SOLVING",
    featured: true
  },
  {
    title: "Fundamentals of Java Programming",
    issuer: "Coursera / Board Infinity",
    date: "Mar 11, 2025",
    category: "PROGRAMMING",
    featured: true
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "Jul–Aug 2025",
    grade: "Elite — 73%",
    category: "DATA & AI",
    featured: true
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "Jan–Apr 2026",
    category: "DATA & AI",
    featured: false
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "July 1, 2025",
    category: "DATA & AI",
    featured: false
  },
  {
    title: "Introduction to Networking",
    issuer: "NVIDIA / Coursera",
    date: "Aug 16, 2025",
    category: "CLOUD & NETWORKING",
    featured: false
  },
  {
    title: "Database Structures and Management with MySQL",
    issuer: "Meta / Coursera",
    date: "Apr 19, 2025",
    category: "CORE CS",
    featured: true
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan / Coursera",
    date: "Jun 26, 2025",
    category: "PROGRAMMING",
    featured: false
  },
  {
    title: "AWS Networking Basics",
    issuer: "AWS Training & Certification",
    date: "July 21, 2026",
    category: "CLOUD & NETWORKING",
    featured: false
  },
  {
    title: "Selenium 101",
    issuer: "TestMu AI / LambdaTest",
    date: "Aug 10, 2026",
    category: "TESTING",
    featured: false
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Feb 20, 2025",
    category: "PROBLEM SOLVING",
    featured: true
  }
];
