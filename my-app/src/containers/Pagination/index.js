import { connect } from 'react-redux';
import Characters from '../../components/Pagination';

import { fetchCharacters, incrementPage, decrementPage } from '../../actions/characters';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
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