import { NextResponse } from "next/server";
import { Rotation } from "@/types/ChampionRotation";
import { ROTATION_API_URL } from "@/constants/constants";

// 챔피언 로테이션 API
export async function GET() {
  const API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY as string;

  if (!API_KEY) {
    return NextResponse.json(
      { error: "API 요청 중 에러가 발생" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(ROTATION_API_URL, {
      method: "GET",
      headers: {
        "X-Riot-Token": API_KEY,
      },
      next: {
        revalidate: 86400,
      },
    });

    if (!res.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${res.status}`);
    }

    const data: Rotation[] = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("데이터 패치 중 에러가 발생 했어요!", error);
    return NextResponse.json(
      { error: "챔피언 정보를 가지고 오는데 실패 했어요!" },
      { status: 500 }
    );
  }
}
