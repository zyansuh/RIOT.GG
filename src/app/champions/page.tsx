import { Metadata } from "next";
import { Champion } from "@/types/Champion";
import { fetchChampionsList } from "@/utils/serverApi";
import { ChampionCard } from "@/components/ChampionCard";

/**
 * Metadata for Champions Page
 * - 페이지 제목, 설명, 그리고 Open Graph 설정.
 */
export const metadata: Metadata = {
  title: "League Of Legends : 챔피언 목록",
  description:
    "Riot API를 이용해 리그 오브 레전드의 모든 챔피언 목록을 확인하세요.",
  openGraph: {
    title: "League Of Legends : 챔피언 목록",
    description:
      "Riot API를 이용해 리그 오브 레전드의 모든 챔피언 목록을 확인하세요.",
    url: "https://lol-app-psi.vercel.app/champions",
  },
};

/**
 * ChampionsPage Component
 * - 모든 챔피언의 목록을 가져와 화면에 표시합니다.
 * - Riot Games API를 사용하여 데이터를 비동기로 가져옵니다.
 * @returns {JSX.Element} 챔피언 목록 페이지 UI
 */
export default async function ChampionsPage() {
  // 모든 챔피언 데이터를 비동기로 가져옵니다.
  const championList: Champion[] = await fetchChampionsList();

  return (
    <>
      <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
        {/* 페이지 헤더 */}
        <div className="txt">
          <h2 className="text-3xl font-bold">챔피언 목록 보기</h2>
          <p className="text-lg">
            Riot Games API를 활용하여 챔피언 정보를 제공합니다.
          </p>
        </div>

        {/* 챔피언 카드 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {championList.map((champion: Champion) => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </div>
      </article>
    </>
  );
}