'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _MainActionBar = require('../MainActionBar');

var _MainActionBar2 = _interopRequireDefault(_MainActionBar);

var _MainActionBarContainer = require('../MainActionBarContainer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(_MainActionBarContainer.mapStateToProps, _MainActionBarContainer.mapDispatchToProps)(_MainActionBar2.default);