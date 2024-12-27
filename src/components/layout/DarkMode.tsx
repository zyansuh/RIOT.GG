"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme(); // 테마 감지

  return (
    <header
      className={`flex items-center justify-between p-3 border-b ${
        theme === "dark" ? "border-b-white bg-black text-white" : "border-b-black bg-white text-black"
      } fixed w-full z-10`}
    >
      {/* 로고 */}
      <h1>
        <Link href="/">
          <Image
            aria-hidden
            src="/icons/lol.png"
            alt="홈 아이콘"
            width={20}
            height={20}
            className={theme === "dark" ? "invert" : ""}
          />
        </Link>
      </h1>

      {/* 내비게이션 메뉴 */}
      <Nav />

      {/* 다크 모드 버튼 */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center justify-center p-2 rounded bg-transparent transition-colors duration-300"
      >
        {theme === "dark" ? (
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a9.931 9.931 0 00-7.071 2.929A9.931 9.931 0 002 12a9.931 9.931 0 002.929 7.071A9.931 9.931 0 0012 22a9.931 9.931 0 007.071-2.929A9.931 9.931 0 0022 12a9.931 9.931 0 00-2.929-7.071A9.931 9.931 0 0012 2zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.72 15.457l-.062-.059a9.935 9.935 0 01-1.858-3.654 9.91 9.91 0 01-.25-2.729 9.938 9.938 0 01.433-2.56 1.501 1.501 0 00-2.42-1.578 12.048 12.048 0 00-2.847 2.358 11.952 11.952 0 00-1.825 3.127 12.048 12.048 0 00-.465 2.31 1.5 1.5 0 01-1.492 1.318c-5.523 0-10 4.477-10 10a1.5 1.5 0 001.5 1.5h19.05a1.5 1.5 0 001.173-2.593A11.978 11.978 0 0021.72 15.457z" />
          </svg>
        )}
      </button>
    </header>
  );
}
