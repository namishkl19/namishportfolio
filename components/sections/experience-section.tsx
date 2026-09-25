import { SectionHeading } from '@/components/sections/section-heading';
import { Timeline } from '@/components/timeline/timeline';
import { experience } from '@/data/experience';

export function ExperienceSection() {
  return (
    <section id="experience" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Experience"
        title="Hands-on industry and training exposure"
        description="A timeline of embedded systems, manufacturing training, and practical engineering work."
      />
      <div>
        <Timeline items={experience} />
      </div>
      </div>
    </section>
  );
}
