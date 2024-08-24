import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const cabinetGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/cabinet-grotesk/CabinetGrotesk-Black.woff',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Variable.eot',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Variable.woff',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Variable.woff2',
    },
  ],
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  adjustFontFallback: 'Arial',
  variable: '--font-satoshi',
});
