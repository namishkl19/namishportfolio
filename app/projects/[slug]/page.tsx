import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Link2 } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="site-section">
      <div className="site-container content-stack">
        <Link href="/projects" className="text-link">
          <ArrowLeft /> Back to projects
        </Link>

        <div className="content-stack">
          <div>
            <p className="section-kicker">Project Detail</p>
            <h1 className="page-title">{project.title}</h1>
            <p className="page-copy page-copy-wide">{project.summary}</p>
          </div>

          <div className="section-grid-2">
            <Card>
              <CardHeader><CardTitle>Overview</CardTitle></CardHeader>
              <CardContent className="page-copy">{project.summary}</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Architecture</CardTitle></CardHeader>
              <CardContent className="page-copy">{project.architecture}</CardContent>
            </Card>
          </div>

          <div className="section-grid-2">
            <Card>
              <CardHeader><CardTitle>Problem Statement</CardTitle></CardHeader>
              <CardContent className="page-copy">{project.problem}</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Solution</CardTitle></CardHeader>
              <CardContent className="page-copy">{project.solution}</CardContent>
            </Card>
          </div>

          <div className="responsive-columns-3 project-stats-grid">
            <Card>
              <CardHeader><CardTitle>Technologies</CardTitle></CardHeader>
              <CardContent className="chip-row">
                {project.technologies.map((item) => <span key={item} className="chip">{item}</span>)}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Features</CardTitle></CardHeader>
              <CardContent className="content-stack">
                {project.features.map((feature) => <p key={feature} className="page-copy">• {feature}</p>)}
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Challenges</CardTitle></CardHeader>
              <CardContent className="content-stack">
                {project.challenges.map((challenge) => <p key={challenge} className="page-copy">• {challenge}</p>)}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader><CardTitle>Future Scope</CardTitle></CardHeader>
            <CardContent className="page-copy">{project.futureScope}</CardContent>
          </Card>

          <div className="section-actions">
            {project.github ? (
              <Link href={project.github} className="link-button link-button-outline button-sm">
                <SiGithub /> GitHub
              </Link>
            ) : null}
            {project.demo ? (
              <Link href={project.demo} className="link-button link-button-outline button-sm">
                <Link2 /> Demo
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
