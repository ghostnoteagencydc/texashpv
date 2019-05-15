webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./components/Calendar/CalendarAddEvent.js":
/*!*************************************************!*\
  !*** ./components/Calendar/CalendarAddEvent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "/Users/apoc/Documents/work/texashpv/components/Calendar/CalendarAddEvent.js";





var CalendarAddEvent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(CalendarAddEvent, _Component);

  function CalendarAddEvent() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CalendarAddEvent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(CalendarAddEvent).call(this));
    _this.state = {
      startDate: new Date().now,
      endDate: new Date().now,
      title: '',
      allDay: false
    };
    _this.handleChangeStart = _this.handleChangeStart.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleChangeEnd = _this.handleChangeEnd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleChangeTitle = _this.handleChangeTitle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleChangeAllDay = _this.handleChangeAllDay.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.msgField = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CalendarAddEvent, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var noErrors, rawResponse, res, acfPost, acfRes;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.msgField.current.className = '';
                this.msgField.current.classList.add('calendar-add-msg', 'msg-field');
                noErrors = true;

                if (this.state.title.length < 1) {
                  noErrors = false;
                }

                if (!noErrors) {
                  _context.next = 21;
                  break;
                }

                _context.next = 7;
                return fetch('https://hpvtexas.wpengine.com/wp-json/wp/v2/event', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.props.loginData.userToken
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    title: this.state.title,
                    status: 'publish'
                  })
                });

              case 7:
                rawResponse = _context.sent;
                _context.next = 10;
                return rawResponse.json();

              case 10:
                res = _context.sent;
                console.log(res);
                _context.next = 14;
                return fetch("https://hpvtexas.wpengine.com/wp-json/acf/v3/event/".concat(res.id), {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.props.loginData.userToken
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    fields: {
                      all_day: this.state.allDay,
                      start: moment__WEBPACK_IMPORTED_MODULE_12___default()(this.state.startDate).format('YYYY-M-D H:m:s'),
                      end: moment__WEBPACK_IMPORTED_MODULE_12___default()(this.state.endDate).format('YYYY-M-D H:m:s'),
                      approved: false
                    }
                  })
                });

              case 14:
                acfPost = _context.sent;
                _context.next = 17;
                return acfPost.json();

              case 17:
                acfRes = _context.sent;
                console.log(acfRes);
                _context.next = 23;
                break;

              case 21:
                this.msgField.current.innerHTML = 'ERROR: NO TITLE FOUND';
                this.msgField.current.classList.add('msg-field-shown', 'msg-error');

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "handleChangeStart",
    value: function handleChangeStart(date) {
      if (this.state.endDate < date) {
        this.setState({
          startDate: date,
          endDate: date
        });
      }

      this.setState({
        startDate: date
      });
      console.log(moment__WEBPACK_IMPORTED_MODULE_12___default()(this.state.endDate).format('YYYY-M-D H:m:s'));
    }
  }, {
    key: "handleChangeEnd",
    value: function handleChangeEnd(date) {
      this.setState({
        endDate: date
      });
    }
  }, {
    key: "handleChangeTitle",
    value: function handleChangeTitle(e) {
      this.setState({
        title: e.currentTarget.value
      });
      console.log(this.state);
    }
  }, {
    key: "handleChangeAllDay",
    value: function handleChangeAllDay(e) {
      this.setState({
        allDay: e.currentTarget.checked
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "calendar-add-event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "calendar-add-msg msg-field",
        ref: this.msgField,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        class: "calendar-add-event-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Event Name", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        placeholder: "Event Name",
        onChange: this.handleChangeTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "All Day?", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "checkbox",
        onChange: this.handleChangeAllDay,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Start Date", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "icon-and-date-picker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "far fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selected: this.state.startDate,
        onChange: this.handleChangeStart,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        minDate: new Date(),
        name: "startDate",
        dateFormat: "MM/dd/yyyy h:mm aa",
        showTimeInput: true,
        locale: "en",
        selectsStart: true,
        shouldCloseOnSelect: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "End Date", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "icon-and-date-picker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "far fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selected: this.state.endDate,
        onChange: this.handleChangeEnd,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        minDate: this.state.startDate,
        name: "startDate",
        dateFormat: "MM/dd/yyyy h:mm aa",
        showTimeInput: true,
        locale: "en",
        selectsEnd: true,
        shouldCloseOnSelect: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Submit Event To Review")));
    }
  }]);

  return CalendarAddEvent;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CalendarAddEvent);

/***/ })

})
//# sourceMappingURL=calendar.js.2c2a097311048bfa230c.hot-update.js.map