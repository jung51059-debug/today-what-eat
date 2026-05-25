import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  APP_NAME,
  DESCRIPTION,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: APP_NAME,
    title: APP_NAME,
    description: DESCRIPTION,
    images: [
      {
        url: "/promo.png",
        width: 1200,
        height: 630,
        alt: `${APP_NAME} 앱 홍보 이미지`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: DESCRIPTION,
    images: ["/promo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink antialiased">
        <SiteHeader variant="default" />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
