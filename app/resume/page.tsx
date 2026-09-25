import Link from 'next/link';

export default function ResumePage() {
  return (
    <section className="site-section">
      <div className="site-container content-stack">
        <h1 className="page-title">Resume</h1>
        <p className="page-copy">Interactive PDF viewer will be added in the next iteration. For now, use the download link below.</p>
        <div className="section-actions">
          <Link href="/documents/resume.pdf" className="link-button link-button-primary button-lg">
            Download PDF
          </Link>
        </div>
      </div>
    </section>
  );
}
