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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
  return {};
};

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  // static propTypes = {}
  // static defaultProps = {}

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.shouldRenderNull = function () {
      return false;
    };

    _this.render = function () {
      if (_this.shouldRenderNull()) return null;
      return _react2.default.createElement(
        'div',
        { className: 'Home' },
        'Home'
      );
    };

    _this.fileIdentifier = 'Home.jsx';
    _this.state = {};
    return _this;
  }

  return Home;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(Home);