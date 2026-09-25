import Image from 'next/image';

export interface GalleryItem {
  src: string;
  alt: string;
  title?: string;
}

export function MasonryGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <figure key={`${item.src}-${item.alt}`} className="gallery-item card">
          <div className="gallery-image">
            <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} />
          </div>
          {item.title ? <figcaption className="gallery-caption">{item.title}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
