import { Image } from "./Champion";

/**
 * 아이템 기본 정보를 나타내는 타입
 */
export type Item = {
  id: string; // 아이템의 고유 ID
  name: string; // 아이템 이름
  description: string; // 아이템 설명 (HTML 형식)
  plaintext: string; // 아이템 설명 (간단한 텍스트 형식)
  into: string[]; // 해당 아이템으로 업그레이드되는 아이템 ID 목록
  image: Image; // 아이템 이미지 정보
  gold: {
    base: number; // 아이템의 기본 가격
    total: number; // 아이템의 총 가격
    sell: number; // 아이템 판매 가격
    purchasable: boolean; // 구매 가능 여부
  };
  tags: string[]; // 아이템 유형 태그 (예: Boots, Consumable)
};

/**
 * 아이템 목록 응답 형태를 나타내는 타입
 */
export type ItemListResponse = {
  type: string; // 응답 데이터의 유형
  version: string; // 데이터 버전 정보
  data: {
    [key: string]: Item; // 아이템 데이터를 키-값 쌍으로 저장
  };
};
