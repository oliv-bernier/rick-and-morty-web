/* eslint-disable default-case */
import axios from 'axios';
import { FETCH_CHARACTERS, saveCharacters } from '../actions/characters';

// axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      axios.get('https://rickandmortyapi.com/api/character')
        .then((response) => {
            console.log(response.data);
            console.log('réussi');
            store.dispatch(saveCharacters(response.data.results));
        })
        .catch((error) => {
            console.log('Cela ne fonctionne pas');
            console.error(error);
        })
      break;
  }
  next(action);
};

export default ajax;
