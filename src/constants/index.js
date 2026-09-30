import {
  ai, backend, devops, fullstack, javascript, typescript, reactjs,
  nodejs, docker, jag, postgres, fastapi, python, openai, github,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "work", title: "Experience" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Backend Development", icon: backend },
  { title: "AI API Integration", icon: ai },
  { title: "Linux & Service Hosting", icon: devops },
  { title: "Full-Stack Projects", icon: fullstack },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "FastAPI", icon: fastapi },
  { name: "PostgreSQL", icon: postgres },
  { name: "TypeScript", icon: typescript },
  { name: "Node.js", icon: nodejs },
  { name: "Docker", icon: docker },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "OpenAI API", icon: openai },
  { name: "GitHub", icon: github },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "Kotlin", "JavaScript", "TypeScript", "SQL", "Bash", "C/C++"],
  },
  {
    title: "Backend & Applications",
    skills: ["FastAPI", "Node.js", "Express", "React", "REST APIs", "SQLAlchemy", "Alembic", "JWT", "Socket.IO", "Retrofit", "Jest"],
  },
  {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "Firebase Firestore", "MongoDB", "Neo4j", "Qdrant", "MinIO"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Docker", "Docker Compose", "Git", "GitHub Actions", "AWS EC2", "Firebase", "Jira", "Proxmox VE", "Debian Linux", "Caddy", "Uptime Kuma"],
  },
];

const experiences = [
  {
    title: "Technical Support Specialist",
    company_name: "Hanwha Vision America · Teaneck, NJ",
    initials: "H",
    iconBg: "#deccff",
    date: "September 2026 - Present",
    points: [
      "Support installers by consulting product documentation and troubleshooting product questions.",
      "Escalate issues beyond my support tier for further investigation and resolution.",
    ],
  },
  {
    title: "Administrative Assistant (Website & IT Support)",
    company_name: "Jag & Son Construction · Kearny, NJ",
    icon: jag,
    iconBg: "#deccff",
    date: "June 2025 - August 2026",
    points: [
      "Created a WordPress appointment-request page with an HTML form, allowing customers to submit their information online without an initial phone call.",
      "Assisted with Windows updates, storage cleanup, and troubleshooting office computers experiencing routine issues or slow performance.",
      "Scheduled appointments and prepared customer estimates and contracts.",
    ],
  },
];

const tagColors = ["blue-text-gradient", "green-text-gradient", "pink-text-gradient"];
const tagsFor = (...names) => names.map((name, index) => ({ name, color: tagColors[index % tagColors.length] }));

const projects = [
  {
    name: "TheoForge",
    context: "NJIT Capstone · Five-person team",
    description: "AI document-processing application that turns PDF content into structured data for downstream knowledge-graph processing.",
    points: [
      "Developed FastAPI endpoints for user management, guest sessions, and AI processing in a Docker Compose development environment.",
      "Integrated OpenAI APIs to extract entities, attributes, and relationships from PDFs into structured JSON.",
      "Implemented registration and login with bcrypt, expiring JWTs, and user/admin role assignment.",
      "Built asynchronous SQLAlchemy persistence and Alembic migrations for PostgreSQL user profiles, guest sessions, and conversation histories.",
    ],
    tags: tagsFor("Python", "FastAPI", "PostgreSQL", "OpenAI", "SQLAlchemy", "Alembic"),
    image: ai,
    source_code_link: null,
  },
  {
    name: "Coup Game (CoveyTown)",
    context: "Multiplayer web application · Two-person team",
    description: "A four-player Coup extension with real-time gameplay and server-side rule validation.",
    points: [
      "Co-developed seven game actions, turn validation, coin management, and player elimination using TypeScript and Node.js.",
      "Connected React gameplay controls to server-side logic through Socket.IO.",
      "Wrote Jest tests for game actions, player lifecycle, command handling, and client state updates.",
    ],
    tags: tagsFor("TypeScript", "Node.js", "React", "Socket.IO", "Jest"),
    image: fullstack,
    source_code_link: null,
  },
  {
    name: "PeakFit Workout Tracker",
    context: "Android application · Five-person team",
    description: "Workout-tracking app with account authentication, custom workouts, saved routines, and exercise discovery.",
    points: [
      "Developed the app's data layer, including registration, login, workout CRUD, and routine storage with Kotlin, Firebase Authentication, and Firestore.",
      "Integrated an exercise REST API using Retrofit and Kotlin coroutines to populate Firestore with exercise data.",
      "Supported workout discovery by exercise type, muscle group, and difficulty.",
    ],
    tags: tagsFor("Kotlin", "Firebase Auth", "Firestore", "Retrofit"),
    image: backend,
    source_code_link: null,
  },
  {
    name: "Proxmox Homelab Infrastructure",
    context: "Personal infrastructure project",
    description: "A self-hosted environment for game servers, game management, utility tools, and media services.",
    points: [
      "Deployed five LXC containers and virtual machines on Proxmox VE to separate service workloads.",
      "Configured Caddy as a reverse proxy and router port forwarding for public Minecraft and Valheim servers.",
      "Set up Uptime Kuma to monitor service availability; documented the infrastructure in GitHub.",
    ],
    tags: tagsFor("Proxmox VE", "Debian", "Docker", "Caddy", "Uptime Kuma"),
    image: devops,
    source_code_link: "https://github.com/KenfyV2/proxmox-homelab",
  },
];

export { services, technologies, skillGroups, experiences, projects };
