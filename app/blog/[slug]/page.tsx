import { notFound } from 'next/navigation';
import Link from 'next/link';

const posts = [
  { slug: 'embedded-systems-first-principles', title: 'Embedded Systems First Principles', content: 'This MDX placeholder will later be swapped for parsed content.' },
  { slug: 'matlab-for-engineering-workflows', title: 'MATLAB for Engineering Workflows', content: 'This MDX placeholder will later be swapped for parsed content.' },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="site-section">
      <div className="site-container content-stack">
        <Link href="/blog" className="text-link">
          Back to blog
        </Link>
        <h1 className="page-title">{post.title}</h1>
        <p className="page-copy">{post.content}</p>
      </div>
    </article>
  );
}
