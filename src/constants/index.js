import {
  ai,
  backend,
  devops,
  fullstack,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  docker,
  njit,
  jag,
  postgres,
  express,
  fastapi,
  python,
  openai,
  qdrant,
  aws,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: ai,
  },
  {
    title: "DevOps",
    icon: devops,
  },
  {
    title: "Full-Stack Engineer",
    icon: fullstack,
  },
];

const technologies = [
  // Backend (core identity)
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "FastAPI", icon: fastapi },
  { name: "PostgreSQL", icon: postgres },
  { name: "MongoDB", icon: mongodb },

  // Languages
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Python", icon: python },

  // AI / Data
  { name: "OpenAI", icon: openai },
  { name: "Qdrant", icon: qdrant },

  // DevOps
  { name: "Docker", icon: docker },
  { name: "AWS", icon: aws },
  { name: "Github", icon: github },

  // Supporting (keep minimal frontend)
  { name: "React JS", icon: reactjs },
];

const experiences = [
  {
    title: "Back-end Developer",
    company_name: "TheoForge Knowledge Discovery Platform NJIT",
    icon: njit,
    iconBg: "#deccff",
    date: "January 2025 - May 2025",
    points: [
      "Built and scaled a web-based AI knowledge platform (FastAPI, PostgreSQL, Neo4j, Qdrant), designing performant and distributed backend services for intelligent data discovery.",
      "Designed and implemented RESTful API services for user management, transcript processing, and knowledge graph creation; integrated JWT authentication and Dockerized deployment.",
      "Set up and configured supporting services including pgAdmin, MinIO object storage, and Neo4j/Qdrant dashboards for graph and vector database management.",
      "Enabled natural language querying over structured knowledge graphs by connecting FastAPI to OpenAI’s LLM endpoints.",
      "Applied Agile methodologies using Jira for task tracking, sprint planning, and collaborative development with CI/CD automation via GitHub Actions.",
    ],
  },
  {
    title: "Front-end Developer & Administrative Assistant",
    company_name: "Jag & Son Construction",
    icon: jag,
    iconBg: "#deccff",
    date: "June 2025 - Present",
    points: [
      "Built and customized a WordPress contact form to capture customer details and automatically send submissions to the company email, streamlining the appointment scheduling process.",
      "Managed and optimized Google Ads keywords, testing variations to identify high-performing terms that drove increased customer clicks and boosted website traffic.",
      "Served as the company’s secretary, managing client communications, scheduling appointments, and preparing contracts, contributing to smooth daily operations and client satisfaction.",
    ],
  },
];

const projects = [
  {
      name: "Coup Game Covey.Town",
      description:
        "Multiplayer web-based Coup game feature built inside Covey.Town.",
      points: [
        "Collaborated in a team of four to implement a Coup game using TypeScript, React, and Node.js. Enhanced the Covey.Town application by developing a frontend user interface and extending backend services, including modifications to the CoveyTownSocket for real-time gameplay interactions.",
        "Deployed Coup game feature on AWS EC2, configuring a scalable, distributed, and secure environment for real-time online multiplayer gameplay. Integrated database and service components to ensure seamless performance and reliability in an online multiplayer setting.",
      ],
      tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/KenfyV2",
  },
  {
      name: "PeakFit Workout Tracker Mobile App",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      points: [
        "Designed and developed a mobile fitness app with scalable backend integration (Firebase, Firestore), enabling browsing, creating, and tracking workout routines with support for favoriting and filtering based on type, equipment, and intensity.",
        "Implemented user authentication, custom workout creation, workout timers, and health tracking (e.g., step tracker) using Firebase Authentication, Firestore, Android sensor APIs, and integrated backend API services.",
        "Designed a structured tab navigation system with screens for routines, favorites, custom workouts, and fitness tracking.",
        "Applied Agile methodologies using GitHub Projects and milestone-based sprints, planning and tracking progress through three structured development phases.",
      ],
      tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Kotlin",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/KenfyV2",
  },
];

export { services, technologies, experiences, projects };