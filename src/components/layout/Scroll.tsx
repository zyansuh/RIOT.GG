"use client";
import { useState, useEffect } from "react";

/**
 * ScrollTop Component
 * - 사용자가 스크롤을 내릴 경우 화면 상단으로 이동할 수 있는 버튼을 표시합니다.
 * - 부드러운 스크롤 동작과 가시성 조절을 포함합니다.
 * @returns {JSX.Element | null} 화면 상단 이동 버튼 UI
 */
export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치에 따라 버튼 표시 여부 결정
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 화면 상단으로 부드럽게 이동하는 함수
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
        className={`fixed bottom-5 right-5 w-10 h-10 rounded-full bg-white border border-gray-600 shadow-lg transition-opacity duration-300 transform dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-label="위로가기"
      >
        ↑
      </button>
    )
  );
}