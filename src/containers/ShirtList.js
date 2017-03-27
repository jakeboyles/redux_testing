import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = (state) => ({ items: state.items })

const mapDispatchToProps = {};

const ShirtList = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ShirtList;