import { Metadata } from "next";
import Image from "next/image";

/**
 * Metadata for Worldview Page
 * - 페이지 제목과 설명, Open Graph 메타데이터 설정.
 */
export const metadata: Metadata = {
  title: "League Of Legends : 세계관",
  description: "리그 오브 레전드의 풍부한 세계관과 지역들을 탐험해보세요.",
  openGraph: {
    title: "League Of Legends : 세계관",
    description: "리그 오브 레전드의 풍부한 세계관과 지역들을 탐험해보세요.",
    url: "https://lol-app-psi.vercel.app/worldview",
  },
};

/**
 * WorldviewPage Component
 * - 리그 오브 레전드의 세계관을 보여주는 페이지입니다.
 * - 주요 지역들과 그들의 특징을 설명합니다.
 * @returns {JSX.Element} 세계관 페이지 UI
 */
export default function WorldviewPage() {
  return (
    <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
      {/* 페이지 헤더 */}
      <div className="txt">
        <h2 className="text-3xl font-bold">리그 오브 레전드 세계관</h2>
        <p className="text-lg">
          룬테라 대륙의 다양한 지역들과 그들의 이야기를 알아보세요.
        </p>
      </div>

      {/* 세계관 소개 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">룬테라</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p>
              룬테라는 마법과 기술이 공존하는 판타지 세계입니다. 이 세계는 다양한 지역으로 나뉘어 있으며,
              각 지역은 독특한 문화와 역사를 가지고 있습니다.
            </p>
            <p>
              마법의 힘, 고대의 유물, 그리고 다양한 종족들이 이 세계를 이루고 있으며,
              각 지역은 자신만의 독특한 이야기와 전통을 가지고 있습니다.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/images/lol1.jpg"
              alt="룬테라 세계지도"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 주요 지역 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">주요 지역</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-semibold mb-3">데마시아</h4>
            <p className="mb-4">
              정의와 명예를 중시하는 왕국으로, 마법을 경계하는 보수적인 문화를 가지고 있습니다.
              데마시아의 기사들은 왕국을 수호하는 정예 부대를 이룹니다.
            </p>
            <div className="relative h-[200px]">
              <Image
                src="/images/lol2.jpg"
                alt="데마시아"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-semibold mb-3">녹서스</h4>
            <p className="mb-4">
              강력한 군사력을 바탕으로 한 제국으로, 실력과 야망을 중시합니다.
              다양한 문화와 마법을 포용하는 개방적인 사회를 가지고 있습니다.
            </p>
            <div className="relative h-[200px]">
              <Image
                src="/images/lol3.jpg"
                alt="녹서스"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-semibold mb-3">아이오니아</h4>
            <p className="mb-4">
              자연과 조화를 이루는 섬나라로, 마법과 영적인 힘을 중요시합니다.
              평화를 추구하지만, 필요할 때는 강력한 전사들을 배출합니다.
            </p>
            <div className="relative h-[200px]">
              <Image
                src="/images/lol1.jpg"
                alt="아이오니아"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-semibold mb-3">프렐요드</h4>
            <p className="mb-4">
              혹독한 겨울이 지배하는 북방 지역으로, 강인한 부족들이 살고 있습니다.
              자연의 힘을 존중하며, 전사 문화가 발달해 있습니다.
            </p>
            <div className="relative h-[200px]">
              <Image
                src="/images/lol2.jpg"
                alt="프렐요드"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 세계관의 중요성 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">세계관의 중요성</h3>
        <div className="p-6 border rounded-lg">
          <p>
            리그 오브 레전드의 세계관은 단순한 배경이 아닌, 게임의 핵심 요소입니다.
            각 챔피언은 자신의 지역과 문화를 대표하며, 그들의 이야기는 게임 플레이와 밀접하게 연관되어 있습니다.
            이러한 풍부한 세계관은 플레이어들에게 더 깊은 몰입감을 제공합니다.
          </p>
        </div>
      </section>
    </article>
  );
}
