import Link from 'next/link';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Zap } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

import { achievements } from '@/data/achievements';
import { certifications } from '@/data/certifications';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { researchAreas } from '@/data/research';
import { resumeSummary, skills } from '@/data/resume';
import { siteConfig } from '@/data/site';
import { HeroBackground } from '@/components/visuals/hero-background';

const contacts = [
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/namish-karthick-l', href: siteConfig.linkedin },
  { label: 'GitHub', value: 'github.com/namishkl19', href: siteConfig.github },
];

const projectHighlights = projects.slice(0, 3);

const heroStats = [
  { label: 'Projects', value: String(projects.length), detail: 'hardware builds' },
  { label: 'Experience', value: String(experience.length), detail: 'industry stops' },
  { label: 'Certifications', value: String(certifications.length), detail: 'focused courses' },
  { label: 'Research Areas', value: String(researchAreas.length), detail: 'active interests' },
];

const focusAreas = [
  {
    title: 'Embedded Systems',
    description: 'ESP32, Arduino, STM32, and sensor-driven automation with firmware that is practical on real hardware.',
  },
  {
    title: 'Hardware Design',
    description: 'Circuit design, PCB workflows, soldering, validation, and documentation for lab-to-field builds.',
  },
  {
    title: 'Power & Control',
    description: 'Power electronics, motor systems, and control logic designed for reliability and measurable performance.',
  },
];

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="section-heading reveal">
      <p className="section-kicker">&lt;{title.replace(/\s+/g, '_')}&gt;</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="landing-page">
      <section id="hero" className="landing-hero">
        <HeroBackground className="landing-backdrop" />
        <div className="landing-hero-inner site-container">
          <div className="landing-hero-copy">
            <span className="status-pill reveal" style={{ animationDelay: '40ms' }}>
              <Zap size={15} />
              System Status: Online
            </span>
            <h1 className="landing-name reveal" style={{ animationDelay: '120ms' }}>{resumeSummary.name}</h1>
            <h2 className="landing-role reveal" style={{ animationDelay: '200ms' }}>
              {resumeSummary.headline}
              <span className="landing-cursor" aria-hidden="true">|</span>
            </h2>
            <p className="landing-description reveal" style={{ animationDelay: '280ms' }}>{resumeSummary.subheadline}</p>

            <div className="landing-actions reveal" style={{ animationDelay: '360ms' }}>
              <Link href="#projects" className="button button-accent button-lg">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link href="#contact" className="button button-outline button-lg">
                Contact Me
              </Link>
              <Link href="/documents/resume.pdf" className="button button-ghost button-lg">
                <Download size={18} />
                Resume
              </Link>
            </div>

            <div className="landing-meta reveal" style={{ animationDelay: '440ms' }}>
              <span>
                <MapPin size={15} />
                {siteConfig.location}
              </span>
              <span>Embedded Systems</span>
              <span>Hardware Design</span>
              <span>Power Electronics</span>
            </div>
          </div>

          <aside className="signal-panel" aria-label="Portfolio overview panel">
            <div className="signal-panel-shell reveal float-slow" style={{ animationDelay: '180ms' }}>
              <div className="signal-header">
                <div className="signal-avatar">
                  <Sparkles size={18} />
                  <span>NKL</span>
                </div>
                <div>
                  <p className="signal-title">Design Console</p>
                  <p className="signal-copy">Focused on practical engineering systems and field-ready prototypes.</p>
                </div>
              </div>

              <div className="signal-grid">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="signal-stat">
                    <span className="signal-stat-label">{stat.label}</span>
                    <strong>{stat.value}</strong>
                    <span>{stat.detail}</span>
                  </div>
                ))}
              </div>

              <div className="signal-readout">
                <div>
                  <span>Active Track</span>
                  <strong>{resumeSummary.headline}</strong>
                </div>
                <div>
                  <span>Primary Stack</span>
                  <strong>ESP32 · Arduino · PCB</strong>
                </div>
                <div>
                  <span>Latest Build</span>
                  <strong>{projectHighlights[0].title}</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <main className="landing-main site-container">
        <section id="about" className="landing-section">
          <SectionTitle title="About Me" />
          <div className="landing-grid landing-grid-2">
            <article className="glass-card glass-card-large reveal" style={{ animationDelay: '80ms' }}>
              <p className="profile-summary-label">&lt;Profile_Summary&gt;</p>
              <p className="landing-copy-block">
                Final-year Electrical & Electronics Engineering student with hands-on experience designing embedded systems using ESP32 and Arduino, building PCB-based automation, and working on hardware-focused projects involving sensing, control, and power electronics.
              </p>
              <div className="profile-meta">
                <span>
                  <MapPin size={14} />
                  {siteConfig.location}
                </span>
                <span>GPA 8.41</span>
                <span>{resumeSummary.education.year}</span>
              </div>
              <div className="quick-link-row">
                <Link href={siteConfig.github} target="_blank" rel="noreferrer" className="link-chip">
                  <SiGithub />
                  GitHub
                </Link>
                <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="link-chip">
                  <FaLinkedin />
                  LinkedIn
                </Link>
                <Link href={`mailto:${siteConfig.email}`} className="link-chip">
                  <Mail />
                  Email
                </Link>
              </div>
            </article>

            <div className="landing-stack">
              {focusAreas.map((area, index) => (
                <article key={area.title} className="glass-card reveal" style={{ animationDelay: `${140 + index * 80}ms` }}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="landing-section">
          <SectionTitle title="Education & Certifications" />
          <div className="landing-grid landing-grid-2">
            <article className="glass-card reveal" style={{ animationDelay: '80ms' }}>
              <h3 className="section-subtitle">Education Timeline</h3>
              <div className="timeline-list">
                <div className="timeline-item">
                  <span className="timeline-time">2023 - 2027</span>
                  <div>
                    <strong>{resumeSummary.education.degree}</strong>
                    <p>{resumeSummary.education.institute}</p>
                    <span>CGPA {resumeSummary.education.cgpa}</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-time">2022</span>
                  <div>
                    <strong>Higher Secondary Certificate</strong>
                    <p>Jawahar Higher Secondary School</p>
                    <span>Science stream</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-time">2020</span>
                  <div>
                    <strong>Secondary School Leaving Certificate</strong>
                    <p>Jawahar Higher Secondary School</p>
                    <span>Foundation in mathematics and science</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="glass-card reveal" style={{ animationDelay: '160ms' }}>
              <h3 className="section-subtitle">Domain Certifications</h3>
              <div className="stacked-cards">
                {certifications.map((item) => (
                  <div key={item} className="mini-card">
                    <strong>{item}</strong>
                    <span>Applied learning in hardware and systems engineering.</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="landing-section">
          <SectionTitle title="Experience" />
          <div className="glass-card reveal" style={{ animationDelay: '80ms' }}>
            <div className="timeline-list timeline-list-wide">
              {experience.map((item) => (
                <article key={`${item.title}-${item.subtitle}`} className="timeline-item">
                  <span className="timeline-time">{item.timeframe}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.subtitle}</p>
                    <span>{item.description}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="landing-section">
          <SectionTitle title="Projects" />
          <div className="project-grid">
            {projectHighlights.map((project, index) => (
              <article key={project.slug} className="project-card reveal" style={{ animationDelay: `${80 + index * 90}ms` }}>
                <span className="project-kicker">Core Project</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="chip-row">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="project-chip">
                      {technology}
                    </span>
                  ))}
                </div>
                <ul className="project-notes">
                  <li>{project.solution}</li>
                  <li>{project.features[0]}</li>
                </ul>
                <Link href={`/projects/${project.slug}`} className="project-link">
                  Read Architecture
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="landing-section">
          <SectionTitle title="Skills" />
          <div className="landing-grid landing-grid-2">
            <article className="glass-card reveal" style={{ animationDelay: '80ms' }}>
              <h3 className="section-subtitle">Technical Stack</h3>
              <div className="skill-grid">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="glass-card reveal" style={{ animationDelay: '160ms' }}>
              <h3 className="section-subtitle">Research Areas</h3>
              <div className="skill-grid">
                {researchAreas.map((area) => (
                  <span key={area} className="skill-pill skill-pill-accent">
                    {area}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="landing-section">
          <SectionTitle title="Achievements" />
          <div className="landing-grid landing-grid-2">
            <article className="glass-card reveal" style={{ animationDelay: '80ms' }}>
              <div className="stacked-cards">
                {achievements.map((achievement) => (
                  <div key={`${achievement.title}-${achievement.subtitle}`} className="mini-card mini-card-inline">
                    <div>
                      <strong>{achievement.title}</strong>
                      <span>{achievement.subtitle}</span>
                    </div>
                    <span>{achievement.timeframe}</span>
                  </div>
                ))}
              </div>
            </article>

            <article id="contact" className="glass-card reveal" style={{ animationDelay: '160ms' }}>
              <p className="profile-summary-label">&lt;Contact_Channel&gt;</p>
              <h3 className="section-subtitle">Let’s build something practical.</h3>
              <p className="landing-copy-block">
                Open to embedded systems, hardware prototyping, automation, and engineering-focused roles where reliable execution matters.
              </p>
              <div className="landing-contact-list">
                {contacts.map((contact) => (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="contact-row"
                  >
                    <span>{contact.label}</span>
                    <strong>{contact.value}</strong>
                  </Link>
                ))}
              </div>
              <div className="landing-actions landing-actions-tight">
                <Link href={`mailto:${siteConfig.email}`} className="button button-accent">
                  Send Email
                  <ArrowRight size={18} />
                </Link>
                <Link href="/documents/resume.pdf" className="button button-outline">
                  <Download size={18} />
                  Download Resume
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
