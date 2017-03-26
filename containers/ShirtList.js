import { connect } from 'react-redux';
import App from '../src/App';

const mapStateToProps = (state) => {
return {
    items: state.items
}}

const mapDispatchToProps = {
};

const ShirtList = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ShirtList;
