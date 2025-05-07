import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import Providers from "@/app/providers/Provider";
import ScrollTop from "@/components/layout/Scroll";

// Noto Sans KR 폰트 설정
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-kr",
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
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* 페이지 아이콘 */}
        <link rel="icon" href="/icons/lol2.png" sizes="any" />
      </head>
      <body className={`${notoSansKR.variable} antialiased`}>
        {/* React Query 및 테마 설정 */}
        <Providers>
          {/* 공통 헤더 */}
          <Header />
          {/* 페이지 콘텐츠 */}
          <main className="pt-12">{children}</main>
          {/* 스크롤 복구 버튼 */}
          <ScrollTop />
        </Providers>
      </body>
    </html>
  );
}
