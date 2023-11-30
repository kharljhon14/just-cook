import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Just Cook',
  description: 'Just Cook landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
