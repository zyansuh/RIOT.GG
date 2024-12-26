"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react"; // 경고 아이콘

/**
 * NotFound Component
 * 404 에러 페이지를 사용자에게 보여줍니다.
 * 사용자가 요청한 페이지가 존재하지 않을 때 호출됩니다.
 * @returns 404 에러 페이지 UI
 */
export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col items-center gap-6 p-4">
        <div className="txt flex flex-col items-center gap-4">
          {/* 경고 아이콘 */}
          <AlertTriangle className="w-12 h-12 text-red-600" />

          {/* 404 메시지 */}
          <h2 className="font-bold">404 - 페이지를 찾을 수 없습니다!</h2>
          <p className="mt-8 flex">
            요청하신 페이지가 존재하지 않거나, 경로가 잘못되었습니다. 경로를
            확인하고 다시 시도해 주세요.
          </p>
        </div>

        {/* 홈으로 돌아가는 버튼 */}
        <Link href="/" passHref>
          <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
            홈으로 돌아가기
          </button>
        </Link>
      </article>
    </section>
  );
}
