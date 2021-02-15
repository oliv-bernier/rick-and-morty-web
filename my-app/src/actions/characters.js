export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
});

export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const fetchCharacter = () => ({
  type: FETCH_CHARACTER,
});

export const SAVE_CHARACTERS = 'SAVE_CHARACTERS';
export const saveCharacters = (characters) => ({
  type: SAVE_CHARACTERS,
  characters,
});

export const SAVE_CHARACTER = 'SAVE_CHARACTER';
export const saveCharacter = (character, id) => ({
  type: SAVE_CHARACTER,
  character,
  id,
});

export const SAVE_INFOS = 'SAVE_INFOS';
export const saveInfos = (infos) => ({
  type: SAVE_INFOS,
  infos,
});

export const SAVE_ID = 'SAVE_ID';
export const saveId = (id) => ({
  type: SAVE_ID,
  id,
});

export const CLOSE_DETAILS = 'CLOSE_DETAILS';
export const closeDetails = () => ({
  type: CLOSE_DETAILS,
});