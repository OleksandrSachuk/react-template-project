import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Component1 from './Component1';

const mapStateToProps = (state, getState) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Component1);
