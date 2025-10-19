import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import '../styles/globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Phares Chibwaye - Portfolio',
  description: 'Personal portfolio of Phares Chibwaye - Design & Sound',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`bg-[#111111] ${ibmPlexMono.variable}`}>{children}</body>
    </html>
  );
}
