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
    title: "Backend Software Engineer",
    company_name: "TheoForge Knowledge Discovery Platform NJIT",
    icon: njit,
    iconBg: "#deccff",
    date: "January 2025 - May 2025",
    points: [
      "AI-Powered Knowledge Discovery Platform: Built and scaled distributed backend services using FastAPI, PostgreSQL, Neo4j, and Qdrant, reducing average query response time by 35–45% through optimized data retrieval and indexing strategies.",
      "REST API & Authentication System: Developed 15+ RESTful API endpoints for user management, transcript processing, and knowledge graph generation using FastAPI, implementing JWT authentication and Dockerized deployment to support secure and consistent service access.",
      "Backend Infrastructure & Data Systems: Engineered storage and database infrastructure using MinIO, PostgreSQL, and Neo4j/Qdrant, managing thousands of structured and vectorized records and improving data access efficiency across services.",
      "Natural Language Query System (LLM Integration): Integrated OpenAI APIs with FastAPI to enable natural language querying over structured knowledge graphs, reducing manual data lookup effort by 30% and improving usability for non-technical users.",
      "CI/CD & Development Workflow: Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40% and improving development iteration speed within Agile workflows using Jira.",
    ],
  },
  {
    title: "Technical Operations Assistant (Software Development) ",
    company_name: "Jag & Son Construction",
    icon: jag,
    iconBg: "#deccff",
    date: "June 2025 - Present",
    points: [
      "Customer Inquiry Automation System: Developed and customized a WordPress contact form using HTML and WordPress, reducing manual scheduling effort by 40%.",
      "Operations Workflow Management: Coordinated customer scheduling and contract processing, improving response time and streamlining client intake and appointment workflows.",
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
