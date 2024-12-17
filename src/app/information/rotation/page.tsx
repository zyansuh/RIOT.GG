"use client";

import Head from "next/head";
import Loading from "@/app/loading";
import { Champion } from "@/types/Champion";
import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import { ChampionCard } from "@/components/ChampionCard";
import Error from "@/app/error";
;

type RotationProps = {
  allPlayers: Champion[];
  newPlayers: Champion[];
};

export default function RotationPage() {
  const { data, isPending, error, refetch } = useQuery<RotationProps>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) {
    return <Loading />;
  }

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
        <div>
          <div className="text-3xl txt pb-10">
            <h2 className="text-3xl font-bold">금주 플레이어 로테이션 확인</h2>
            <p className="text-lg">
              Riot Games API를 활용하여 금주 플레이어 로테이션 정보를
              제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allPlayers.map((champion: Champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="txt pb-10">
            <h2 className="text-3xl font-bold">
              금주 신규 플레이어 로테이션 확인
            </h2>
            <p className="text-lg">
              Riot Games API를 활용하여 금주 신규 플레이어 로테이션 정보를
              제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {newPlayers.map((champion: Champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
