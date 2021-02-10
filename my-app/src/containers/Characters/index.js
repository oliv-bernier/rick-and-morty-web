import { connect } from 'react-redux';
import Characters from '../../components/Characters';

import { fetchCharacters, incrementPage, decrementPage } from '../../actions/characters';

const mapStateToProps = (state) => ({
  characters: state.characters.list,
  infos: state.characters.infos,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCharacters: () => {
      dispatch(fetchCharacters());
    },
    previousPage: () => {
      dispatch(decrementPage());
      dispatch(fetchCharacters());
    },
    nextPage: () => {
      dispatch(incrementPage());
      dispatch(fetchCharacters());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);