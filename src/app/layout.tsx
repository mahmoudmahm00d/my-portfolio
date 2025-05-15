import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';

import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mahmoud Mahmoud | .NET Software Engineer',
  description: 'Professional portfolio of Mahmoud Mahmoud, a .NET Software Engineer specializing in C#, ASP.NET Core, and cloud solutions.',
  keywords: '.NET, C#, Software Engineer, ASP.NET Core, Azure, Full Stack Developer',
  openGraph: {
    title: 'Mahmoud Mahmoud | .NET Software Engineer',
    description: 'Professional portfolio of Mahmoud Mahmoud, a .NET Software Engineer specializing in C#, ASP.NET Core, and cloud solutions.',
    url: 'https://johndoe.dev',
    siteName: 'Mahmoud Mahmoud Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahmoud Mahmoud - .NET Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}