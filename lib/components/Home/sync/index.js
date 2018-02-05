'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = require('../Home');

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Home).default;
  }
});

var _HomeContainerConnect = require('./HomeContainerConnect');

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HomeContainerConnect).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }