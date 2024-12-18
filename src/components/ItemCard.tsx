import Image from "next/image";
import { getItemImgUrl } from "@/constants/constants";
import { Item } from "@/types/Item";

/**
 * ItemCard Component
 * - 개별 아이템의 정보를 카드 형식으로 표시하는 컴포넌트입니다.
 * - 아이템의 이름과 이미지를 렌더링하며, 기본 이미지를 설정합니다.
 * @param {ItemCardProps} props - 아이템 데이터 및 버전 정보
 * @returns {JSX.Element} 아이템 카드 UI
 */

type ItemCardProps = {
  item: Item;
  version: string;
};

export function ItemCard({ item, version }: ItemCardProps) {
  // 아이템 이미지 URL 설정, 이미지가 없으면 기본 이미지로 대체
  const IMAGE_URL = item.image?.full
    ? getItemImgUrl(version, item.image.full)
    : "/images/lol1.jpg";

  return (
    <div
      className={`dark:bg-black dark:text-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center`}
    >
      {/* 아이템 이미지 */}
      <div className="mt-3">
        <Image
          src={IMAGE_URL}
          alt={item.name}
          width={64}
          height={64}
          className="rounded-md"
        />
      </div>

      {/* 아이템 이름 */}
      <div className="text-center mt-2 mb-3 px-3">
        <h3 className="text-sm font-bold dark:text-white">{item.name}</h3>
      </div>
    </div>
  );
}