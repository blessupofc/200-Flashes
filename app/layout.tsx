import type { Metadata } from 'next';
import './globals.css';
import './mobile.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://200-flashes.pages.dev'),
  title: '+200 Flashes Florais Fineline — R$ 37,90',
  description: 'Mais de 200 flashes florais fineline em PDF para tatuadores. Acesso imediato por R$ 37,90.',
  openGraph: { title: '+200 Flashes Florais Fineline', description: 'Acervo pronto para tatuadores.', images: ['/og.jpg'] },
  twitter: { card: 'summary_large_image', title: '+200 Flashes Florais Fineline', description: 'Acervo pronto para tatuadores.', images: ['/og.jpg'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head>
    <script id="microsoft-clarity-bootstrap" dangerouslySetInnerHTML={{ __html: '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","yggu5wubv7");' }} />
    <script id="utmify-bootstrap" dangerouslySetInnerHTML={{ __html: '(function(){window.pixelId="6aa382770d8a3946ae34d666";var p=document.createElement("script");p.src="https://cdn.utmify.com.br/scripts/pixel/pixel.js";p.async=true;p.defer=true;document.head.appendChild(p);var u=document.createElement("script");u.src="https://cdn.utmify.com.br/scripts/utms/latest.js";u.async=true;u.defer=true;u.setAttribute("data-utmify-prevent-xcod-sck","");u.setAttribute("data-utmify-prevent-subids","");document.head.appendChild(u);})();' }} />
    <script src="/checkout-attribution.js" defer />
  </head><body>{children}</body></html>;
}
