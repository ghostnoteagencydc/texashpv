webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./components/Calendar/CalendarView.js":
/*!*********************************************!*\
  !*** ./components/Calendar/CalendarView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ "./node_modules/react-big-calendar/lib/css/react-big-calendar.css");
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CalendarEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CalendarEvent */ "./components/Calendar/CalendarEvent.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/apoc/Documents/work/texashpv/components/Calendar/CalendarView.js";



 // Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

var localizer = react_big_calendar__WEBPACK_IMPORTED_MODULE_5__["default"].momentLocalizer(moment__WEBPACK_IMPORTED_MODULE_8___default.a); // or globalizeLocalizer

var now = new Date();


function getShortString(str) {
  if (str.length > 20) {
    return str.substring(0, 20) + '...';
  } else {
    return str;
  }
}

var MyCalendar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyCalendar, _Component);

  function MyCalendar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyCalendar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyCalendar).call(this, props));
    _this.state = {
      events: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyCalendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);

      if (this.props.events) {
        var parsed = this.props.events.map(function (e) {
          console.log(moment__WEBPACK_IMPORTED_MODULE_8___default()(e.acf.end).toDate());

          if (e.acf && e.acf.approved) {
            var obj = {
              id: e.id,
              title: e.title,
              allDay: e.acf.all_day,
              start: moment__WEBPACK_IMPORTED_MODULE_8___default()(e.acf.start).toDate(),
              end: moment__WEBPACK_IMPORTED_MODULE_8___default()(e.acf.end).toDate(),
              approved: e.acf.approved,
              description: e.acf.description ? e.acf.description : 'Event',
              shortDescription: getShortString(e.acf.description ? e.acf.description : 'Event')
            };
            console.log(obj);
            return obj;
          }
        });
        this.setState({
          events: parsed
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "calendar-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        localizer: localizer,
        events: this.state.events,
        startAccessor: "start",
        endAccessor: "end",
        step: 15,
        timeslots: 8,
        defaultView: react_big_calendar__WEBPACK_IMPORTED_MODULE_5__["default"].Views.WEEK,
        defaultDate: new Date(),
        components: {
          event: function event() {
            var cev = new _CalendarEvent__WEBPACK_IMPORTED_MODULE_7__["default"]();
            cev.togglePopup = _this2.props.togglePopup;
            return cev;
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }));
    }
  }]);

  return MyCalendar;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MyCalendar);

/***/ })

})
//# sourceMappingURL=calendar.js.555b67a3592dee1496cd.hot-update.js.map