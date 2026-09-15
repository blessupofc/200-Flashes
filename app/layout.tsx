import type { Metadata } from 'next';
import { Anton, Jost } from 'next/font/google';
import './globals.css';
import './mobile.css';

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton', display: 'swap' });
const jost = Jost({ subsets: ['latin'], variable: '--font-jost', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL('https://200-flashes.pages.dev'),
  title: '+200 Flashes Florais Fineline — R$ 27,90',
  description: 'Mais de 200 flashes florais fineline em PDF para tatuadores. Acesso imediato por R$ 27,90.',
  openGraph: { title: '+200 Flashes Florais Fineline', description: 'Acervo pronto para tatuadores.', images: ['/og.jpg'] },
  twitter: { card: 'summary_large_image', title: '+200 Flashes Florais Fineline', description: 'Acervo pronto para tatuadores.', images: ['/og.jpg'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head>
    <script id="utmify-utms-head" dangerouslySetInnerHTML={{ __html: '(function(){var u=document.createElement("script");u.src="https://cdn.utmify.com.br/scripts/utms/latest.js";u.async=true;u.defer=true;u.setAttribute("data-utmify-prevent-xcod-sck","");u.setAttribute("data-utmify-prevent-subids","");(document.head||document.documentElement).appendChild(u);})();' }} />
    <link rel="preload" as="image" href="/assets/responsive/hero-flashes-v2-720.webp" fetchPriority="high" />
    <script src="/checkout-attribution.js" defer />
  </head><body className={`${jost.variable} ${anton.variable}`}>
    {children}
    <script id="utmify-pixel-footer" dangerouslySetInnerHTML={{ __html: '(function(){window.pixelId="6aa382770d8a3946ae34d666";var p=document.createElement("script");p.src="https://cdn.utmify.com.br/scripts/pixel/pixel.js";p.async=true;p.defer=true;(document.head||document.documentElement).appendChild(p);})();' }} />
    <script id="microsoft-clarity-bootstrap" dangerouslySetInnerHTML={{ __html: '(function(){function loadClarity(){var t=document.createElement("script");t.async=true;t.src="https://www.clarity.ms/tag/yggu5wubv7";document.head.appendChild(t);}window.clarity=window.clarity||function(){(window.clarity.q=window.clarity.q||[]).push(arguments);};function schedule(){if(window.requestIdleCallback){window.requestIdleCallback(loadClarity,{timeout:2000});}else{setTimeout(loadClarity,0);}}if(document.readyState==="complete"){schedule();}else{window.addEventListener("load",schedule,{once:true});}})();' }} />
  </body></html>;
}