import { Loader2 } from "lucide-react";

/**
 * Loading Component
 * - 로딩 상태를 시각적으로 표시하는 컴포넌트입니다.
 * - 화면 중앙에 스피너 아이콘을 렌더링합니다.
 * @returns {JSX.Element} 로딩 상태 UI
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Lucide-react Loader2 아이콘으로 로딩 애니메이션 */}
      <Loader2 className="animate-spin text-primary w-10 h-10" />
    </div>
  );
}
