import Link from 'next/link';

import { SectionHeading } from '@/components/sections/section-heading';
import { AnimatedButton } from '@/components/ui/animated-button';

export function ResumeSection() {
  return (
    <section id="resume" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Resume"
        title="Interactive resume access"
        description="Download the PDF now or use the dedicated resume page for a focused review experience."
      />
      <div className="section-actions">
        <AnimatedButton asChild>
          <Link href="/documents/resume.pdf">Download Resume</Link>
        </AnimatedButton>
        <AnimatedButton asChild variant="outline">
          <Link href="/resume">Open Resume Page</Link>
        </AnimatedButton>
      </div>
      </div>
    </section>
  );
}
