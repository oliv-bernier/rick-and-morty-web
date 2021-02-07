export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
});

export const SAVE_CHARACTERS = 'SAVE_CHARACTERS';
export const saveCharacters = (characters) => ({
  type: SAVE_CHARACTERS,
  characters,
});

export const SAVE_INFOS = 'SAVE_INFOS';
export const saveInfos = (infos) => ({
  type: SAVE_INFOS,
  infos,
});