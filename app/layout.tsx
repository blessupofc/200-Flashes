import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://200-flashs.pages.dev'),
  title: '+200 Flashs Florais Fineline — De R$197 por R$37',
  description: 'Mais de 200 flashs florais fineline em PDF para tatuadores. Acesso imediato, 5x de R$8,19 ou R$37 à vista.',
  openGraph: { title: '+200 Flashs Florais Fineline', description: 'Acervo pronto para tatuadores.', images: ['/og.jpg'] },
  twitter: { card: 'summary_large_image', title: '+200 Flashs Florais Fineline', description: 'Acervo pronto para tatuadores.', images: ['/og.jpg'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
