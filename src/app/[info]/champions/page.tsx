import { Metadata } from "next";
import { Champion } from "@/types/Champion";
import { fetchChampionsList } from "@/utils/serverApi";
import { ChampionCard } from "@/components/ChampionCard";

export const metadata: Metadata = {
  title: "League Of Legends : 챔피언 목록",
  description:
    "Riot API를 이용해 리그 오브 레전드의 모든 챔피언 목록을 확인하세요.",
  openGraph: {
    title: "League Of Legends : 챔피언 목록",
    description:
      "Riot API를 이용해 리그 오브 레전드의 모든 챔피언 목록을 확인하세요.",
    url: "https://lol-app-psi.vercel.app//champions",
  },
};

export default async function ChampionsPage() {
  const championList: Champion[] = await fetchChampionsList();

  return (
    <>
      <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
        <div className="txt">
          <h2 className="text-3xl font-bold">챔피언 목록 보기</h2>
          <p className="text-lg">
            Riot Games API를 활용하여 챔피언 정보를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {championList.map((champion: Champion) => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </div>
      </article>
    </>
  );
}
