import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Namish Karthick L Portfolio',
    short_name: 'Namish Portfolio',
    description: 'Electrical and Electronics engineering portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563EB',
    icons: [],
  };
}
