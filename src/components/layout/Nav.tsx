import Link from "next/link";
import DarkMode from "./DarkMode";

export default function Nav() {
  return (
    <nav className="pr-2">
      <ul className="flex gap-24">
        <li className="font-bold">
          <Link href={"/champions"}>챔피언</Link>
        </li>
        <li className="font-bold">
          <Link href={"/items"}>아이템</Link>
        </li>
        <li className="font-bold">
          <Link href={"/rotation"}>로테이션</Link>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
}
