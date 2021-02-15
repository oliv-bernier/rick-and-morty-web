import { connect } from 'react-redux';
import Characters from '../../components/Characters';

import { fetchCharacters, fetchCharacter } from '../../actions/characters';
import { restartPages } from '../../actions/pagination';

const mapStateToProps = (state) => ({
  characters: state.characters.list,
  infos: state.characters.infos,
  PageId: state.pagination.PageId,
  isZero: state.characters.isZero,
  oneCharacter: state.characters.oneCharacter,
  isDetails: state.characters.isDetails,
});

const mapDispatchToProps = (dispatch) => ({
    restartPages: () => {
      dispatch(restartPages());
    },
    fetchCharacters: () => {
      dispatch(fetchCharacters());
    },
    fetchCharacter: () => {
      dispatch(fetchCharacter());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);