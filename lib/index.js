'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultWrapperStyle = {
  position: 'relative',
  display: 'inline-block'
};

var defaultFontStyle = {
  whiteSpace: 'nowrap',
  fontSize: '60px',
  color: 'white',
  textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black'
};

var defaultActiveStyle = _extends({}, defaultFontStyle, {
  position: 'absolute',
  left: 0,
  top: 0,
  color: 'blue',
  overflow: 'hidden',
  zIndex: 1,
  textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'
});

var KaraokeLyric = function (_Component) {
  _inherits(KaraokeLyric, _Component);

  function KaraokeLyric() {
    _classCallCheck(this, KaraokeLyric);

    return _possibleConstructorReturn(this, (KaraokeLyric.__proto__ || Object.getPrototypeOf(KaraokeLyric)).apply(this, arguments));
  }

  _createClass(KaraokeLyric, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          percentage = _props.percentage,
          text = _props.text;
      var _props2 = this.props,
          wrapperStyle = _props2.wrapperStyle,
          fontStyle = _props2.fontStyle,
          activeStyle = _props2.activeStyle;


      wrapperStyle = wrapperStyle ? _extends({}, defaultWrapperStyle, wrapperStyle) : defaultWrapperStyle;
      fontStyle = fontStyle ? _extends({}, defaultFontStyle, fontStyle) : defaultFontStyle;
      activeStyle = activeStyle ? _extends({}, defaultActiveStyle, activeStyle, {
        width: percentage + '%'
      }) : _extends({}, defaultActiveStyle, {
        width: percentage + '%'
      });

      return _react2.default.createElement(
        'div',
        { style: wrapperStyle },
        _react2.default.createElement(
          'div',
          { style: fontStyle },
          text
        ),
        _react2.default.createElement(
          'div',
          { style: activeStyle },
          text
        )
      );
    }
  }]);

  return KaraokeLyric;
}(_react.Component);

KaraokeLyric.propTypes = {
  text: _propTypes2.default.string.isRequired,
  percentage: _propTypes2.default.number.isRequired,
  fontStyle: _propTypes2.default.object,
  activeStyle: _propTypes2.default.object,
  wrapperStyle: _propTypes2.default.object
};
exports.default = KaraokeLyric;