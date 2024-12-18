import { Metadata } from "next";
import { Item } from "@/types/Item";
import { ItemCard } from "@/components/ItemCard";
import { fetchItems, fetchVersion } from "@/utils/serverApi";

/**
 * Metadata for Items Page
 * - 페이지 제목과 설명, Open Graph 메타데이터 설정.
 */
export const metadata: Metadata = {
  title: "League Of Legends : 아이템 목록",
  description:
    "Riot Games API를 이용해 리그 오브 레전드의 모든 아이템 목록을 확인하세요.",
  openGraph: {
    title: "League Of Legends : 아이템 목록",
    description: "리그 오브 레전드의 모든 아이템 정보 제공",
  },
};

/**
 * ItemsPage Component
 * - 리그 오브 레전드의 아이템 목록을 화면에 렌더링합니다.
 * - Riot Games API를 통해 데이터를 비동기로 가져옵니다.
 * @returns {JSX.Element} 아이템 목록 페이지 UI
 */
export default async function ItemsPage() {
  // 현재 게임 버전 및 아이템 데이터 가져오기
  const version: string = await fetchVersion();
  const items: Item[] = await fetchItems();

  return (
    <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
      {/* 페이지 헤더 */}
      <div className="txt">
        <h2 className="text-3xl font-bold">아이템 목록 보기</h2>
        <p className="text-lg">
          Riot Games API를 활용하여 아이템 정보를 제공합니다.
        </p>
      </div>

      {/* 아이템 카드 그리드 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {items.map((item: Item) => (
          <ItemCard key={`item-${item.id}`} item={item} version={version} />
        ))}
      </div>
    </article>
  );
}
