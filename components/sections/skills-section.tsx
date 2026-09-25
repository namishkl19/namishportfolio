import { SectionHeading } from '@/components/sections/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillGroups = [
  { name: 'Embedded Systems', items: ['ESP32', 'Arduino', 'STM32', 'Embedded C'] },
  { name: 'Hardware & PCB', items: ['PCB Design', 'KiCAD', 'Soldering', 'Hardware Debugging'] },
  { name: 'Research & Simulation', items: ['MATLAB', 'Control Systems', 'Power Electronics', 'Predictive Analytics'] },
  { name: 'Programming', items: ['Python', 'Java'] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Skills"
        title="A practical toolset for embedded hardware and engineering analysis"
        description="Grouped for recruiters and interviewers, with room to expand as the portfolio grows."
      />
      <div className="skills-grid responsive-columns-4">
        {skillGroups.map((group) => (
          <Card key={group.name}>
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
            </CardHeader>
            <CardContent className="content-stack">
              {group.items.map((skill, index) => (
                <div key={skill} className="skill-row">
                  <div className="skill-head">
                    <span>{skill}</span>
                    <span>{85 - index * 8}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${85 - index * 8}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
}
