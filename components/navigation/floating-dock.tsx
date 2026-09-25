import Link from 'next/link';
import { FolderOpen, Home, Mail, UserRound, Zap } from 'lucide-react';

const dockItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/#about', label: 'About', icon: UserRound },
  { href: '/#projects', label: 'Projects', icon: FolderOpen },
  { href: '/#contact', label: 'Contact', icon: Mail },
  { href: '/#research', label: 'Research', icon: Zap },
];

export function FloatingDock() {
  return (
    <div className="floating-dock">
      <div className="social-row">
        {dockItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} aria-label={item.label} className="dock-link">
              <Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
