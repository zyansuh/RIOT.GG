export const API_URL = "https://ddragon.leagueoflegends.com";
export const ROTATION_API_URL =
  "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
export const SPLASH_IMG_URL = `${API_URL}/cdn/img/champion/splash`;
export const LOADING_IMG_URL = `${API_URL}/cdn/img/champion/loading`;

export const getDataUrl = (version: string) =>
  `${API_URL}/cdn/${version}/data/ko_KR`;

export const getItemImgUrl = (version: string, itemImg: string) =>
  `${API_URL}/cdn/${version}/img/item/${itemImg}`;

export const getSpellImgUrl = (version: string, spellImg: string) =>
  `${API_URL}/cdn/${version}/img/spell/${spellImg}`;

export const getPassiveImgUrl = (version: string, passiveImg: string) =>
  `${API_URL}/cdn/${version}/img/passive/${passiveImg}`;
