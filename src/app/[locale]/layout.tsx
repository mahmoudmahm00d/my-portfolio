import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import LocaleProvider from "@/components/LocaleProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/routing";
import { getPortfolio } from "@/data/portfolio";

import "../globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const portfolio = getPortfolio(locale);
  const baseUrl = portfolio.seo.metadataBase || "https://example.com";

  return {
    metadataBase: new URL(baseUrl),
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    keywords: portfolio.seo.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
    },
    openGraph: {
      title: portfolio.seo.title,
      description: portfolio.seo.description,
      url: `${baseUrl}/${locale}`,
      siteName: portfolio.seo.title,
      images: [
        {
          url: portfolio.seo.ogImage || "/og-image.jpeg",
          width: 1200,
          height: 630,
          alt: portfolio.seo.title,
        },
      ],
      locale: locale === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: portfolio.seo.title,
      description: portfolio.seo.description,
      images: [portfolio.seo.ogImage || "/og-image.jpeg"],
      creator: portfolio.seo.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const portfolio = getPortfolio(locale);
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.title,
    description: portfolio.about,
    url: `${portfolio.seo.metadataBase}/${locale}`,
    sameAs: [
      portfolio.social.github,
      portfolio.social.linkedin,
      portfolio.social.twitter,
    ].filter(Boolean),
    knowsAbout: portfolio.skills.flatMap((s) => s.skills),
    dateModified: new Date().toISOString(),
  };

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            storageKey="theme-preference"
            defaultTheme="system"
            enableSystem
          >
            <LocaleProvider locale={locale} messages={messages}>
              <div className="flex min-h-screen flex-col">
                <Header locale={locale} />
                <main className="flex-1">{children}</main>
                <Toaster />
              </div>
            </LocaleProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
