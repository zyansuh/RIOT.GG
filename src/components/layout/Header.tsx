"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
// import { useTheme } from "next-themes";

export default function Header() {
  //const { theme } = useTheme(); // 테마 감지

  return (
    <header
      className={`flex items-center justify-center gap-32 p-3 border-b fixed w-full z-10`}
    >
      <h1>
        <Link href="/">
          <Image
            aria-hidden
            src="/icons/lol.png"
            alt="홈 아이콘"
            width={20}
            height={20}
            //className={theme === "dark" ? "invert" : ""}
          />
        </Link>
      </h1>
      <Nav />
    </header>
  );
}
