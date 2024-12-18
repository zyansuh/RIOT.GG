/**
 * 챔피언 기본 정보를 나타내는 타입
 */
export type Champion = {
  id: string; // 챔피언의 고유 ID
  key: string; // 챔피언의 키 값
  name: string; // 챔피언 이름
  title: string; // 챔피언 칭호
  image: Image; // 챔피언 이미지 정보
  blurb: string; // 챔피언 설명
  info: {
    [key: string]: number; // 챔피언의 스탯 정보
  };
};

/**
 * 이미지 정보를 나타내는 타입
 */
export type Image = {
  full: string; // 전체 이미지 파일 이름
  sprite: string; // 스프라이트 이미지 파일 이름
  group: string; // 이미지 그룹 이름
  x: number; // 스프라이트 내 x 좌표
  y: number; // 스프라이트 내 y 좌표
  w: number; // 스프라이트 내 너비
  h: number; // 스프라이트 내 높이
};

/**
 * 챔피언 패시브 스킬 정보를 나타내는 타입
 */
export type ChampionPassive = {
  name: string; // 패시브 스킬 이름
  description: string; // 패시브 스킬 설명
  image: Image; // 패시브 스킬 이미지 정보
};

/**
 * 챔피언 스킨 정보를 나타내는 타입
 */
export type ChampionSkin = {
  id: string; // 스킨 ID
  name: string; // 스킨 이름
  num: number; // 스킨 번호
  chromas: boolean; // 크로마 여부
};

/**
 * 챔피언 스킬 정보를 나타내는 타입
 */
export type ChampionSkill = {
  id: string; // 스킬 ID
  key: string; // 스킬 키 값
  name: string; // 스킬 이름
  description: string; // 스킬 설명
  image: Image; // 스킬 이미지 정보
};

/**
 * 챔피언 상세 정보를 나타내는 타입
 * 기본 정보에 추가적인 정보를 포함합니다.
 */
export type ChampionDetail = Champion & {
  lore: string; // 챔피언의 배경 이야기
  skins: ChampionSkin[]; // 챔피언의 스킨 목록
  spells: ChampionSkill[]; // 챔피언의 스킬 목록
  passive: ChampionPassive; // 챔피언의 패시브 스킬
};

/**
 * 챔피언 상세 정보 API 응답 형태를 나타내는 타입
 */
export type ChampionDetailResponse = {
  type: string; // 응답 타입
  format: string; // 데이터 형식
  version: string; // 데이터 버전
  data: {
    [key: string]: ChampionDetail; // 챔피언 상세 정보 데이터
  };
};
