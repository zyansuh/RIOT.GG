import { LOADING_IMG_URL } from "@/constants/constants";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = {
  champion: Champion;
};

export function ChampionCard({ champion }: ChampionCardProps) {
  const IMAGE_URL = `${LOADING_IMG_URL}/${champion.id}_0.jpg`;

  return (
    <Link
      href={`/information/champions/${champion.id}`}
      className={`dark:bg-black dark:text-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center cursor-pointer`}
    >
      {/* 이미지 */}
      <Image
        src={IMAGE_URL}
        alt={champion.name}
        width={300}
        height={300}
        className="object-cover rounded-md"
      />

      {/* 내용 */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white-800">
          {champion.name}
        </h3>
        <p className="mt-2 text-gray-600 text-sm">{champion.title}</p>
      </div>
    </Link>
  );
}
