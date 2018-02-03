import { connect } from 'react-redux';
import AppBar from '../AppBar';
import { mapStateToProps, mapDispatchToProps } from '../AppBarContainer';

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
