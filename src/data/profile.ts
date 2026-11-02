export interface Profile {
  name: string;
  username: string;
  title: string;
  shortDescription: string;
  aboutDescription: string;
  education: string;
  major: string;
  university: string;
  graduationYear: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  profileImage: string;
  status: string;
  location: string;
  interests: string[];
}

export const profileData: Profile = {
  name: "Fawwaz S",
  username: "fawwazuhuy",
  title: "KeepSmileMeee",
  shortDescription: "Software Engineer | Computer Science Student | Web Development Enthusiast",
  aboutDescription:
    "Im a human - I am an aspiring software engineer and computer science student passionate about building clean, performant, and accessible web experiences. Focused on modern web development architectures, responsive design systems, and robust backends.",
  education: "Undergraduate Student",
  major: "Computer Engineering",
  university: "Institut Teknologi Sepuluh Nopember (ITS) / Department of Computer Engineering",
  graduationYear: "Expected 2026",
  email: "fawwazsyailendratama20@gmail.com",
  githubUrl: "https://github.com/fawwazuhuy",
  linkedinUrl: "https://github.com/fawwazuhuy",
  profileImage: "/images/profile.jpeg",
  status: "Unavailable due to current academic commitments, but open to future opportunities.",
  location: "Sidoarjo, Indonesia",
  interests: [
    "Full-Stack Web Engineering",
    "UI/UX Design Systems & Micro-Interactions",
    "Cloud Architecture & Scalable APIs",
    "Open Source Contribution & Developer Tooling",
    "Algorithmic Problem Solving & Competitive Programming",
  ],
};
