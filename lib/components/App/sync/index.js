'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('../App');

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _AppContainerConnect = require('./AppContainerConnect');

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AppContainerConnect).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }