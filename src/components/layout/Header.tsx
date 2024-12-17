import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-32 p-3 border-b dark:border-b-white border-t-0 fixed w-full dark:bg-black bg-white z-10">
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
      <Nav />
    </header>
  );
}
