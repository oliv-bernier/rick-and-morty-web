import { SAVE_CHARACTERS, SAVE_INFOS, INCREMENT_PAGE, DECREMENT_PAGE } from '../actions/characters';

const initialState = {
    list: [],
    homePage: true,
    charactersPage: false,
    infos: {},
    PageId: 1,
    isZero: false,
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
            };
        case INCREMENT_PAGE:
            return {
                ...state,
                PageId: state.PageId +1,
            };
        case DECREMENT_PAGE:
            return {
                ...state,
                PageId: state.PageId -1,
            };
        default:
            return state;
    }
};

export default reducer;