import { connect } from 'react-redux';
import Episodes from '../../components/Episodes';

import { fetchEpisodes } from '../../actions/episodes';

const mapStateToProps = (state) => ({
  // episodes: state.episodes.list,
  infos: state.characters.infos,
  // PageId: state.episodes.pageEpId,
});

const mapDispatchToProps = (dispatch) => ({
    fetchEpisodes: () => {
      dispatch(fetchEpisodes());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);