import { cn } from '../../lib/utils';

export interface TimelineItem {
  title: string;
  subtitle?: string;
  description: string;
  timeframe: string;
}

export function Timeline({ items, className }: { items: TimelineItem[]; className?: string }) {
  return (
    <div className={cn('timeline', className)}>
      {items.map((item) => (
        <article key={`${item.title}-${item.timeframe}`} className="timeline-item">
          <span className="timeline-dot" />
          <p className="timeline-time">{item.timeframe}</p>
          <h3 className="timeline-title">{item.title}</h3>
          {item.subtitle ? <p className="timeline-subtitle">{item.subtitle}</p> : null}
          <p className="timeline-copy">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
