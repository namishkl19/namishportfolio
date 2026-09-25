import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/sections/section-heading';
import { resumeSummary } from '@/data/resume';
import { skills } from '@/data/resume';

export function AboutSection() {
  return (
    <section id="about" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="About Me"
        title="Building dependable engineering systems from first principles"
        description="I design embedded and hardware solutions with an emphasis on clarity, testability, and real-world reliability."
      />
      <div className="section-grid-2">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent className="content-stack">
            <p>
              {resumeSummary.name} is an Electrical and Electronics Engineering student focused on embedded systems,
              hardware design, automation, and power electronics.
            </p>
            <p>
              The work emphasizes practical prototyping, measurement systems, and engineering research that can move from
              lab setup to field use.
            </p>
            <div className="responsive-columns-3">
              <div className="stat-card">
                <p className="stat-label">CGPA</p>
                <p className="stat-value"><AnimatedCounter value={8} suffix=".41" /></p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Focus</p>
                <p className="stat-value"><AnimatedCounter value={4} suffix="+" /></p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Projects</p>
                <p className="stat-value"><AnimatedCounter value={12} suffix="+" /></p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="chip-row">
              {skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </section>
  );
}
