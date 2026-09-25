import { SectionHeading } from '@/components/sections/section-heading';
import { Timeline } from '@/components/timeline/timeline';
import { achievements } from '@/data/achievements';

export function AchievementsSection() {
  return (
    <section id="achievements" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Achievements"
        title="Competition outcomes and recognition"
        description="A concise timeline of awards and technical milestones."
      />
      <div>
        <Timeline items={achievements.map((item) => ({ title: item.title, subtitle: item.subtitle, description: item.subtitle, timeframe: item.timeframe }))} />
      </div>
      </div>
    </section>
  );
}
