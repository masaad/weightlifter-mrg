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

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _AccountCircle = require('material-ui-icons/AccountCircle');

var _AccountCircle2 = _interopRequireDefault(_AccountCircle);

var _Switch = require('material-ui/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _Form = require('material-ui/Form');

var _Menu3 = require('material-ui/Menu');

var _Menu4 = _interopRequireDefault(_Menu3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

var MainActionBar = function (_Component) {
  (0, _inherits3.default)(MainActionBar, _Component);

  // static propTypes = {}
  // static defaultProps = {}

  function MainActionBar(props) {
    (0, _classCallCheck3.default)(this, MainActionBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MainActionBar.__proto__ || (0, _getPrototypeOf2.default)(MainActionBar)).call(this, props));

    _this.handleChange = function (event, checked) {
      _this.setState({ auth: checked });
    };

    _this.handleProfileMenu = function (event) {
      _this.setState({ anchorEl: event.currentTarget });
    };

    _this.handleMainMenu = function (event) {
      _this.setState({ anchorMainEl: event.currentTarget });
    };

    _this.handleMainClose = function (event) {
      _this.setState({ anchorMainEl: null });
    };

    _this.handleClose = function () {
      _this.setState({ anchorEl: null });
    };

    _this.shouldRenderNull = function () {
      return false;
    };

    _this.render = function () {
      if (_this.shouldRenderNull()) return null;
      var classes = _this.props.classes;
      var _this$state = _this.state,
          auth = _this$state.auth,
          anchorEl = _this$state.anchorEl,
          anchorMainEl = _this$state.anchorMainEl;

      var open = Boolean(anchorEl);
      var openMain = Boolean(anchorMainEl);

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _Form.FormGroup,
          null,
          _react2.default.createElement(_Form.FormControlLabel, {
            control: _react2.default.createElement(_Switch2.default, { checked: auth, onChange: _this.handleChange, 'aria-label': 'LoginSwitch' }),
            label: auth ? 'Logout' : 'Login'
          })
        ),
        _react2.default.createElement(
          _AppBar2.default,
          { position: 'static' },
          _react2.default.createElement(
            _Toolbar2.default,
            null,
            _react2.default.createElement(
              _IconButton2.default,
              { className: classes.menuButton, color: 'inherit', 'aria-label': 'Menu' },
              _react2.default.createElement(_Menu2.default, { 'aria-owns': openMain ? 'menu-main' : null,
                'aria-haspopup': 'true',
                onClick: _this.handleMainMenu,
                color: 'inherit'
              })
            ),
            _react2.default.createElement(
              _Menu4.default,
              {
                id: 'menu-main',
                anchorEl: anchorMainEl,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'left'
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left'
                },
                open: openMain,
                onClose: _this.handleClose
              },
              _react2.default.createElement(
                _Menu3.MenuItem,
                { onClick: _this.handleMainClose },
                'Profile'
              ),
              _react2.default.createElement(
                _Menu3.MenuItem,
                { onClick: _this.handleMainClose },
                'My account'
              )
            ),
            _react2.default.createElement(
              _Typography2.default,
              { type: 'title', color: 'inherit', className: classes.flex },
              'Title'
            ),
            auth && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _IconButton2.default,
                {
                  'aria-owns': open ? 'menu-appbar' : null,
                  'aria-haspopup': 'true',
                  onClick: _this.handleProfileMenu,
                  color: 'inherit'
                },
                _react2.default.createElement(_AccountCircle2.default, null)
              ),
              _react2.default.createElement(
                _Menu4.default,
                {
                  id: 'menu-appbar',
                  anchorEl: anchorEl,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                  },
                  open: open,
                  onClose: _this.handleClose
                },
                _react2.default.createElement(
                  _Menu3.MenuItem,
                  { onClick: _this.handleClose },
                  'Profile'
                ),
                _react2.default.createElement(
                  _Menu3.MenuItem,
                  { onClick: _this.handleClose },
                  'My account'
                )
              )
            )
          )
        )
      );
    };

    _this.fileIdentifier = 'MainActionBar.jsx';
    _this.state = {
      auth: true,
      anchorEl: null,
      anchorMainEl: null
    };
    return _this;
  }

  return MainActionBar;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(MainActionBar);