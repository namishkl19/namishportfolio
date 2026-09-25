import Link from 'next/link';

import { SectionHeading } from '@/components/sections/section-heading';

const posts = [
  { slug: 'embedded-systems-first-principles', title: 'Embedded Systems First Principles', excerpt: 'A practical framework for designing reliable embedded products.' },
  { slug: 'matlab-for-engineering-workflows', title: 'MATLAB for Engineering Workflows', excerpt: 'How MATLAB supports simulation, validation, and control studies.' },
];

export default function BlogPage() {
  return (
    <section className="site-section">
      <div className="site-container">
      <SectionHeading eyebrow="Blog" title="Engineering articles" description="MDX posts for tutorials, process notes, and project write-ups." />
      <div className="content-stack">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card page-card">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-description">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
