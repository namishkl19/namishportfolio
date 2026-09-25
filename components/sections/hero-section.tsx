import Link from 'next/link';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

import { AnimatedButton } from '@/components/ui/animated-button';
import { Badge } from '@/components/ui/badge';
import { HeroBackground } from '@/components/visuals/hero-background';
import { ParticleBackground } from '@/components/visuals/particle-background';
import { siteConfig } from '@/data/site';

export function HeroSection() {
  return (
    <section className="hero-section">
      <HeroBackground />
      <ParticleBackground />
      <div className="hero-inner site-container">
        <div className="hero-copy">
          <div className="content-stack">
            <Badge variant="accent">
              Modern Engineering Portfolio
            </Badge>
            <p className="hero-kicker">{siteConfig.location}</p>
            <h1 className="hero-title">Namish Karthick L</h1>
            <p className="hero-description">Electrical & Electronics Engineer building embedded systems, hardware products, power electronics workflows, and research-driven tools.</p>
          </div>

          <div className="hero-actions">
            <AnimatedButton asChild variant="accent" size="lg">
              <Link href="/documents/resume.pdf">
                <Download />
                Download Resume
              </Link>
            </AnimatedButton>
            <AnimatedButton asChild variant="outline" size="lg">
              <Link href={siteConfig.github} target="_blank" rel="noreferrer">
                <SiGithub />
                GitHub
              </Link>
            </AnimatedButton>
            <AnimatedButton asChild variant="outline" size="lg">
              <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
                LinkedIn
              </Link>
            </AnimatedButton>
            <AnimatedButton asChild variant="secondary" size="lg">
              <Link href="/#contact">
                <Mail />
                Contact
              </Link>
            </AnimatedButton>
          </div>

          <div className="hero-meta">
            <span className="hero-meta-label">Focused on</span>
            <span>Embedded Systems</span>
            <span>Hardware Design</span>
            <span>Power Electronics</span>
          </div>
        </div>

        <div className="hero-aside">
          <div className="profile-card">
            <div className="profile-inner">
              <div className="profile-panel">
                <div>
                  <p className="section-kicker">Profile</p>
                  <h2 className="profile-title">Electrical & Electronics Engineering</h2>
                  <p className="profile-copy">
                    Final-year B.E. student with a strong interest in embedded systems, automation, and practical hardware development.
                  </p>
                </div>

                <div className="profile-grid">
                  <div className="stat-card">
                    <p className="stat-label">CGPA</p>
                    <p className="stat-value">8.41</p>
                  </div>
                  <div className="stat-card">
                    <p className="stat-label">Location</p>
                    <p className="stat-value">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pill pill-accent hero-floating-tag hero-floating-tag-top">
            Systems Thinking
          </div>
          <div className="pill hero-floating-tag hero-floating-tag-bottom">
            Hardware First
          </div>
        </div>
      </div>
    </section>
  );
}
