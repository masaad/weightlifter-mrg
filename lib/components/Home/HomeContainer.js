'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  Action Creators.  */
// import actionName from 'actions/actionName'

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  var actions = (0, _redux.bindActionCreators)({
    // actions
  }, dispatch);
  return (0, _extends3.default)({}, actions, { dispatch: dispatch });
}; /*  This is a container component. Notice it does not contain any JSX,
       nor does it import React. This component is **only** responsible for
       wiring in the actions and state necessary to render a presentational
       component - in this case, the counter:   */
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state, ownProps) {
  return (
    /*  Just add the pieces of state that you need here. This will keep your
      component from re-rendering with every change in the global state.  */
    // const {
    //   stateName,
    // } = state

    {
      // stateName
    }
  );
};