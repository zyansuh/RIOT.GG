"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * DarkMode Component
 * - 다크 모드와 라이트 모드 간의 테마 전환을 지원하는 컴포넌트입니다.
 * - 현재 테마 상태를 확인하여 적절한 아이콘을 렌더링합니다.
 * - 클릭 시 테마를 전환합니다.
 * @returns {JSX.Element} 테마 전환 버튼
 */
export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <p
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer transition-colors duration-300"
    >
      {/* 현재 테마에 따라 아이콘을 렌더링 */}
      {theme === "dark" ? (
        <Sun className="text-white hover:text-gray-300" />
      ) : (
        <Moon className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300" />
      )}
    </p>
  );
}
