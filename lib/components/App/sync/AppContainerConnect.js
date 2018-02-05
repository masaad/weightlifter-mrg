'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

var _AppContainer = require('../AppContainer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(_AppContainer.mapStateToProps, _AppContainer.mapDispatchToProps)(_App2.default);