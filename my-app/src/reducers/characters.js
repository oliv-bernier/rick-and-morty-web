import { SAVE_CHARACTERS, SAVE_INFOS } from '../actions/characters';

const initialState = {
    list: [],
    homePage: true,
    charactersPage: false,
    infos: {},
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_CHARACTERS:
            return {
                ...state,
                list: action.characters,
                homePage: false,
                charactersPage: true,
            };
        case SAVE_INFOS:
            return {
                ...state,
                infos: action.infos,
            }
        default:
            return state;
    }
};

export default reducer;