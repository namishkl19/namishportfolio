'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

import { AnimatedButton } from '@/components/ui/animated-button';
import { SectionHeading } from '@/components/sections/section-heading';
import { siteConfig } from '@/data/site';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Contact"
        title="Start a conversation"
        description="Use the form below or reach out directly through email and social links."
      />
      <div className="contact-layout">
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="contact-fields contact-fields-two">
            <input className="contact-field" placeholder="Your name" />
            <input className="contact-field" placeholder="Your email" />
          </div>
          <input className="contact-field" placeholder="Subject" style={{ marginTop: '0.9rem' }} />
          <textarea className="contact-textarea" placeholder="Message" style={{ marginTop: '0.9rem' }} />
          <div className="section-actions" style={{ marginTop: '0.9rem' }}>
            <AnimatedButton type="submit">
              <Send />
              Send Message
            </AnimatedButton>
            {submitted ? <p className="page-copy contact-status">Message captured locally. Connect EmailJS or Resend in the next step.</p> : null}
          </div>
        </form>

        <div className="contact-panel">
          <div className="content-stack">
            <p className="section-kicker contact-panel-kicker">Direct Links</p>
            <div className="content-stack contact-panel-copy">
              <p className="hero-meta"><Mail /> {siteConfig.email}</p>
              <p className="hero-meta"><MapPin /> {siteConfig.location}</p>
            </div>
          </div>
          <div className="content-stack" style={{ marginTop: '1.5rem' }}>
            <Link href={siteConfig.linkedin} className="contact-link">
              <FaLinkedin /> LinkedIn
            </Link>
            <Link href={siteConfig.github} className="contact-link">
              <SiGithub /> GitHub
            </Link>
            <Link href="/documents/resume.pdf" className="contact-link">
              <Mail /> Resume Download
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
