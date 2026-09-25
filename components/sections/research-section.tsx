import { SectionHeading } from '@/components/sections/section-heading';
import { researchAreas } from '@/data/research';

export function ResearchSection() {
  return (
    <section id="research" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Research"
        title="Research directions that support the engineering work"
        description="Focused on areas that connect embedded hardware, simulation, and data-driven analysis."
      />
      <div className="pill-row">
        {researchAreas.map((area) => (
          <span key={area} className="pill">
            {area}
          </span>
        ))}
      </div>
      </div>
    </section>
  );
}
