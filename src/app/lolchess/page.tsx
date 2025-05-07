import { Metadata } from "next";
import Image from "next/image";

/**
 * Metadata for LoLChess Page
 * - 페이지 제목과 설명, Open Graph 메타데이터 설정.
 */
export const metadata: Metadata = {
  title: "League Of Legends : 롤토체스 시즌 10",
  description: "리그 오브 레전드의 전략적 팀 전투 게임 모드, 롤토체스 시즌 10에 대해 알아보세요.",
  openGraph: {
    title: "League Of Legends : 롤토체스 시즌 10",
    description: "리그 오브 레전드의 전략적 팀 전투 게임 모드, 롤토체스 시즌 10에 대해 알아보세요.",
    url: "https://lol-app-psi.vercel.app/lolchess",
  },
};

/**
 * LoLChessPage Component
 * - 롤토체스 시즌 10에 대한 정보를 보여주는 페이지입니다.
 * - 게임 소개, 시너지, 챔피언 등에 대한 정보를 포함합니다.
 * @returns {JSX.Element} 롤토체스 페이지 UI
 */
export default function LoLChessPage() {
  return (
    <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
      {/* 페이지 헤더 */}
      <div className="txt">
        <h2 className="text-3xl font-bold">롤토체스 시즌 10</h2>
        <p className="text-lg">
          새로운 시즌, 새로운 조합으로 당신만의 전략을 만들어보세요.
        </p>
      </div>

      {/* 게임 소개 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">시즌 10 소개</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p>
              시즌 10에서는 새로운 챔피언들과 특성들이 추가되었습니다.
              특히 '하이퍼롤' 시스템이 도입되어 더욱 역동적인 게임 플레이를 경험할 수 있습니다.
            </p>
            <p>
              새로운 시너지와 조합을 통해 더욱 다양한 전략을 구사할 수 있으며,
              하이퍼롤을 통해 원하는 챔피언을 더 쉽게 찾을 수 있습니다.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/images/lol3.jpg"
              alt="롤토체스 시즌 10"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 새로운 시스템 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">새로운 시스템</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-semibold mb-3">하이퍼롤</h4>
            <p>
              하이퍼롤은 2골드를 소모하여 챔피언을 리롤할 수 있는 새로운 시스템입니다.
              원하는 챔피언을 더 빠르게 찾을 수 있어 전략의 유연성이 높아졌습니다.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-semibold mb-3">새로운 특성</h4>
            <p>
              시즌 10에서는 '하이퍼롤', '스타일', '스킬' 등 새로운 특성들이 추가되었습니다.
              각 특성은 독특한 효과를 제공하여 더욱 다양한 조합이 가능해졌습니다.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-semibold mb-3">아이템 시스템</h4>
            <p>
              새로운 아이템들이 추가되었으며, 기존 아이템들의 효과도 재조정되었습니다.
              특히 '스타일' 특성과 연계되는 아이템들이 주목받고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 메타 조합 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">시즌 10 메타 조합</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-semibold mb-3">하이퍼롤 조합</h4>
            <p className="mb-4">
              하이퍼롤을 활용한 빠른 3성 챔피언 육성 전략이 강세를 보이고 있습니다.
              특히 저코스트 챔피언들을 활용한 초반 압박 조합이 효과적입니다.
            </p>
            <div className="relative h-[200px]">
              <Image
                src="/images/lol1.jpg"
                alt="하이퍼롤 조합"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="text-xl font-semibold mb-3">스타일 조합</h4>
            <p className="mb-4">
              새로운 스타일 특성을 활용한 조합들이 등장하고 있습니다.
              특히 '스타일' 특성의 시너지를 최대한 활용하는 조합이 강력합니다.
            </p>
            <div className="relative h-[200px]">
              <Image
                src="/images/lol2.jpg"
                alt="스타일 조합"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 시즌 10 전략 팁 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">시즌 10 전략 팁</h3>
        <div className="p-6 border rounded-lg space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">하이퍼롤 활용</h4>
            <p>
              하이퍼롤은 전략적으로 사용해야 합니다. 초반에는 저코스트 챔피언을 빠르게 3성으로 만드는 데 활용하고,
              중반 이후에는 핵심 챔피언을 찾는 데 사용하세요.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">스타일 특성 활용</h4>
            <p>
              스타일 특성은 조합의 핵심이 될 수 있습니다. 스타일 특성을 가진 챔피언들을 중심으로
              조합을 구성하면 더욱 강력한 시너지를 얻을 수 있습니다.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">아이템 우선순위</h4>
            <p>
              시즌 10에서는 스타일 특성과 시너지를 내는 아이템들이 우선순위가 높습니다.
              특히 핵심 챔피언에게 맞는 아이템을 장착하는 것이 중요합니다.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
} 