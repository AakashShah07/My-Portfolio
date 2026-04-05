export const personalInfo = {
  name: "Aakash Shah",
  title: "Full-Stack Developer — React.js · Next.js · Spring Boot · Node.js",
  subtitle: "Full-Stack Developer. React. Next.js. Spring Boot.",
  bio: "Detail-focused and result-driven Full-Stack Developer with experience building scalable web applications using React.js, Next.js, Spring Boot, and Node.js. Experienced in microservices, REST APIs, database integrations, and AWS cloud deployment.",
  shortBio:
    "I turn ideas into production-ready applications — from pixel-perfect frontends to rock-solid backends. Based in Bengaluru, I specialize in crafting full-stack solutions that are fast, scalable, and maintainable.",
  email: "aakashshah0707@gmail.com",
  phone: "+91-9151385113",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/AakashShah07",
  linkedin: "https://www.linkedin.com/in/aakash-shah-822070224/",
  leetcode: "https://leetcode.com/u/zwa8WbYdb8/",
};

export const navSections = [
  { label: "Hero", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 4, suffix: "", label: "Internships" },
  { value: 15, suffix: "+", label: "Certifications" },
];

export const techStack = {
  languages: ["Java", "JavaScript", "TypeScript", "Python"],
  frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Spring Boot", "Node.js", "Express.js", "RESTful APIs", "Microservices"],
  databases: ["MongoDB", "MySQL"],
  cloud: ["AWS EC2", "AWS S3", "AWS IAM"],
  tools: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "IntelliJ IDEA", "JIRA", "Linux"],
};

export const services = [
  {
    icon: "Globe",
    title: "Web Development",
    description:
      "Full-stack web applications built with React.js, Next.js, and Spring Boot. From responsive UIs to scalable enterprise platforms. I focus on clean architecture, performance optimization, and pixel-perfect implementations.",
  },
  {
    icon: "Server",
    title: "API & Backend",
    description:
      "Robust RESTful APIs and microservices with Spring Boot, Node.js, Express, MongoDB, and MySQL. Scalable architecture with proper authentication, authorization, and data validation built for growth.",
  },
  {
    icon: "Cloud",
    title: "Cloud & Deployment",
    description:
      "AWS cloud services including EC2, S3, and IAM for deploying and managing scalable cloud-based applications. Experience with CI/CD pipelines and production deployments.",
  },
  {
    icon: "Database",
    title: "Database Design",
    description:
      "Efficient database schemas with MongoDB and MySQL. From data modeling and query optimization to migrations and integrations with backend services.",
  },
];

export const projects = [
  {
    name: "CraftIDE",
    client: "AI-Assisted Code Tool",
    stack: ["Next.js", "TypeScript", "AI"],
    result: "Rapid UI prototyping and reusable component generation",
    description:
      "Built a Next.js & TypeScript application for rapid UI prototyping and reusable component generation. Features AI-powered code suggestions and real-time preview.",
    image: "/project_images/craftIDE.png",
    github: "https://github.com/AakashShah07/CraftIDE",
    link: "",
    layout: "left" as const,
  },
  {
    name: "Soul Script",
    client: "Spiritual Chat App",
    stack: ["TypeScript", "NLP", "Dynamic UI"],
    result: "Multi-character spiritual chat with context-sensitive NLP",
    description:
      "TypeScript-based application facilitating multi-character spiritual chat with context-sensitive NLP and dynamic UI elements. Supports multiple spiritual traditions and personalized conversations.",
    image: "/project_images/Scoul script imga.png",
    github: "https://github.com/AakashShah07/Soul-Script",
    link: "",
    layout: "right" as const,
  },
  {
    name: "Ayurveda AI",
    client: "AI Health Assistant",
    stack: ["Next.js", "AI", "Ayurveda", "NLP"],
    result:
      "Personalized health insights based on Dosha analysis & ancient Ayurvedic principles",
    description:
      "An AI-powered Ayurveda assistant that provides personalized health insights based on ancient Ayurvedic principles like Dosha (Vata, Pitta, Kapha), lifestyle analysis, and symptom evaluation.",
    image: "/project_images/ayurveda.png",
    github: "",
    link: "https://ayu-frontend-uuzj.vercel.app/",
    layout: "left" as const,
  },
];

export const experiences = [
  {
    role: "Product Development Intern",
    company: "TripzSearch",
    period: "Dec 2025 - Mar 2026",
    description:
      "Developed and optimized backend APIs for travel search and booking workflows using Node.js and Express. Integrated AWS services (EC2, S3, IAM) for scalable cloud deployment.",
    tech: ["Node.js", "Express", "AWS EC2", "AWS S3", "IAM"],
  },
  {
    role: "AWS re/Start Program",
    company: "Magic Bus Foundation",
    period: "Jul 2025 - Sep 2025",
    description:
      "Gained hands-on experience with AWS cloud services and cloud-based application development. Learned to deploy and manage applications on AWS cloud platforms.",
    tech: ["AWS", "Cloud Computing", "DevOps"],
  },
  {
    role: "Software Development Intern",
    company: "Intelliclick Services",
    period: "May 2025 - Jun 2025",
    description:
      "Created responsive pages and reusable UI components using Next.js. Added backend routes to a Node.js/Express school management application.",
    tech: ["Next.js", "Node.js", "Express"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Think Valley Academy",
    period: "Jun 2023 - Feb 2025",
    description:
      "Developed full-stack web applications with React.js (front end) and Spring Boot (back end). Integrated REST APIs with MySQL and MongoDB for data persistence.",
    tech: ["React.js", "Spring Boot", "MySQL", "MongoDB", "REST APIs"],
  },
];

export const education = [
  {
    degree: "Bachelor's in AI & Machine Learning",
    school: "Institute of Technology and Management",
    location: "Gorakhpur, UP",
    period: "2022 - 2025",
    grade: "SCGPA: 7.44",
  },
  {
    degree: "Diploma in Computer Science",
    school: "Maharana Pratap Polytechnic",
    location: "Gorakhpur, UP",
    period: "2019 - 2022",
    grade: "Percentage: 80.81%",
  },
];

export const certifications = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "2025",
  },
  {
    name: "IBM Cybersecurity Analyst Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
  },
  {
    name: "Big Data Internship",
    issuer: "Samsung",
    year: "",
  },
];

export const marqueeWords = [
  "React.js",
  "Next.js",
  "Spring Boot",
  "Node.js",
  "TypeScript",
  "Java",
  "MongoDB",
  "MySQL",
  "AWS",
  "REST APIs",
  "Microservices",
  "Tailwind CSS",
  "Git",
  "Express.js",
];
