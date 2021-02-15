import { connect } from 'react-redux';
import Episodes from '../../components/Episodes';

import { fetchEpisodes } from '../../actions/episodes';
import { restartPages } from '../../actions/pagination';

const mapStateToProps = (state) => ({
  episodes: state.episodes.list,
  infos: state.characters.infos,
  PageId: state.pagination.PageId,
});

const mapDispatchToProps = (dispatch) => ({
    restartPages: () => {
      dispatch(restartPages());
    },
    fetchEpisodes: () => {
      dispatch(fetchEpisodes());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);