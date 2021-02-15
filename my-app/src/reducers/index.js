import { combineReducers } from 'redux';

import charactersReducer from './characters';
import episodesReducer from './episodes';
import paginationReducer from './pagination';

const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  pagination: paginationReducer,
});

export default rootReducer;
