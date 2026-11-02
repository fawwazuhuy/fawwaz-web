export interface SkillItem {
  name: string;
  level?: string;
  iconName?: string;
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, performant, and accessible interfaces with modern frameworks.",
    icon: "Layout",
    skills: [
      { name: "[SKILL 1]", isPlaceholder: true },
      { name: "React 19 & Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / Semantic Web" },
      { name: "CSS3 / Modern Flex & Grid" },
      { name: "State Management & React Hooks" },
      { name: "Responsive & Mobile-First Design" },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing robust APIs, authentication mechanisms, and server architecture.",
    icon: "Server",
    skills: [
      { name: "[SKILL 2]", isPlaceholder: true },
      { name: "Node.js & Express" },
      { name: "RESTful API Architecture" },
      { name: "PostgreSQL & Relational DBs" },
      { name: "MongoDB & Document Stores" },
      { name: "JWT & Session Authentication" },
      { name: "ORM & Query Builders (Prisma, Drizzle)" },
      { name: "API Rate Limiting & Validation" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Core languages applied across algorithms, client apps, and system scripting.",
    icon: "Code2",
    skills: [
      { name: "[SKILL 3]", isPlaceholder: true },
      { name: "TypeScript" },
      { name: "JavaScript (ESNext)" },
      { name: "Python" },
      { name: "C / C++" },
      { name: "SQL (PostgreSQL / MySQL)" },
      { name: "Java (OOP Principles)" },
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Version control, build pipelines, testing suites, and cloud deployment platforms.",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub Workflow" },
      { name: "Vite & Turbopack" },
      { name: "Docker & Container Basics" },
      { name: "Vercel & Cloud Run Deployment" },
      { name: "Postman & API Testing" },
      { name: "Linux CLI & Bash Scripting" },
      { name: "Figma to Code Implementation" },
      { name: "ESLint & Prettier Standards" },
    ],
  },
];
