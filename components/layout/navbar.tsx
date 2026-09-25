import Link from 'next/link';
import { FileDown, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/layout/theme-toggle';

const navItems = [
  { href: '/#hero', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#education', label: 'Education' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label="Home">
          <span className="brand-mark">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">NK.</span>
        </Link>

        <nav className="site-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link href="/documents/resume.pdf" className="button button-outline button-sm header-resume-button">
            <FileDown size={16} />
            <span>Resume</span>
          </Link>
          <Button variant="ghost" size="icon" className="button-icon" aria-label="Open menu">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}
