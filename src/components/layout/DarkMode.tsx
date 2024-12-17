"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <p
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer transition-colors duration-300"
    >
      {theme === "dark" ? (
        <Sun className="text-white hover:text-gray-300" />
      ) : (
        <Moon className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300" />
      )}
    </p>
  );
}
