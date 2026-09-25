import Link from 'next/link';

import { SectionHeading } from '@/components/sections/section-heading';
import { ProjectCard } from '@/components/project/project-card';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <section className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Projects"
        title="All projects"
        description="Browse detailed engineering projects with reusable data-driven cards."
      />
      <div className="responsive-columns-3 project-stats-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} title={project.title} description={project.summary} tags={project.technologies} href={`/projects/${project.slug}`} github={project.github} />
        ))}
      </div>
      <div className="section-actions">
        <Link href="/" className="text-link">
          Back home
        </Link>
      </div>
      </div>
    </section>
  );
}
