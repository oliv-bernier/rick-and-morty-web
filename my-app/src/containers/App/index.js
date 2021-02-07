import { connect } from 'react-redux';
import App from '../../components/App';

const mapStateToProps = (state) => ({
  homePage: state.characters.homePage,
  charactersPage: state.characters.charactersPage,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
