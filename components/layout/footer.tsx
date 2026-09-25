import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

const socials = [
  { href: 'https://github.com/namishkl19', label: 'GitHub', icon: SiGithub },
  { href: 'https://www.linkedin.com/in/namish-karthick-l', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'mailto:namishkl19@gmail.com', label: 'Email', icon: Mail },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-title">Namish Karthick L</p>
          <p className="footer-copy">
            Electrical and Electronics Engineering student building embedded systems, hardware design, and research-focused portfolio work.
          </p>
        </div>

        <div className="social-row">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link key={social.href} href={social.href} className="link-button link-button-outline button-sm">
                <Icon />
                {social.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
