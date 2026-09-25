import { SectionHeading } from '@/components/sections/section-heading';
import { MasonryGallery } from '@/components/gallery/masonry-gallery';
import { galleryItems } from '@/data/gallery';

export function GallerySection() {
  return (
    <section id="gallery" className="site-section">
      <div className="site-container">
      <SectionHeading
        eyebrow="Gallery"
        title="A flexible gallery for future uploads"
        description="Ready for competition photos, certificates, project photos, and industrial training images."
      />
      <div>
        <MasonryGallery items={galleryItems} />
      </div>
      </div>
    </section>
  );
}
