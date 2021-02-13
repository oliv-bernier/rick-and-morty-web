import { connect } from 'react-redux';
import Details from '../../components/Details';

import { closeDetails } from '../../actions/characters';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    closeDetails: () => {
      dispatch(closeDetails());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);