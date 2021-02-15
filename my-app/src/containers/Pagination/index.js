import { connect } from 'react-redux';
import Pagination from '../../components/Pagination';

import { fetchCharacters } from '../../actions/characters';
import { incrementPage, decrementPage } from '../../actions/pagination';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    previousPage: () => {
      dispatch(decrementPage());
    },
    nextPage: () => {
      dispatch(incrementPage());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);