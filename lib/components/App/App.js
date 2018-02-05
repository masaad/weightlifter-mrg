'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _logo = require('../../img/logo.svg');

var _logo2 = _interopRequireDefault(_logo);

require('../../css/App.css');

var _sync = require('../MainActionBar/sync');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const styles = () => ({});

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  // static propTypes = {}  
  // static defaultProps = {}

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.shouldRenderNull = function () {
      return false;
    };

    _this.render = function () {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_sync.Component, null),
          _react2.default.createElement(
            'p',
            { className: 'App-intro' },
            'To get started, edit ',
            _react2.default.createElement(
              'code',
              null,
              'src/App.js'
            ),
            ' and save to reload.'
          )
        )
      );
    };

    _this.fileIdentifier = 'App.jsx';
    _this.state = {};
    return _this;
  }

  return App;
}(_react.Component);
//import PropTypes from 'prop-types';
//import _isEqual from 'lodash.isequal';
//import { withStyles } from 'material-ui/styles';


exports.default = App;