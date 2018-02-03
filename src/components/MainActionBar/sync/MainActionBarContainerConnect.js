import { connect } from 'react-redux';
import MainActionBar from '../MainActionBar';
import { mapStateToProps, mapDispatchToProps } from '../MainActionBarContainer';

export default connect(mapStateToProps, mapDispatchToProps)(MainActionBar);
