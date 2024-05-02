import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const Circularstd = localFont({
  src: [
    {
      path: './fonts/circularstd/circularstd-book-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/circularstd/circularstd-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/circularstd/circularstd-bold-webfont.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/circularstd/circularstd-black-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'compleet labs - domo challenge',
  description: 'Domo challenge - frontend',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`text-color-text bg-color-background ${Circularstd.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
