import { SAVE_EPISODES, SAVE_INFOS } from '../actions/episodes';

const initialState = {
    list: [],
    infos: {},
    pageEpId: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EPISODES:
      return {
        ...state,
        list: action.episodes,
      }
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