import { LOADING_IMG_URL } from "@/constants/constants";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

/**
 * ChampionCard Component
 * - 개별 챔피언의 정보를 카드 형식으로 표시하는 컴포넌트입니다.
 * - 챔피언의 이름, 이미지, 타이틀 정보를 표시하며 클릭 시 해당 챔피언 상세 페이지로 이동합니다.
 * @param {ChampionCardProps} props - 챔피언 데이터
 * @returns {JSX.Element} 챔피언 카드 UI
 */

type ChampionCardProps = {
  champion: Champion;
};

export function ChampionCard({ champion }: ChampionCardProps) {
  // 챔피언 이미지 URL 구성
  const IMAGE_URL = `${LOADING_IMG_URL}/${champion.id}_0.jpg`;

  return (
    <Link
      href={`champions/${champion.id}`}
      className={`dark:bg-black dark:text-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center cursor-pointer`}
    >
      {/* 챔피언 이미지 */}
      <Image
        src={IMAGE_URL}
        alt={champion.name}
        width={300}
        height={300}
        className="object-cover rounded-md"
      />

      {/* 챔피언 정보 */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white-800">
          {champion.name}
        </h3>
        <p className="mt-2 text-gray-600 text-sm">{champion.title}</p>
      </div>
    </Link>
  );
}