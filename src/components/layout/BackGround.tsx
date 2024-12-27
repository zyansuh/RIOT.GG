"use client";

/**
 * VideoBackground Component
 * - 배경에 비디오를 렌더링하는 컴포넌트입니다.
 * - 비디오는 자동 재생, 반복 재생, 음소거 상태로 설정됩니다.
 * - 반투명 오버레이를 추가하여 텍스트 가독성을 높입니다.
 * @returns {JSX.Element} 배경 비디오와 오버레이 UI
 */
export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      {/* 비디오 */}
      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
        <source
          src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
          type="video/webm"
        />
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* 반투명 오버레이 */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/0 dark:bg-black/50"></div>
    </div>
  );
}
