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
      path: '@/fonts/CabinetGrotesk-Black.woff',
      weight: '800',
      style: 'normal',
    },
  ],
});
