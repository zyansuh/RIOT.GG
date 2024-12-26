import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail, fetchVersion } from "@/utils/serverApi";
import Detail from "./Detail";

type Props = {
  params: {
    id: string;
  };
};

/**
 * generateMetadata Function
 * 챔피언 상세 페이지의 메타데이터를 생성합니다.
 * @param {Props} props - URL 파라미터에서 챔피언 ID를 가져옵니다.
 * @returns {Promise<Metadata>} 메타데이터 객체
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);
  return {
    title: `League Of Legends : ${champion.name}`,
    description: `${champion.lore}`,
    openGraph: {
      title: `League Of Legends : ${champion.name}`,
      description: `${champion.lore}`,
      url: `https://lol-app-psi.vercel.app/champions/${params.id}`,
    },
  };
}

/**
 * DetailPage Component
 * 챔피언 상세 정보를 보여주는 페이지 컴포넌트입니다.
 * - 데이터를 비동기로 가져오며 로딩 상태를 표시합니다.
 * @param {Props} props - URL 파라미터에서 챔피언 ID를 가져옵니다.
 * @returns 챔피언 상세 페이지 컴포넌트
 */
export default async function DetailPage({ params }: Props) {
  // 현재 게임 버전 및 챔피언 상세 데이터 가져오기
  const version: string = await fetchVersion();
  const champion: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <Suspense fallback={<Loading />}>
      <Detail champion={champion} version={version} />
    </Suspense>
  );
}
