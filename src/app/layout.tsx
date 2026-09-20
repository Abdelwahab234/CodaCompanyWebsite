import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://codeasoftwarehouse.space"),
  title: {
    default: "CodeA Software House | كودا - شركة تطوير البرمجيات والمواقع",
    template: "%s | CodeA Software House",
  },
  description: "شركة كودا (CodeA / Code A Software House) - شريكك الهندسي الموثوق لتطوير البرمجيات وتصميم المواقع الإلكترونية الاحترافية وتطبيقات الجوال والحلول الرقمية المتكاملة. كودا سوفت وير هاوس.",
  keywords: [
    // English Variations
    "CodeA",
    "Code A",
    "codea",
    "code a",
    "codeA software",
    "codeA software house",
    "Code A Software House",
    "CodeA Soft Warehouse",
    "codeasoftwarehouse",
    "codeasoftwarehouse.space",
    "Coda",
    "Coda Company",
    "Coda Software",
    "Coda Software House",
    "Software Development",
    "Software House",
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Full Stack Development",
    "Cloud Solutions",
    "UI/UX Design",
    "ERP Systems",
    "Next.js Development",
    // Arabic Variations
    "كودا",
    "كود ايه",
    "كود إيه",
    "كودا سوفت وير",
    "كودا سوفت وير هاوس",
    "كود ايه سوفت وير هاوس",
    "شركة كودا",
    "كودا كومباني",
    "تطوير البرمجيات",
    "شركة تطوير برمجيات",
    "سوفت وير هاوس",
    "شركة برمجة",
    "تصميم مواقع",
    "برمجة تطبيقات",
    "تطوير مواقع الويب",
    "تصميم وتطوير مواقع احترافية",
    "حلول برمجية متكاملة",
    "برمجة متجر إلكتروني",
    "أنظمة إدارة الشركات ERP",
    "شركات برمجة في مصر والوطن العربي",
  ],
  authors: [{ name: "CodeA Software House", url: "https://codeasoftwarehouse.space" }],
  creator: "CodeA Software House",
  publisher: "CodeA Software House",
  alternates: {
    canonical: "https://codeasoftwarehouse.space",
    languages: {
      "ar": "https://codeasoftwarehouse.space",
      "en": "https://codeasoftwarehouse.space",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    alternateLocale: ["en_US"],
    url: "https://codeasoftwarehouse.space",
    siteName: "CodeA Software House | كودا لتطوير البرمجيات",
    title: "CodeA Software House | كودا - شركة تطوير البرمجيات والمواقع",
    description: "شركة كودا (CodeA Software House) للحلول البرمجية المتكاملة وتطوير المواقع وتطبيقات الموبايل. نبني مستقبلك الرقمي بأعلى كفاءة.",
    images: [
      {
        url: "/icon.jpg",
        width: 800,
        height: 800,
        alt: "CodeA Software House Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeA Software House | كودا لتطوير البرمجيات",
    description: "شركة كودا (CodeA Software House) لتطوير البرمجيات والحلول الرقمية وتطبيقات الويب.",
    images: ["/icon.jpg"],
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
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://codeasoftwarehouse.space/#organization",
      "name": "CodeA Software House",
      "alternateName": [
        "CodeA",
        "Code A",
        "codea",
        "code a",
        "codeA software",
        "codeA software house",
        "Code A Software House",
        "CodeA Soft Warehouse",
        "codeasoftwarehouse.space",
        "كودا",
        "شركة كودا",
        "كودا كومباني",
        "كودا سوفت وير",
        "كودا سوفت وير هاوس",
        "كود ايه",
        "كود إيه",
        "كود ايه سوفت وير هاوس"
      ],
      "url": "https://codeasoftwarehouse.space",
      "logo": "https://codeasoftwarehouse.space/icon.jpg",
      "image": "https://codeasoftwarehouse.space/icon.jpg",
      "description": "شركة كودا (CodeA Software House) المتخصصة في تطوير البرمجيات وتصميم وبرمجة المواقع والأنظمة وتطبيقات الموبايل.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": ["Arabic", "English"]
      },
      "sameAs": [
        "https://github.com/Abdelwahab234/CodaCompanyWebsite"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://codeasoftwarehouse.space/#website",
      "url": "https://codeasoftwarehouse.space",
      "name": "CodeA Software House",
      "publisher": {
        "@id": "https://codeasoftwarehouse.space/#organization"
      },
      "inLanguage": ["ar", "en"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://codeasoftwarehouse.space/#service",
      "name": "CodeA Software House",
      "url": "https://codeasoftwarehouse.space",
      "priceRange": "$$",
      "image": "https://codeasoftwarehouse.space/icon.jpg",
      "description": "خدمات هندسية متكاملة لتطوير البرمجيات، تصميم المواقع، وتطبيقات الموبايل."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-theme="light" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
