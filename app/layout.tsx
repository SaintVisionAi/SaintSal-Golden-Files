// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SAINTSAL™',
  description: 'Divine AI Companion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
