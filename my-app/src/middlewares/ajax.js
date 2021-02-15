/* eslint-disable default-case */
import axios from 'axios';
import { FETCH_CHARACTERS, saveCharacters, saveInfos, FETCH_CHARACTER, saveCharacter } from '../actions/characters';
import { FETCH_EPISODES, saveEpisodes } from '../actions/episodes';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

const ajax = (store) => (next) => (action) => {
  const { PageId } = store.getState().pagination;
  switch (action.type) {
    case FETCH_CHARACTERS:
      axios.get(`/character?page=${PageId}`)
        .then((response) => {
            console.log(response.data.info);
            console.log('réussi');
            store.dispatch(saveCharacters(response.data.results));
            store.dispatch(saveInfos(response.data.info));
        })
        .catch((error) => {
            console.log('Cela ne fonctionne pas');
            console.error(error);
        })
      break;
    case FETCH_CHARACTER:
      const { characterId } = store.getState().characters;
      axios.get(`/character/${characterId}`)
        .then((response) => {
            console.log(response.data);
            store.dispatch(saveCharacter(response.data));
        })
        .catch((error) => {
          console.log('raté');
        })
      break;
    case FETCH_EPISODES:
      axios.get(`/episode?page=${PageId}`)
        .then((response) => {
          store.dispatch(saveEpisodes(response.data.results));
          store.dispatch(saveInfos(response.data.info));
        })
        .catch((error) => {
          console.log('raté');
        })
      break;
  }
  next(action);
};

export default ajax;
