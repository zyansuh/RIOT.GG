import { NextResponse } from "next/server";
import { Rotation } from "@/types/ChampionRotation";
import { ROTATION_API_URL } from "@/constants/constants";

/**
 * 챔피언 로테이션 API 핸들러
 * Riot API를 통해 현재 로테이션 중인 챔피언 목록을 반환합니다.
 * @returns JSON 응답 (챔피언 데이터 또는 에러 메시지)
 */
export async function GET() {
  // 환경 변수에서 API 키를 가져옵니다.
  const API_KEY = process.env.RIOT_API_KEY as string;

  // API 키가 없는 경우 에러 응답 반환
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API 요청 중 에러가 발생" },
      { status: 500 }
    );
  }

  try {
    // Riot API 호출
    const res = await fetch(ROTATION_API_URL, {
      method: "GET",
      headers: {
        "X-Riot-Token": API_KEY,
      },
      next: {
        revalidate: 86400, // 1일(86400초) 동안 결과를 캐싱합니다.
      },
    });

    // 응답 상태가 비정상인 경우 에러 처리
    if (!res.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${res.status}`);
    }

    // 응답 데이터를 JSON으로 변환
    const data: Rotation[] = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    // 오류 발생 시 콘솔에 로그를 남기고 에러 응답 반환
    console.error("데이터 패치 중 에러가 발생 했어요!", error);
    return NextResponse.json(
      { error: "챔피언 정보를 가지고 오는데 실패 했어요!" },
      { status: 500 }
    );
  }
}
