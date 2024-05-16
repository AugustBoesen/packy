import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PACKY | Visionäärit',
  description: 'Demo for the Software Engineering course sprint week',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={montserrat.className}>
        <Header />
        <Image
          src={'/mainbg.jpg'}
          alt='mainbg'
          width={1920}
          height={1080}
          className='blur-3xl opacity-50 absolute -z-50 max-h-[90vh]'
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
