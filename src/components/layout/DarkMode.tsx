"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

// 아이콘 동적 로드
const Sun = dynamic(() => import("lucide-react").then((mod) => mod.Sun), { ssr: false });
const Moon = dynamic(() => import("lucide-react").then((mod) => mod.Moon), { ssr: false });

export default function DarkMode() {
    const { theme, setTheme } = useTheme();

    return (
        <p
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer transition-colors duration-300"
        >
            {theme === "dark" ? (
                <Sun className="text-white hover:text-gray-300" />
            ) : theme === "light" ? (
                <Moon className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300" />
            ) : (
                // 로딩 상태에서 기본 렌더링
                <Moon className="text-gray-400" />
            )}
        </p>
    );
}