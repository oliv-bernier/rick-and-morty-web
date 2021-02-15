import { INCREMENT_PAGE, DECREMENT_PAGE, RESTART_PAGES } from '../actions/pagination';

const initialState = {
    PageId: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    case RESTART_PAGES:
      return {
          ...state,
          PageId: 1,
      };
    default:
      return state;
  }
};

export default reducer;