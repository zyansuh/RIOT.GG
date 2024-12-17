"use server";

import { Item } from "@/types/Item";
import { API_URL, getDataUrl } from "@/constants/constants";
import {
  Champion,
  ChampionDetail,
  ChampionDetailResponse,
} from "@/types/Champion";

// API의 버전 정보
export async function fetchVersion(): Promise<string> {
  const res = await fetch(`${API_URL}/api/versions.json`);

  if (!res.ok) {
    throw new Error(`버전 정보 요청 실패: 상태 코드 ${res.status}`);
  }

  const data: string[] = await res.json();
  return data[0];
}

// 챔피언 목록
export async function fetchChampionsList(): Promise<Champion[]> {
  const version = await fetchVersion();
  const res = await fetch(`${getDataUrl(version)}/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });

  if (!res.ok) {
    throw new Error(`챔피언 목록 요청 실패: 상태 코드 ${res.status}`);
  }

  const data = await res.json();
  const champions: Champion[] = Object.values(data.data);
  return champions;
}

// 특정 챔피언 상세 정보
export async function fetchChampionDetail(id: string): Promise<ChampionDetail> {
  const version = await fetchVersion();
  const res = await fetch(`${getDataUrl(version)}/champion/${id}.json`);

  if (!res.ok) {
    throw new Error(`챔피언 정보 요청 실패: 상태 코드 ${res.status}`);
  }

  const data: ChampionDetailResponse = await res.json();
  const detail = data.data[id];
  return detail;
}

// 아이템 목록
export async function fetchItems(): Promise<Item[]> {
  const version = await fetchVersion();
  const res = await fetch(`${getDataUrl(version)}/item.json`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`아이템 정보 요청 실패: 상태 코드 ${res.status}`);
  }

  const data = await res.json();
  const items: Item[] = Object.values(data.data);
  return items;
}
