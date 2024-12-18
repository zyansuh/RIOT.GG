import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

/**
 * Header Component
 * - 페이지 상단에 고정된 헤더 컴포넌트입니다.
 * - 로고와 내비게이션 메뉴를 포함합니다.
 * @returns {JSX.Element} 헤더 UI
 */
export default function Header() {
  return (
    <header className="flex items-center justify-center gap-32 p-3 border-b dark:border-b-white border-t-0 fixed w-full dark:bg-black bg-white z-10">
      {/* 로고 영역 */}
      <h1>
        <Link href="/">
          <Image
            aria-hidden
            src="/icons/lol.png"
            alt="홈 아이콘"
            width={20}
            height={20}
            className="dark:invert"
          />
        </Link>
      </h1>
      {/* 내비게이션 메뉴 */}
      <Nav />
    </header>
  );
}