'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reducers = require('./reducers');

var _sync = require('../src/components/App/sync');

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

require('../src/css/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers.weightLifterApp);

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_sync.Container, null)
), document.getElementById('root'));
(0, _registerServiceWorker2.default)();