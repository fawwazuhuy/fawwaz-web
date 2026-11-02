export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  category?: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile & Tools';
  highlights?: string[];
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "[PROJECT NAME 1]",
    description:
      "A modern full-stack web application designed with high performance, modular architecture, and real-time state synchronization. Features clean RESTful API design, authentication, and responsive UI.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js"],
    githubUrl: "https://github.com/[GITHUB_USERNAME]/project-1",
    demoUrl: "https://project-1-demo.vercel.app",
    featured: true,
    category: "Full Stack",
    highlights: [
      "Responsive layout with smooth micro-interactions",
      "Type-safe client-server communication",
      "Lightweight state management and caching",
    ],
  },
  {
    id: 2,
    title: "[PROJECT NAME 2]",
    description:
      "An intuitive and responsive user interface component dashboard built to showcase design system consistency, accessible forms, data visualization cards, and seamless dark-mode experience.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/[GITHUB_USERNAME]/project-2",
    demoUrl: "https://project-2-demo.vercel.app",
    featured: true,
    category: "Frontend",
    highlights: [
      "WCAG 2.1 AA accessibility compliant UI patterns",
      "Dynamic filtering and live search capabilities",
      "Zero-dependency custom data visualizations",
    ],
  },
  {
    id: 3,
    title: "[PROJECT NAME 3]",
    description:
      "A scalable backend microservice and API gateway featuring token-based authentication, database ORM integration, rate limiting, and automated unit and integration test suites.",
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/[GITHUB_USERNAME]/project-3",
    featured: true,
    category: "Backend",
    highlights: [
      "Secure JWT authentication and role-based authorization",
      "Relational database migrations and index optimization",
      "Dockerized development and staging environments",
    ],
  },
  {
    id: 4,
    title: "University Course Portal System",
    description:
      "An academic portal for university course management, assignment submissions, automated deadline tracking, and grading metrics for students and teaching assistants.",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/[GITHUB_USERNAME]/course-portal",
    demoUrl: "https://course-portal-demo.vercel.app",
    featured: false,
    category: "Full Stack",
    highlights: [
      "Student assignment tracker and file submission pipeline",
      "Automated deadline notifications and calendar view",
    ],
  },
  {
    id: 5,
    title: "Developer CLI & Productivity Toolkit",
    description:
      "A command-line interface tool built in TypeScript for automating project scaffolding, git commit hygiene, semantic versioning, and environment verification.",
    technologies: ["Node.js", "TypeScript", "CLI", "Shell"],
    githubUrl: "https://github.com/[GITHUB_USERNAME]/dev-toolkit-cli",
    featured: false,
    category: "Mobile & Tools",
    highlights: [
      "Cross-platform execution on Linux, macOS, and Windows",
      "Interactive command prompt wizard with chalk formatting",
    ],
  },
];
