export const metadata = {
  title: 'My Projects | Developer Portfolio',
  description: 'Explore full-stack, frontend, and backend projects with repository links, live demos, and technical specifications.',
};
export const dynamic = 'force-dynamic';

import ProjectsContent from './ProjectsContent';
import { projectsData, type Project } from '../../data/projects';

async function getProjects(): Promise<Project[]> {
  const apiUrl = process.env.PORTFOLIO_API_URL ?? 'http://localhost:4000';

  try {
    const response = await fetch(`${apiUrl}/projects`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Portfolio API returned ${response.status}`);
    }
    return (await response.json()) as Project[];
  } catch (error) {
    console.error('Unable to load projects from API; using local fallback.', error);
    return projectsData;
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsContent projects={projects} />;
}
