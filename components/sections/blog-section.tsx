import Link from 'next/link';

import { SectionHeading } from './section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const blogTopics = ['Engineering Articles', 'MATLAB Tutorials', 'Embedded Systems', 'ESP32', 'STM32', 'Power Electronics', 'Career'];

export function BlogSection() {
  return (
    <section id="blog" className="site-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Blog"
          title="MDX-powered notes and engineering writing"
          description="Built to support future articles, tutorials, and project deep-dives."
        />
        <div className="section-grid-2">
          <Card>
            <CardHeader>
              <CardTitle>Topics</CardTitle>
            </CardHeader>
            <CardContent className="chip-row">
              {blogTopics.map((topic) => (
                <span key={topic} className="chip">
                  {topic}
                </span>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Latest Posts</CardTitle>
            </CardHeader>
            <CardContent className="content-stack">
              <p>Use the blog index to browse MDX posts and future article releases.</p>
              <Link href="/blog" className="text-link">
                Visit Blog Index
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
