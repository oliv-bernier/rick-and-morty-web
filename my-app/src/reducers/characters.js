import { SAVE_CHARACTERS, SAVE_INFOS, SAVE_CHARACTER, SAVE_ID, CLOSE_DETAILS } from '../actions/characters';

const initialState = {
    list: [],
    infos: {},
    characterId: '',
    oneCharacter: [],
    isDetails: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_CHARACTERS:
            return {
                ...state,
                list: action.characters,
            };
        case SAVE_INFOS:
            return {
                ...state,
                infos: action.infos,
            };
        case SAVE_CHARACTER:
            return {
                ...state,
                oneCharacter: action.character,
                isDetails: true,
            }
        case SAVE_ID:
            return {
                ...state,
                characterId: action.id,
            }
        case CLOSE_DETAILS:
            return {
                ...state,
                isDetails: false,
            }
        default:
            return state;
    }
};

export default reducer;