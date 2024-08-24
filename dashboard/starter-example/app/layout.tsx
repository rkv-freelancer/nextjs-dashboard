import '@/app/ui/global.css';
import { satoshi } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} antialiased`}>{children}</body>
    </html>
  );
}
