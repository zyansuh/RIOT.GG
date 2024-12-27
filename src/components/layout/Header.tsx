"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
// import { useTheme } from "next-themes";

export default function Header() {
  //const { theme } = useTheme(); // 테마 감지

  return (
    <header
      className={`flex items-center justify-center gap-32 p-3 border-b fixed top-0 h-[60px] w-full z-10 bg-black text-white`}>
      <div className="w-10 h-10 rounded-full flex justify-center items-center ">
        <h1>
          <Link href="/">
            <Image
              aria-hidden
              src="/icons/lol.png"
              alt="홈 아이콘"
              width={40}
              height={40}
              //className={theme === "dark" ? "invert" : ""}
            />
          </Link>
        </h1>
      </div>
      <Nav />
    </header>
  );
}
