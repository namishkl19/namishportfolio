import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  github?: string;
}

export function ProjectCard({ title, description, tags, href, github }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <CardHeader>
        <div className="project-card-top">
          <div className="project-title-row">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <ArrowUpRight className="project-arrow" />
        </div>
      </CardHeader>
      <CardContent className="content-stack">
        <div className="project-tags">
          {tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="project-card-link-row">
          <Link href={href} className="link-button button-ghost button-sm">
            View Project
            <ArrowUpRight className="project-arrow project-arrow-small" />
          </Link>
          {github ? (
            <Link href={github} className="link-button button-ghost button-sm">
              <SiGithub />
              GitHub
            </Link>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
