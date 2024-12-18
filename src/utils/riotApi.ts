import { Champion } from "@/types/Champion";
import { Rotation } from "@/types/ChampionRotation";
import { fetchChampionsList } from "@/utils/serverApi";

/**
 * 챔피언 로테이션 데이터를 가져와 플레이 가능한 챔피언을 필터링합니다.
 * @returns {Promise<{ allPlayers: Champion[]; newPlayers: Champion[] }>} 
 * - allPlayers: 모든 플레이어를 위한 무료 챔피언 목록
 * - newPlayers: 신규 플레이어를 위한 무료 챔피언 목록
 */
export async function getChampionRotation(): Promise<{
  allPlayers: Champion[];
  newPlayers: Champion[];
}> {
  try {
    // 로테이션 API 호출
    const res = await fetch("/api/rotation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${res.status}`);
    }

    // 로테이션 데이터 파싱
    const data: Rotation = await res.json();
    const freeChampionIds: number[] = data.freeChampionIds;
    const freeChampionIdsForNewPlayers: number[] = data.freeChampionIdsForNewPlayers;

    // 전체 챔피언 데이터 가져오기
    const champions = await fetchChampionsList();

    // 무료 챔피언 목록 필터링
    const allPlayers: Champion[] = champions.filter((champion) =>
      freeChampionIds.includes(Number(champion.key))
    );

    const newPlayers: Champion[] = champions.filter((champion) =>
      freeChampionIdsForNewPlayers.includes(Number(champion.key))
    );

    return {
      allPlayers,
      newPlayers,
    };
  } catch (error) {
    console.error(
      "챔피언 로테이션 데이터를 가져오는 중 에러가 발생했습니다.",
      error
    );
    throw new Error("챔피언 로테이션 데이터를 가져오는 데 실패했습니다.");
  }
}
