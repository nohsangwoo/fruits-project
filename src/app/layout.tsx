import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.junilgong.com'),
  title: "럿지네 과일 장수 - 농장직송 신선한 과일 전문점",
  description: "전국 50+ 농장 직계약으로 신선한 과일을 당일 배송! 딸기, 사과, 수박 등 프리미엄 과일을 합리적 가격에 만나보세요.",
  keywords: "과일가게, 신선한과일, 농장직송, 당일배송, 프리미엄과일, 럿지네, 딸기, 사과, 수박, 오렌지, 과일배송, 온라인과일주문",
  authors: [{ name: "럿지네 과일 장수" }],
  creator: "럿지네 과일 장수",
  publisher: "럿지네 과일 장수",
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
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.junilgong.com/og-image.png",
    siteName: "럿지네 과일 장수",
    title: "럿지네 과일 장수 - 농장직송 신선한 과일 전문점",
    description: "농장에서 직접 가져온 신선한 과일을 당일 배송으로 제공하는 프리미엄 과일 전문점입니다.",
    images: [
      {
        url: "/hero-background.jpeg",
        width: 1200,
        height: 630,
        alt: "럿지네 과일 장수 - 신선한 과일들",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "럿지네 과일 장수 - 농장직송 신선한 과일 전문점",
    description: "농장에서 직접 가져온 신선한 과일을 당일 배송으로 제공하는 프리미엄 과일 전문점입니다.",
    images: ["/hero-background.jpeg"],
  },
  alternates: {
    canonical: "https://www.junilgong.com",
  },
  other: {
    "geo.region": "KR-11",
    "geo.placename": "서울",
    "geo.position": "37.5665;126.9780",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
