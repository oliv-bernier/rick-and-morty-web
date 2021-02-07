import { SAVE_CHARACTERS } from '../actions/characters';

const initialState = {
    list: [],
    homePage: true,
    charactersPage: false,
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
        default:
            return state;
    }
};

export default reducer;