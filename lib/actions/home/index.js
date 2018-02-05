'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = undefined;

var _myActionTypeFile = require('constants/myActionGroup/myActionTypeFile');

var home = exports.home = function home(data) {
  return {
    type: _myActionTypeFile.MY_ACTION_TYPE,
    payload: data
  };
};

// export const homeThunk = () => (dispatch, getState) => {
//   const {} = getState()
//   dispatch(
//     home({})
//   )
//   return null
// }