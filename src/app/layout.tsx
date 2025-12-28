import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll, CustomCursor, GoogleAnalytics } from "@/components";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl = "https://midastouch.it";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Midas Touch — Realizziamo Ciò Che Altri Non Possono",
    template: "%s | Midas Touch",
  },
  description:
    "Sviluppo software premium, soluzioni AI, design e consulenza strategica. Trasformiamo idee ambiziose in prodotti digitali d'eccellenza. Roma, Italia.",
  keywords: [
    "sviluppo software",
    "web development",
    "app development",
    "AI solutions",
    "machine learning",
    "design",
    "branding",
    "UI/UX",
    "consulenza IT",
    "Roma",
    "Italia",
    "software house",
    "digital agency",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Midas Touch", url: siteUrl }],
  creator: "Midas Touch",
  publisher: "Midas Touch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "it-IT": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Midas Touch",
    title: "Midas Touch — Realizziamo Ciò Che Altri Non Possono",
    description:
      "Sviluppo software premium, soluzioni AI, design e consulenza strategica. Trasformiamo idee ambiziose in prodotti digitali d'eccellenza.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midas Touch — Realizziamo Ciò Che Altri Non Possono",
    description:
      "Sviluppo software premium, soluzioni AI, design e consulenza strategica.",
    creator: "@midastouch",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Midas Touch",
    url: siteUrl,
    logo: `${siteUrl}/images/logo-dark.png`,
    description:
      "Sviluppo software premium, soluzioni AI, design e consulenza strategica.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Arrigo Davila 61",
      addressLocality: "Roma",
      postalCode: "00179",
      addressCountry: "IT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+39-392-924-0999",
      contactType: "customer service",
      email: "info@midastouch.it",
      availableLanguage: ["Italian", "English"],
    },
    sameAs: [
      "https://linkedin.com/company/midastouch",
      "https://github.com/midastouch",
    ],
    vatID: "IT17203491000",
    foundingDate: "2019",
    founders: [
      {
        "@type": "Person",
        name: "Midas Touch Team",
      },
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 41.9028,
        longitude: 12.4964,
      },
      geoRadius: "50000",
    },
    knowsAbout: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "Artificial Intelligence",
      "Machine Learning",
      "UI/UX Design",
      "Brand Identity",
      "Digital Transformation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web & App Development",
            description: "Pixel-perfect websites, progressive web apps, and native mobile applications.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Design & Branding",
            description: "Distinctive visual identities and user experiences.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Automation",
            description: "Intelligent solutions from predictive analytics to conversational AI.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software & CRM",
            description: "Tailored systems that automate operations and scale with business.",
          },
        },
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Midas Touch",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased grain`}>
        <GoogleAnalytics />
        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
