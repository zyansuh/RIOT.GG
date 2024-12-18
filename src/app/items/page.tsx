import { Metadata } from "next";
import { Item } from "@/types/Item";
import { ItemCard } from "@/components/ItemCard";
import { fetchItems, fetchVersion } from "@/utils/serverApi";

export const metadata: Metadata = {
  title: "League Of Legends : 아이템 목록",
  description:
    "Riot Games API를 이용해 리그 오브 레전드의 모든 아이템 목록을 확인하세요.",
  openGraph: {
    title: "League Of Legends : 아이템 목록",
    description: "리그 오브 레전드의 모든 아이템 정보 제공",
  },
};

export default async function ItemsPage() {
  const version: string = await fetchVersion();
  const items: Item[] = await fetchItems();

  return (
    <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <div className="txt">
        <h2 className="text-3xl font-bold">아이템 목록 보기</h2>
        <p className="text-lg">
          Riot Games API를 활용하여 아이템 정보를 제공합니다.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {items.map((item: Item) => (
          <ItemCard key={`item-${item.id}`} item={item} version={version} />
        ))}
      </div>
    </article>
  );
}
