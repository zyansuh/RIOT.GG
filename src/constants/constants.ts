export const API_URL = "https://ddragon.leagueoflegends.com";
export const ROTATION_API_URL =
  "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
export const SPLASH_IMG_URL = `${API_URL}/cdn/img/champion/splash`;
export const LOADING_IMG_URL = `${API_URL}/cdn/img/champion/loading`;

/**
 * 게임 데이터를 가져오기 위한 기본 URL을 생성합니다.
 * @param {string} version - 게임 버전.
 * @returns {string} 지정된 버전에 대한 데이터 URL.
 */
export const getDataUrl = (version: string) =>
  `${API_URL}/cdn/${version}/data/ko_KR`;

/**
 * 아이템 이미지의 전체 URL을 생성합니다.
 * @param {string} version - 게임 버전.
 * @param {string} itemImg - 아이템의 이미지 파일명.
 * @returns {string} 아이템 이미지의 전체 URL.
 */
export const getItemImgUrl = (version: string, itemImg: string) =>
  `${API_URL}/cdn/${version}/img/item/${itemImg}`;

/**
 * 스펠 이미지의 전체 URL을 생성합니다.
 * @param {string} version - 게임 버전.
 * @param {string} spellImg - 스펠의 이미지 파일명.
 * @returns {string} 스펠 이미지의 전체 URL.
 */
export const getSpellImgUrl = (version: string, spellImg: string) =>
  `${API_URL}/cdn/${version}/img/spell/${spellImg}`;

/**
 * 패시브 스킬 이미지의 전체 URL을 생성합니다.
 * @param {string} version - 게임 버전.
 * @param {string} passiveImg - 패시브 스킬의 이미지 파일명.
 * @returns {string} 패시브 스킬 이미지의 전체 URL.
 */
export const getPassiveImgUrl = (version: string, passiveImg: string) =>
  `${API_URL}/cdn/${version}/img/passive/${passiveImg}`;