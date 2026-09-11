import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://200-flashes.pages.dev'),
  title: '+200 Flashes Florais Fineline — R$ 37,90',
  description: 'Mais de 200 flashes florais fineline em PDF para tatuadores. Acesso imediato por R$ 37,90.',
  openGraph: { title: '+200 Flashes Florais Fineline', description: 'Acervo pronto para tatuadores.', images: ['/og.jpg'] },
  twitter: { card: 'summary_large_image', title: '+200 Flashes Florais Fineline', description: 'Acervo pronto para tatuadores.', images: ['/og.jpg'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }



