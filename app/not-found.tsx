import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="site-section">
      <div className="site-container content-stack not-found-shell">
        <p className="section-kicker">404</p>
        <h1 className="page-title">Page not found</h1>
        <p className="page-copy">The requested page does not exist or is still being built.</p>
        <Link href="/" className="link-button link-button-primary button-lg">
        Return home
      </Link>
      </div>
    </main>
  );
}
