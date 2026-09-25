import Link from 'next/link';

import { SectionHeading } from '@/components/sections/section-heading';
import { ProjectCard } from '@/components/project/project-card';
import { AnimatedButton } from '@/components/ui/animated-button';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Projects"
        title="Selected engineering projects"
        description="Each project page is data-driven and ready to expand with diagrams, photos, and documentation."
      />
      <div className="responsive-columns-3 project-stats-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.summary}
            tags={project.technologies}
            href={`/projects/${project.slug}`}
            github={project.github}
          />
        ))}
      </div>
      <div className="section-actions">
        <AnimatedButton asChild variant="outline" size="lg">
          <Link href="/projects">View all projects</Link>
        </AnimatedButton>
      </div>
      </div>
    </section>
  );
}
