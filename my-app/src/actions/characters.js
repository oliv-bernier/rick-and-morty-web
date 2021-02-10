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

export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const incrementPage = () => ({
  type: INCREMENT_PAGE,
});


export const DECREMENT_PAGE = 'DECREMENT_PAGE';
export const decrementPage = () => ({
  type: DECREMENT_PAGE,
});