import { Navbar } from '@/components/layout/navbar';
import { SiteChrome } from '@/components/layout/site-chrome';

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SiteChrome navbar={<Navbar />}>
      <main>{children}</main>
    </SiteChrome>
  );
}
