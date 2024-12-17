import Image from "next/image";
import { getItemImgUrl } from "@/constants/constants";
import { Item } from "@/types/Item";

type ItemCardProps = {
  item: Item;
  version: string;
};

export function ItemCard({ item, version }: ItemCardProps) {
  const IMAGE_URL = item.image?.full
    ? getItemImgUrl(version, item.image.full)
    : "/images/lol1.jpg";

  return (
    <div
      className={`dark:bg-black dark:text-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center`}
    >
      {/* 이미지 */}
      <div className="mt-3">
        <Image
          src={IMAGE_URL}
          alt={item.name}
          width={64}
          height={64}
          className="rounded-md"
        />
      </div>

      {/* 아이템명 및 설명 */}
      <div className="text-center mt-2 mb-3 px-3">
        {/* 아이템명 */}
        <h3 className="text-sm font-bold dark:text-white">{item.name}</h3>
      </div>
    </div>
  );
}
