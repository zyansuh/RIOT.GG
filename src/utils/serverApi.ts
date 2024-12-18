"use server";

import { Item } from "@/types/Item";
import { API_URL, getDataUrl } from "@/constants/constants";
import {
  Champion,
  ChampionDetail,
  ChampionDetailResponse,
} from "@/types/Champion";

/**
 * Riot API를 통해 게임 버전 정보를 가져옵니다.
 * @returns {Promise<string>} 최신 버전 정보
 * @throws {Error} 버전 정보 요청 실패 시 예외 발생
 */
export async function fetchVersion(): Promise<string> {
  const res = await fetch(`${API_URL}/api/versions.json`);

  if (!res.ok) {
    throw new Error(`버전 정보 요청 실패: 상태 코드 ${res.status}`);
  }

  const data: string[] = await res.json();
  return data[0]; // 가장 최신 버전 반환
}

/**
 * Riot API를 통해 모든 챔피언 목록을 가져옵니다.
 * @returns {Promise<Champion[]>} 챔피언 목록 배열
 * @throws {Error} 챔피언 목록 요청 실패 시 예외 발생
 */
export async function fetchChampionsList(): Promise<Champion[]> {
  const version = await fetchVersion();
  const res = await fetch(`${getDataUrl(version)}/champion.json`, {
    next: {
      revalidate: 86400, // 24시간 캐싱
    },
  });

  if (!res.ok) {
    throw new Error(`챔피언 목록 요청 실패: 상태 코드 ${res.status}`);
  }

  const data = await res.json();
  const champions: Champion[] = Object.values(data.data); // 챔피언 데이터를 배열로 변환
  return champions;
}

/**
 * Riot API를 통해 특정 챔피언의 상세 정보를 가져옵니다.
 * @param {string} id - 챔피언의 ID
 * @returns {Promise<ChampionDetail>} 챔피언 상세 정보
 * @throws {Error} 챔피언 상세 정보 요청 실패 시 예외 발생
 */
export async function fetchChampionDetail(id: string): Promise<ChampionDetail> {
  const version = await fetchVersion();
  const res = await fetch(`${getDataUrl(version)}/champion/${id}.json`);

  if (!res.ok) {
    throw new Error(`챔피언 정보 요청 실패: 상태 코드 ${res.status}`);
  }

  const data: ChampionDetailResponse = await res.json();
  const detail = data.data[id]; // 특정 챔피언의 상세 정보 반환
  return detail;
}

/**
 * Riot API를 통해 모든 아이템 정보를 가져옵니다.
 * @returns {Promise<Item[]>} 아이템 목록 배열
 * @throws {Error} 아이템 정보 요청 실패 시 예외 발생
 */
export async function fetchItems(): Promise<Item[]> {
  const version = await fetchVersion();
  const res = await fetch(`${getDataUrl(version)}/item.json`, {
    cache: "force-cache", // 강제 캐싱
  });

  if (!res.ok) {
    throw new Error(`아이템 정보 요청 실패: 상태 코드 ${res.status}`);
  }

  const data = await res.json();
  const items: Item[] = Object.values(data.data); // 아이템 데이터를 배열로 변환
  return items;
}
