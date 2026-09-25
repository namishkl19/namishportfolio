import { SectionHeading } from '@/components/sections/section-heading';
import { certifications } from '@/data/certifications';

export function CertificationsSection() {
  return (
    <section id="certifications" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Certifications"
        title="Learning checkpoints and technical credentials"
        description="Shown as badges for quick scanning by recruiters and interviewers."
      />
      <div className="pill-row">
        {certifications.map((certificate) => (
          <span key={certificate} className="pill pill-accent">
            {certificate}
          </span>
        ))}
      </div>
      </div>
    </section>
  );
}
