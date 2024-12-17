import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import Providers from "@/app/providers/Provider";
import ScrollTop from "@/components/layout/Scroll";
import { ThemeProvider } from "next-themes";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "League Of Legends",
  description: "Riot API를 활용한 리그 오브 레전드 정보 앱 만들기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 페이지 아이콘 */}
        <link rel="icon" href="/icons/lol.png" sizes="any" />
      </head>
      <body className={`${pretendard.variable} antialiased`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="wrap">
              <Header />
              <main className="pt-12">{children}</main>
            </div>
            <ScrollTop />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
