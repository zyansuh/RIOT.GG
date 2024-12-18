"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

/**
 * Providers Component
 * - React Query의 QueryClientProvider를 설정하고 제공하는 컴포넌트입니다.
 * - 모든 하위 컴포넌트에서 React Query의 기능을 사용할 수 있도록 지원합니다.
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 하위 컴포넌트들
 * @returns {JSX.Element} QueryClientProvider로 감싼 컴포넌트 트리
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  // QueryClient 상태를 초기화하고 기본 옵션을 설정합니다.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 쿼리의 데이터가 60초 동안 신선한 상태로 유지됩니다.
          },
        },
      })
  );

  return (
    // QueryClientProvider로 하위 컴포넌트를 감싸 React Query의 기능을 제공합니다.
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
