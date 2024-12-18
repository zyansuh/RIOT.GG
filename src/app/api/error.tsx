"use client";

import { useRouter } from "next/navigation";
import { useEffect, startTransition } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Error Boundary Component
 * 예기치 않은 오류를 사용자에게 보여주고, 오류를 재설정하거나 새로고침할 수 있는 기능을 제공합니다.
 * @param {Props} props - error 객체와 reset 함수
 */
export default function Error({ error, reset }: Props) {
  const router = useRouter();

  // 오류 정보를 콘솔에 출력합니다.
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex items-center justify-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col items-center gap-6 p-4">
        {/* 오류 메시지 */}
        <div className="txt">
          <h2 className="font-bold">예기치 않은 오류가 발생했습니다!</h2>
          <p className="mt-8">{error.message}</p>
        </div>

        {/* 다시 시도 버튼 */}
        <button
          onClick={() =>
            startTransition(() => {
              router.refresh(); // 페이지 새로고침
              reset(); // 오류 상태 초기화
            })
          }
          className="px-4 py-2 font-medium text-white bg-red-600 rounded hover:bg-red-700"
        >
          다시 시도
        </button>
      </article>
    </section>
  );
}