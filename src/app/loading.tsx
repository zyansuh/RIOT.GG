import { Loader2 } from 'lucide-react';

/**
 * Loading Component
 * 데이터를 로드하거나 대기 상태를 나타낼 때 사용되는 컴포넌트입니다.
 * @returns 로딩 스피너를 포함한 화면 중앙의 로딩 UI
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Lucide-react의 Loader2 아이콘을 스피너로 사용 */}
      <Loader2 className="animate-spin text-primary w-10 h-10" />
    </div>
  );
}
