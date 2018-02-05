'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Home = require('../Home');

var _Home2 = _interopRequireDefault(_Home);

var _HomeContainer = require('../HomeContainer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(_HomeContainer.mapStateToProps, _HomeContainer.mapDispatchToProps)(_Home2.default);