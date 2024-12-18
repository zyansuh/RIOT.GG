import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import Providers from "@/app/providers/Provider";
import ScrollTop from "@/components/layout/Scroll";
import { ThemeProvider } from "next-themes";

// Pretendard 폰트 설정
const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

/**
 * 메타데이터 설정
 * - 페이지 제목과 설명을 포함.
 */
export const metadata: Metadata = {
  title: "League Of Legends",
  description: "Riot API를 활용한 리그 오브 레전드 정보 앱 만들기",
};

/**
 * RootLayout Component
 * - 모든 페이지에 적용되는 레이아웃 컴포넌트입니다.
 * - 공통 헤더, 테마, 폰트, 스크롤 복구 기능을 제공합니다.
 * @param {Object} props - 레이아웃 속성
 * @param {React.ReactNode} props.children - 하위 컴포넌트들
 * @returns {JSX.Element} 루트 레이아웃 컴포넌트
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 페이지 아이콘 */}
        <link rel="icon" href="/icons/lol2.png" sizes="any" />
      </head>
      <body className={`${pretendard.variable} antialiased`}>
        {/* React Query 및 테마 설정 */}
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="wrap">
              {/* 공통 헤더 */}
              <Header />
              {/* 페이지 콘텐츠 */}
              <main className="pt-12">{children}</main>
            </div>
            {/* 스크롤 복구 버튼 */}
            <ScrollTop />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}