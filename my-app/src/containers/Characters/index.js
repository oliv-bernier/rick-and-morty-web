import { connect } from 'react-redux';
import Characters from '../../components/Characters';

import { fetchCharacters } from '../../actions/characters';

const mapStateToProps = (state) => ({
  characters: state.characters.list,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCharacters: () => {
      dispatch(fetchCharacters());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);