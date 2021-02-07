export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
});

export const SAVE_CHARACTERS = 'SAVE_CHARACTERS';
export const saveCharacters = (characters) => ({
  type: SAVE_CHARACTERS,
  characters,
});