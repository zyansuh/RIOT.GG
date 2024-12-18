"use client";

import Head from "next/head";
import Loading from "@/app/api/loading";
import { Champion } from "@/types/Champion";
import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import { ChampionCard } from "@/components/ChampionCard";
import Error from "@/app/api/error";

type RotationProps = {
  allPlayers: Champion[];
  newPlayers: Champion[];
};

/**
 * RotationPage Component
 * - 금주의 챔피언 로테이션 정보를 표시합니다.
 * - Riot Games API를 사용하여 데이터를 가져오며 로딩 및 에러 상태를 처리합니다.
 * @returns {JSX.Element} 금주 로테이션 페이지 UI
 */
export default function RotationPage() {
  // React Query를 사용하여 데이터 가져오기
  const { data, isPending, error, refetch } = useQuery<RotationProps>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
    retry: false, // 실패 시 자동 재시도 비활성화
    refetchOnWindowFocus: false, // 창 포커스 시 재조회 비활성화
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 신선 유지
  });

  // 로딩 상태 처리
  if (isPending) {
    return <Loading />;
  }

  // 에러 상태 처리
  if (error) {
    return (
      <Error
        error={error as Error} // 에러 객체 전달
        reset={() => refetch()} // 다시 시도 버튼 클릭 시 `refetch` 호출
      />
    );
  }

  // 데이터가 성공적으로 로드되었을 경우 구조 분해
  const { allPlayers, newPlayers } = data as RotationProps;

  return (
    <>
      {/* 페이지 메타데이터 설정 */}
      <Head>
        <title>금주 로테이션 확인</title>
        <meta
          name="description"
          content="Riot Games API를 활용하여 금주 로테이션 정보를 제공합니다."
        />
        <meta property="og:title" content="금주 로테이션 확인" />
        <meta
          property="og:description"
          content="Riot Games API를 활용하여 금주 로테이션 정보를 제공합니다."
        />
        <meta property="og:url" content="http://localhost:3000/rotation" />
      </Head>

      <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
        {/* 전체 플레이어 로테이션 섹션 */}
        <div>
          <div className="text-3xl txt pb-10">
            <h2 className="text-3xl font-bold">금주 플레이어 로테이션 확인</h2>
            <p className="text-lg">
              Riot Games API를 활용하여 금주 플레이어 로테이션 정보를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allPlayers.map((champion: Champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </div>
        </div>

        {/* 신규 플레이어 로테이션 섹션 */}
        <div className="mt-10">
          <div className="txt pb-10">
            <h2 className="text-3xl font-bold">금주 신규 플레이어 로테이션 확인</h2>
            <p className="text-lg">
              Riot Games API를 활용하여 금주 신규 플레이어 로테이션 정보를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {newPlayers.map((champion: Champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}