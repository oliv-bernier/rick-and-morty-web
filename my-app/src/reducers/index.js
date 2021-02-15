import { combineReducers } from 'redux';

import charactersReducer from './characters';
import episodesReducer from './episodes';

const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
});

export default rootReducer;
