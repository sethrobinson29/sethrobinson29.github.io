import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ProjectCard';
import { profile } from '../../data/profile';

const Projects = () => (
  <section id="projects" className="mb-20">
    <SectionHeading>Projects</SectionHeading>
    <div className="grid gap-6 sm:grid-cols-2">
      {profile.projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
