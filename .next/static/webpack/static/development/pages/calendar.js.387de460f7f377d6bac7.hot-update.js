webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./pages/calendar.js":
/*!***************************!*\
  !*** ./pages/calendar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Calendar_CalendarView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Calendar/CalendarView */ "./components/Calendar/CalendarView.js");
/* harmony import */ var _components_Calendar_CalendarAddEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Calendar/CalendarAddEvent */ "./components/Calendar/CalendarAddEvent.js");
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar.css */ "./pages/calendar.css");
/* harmony import */ var _calendar_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_calendar_css__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "/Users/apoc/Documents/work/texashpv/pages/calendar.js";





var Calender =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Calender, _Component);

  function Calender() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Calender);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Calender).call(this));
    _this.state = {
      popUpEventInfo: {},
      popupPosition: {
        left: 0,
        top: 0
      },
      popUpShown: false
    };
    _this.closePopup = _this.closePopup.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.togglePopup = _this.togglePopup.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Calender, [{
    key: "togglePopup",
    value: function togglePopup(e, event) {
      var wrap = document.querySelector('.calendar-wrap'); //e is dom event

      var elPos = e.currentTarget.parentElement.getBoundingClientRect();
      var popPos = document.querySelector('.calendar-popup').getBoundingClientRect();
      var wrapPos = wrap.getBoundingClientRect();
      console.log(wrapPos);
      console.log('toggle popup');
      this.setState({
        popUpEventInfo: event,
        popupPosition: {
          left: elPos.left + 'px',
          top: elPos.top - wrapPos.top + 'px'
        },
        popUpShown: true
      });

      if (popPos.right > wrapPos.right) {
        console.log(wrapPos.right);
        console.log(popPos.right);
      }
    }
  }, {
    key: "closePopup",
    value: function closePopup(e) {
      if (this.state.popUpShown && !e.target.classList.contains('custom-event-clicker')) {
        this.setState({
          popUpShown: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "calendar-container",
        onClick: this.closePopup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.state.popUpShown ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "calendar-popup",
        style: {
          position: 'absolute',
          left: "".concat(this.state.popupPosition.left),
          top: "".concat(this.state.popupPosition.top)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, this.state.popUpEventInfo.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, this.state.popUpEventInfo.description)) : '', react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "calendar-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Calendar_CalendarAddEvent__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Calendar_CalendarView__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        events: this.props.events
      }, this.props, {
        togglePopup: this.togglePopup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/event');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  events: data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Calender;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Calender);

/***/ })

})
//# sourceMappingURL=calendar.js.387de460f7f377d6bac7.hot-update.js.map