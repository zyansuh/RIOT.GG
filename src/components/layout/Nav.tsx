import Link from "next/link";
import DarkMode from "./DarkMode";

/**
 * Nav Component
 * - 페이지의 내비게이션 메뉴를 제공하는 컴포넌트입니다.
 * - 챔피언, 아이템, 로테이션 페이지로 이동할 수 있는 링크와 다크 모드 전환 기능 포함.
 * @returns {JSX.Element} 내비게이션 UI
 */
export default function Nav() {
  return (
    <nav className="pr-2">
      <ul className="flex gap-24">
        {/* 챔피언 페이지 링크 */}
        <li className="font-bold">
          <Link href={"/champions"}>챔피언</Link>
        </li>
        {/* 아이템 페이지 링크 */}
        <li className="font-bold">
          <Link href={"/items"}>아이템</Link>
        </li>
        {/* 로테이션 페이지 링크 */}
        <li className="font-bold">
          <Link href={"/rotation"}>로테이션</Link>
        </li>
        {/* 다크 모드 전환 버튼 */}
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
}
