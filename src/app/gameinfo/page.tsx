import { Metadata } from "next";
import Image from "next/image";

/**
 * Metadata for Game Info Page
 * - 페이지 제목과 설명, Open Graph 메타데이터 설정.
 */
export const metadata: Metadata = {
  title: "League Of Legends : 게임 정보",
  description: "리그 오브 레전드의 게임 정보와 기본 규칙을 확인하세요.",
  openGraph: {
    title: "League Of Legends : 게임 정보",
    description: "리그 오브 레전드의 게임 정보와 기본 규칙을 확인하세요.",
    url: "https://lol-app-psi.vercel.app/gameinfo",
  },
};

/**
 * GameInfoPage Component
 * - 리그 오브 레전드의 게임 정보를 보여주는 페이지입니다.
 * - 게임 소개, 게임 모드, 기본 규칙 등을 포함합니다.
 * @returns {JSX.Element} 게임 정보 페이지 UI
 */
export default function GameInfoPage() {
  return (
    <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
      {/* 페이지 헤더 */}
      <div className="txt">
        <h2 className="text-3xl font-bold">게임 정보</h2>
        <p className="text-lg">
          리그 오브 레전드의 기본 정보와 게임 규칙을 알아보세요.
        </p>
      </div>

      {/* 게임 소개 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">게임 소개</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p>
              리그 오브 레전드는 5명의 챔피언으로 구성된 두 팀이 상대방의 기지를 파괴하는 것을 목표로 하는 팀 전략 게임입니다.
              각 플레이어는 고유한 능력을 가진 챔피언을 선택하여 전략적으로 플레이할 수 있습니다.
            </p>
            <p>
              게임은 미니언, 정글 몬스터, 포탑 등 다양한 요소들과 함께 진행되며,
              팀워크와 개인의 실력이 모두 중요한 게임입니다.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/images/summoners-rift.jpg"
              alt="소환사의 협곡"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 게임 모드 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">게임 모드</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h4 className="text-xl font-semibold mb-2">소환사의 협곡</h4>
            <p>5v5 정규 게임 모드로, 가장 기본이 되는 게임 모드입니다.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="text-xl font-semibold mb-2">무작위 총력전</h4>
            <p>5v5 빠른 전투 모드로, 랜덤으로 선택된 챔피언으로 플레이합니다.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="text-xl font-semibold mb-2">돌격 넥서스</h4>
            <p>5v5 빠른 전투 모드로, 넥서스가 직접 전투에 참여합니다.</p>
          </div>
        </div>
      </section>

      {/* 기본 규칙 섹션 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">기본 규칙</h3>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h4 className="text-xl font-semibold mb-2">목표</h4>
            <p>상대방의 넥서스를 파괴하는 것이 최종 목표입니다.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="text-xl font-semibold mb-2">라인</h4>
            <p>탑, 정글, 미드, 바텀(원딜+서포터) 라인으로 구성되어 있습니다.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="text-xl font-semibold mb-2">골드와 경험치</h4>
            <p>미니언 처치, 챔피언 처치, 정글 몬스터 처치를 통해 골드와 경험치를 획득할 수 있습니다.</p>
          </div>
        </div>
      </section>
    </article>
  );
} 