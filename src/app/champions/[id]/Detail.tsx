"use client";

import Image from "next/image";
import {
  LOADING_IMG_URL,
  SPLASH_IMG_URL,
  getPassiveImgUrl,
  getSpellImgUrl,
} from "@/constants/constants";
import { ChampionDetail, ChampionSkill, ChampionSkin } from "@/types/Champion";

type DetailProps = {
  champion: ChampionDetail;
  version: string;
};

/**
 * Champion Detail Component
 * 특정 챔피언의 상세 정보를 보여주는 컴포넌트입니다.
 * - 배경 이미지, 기본 정보, 스탯, 스킬, 스킨 정보를 렌더링합니다.
 * @param {DetailProps} props - 챔피언 데이터와 버전 정보
 */
export default function Detail({ champion, version }: DetailProps) {
  // 스킬 단축키를 키보드 배열로 정의
  const keyBoard: string[] = ["Q", "W", "E", "R"];

  // 스킬 데이터에 단축키(key)를 추가
  const spellsWithKeys: ChampionSkill[] = champion.spells.map(
    (spell: ChampionSkill, index: number) => ({
      ...spell,
      key: keyBoard[index] || "",
    })
  );

  return (
    <article className="relative w-full text-white">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-fixed opacity-80 filter grayscale-[60%]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), 
            url(${SPLASH_IMG_URL}/${champion.id}_0.jpg)`,
        }}
      ></div>

      <div className="relative m-auto min-h-screen max-w-custom py-8 pb-20 container">
        <div className="flex flex-col gap-10 p-4">
          {/* 챔피언 기본 정보 */}
          <h2 className="font-bold">
            <p className="text-base font-normal opacity-80">{champion.title}</p>
            {champion.name}
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex items-start justify-center max-w-[200px] max-h-[200px] overflow-hidden rounded-lg">
              <Image
                src={`${LOADING_IMG_URL}/${champion.id}_0.jpg`}
                alt={champion.name}
                width={300}
                height={300}
                className="object-cover transform scale-110"
                priority
              />
            </div>
            <p>{champion.lore}</p>
          </div>

          {/* 챔피언 스탯 */}
          <h2 className="font-bold">스탯</h2>
          <div className="flex flex-row gap-4">
            <p>공격력: {champion.info.attack || 6}</p>
            <p>방어력: {champion.info.defense || 2}</p>
            <p>마법력: {champion.info.magic || 4}</p>
            <p>난이도: {champion.info.difficulty || 5}</p>
          </div>

          {/* 챔피언 스킬 */}
          <h2 className="font-bold">스킬</h2>
          <div className="w-full flex justify-start md:-ml-2">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {/* 패시브 스킬 */}
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={getPassiveImgUrl(version, champion.passive.image.full)}
                  width={50}
                  height={50}
                  alt={champion.passive.name || ""}
                  className="rounded-sm"
                />
                <p className="mt-2 text-sm text-center">
                  {champion.passive.name}
                  <br />
                  (P)
                </p>
              </div>

              {/* 기본 스킬 */}
              {spellsWithKeys.map((spell: ChampionSkill) => (
                <div
                  key={spell.id}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={getSpellImgUrl(version, spell.image.full)}
                    alt={spell.name}
                    width={50}
                    height={50}
                    priority
                    className="object-cover rounded-sm"
                  />
                  <p className="mt-2 text-sm text-center">
                    {spell.name} <br />({spell.key})
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 챔피언 스킨 */}
          <h2 className="font-bold">스킨</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {champion.skins.map((skin: ChampionSkin) => (
              <div key={skin.id}>
                <Image
                  src={`${SPLASH_IMG_URL}/${champion.id}_${skin.num}.jpg`}
                  alt={skin.name}
                  width={260}
                  height={154}
                  priority
                  className="object-cover rounded-lg"
                />
                <p className="mt-2">{skin.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
