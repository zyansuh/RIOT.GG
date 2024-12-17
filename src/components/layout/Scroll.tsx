"use client";
import { useState, useEffect } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 w-10 h-10 rounded-full bg-white border border-gray-600  shadow-lg transition-opacity duration-300 transform dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-label="위로가기"
      >
        ↑
      </button>
    )
  );
}
