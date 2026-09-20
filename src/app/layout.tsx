import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Coda Company | كودا كومباني - لتطوير السوفتوير والمواقع",
  description: "شركة كودا (Coda Company) لتطوير السوفتوير، المواقع الإلكترونية، والحلول البرمجية المتكاملة. نبني مستقبلك الرقمي بأحدث التقنيات. Coda Custom Software & Web Development.",
  keywords: [
    "كودا", "شركة كودا", "كودا كومباني", "كودا لتطوير السوفتوير", "كودا لتطوير المواقع", "كودا للبرمجيات", "كودا للحلول الرقمية",
    "Coda", "Coda Company", "Coda custom software", "Coda software solutions", "Coda Web Development", "Coda Software",
    "تصميم مواقع", "برمجة تطبيقات", "شركة تطوير برمجيات", "شركة برمجة", "برمجة وتصميم", "حلول برمجية",
    "Web development", "Software development", "Custom software", "App development", "UI/UX Design",
    "تصميم وتطوير مواقع احترافية", "بناء منصات رقمية", "تطبيقات ويب", "مواقع شركات", "تطوير تطبيقات"
  ],
  authors: [{ name: "Coda Company" }],
  creator: "Coda Company",
  publisher: "Coda Company",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    siteName: "Coda Company",
    title: "Coda Company | كودا لتطوير السوفتوير والمواقع",
    description: "شركة كودا (Coda Company) للحلول البرمجية وتطوير المواقع وتطبيقات الويب. نصنع لك التميز الرقمي.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coda Company | كودا كومباني",
    description: "نحن في كودا نبني حلول برمجية مبتكرة تلبي احتياجاتك الرقمية. Coda Custom Software.",
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
