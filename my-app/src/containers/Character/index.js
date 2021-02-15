import { connect } from 'react-redux';
import Character from '../../components/Character';

import { saveId } from '../../actions/characters';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    saveId: (id) => {
      dispatch(saveId(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Character);